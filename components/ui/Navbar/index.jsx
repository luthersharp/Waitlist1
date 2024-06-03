import Link from "next/link"
import Brand from "../Brand"
import NavLink from "../NavLink"

const Navbar = () => (
    <header>
        <nav className="custom-screen  mb-5 py-3 flex  items-center  md:py-5">
            <div>
                <Link href="https://podsynk.com" className="">
                    <Brand />
                </Link>
            </div>
            <p className="font-bold text-sm lg:text-2xl lg:mr-auto">P<span className="text-teal-400">o</span>dS<span className="text-teal-400">yn</span>k</p>
            <NavLink
                href="#formTwo"
                className="lg:font-medium text-xs lg:text-sm text-white bg-gray-800 hover:bg-gray-600 focus:bg-gray-900 ring-offset-2 ring-gray-800 focus:ring-2 shadow shadow-teal-400"
            >
                Join waitlist
            </NavLink>
        </nav>
    </header>
)

export default Navbar