import { Link } from "@nofinite/nui";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/90 backdrop-blur sticky top-0 z-50 shadow-sm w-full">
      <h2 className="text-blue-600 text-2xl font-bold m-0">Anushka Burade</h2>
      <ul className="flex gap-6 list-none m-0 p-0">
        <li>
          <Link href="#" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="#education" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
            Education
          </Link>
        </li>
        <li>
          <Link href="#projects" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}