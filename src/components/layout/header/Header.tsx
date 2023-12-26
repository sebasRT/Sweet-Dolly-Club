import Image from "next/image"
import logo from "@public/logo.jpg"

const Header = () => {

  return (
    <header>
      <div className="rounded-full w-full p-1">
      <Image src={logo} alt="logo" className="rounded-full mx-auto w-1/3 md:w-1/6"/>
      </div>
    </header>
  )
}

export default Header