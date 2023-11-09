
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex-between">
      <Image src="/fetch-logo.png" width={50} height={50} alt="fetch logo" />
<p>Log Out</p>
    </div>
  )
}

export default NavBar