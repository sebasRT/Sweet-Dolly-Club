import { Dialog } from "@headlessui/react"
import { ReactNode } from "react"
import { MdCloudDone, MdError } from "react-icons/md";
import { RotatingLines } from "react-loader-spinner";

type Props = {
    type: "created" | "updated" | "deleted" | "network error" | "db error" | "loading"
    setDefault : ()=> void
    setOpen: ()=> void
}

const ActionPanel = ({setDefault, setOpen, type}: Props) => {

 return (
       <Dialog.Panel className="mx-auto max-w-sm rounded bg-productModalBG text-textLightPrimary z-10 flex flex-col justify-center p-10 text-center gap-4">
            {
                (()=>{
                    switch (type) {
                        case "created":
                           return <DialogInfo title="Producto creado con exito"
                           description="Ya puedes ver el producto en el panel principal"> 
                                <MdCloudDone className= "w-full text-8xl"/>
                           </DialogInfo>

                        case "updated":
                            return <DialogInfo title="Producto actualizado correctamente"
                            description="Ya puedes ver el producto en el panel principal"> 
                                <MdCloudDone className= "w-full text-8xl"/>
                           </DialogInfo>

                        case "deleted":
                            return <DialogInfo title="Producto eliminado correctamente"
                            description="El producto no estará mas en tu lista"> 
                                <MdCloudDone className= "w-full text-8xl"/>
                           </DialogInfo>
                        case "loading":
                            return <DialogInfo title="Cargando..."
                            description="Espera unos segundos mientras hacemos los cambios"> 
                            <div className="mx-auto">
                                <RotatingLines visible={true}  strokeColor="#e6e6ff"/>
                            </div>
                           </DialogInfo>

                        case "network error":
                           return <DialogInfo title="Error de conexión"
                           description="Revisa tu conexión a internet e intenta nuevamente"> 
                                <MdError className= "w-full text-8xl"/>
                           </DialogInfo>

                        case "db error":
                            return <DialogInfo title="Fallo la conexión con la base de datos"
                            description="Por favor comunicate con tu proveedor de software"> 
                                <MdError className= "w-full text-8xl"/>
                           </DialogInfo>
                    
                    }
                })()
            }
            {
                type != "loading" &&  
                <button className="font-semibold bg-black/30" type="submit" onClick= {()=> {setDefault(); setOpen()}} >
                OK
              </button>
            }
       </Dialog.Panel>
    )
}

type InfoProps = {
    title: string,
    description: string,
    children: ReactNode
}

const DialogInfo = ({title, children, description}:InfoProps)=>{

    return (
        <>
        <Dialog.Title className="font-bold text-xl">{title}</Dialog.Title>
        
        {children}
      
        <Dialog.Description>{description}</Dialog.Description>
        </>
    )
}

export default ActionPanel