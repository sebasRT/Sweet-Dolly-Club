import { Dialog } from '@headlessui/react';
import React, { Dispatch, SetStateAction, useState} from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from '../inputs/TextInput';
import ArrayInput from '../inputs/ArrayInput';
import Textarea from '../inputs/Textarea';
import { useRouter } from 'next/navigation';
import ActionPanel from './ActionPanel';
import { Product } from '@/model/Product';
import { ObjectId } from 'mongodb';

type Props = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  product: Product;
};

type FormProduct = {
  name: string;
  description: string;
  ingredients: string[];
  price: number;
};


const schema: yup.ObjectSchema<FormProduct>= yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  description: yup.string().required("Muestra a tus clientes una descripción"),
  ingredients: yup.array().of(yup.string().required()).required("Procura no dejar el producto sin ingredientes"),
  price: yup.number().typeError("Por favor añade un precio al producto").required("Por favor añade un precio al producto"),
}) ;



const UpdatePModal = ({ isOpen, setOpen, product }: Props) => {

  const [modalState, setModalState] = useState<"none" | "updated" | "network error" | "db error"|"loading">("none")
  const {refresh} = useRouter()

  const form = useForm<FormProduct>({
    defaultValues: product,
    resolver: yupResolver(schema),
  });
  
  const { register, formState, trigger, getValues, handleSubmit, reset } = form

  const { errors } = formState;


  const onSubmit: SubmitHandler<Product> = async () => {
    
    const productToSubmit: FormProduct = {
      name: getValues().name,
      description: getValues().description,
      price: getValues().price,
      ingredients: getValues().ingredients
    }

    const isValid = await trigger();

    if (isValid) {
      setModalState("loading")
      
        const request = await updateProduct(productToSubmit, product._id, )
        if (request.error) {
            setModalState("db error")
            refresh()          
        }else{
            setModalState("updated")
            refresh()
        }
      
    } 
  };

  return (
    <Dialog open={isOpen} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 z-0" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
      {
            (()=>{
                switch (modalState) {
                    case "none":
                       return <Dialog.Panel className="mx-auto max-w-sm rounded bg-productModalBG text-textLightPrimary z-10 flex flex-col justify-center p-10 text-center gap-4">
                        <TextInput
                          label="NOMBRE"
                          {...register('name', { onChange: async () => await trigger('name') })}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                        />
                        <TextInput
                          label="PRECIO"
                          type="number"
                          {...register('price', { onChange: async () => await trigger('price') })}
                          error={!!errors.price}
                          helperText={errors.price?.message}
                        />
                        <Textarea
                          label="DESCRIPCIÓN"
                          {...register('description', { onChange: async () => await trigger('description') })}
                          error={!!errors.description}
                          helperText={errors.description?.message}
                        />
                        <FormProvider {...form}>
                            <ArrayInput/>
                        </FormProvider>
              
                        <button type="submit" onClick={handleSubmit(onSubmit)} className="font-semibold bg-black/30">
                          Guardar
                        </button>
                        <button onClick={() => {setOpen(false); reset()}} className="font-semibold">
                          Descartar
                        </button> 
                      </Dialog.Panel>
              
                    case "updated":
                        return <ActionPanel type="updated" setDefault = {()=> setModalState("none")} setOpen={()=>setOpen(false)}/>
                
                    case "network error": 
                        return <ActionPanel type= "network error" setDefault = {()=> setModalState("none")} setOpen={()=>setOpen(false)}/>

                    case "db error":
                        return  <ActionPanel type= "db error" setDefault = {()=> setModalState("none")} setOpen={()=>setOpen(false)}/>
                    case "loading":
                        return  <ActionPanel type= "loading" setDefault = {()=> setModalState("none")} setOpen={()=>setOpen(false)}/>
                }
            }

            )() 
            }
            </div>    
            </Dialog>

  );
};

const updateProduct = async( product: FormProduct, id?: string | ObjectId)=>{

  const request = await fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify(product)
  })

  const result = request.json()

  return result
}
 
export default UpdatePModal;
