import Image from "next/image";
import logo from"../../../public/small-logo-dark.svg"

const Brand = () => (
    <Image
        src={logo}
        alt="Starboard Logo"
        width="42" height="42"
    />
)

export default Brand