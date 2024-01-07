'use client'
import { Dialog } from '@headlessui/react';
import { useState } from 'react';


const AuthModal = () => {

    const key = process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    
    const [authorized, setAuthorized] = useState(false)
    const [attempts, setAttempts] = useState(0)
    const [password, setPassword] = useState("")
    const [warning, setWarning] = useState("")

    const handleWarning = ()=>{
    
        if(attempts >= 3){
            setWarning("Si perdiste tu clave de acceso comunícate con tu proveedor de software")
        }else{
            setAttempts(attempts + 1)
            setWarning("Ingresaste una clave incorrecta")
        }
    }

    const handleAuth = () => {
               
        password === key && setAuthorized(true) ;

        password != key && handleWarning()
    }

  return (
    <Dialog open={!authorized} onClose={()=>handleAuth()} >
            <div className="fixed inset-0 bg-black/30 z-0" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-primary text-textLightPrimary flex flex-col justify-center p-10 text-center gap-4">


            <b>Ingresa la clave de acceso </b>

                <input
                onChange={(e)=> setPassword(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAuth()
                    }
                  }}
                value={password}
                className='text-textDarkPrimary px-2 w-full focus-visible:border-b-4 focus-visible:border-secondary'/>
                <span className='text-xs font-semibold '>{warning}</span>
            <div className='bg-black/50' onClick={()=>handleAuth()}>INGRESAR</div>
        </Dialog.Panel>
            </div>

    </Dialog>
  )
}

export default AuthModal