// ArrayInput.js
import React, { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { Product } from '../modals/utils/model';


const ArrayInput = ( ) => {

    const [newItem, setNewItem] = useState("")

    const {control,register, getValues, formState} = useFormContext<Product>()
    const {errors} = formState

    const { fields, append, remove, } = useFieldArray({
        control,
        name: "ingredients" as never,
      } );
    
    const handleNewItem = () =>{
      if(newItem !== ''){
        append(newItem)
      }
      setNewItem("")
    }
  return (

    <div>
        <label className='font-bold '>INGREDIENTES</label>
      
          {fields.length === 0 && <p className='text-xs'>no se ha añadido ningún ingrediente</p> }
        <div className='grid grid-cols-2 gap-3 my-4'>
        {fields.map((field, index) => (
          <div key={field.id} className='flex flex-row items-center w-full justify-between bg-black/10 px-1 text-sm'>
            <span>{(getValues(`ingredients.${index}`))}</span>
            <input {...register(`ingredients.${index}`)} hidden/>
            <div>
            <FaDeleteLeft onClick={() => remove(index)} className=""/>
            </div>
                    
          </div>
        ))}
   
        </div>
          
        <div className='flex flex-row items-center justify-around text-textDarkPrimary'>
            <input
              type="text"
              placeholder="Nuevo Ingrediente"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleNewItem()
                }
              }}
              onChange={(e)=> setNewItem(e.target.value)}
              value={newItem}
              className='ps-3'
            />
            <div className='text-xl text-textLightPrimary'>
            <IoMdAddCircle onClick={() => handleNewItem()}/>
            </div>

        </div>
        {
          errors.ingredients && fields.length < 1 &&
            <span className="text-textWarning text-xs font-semibold">{errors.ingredients.message}</span>
        }

    </div>
         
          );
};

export default ArrayInput;
