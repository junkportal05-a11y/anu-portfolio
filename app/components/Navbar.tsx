"use client";

import { Link, Flex, Container } from "@nofinite/nui";

export default function Navbar() {
  return (
    <nav className="bg-surface opacity-95 z-sticky shadow-sm sticky top-0 py-4 border-b border-default">
      <Container size="xl">
        <Flex justify="between" align="center" wrap="wrap" gap={20}>
          <Link href="/" className="text-primary text-3xl font-bold hover:opacity-90">
            Anushka.
          </Link>

          <Flex gap={30} wrap="wrap" justify="center" className="text-default font-semibold">
            <span><Link href="#education" className="hover:text-primary transition-all">Education</Link></span>
            <span><Link href="#projects" className="hover:text-primary transition-all">Projects</Link></span>
            <span><Link href="#contact" className="hover:text-primary transition-all">Contact</Link></span>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
}