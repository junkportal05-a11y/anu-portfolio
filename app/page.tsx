"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Avatar, Button, Link } from "@nofinite/nui";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto py-12 flex flex-col gap-16" style={{ width: "90%", maxWidth: "1100px", minHeight: "70vh", justifyContent: "center" }}>

        {/* Hero */}
        <section className="text-center flex flex-col items-center">
          <Avatar
            src="/profile.jpg"
            alt="Anushka Burade"
            size="xl"
            className="border-4 border-default shadow-xl mb-8"
            style={{ width: "12rem", height: "12rem" }}
          />

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-default">
            Hi, I&apos;m Anushka Burade 👋
          </h1>

          <h2 className="text-primary text-2xl md:text-3xl font-semibold mb-6">
            BCA Student • Frontend Developer • AI Enthusiast
          </h2>

          <p className="mx-auto leading-relaxed text-lg text-subtle" style={{ maxWidth: "48rem" }}>
            Passionate about Web Development, Artificial Intelligence, and
            building modern, responsive websites. I enjoy creating innovative
            projects using HTML, CSS, JavaScript, Python, and Computer Vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link href="/projects">
              <Button color="primary" size="lg" className="rounded-xl transition-all shadow-sm">
                View Projects
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-xl transition-all bg-surface text-default border border-default hover:bg-subtle">
                Download Resume
              </Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
