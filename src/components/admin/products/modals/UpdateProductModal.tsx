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
import { ObjectId } from 'mongodb';
// import ImageInput from '../inputs/ImageInput';
import { Product as SavedProduct } from '@/model/Product';
import { Product } from './utils/model';
import deleteImage from './deleteImage';
import SelectInput from '../inputs/SelectInput';

type Props = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  product: SavedProduct;
};

const schema: yup.ObjectSchema<Product>= yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  description: yup.string().required("Muestra a tus clientes una descripción"),
  // imageID: yup.string().required("Por favor añade una imagen"),
  category: yup.string().oneOf(["Waffle", "Frosty", "Malteada", "Malteada natural", "Frappé", "Bebida fría", "Bebida caliente", "Otra"]).required("Selecciona una categoría"),
  price: yup.number().typeError("Por favor añade un precio al producto").required("Por favor añade un precio al producto"),
  ingredients: yup.array().of(yup.string().required()).required("Procura no dejar el producto sin ingredientes"),
}) ;



const UpdatePModal = ({ isOpen, setOpen, product }: Props) => {

  const [modalState, setModalState] = useState<"none" | "updated" | "network error" | "db error"|"loading">("none")
  const {refresh} = useRouter()

  const form = useForm<Product>({
    defaultValues: product,
    resolver: yupResolver(schema),
  });
  
  const { register, formState, trigger, getValues, handleSubmit, reset } = form

  const { errors } = formState;


  const onSubmit: SubmitHandler<Product> = async () => {
    
    const productToSubmit: Product = {
      name: getValues().name,
      description: getValues().description,
    // imageID: getValues().imageID,
      category: getValues().category,
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
      <div className="fixed inset-0 w-screen overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">

              {
                (()=>{
                switch (modalState) {
                    case "none":
                      return <Dialog.Panel className="mx-auto max-w-xl rounded bg-primary text-textLightPrimary z-10 grid grid-cols-1 md:grid-cols-2 p-10 gap-3">
                      <div className='flex flex-col justify-center text-center gap-3'>
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
                          <SelectInput/>
                        </FormProvider>
                      </div>

                        <FormProvider {...form}>
                      <div className='flex flex-col justify-center text-center gap-3'>
                        {/* <label className="m-1 font-bold">IMAGEN</label>
                          <ImageInput/> */}
                            <ArrayInput/>
                           
                      </div>
                        </FormProvider>
            
                      <button onClick={() => {
                        // deleteImage(getValues().imageID);
                        setOpen(false); reset();}} className="font-semibold mt-4 bg-black/10">
                        Descartar
                      </button> 
                      <button type="submit" onClick={handleSubmit(onSubmit)} className="font-semibold bg-black/30 mt-4">
                        Guardar
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
            </div>    
            </Dialog>

  );
};

const updateProduct = async( product: Product, id?: string | ObjectId)=>{

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
