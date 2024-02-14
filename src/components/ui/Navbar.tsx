import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="text-xl">
        David Miller
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
