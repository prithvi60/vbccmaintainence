import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* <Link href="/"> */}
      <h2 className="text-xl font-bold"> Volta<span className="text-green-600">Flux</span></h2>
      {/* </Link> */}

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      {/* <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}

      <img 
        src="/menu.svg"
        alt="menu"
        className="inline-block cursor-pointer lg:hidden w-5 h-5"
      />
    </nav>
  )
}

export default Navbar