import Link from "next/link";

const NavLink = ({ children, href, ...props }) => (
    <Link href={href} {...props} className={`ml-auto py-2.5 px-1 lg:px-4 text-center rounded-lg duration-150 ${props.className || ""}`}>
        {children}
    </Link>
)

export default NavLink