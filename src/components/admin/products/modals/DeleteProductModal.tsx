import { Product } from '@/model/Product';
import { Dialog } from '@headlessui/react';
import { ObjectId } from 'mongodb'
import React, { Dispatch, SetStateAction, useState } from 'react'
import ActionPanel from './ActionPanel';
import { RiErrorWarningFill } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import deleteImage from './deleteImage';

type Props = {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    product: Product;
  };
  
const DeletePModal = ({isOpen, setOpen, product}: Props) => {

    const [modalState, setModalState] = useState<"none"| "loading" | "deleted" | "network error" | "db error">("none")
    const {refresh} = useRouter()

     
    const handleDelete = async ()=>{
        const id = product._id

        setModalState("loading")
        const result = await deleteProduct(id)
        deleteImage(product.imageID)

        if(result.error){
            setModalState("db error")
        }else{
            if (!result.success) {
                setModalState("network error")
                refresh()
            }else{
                setModalState("deleted")
                refresh()
            }
        }

    }

    return (
<Dialog open={isOpen} onClose={() => setOpen(false)} className="relative z-50">

<div className="fixed inset-0 bg-black/30 z-0" aria-hidden="true" />
<div className="fixed inset-0 flex w-screen items-center justify-center p-4">


{
  
  (()=>{
      switch (modalState) {
          case "none":
             return  <Dialog.Panel className="mx-auto max-w-sm rounded bg-primary text-textLightPrimary z-10 flex flex-col justify-center p-10 text-center gap-4">

                <Dialog.Title className="text-lg font-semibold"> Estas a punto de eliminar: <b>{product.name}</b></Dialog.Title>
                <div className='text-textWarning p-4 bg-textLightPrimary text-8xl rounded-full'>
                    <RiErrorWarningFill className="mx-auto"/>
                </div>
                <button onClick={()=> handleDelete()} className="font-semibold bg-black/30">
                          PROCEDER
                    </button>
                <button onClick={() => setOpen(false)} className="font-semibold">
                          CANCELAR
                </button>

                
             </Dialog.Panel>
        case "loading":
            return <ActionPanel type="loading" setDefault = {()=> setModalState("none")} setOpen={()=>setOpen(false)}/>
                
          case "deleted":
              return <ActionPanel type="created" setDefault = {()=> setModalState("none")} setOpen={()=>setOpen(false)}/>
      
          case "network error": 
              return <ActionPanel type= "network error" setDefault = {()=> setModalState("none")} setOpen={()=>setOpen(false)}/>

          case "db error":
              return  <ActionPanel type= "db error"setDefault = {()=> setModalState("none")} setOpen={()=>setOpen(false)}/>
      }
  }

  )() 
  }
</div>
</Dialog>
)
;}

const deleteProduct = async(id?: string | ObjectId) =>{
  
     
    const request = await fetch(`/api/products/${id}`,{method: 'DELETE'})
  
    const result = request.json()

    return result 
}


export default DeletePModal