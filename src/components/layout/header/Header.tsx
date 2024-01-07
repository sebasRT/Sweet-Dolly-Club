import Image from "next/image"
import logo from "@public/logo.jpg"

const Header = () => {

  return (
    <header className="w-1/3 md:w-1/6">
      <div className="rounded-full p-1">
      <Image src={logo} alt="logo" className="rounded-full mx-auto w-full md:w-full"/>
      </div>
    </header>
  )
}

export default Header