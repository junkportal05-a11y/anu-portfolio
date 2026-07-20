"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "@nofinite/nui";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="mx-auto py-12 flex flex-col gap-16" style={{ width: "90%", maxWidth: "1100px", minHeight: "60vh" }}>
        
        <section className="text-center pt-8">
          <h2 className="text-primary text-4xl font-bold mb-8">Contact</h2>
          
          <div className="flex flex-col gap-6 text-lg text-subtle mt-12 bg-surface p-10 rounded-2xl shadow-lg border border-default mx-auto" style={{ maxWidth: "42rem" }}>
            <p className="flex justify-center items-center gap-4">
              <span className="text-2xl">📧</span>
              <Link href="mailto:buradeanushka@gmail.com" className="text-primary font-bold hover:underline">
                buradeanushka@gmail.com
              </Link>
            </p>

            <p className="flex justify-center items-center gap-4">
              <span className="text-2xl">📱</span>
              <Link href="tel:+917507605763" className="text-primary font-bold hover:underline">
                +91 7507605763
              </Link>
            </p>

            <p className="flex justify-center items-center gap-4">
              <span className="text-2xl">📍</span>
              <span>Nagpur, Maharashtra</span>
            </p>

            <p className="flex justify-center items-center gap-4">
              <span className="text-2xl">💻</span>
              <Link
                href="https://github.com/buradeanushka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                GitHub
              </Link>
            </p>

            <p className="flex justify-center items-center gap-4">
              <span className="text-2xl">💼</span>
              <Link
                href="https://www.linkedin.com/in/anushka-burade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                LinkedIn
              </Link>
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
