import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" width={128} height={77} alt="logo" />
      </div>

      <Link href="/">Asset</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default Navbar;
