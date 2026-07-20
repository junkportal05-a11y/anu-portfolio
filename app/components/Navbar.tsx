import { Link } from "@nofinite/nui";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 sticky top-0 z-sticky shadow-sm w-full" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(8px)" }}>
      <h2 className="text-primary text-2xl font-bold m-0">Anushka Burade</h2>
      <ul className="flex gap-6 list-none m-0 p-0">
        <li>
          <Link href="#" className="font-semibold text-default hover:text-primary transition-all">
            Home
          </Link>
        </li>
        <li>
          <Link href="#education" className="font-semibold text-default hover:text-primary transition-all">
            Education
          </Link>
        </li>
        <li>
          <Link href="#projects" className="font-semibold text-default hover:text-primary transition-all">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="font-semibold text-default hover:text-primary transition-all">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}