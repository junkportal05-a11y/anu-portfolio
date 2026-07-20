"use client";

import { Container, Flex } from "@nofinite/nui";

export default function Footer() {
  return (
    <footer className="mt-16 w-full shadow-sm bg-inverse text-inverse border-t border-default">
      <Container size="xl" className="py-8">
        <Flex justify="center" align="center">
          <p className="m-0 text-sm">
            © 2026 Anushka Burade | Portfolio Website
          </p>
        </Flex>
      </Container>
    </footer>
  );
}