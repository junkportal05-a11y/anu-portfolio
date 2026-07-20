"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Avatar, Button, Card, Badge, Link } from "@nofinite/nui";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto py-12 flex flex-col gap-16" style={{ width: "90%", maxWidth: "1100px" }}>

        {/* Hero */}
        <section className="text-center pt-16 flex flex-col items-center">
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
            <Link href="#projects">
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

        {/* About */}
        <section className="text-center">
          <h2 className="text-primary text-4xl font-bold mb-8">About Me</h2>
          <p className="mx-auto leading-relaxed text-lg text-subtle" style={{ maxWidth: "56rem" }}>
            I am currently pursuing my Bachelor of Computer Applications (BCA)
            at G H Raisoni College, Nagpur. I enjoy building responsive websites
            using HTML, CSS and JavaScript while exploring Artificial
            Intelligence and Computer Vision. I am always eager to learn
            new technologies and solve real-world problems through code.
          </p>
        </section>

        {/* Skills */}
        <section className="text-center">
          <h2 className="text-primary text-4xl font-bold mb-8">Skills</h2>
          <div className="flex justify-center flex-wrap gap-4 mt-6">
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-surface hover:bg-primary hover:text-inverse transition-all text-base font-semibold border border-default cursor-default">HTML</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-surface hover:bg-primary hover:text-inverse transition-all text-base font-semibold border border-default cursor-default">CSS</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-surface hover:bg-primary hover:text-inverse transition-all text-base font-semibold border border-default cursor-default">JavaScript</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-surface hover:bg-primary hover:text-inverse transition-all text-base font-semibold border border-default cursor-default">Python</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-surface hover:bg-primary hover:text-inverse transition-all text-base font-semibold border border-default cursor-default">OpenCV</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-surface hover:bg-primary hover:text-inverse transition-all text-base font-semibold border border-default cursor-default">MediaPipe</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-surface hover:bg-primary hover:text-inverse transition-all text-base font-semibold border border-default cursor-default">MySQL</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-surface hover:bg-primary hover:text-inverse transition-all text-base font-semibold border border-default cursor-default">Git</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-surface hover:bg-primary hover:text-inverse transition-all text-base font-semibold border border-default cursor-default">GitHub</Badge>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="text-center">
          <h2 className="text-primary text-4xl font-bold mb-8">Education</h2>
          <Card className="rounded-2xl p-8 shadow-lg border border-default transition-all hover:shadow-xl mx-auto bg-surface" style={{ maxWidth: "42rem" }}>
            <h3 className="text-primary text-2xl font-bold mb-4">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-subtle leading-relaxed mb-2">G H Raisoni College, Nagpur</p>
            <p className="text-subtle leading-relaxed">2024 - 2028</p>
          </Card>
        </section>

        {/* Projects */}
        <section id="projects" className="text-center">
          <h2 className="text-primary text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 gap-8 mt-10 text-left" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            
            <Card className="rounded-2xl p-8 shadow-lg border border-default transition-all hover:shadow-xl flex flex-col justify-between bg-surface">
              <div>
                <h3 className="text-primary text-2xl font-bold mb-4">Mouse Control via Eye Tracking</h3>
                <p className="text-subtle leading-relaxed mb-6">
                  AI-powered computer vision application that enables users
                  to control the mouse cursor using eye movements.
                  Developed using Python, OpenCV and MediaPipe.
                </p>
              </div>
              <Link
                href="https://github.com/buradeanushka/mouse-control-via-eye-tracking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline self-start"
              >
                View Project →
              </Link>
            </Card>

            <Card className="rounded-2xl p-8 shadow-lg border border-default transition-all hover:shadow-xl flex flex-col justify-between bg-surface">
              <div>
                <h3 className="text-primary text-2xl font-bold mb-4">AI Detector</h3>
                <p className="text-subtle leading-relaxed mb-6">
                  AI-powered application that detects AI-generated content using
                  machine learning techniques with a clean and responsive
                  interface.<br/><br/>
                  <strong className="text-default">Status:</strong> Under Development
                </p>
              </div>
            </Card>

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="text-center pb-12">
          <h2 className="text-primary text-4xl font-bold mb-8">Contact</h2>
          
          <div className="flex flex-col gap-4 text-lg text-subtle">
            <p>
              📧{" "}
              <Link href="mailto:buradeanushka@gmail.com" className="text-primary font-bold hover:underline">
                buradeanushka@gmail.com
              </Link>
            </p>

            <p>
              📱{" "}
              <Link href="tel:+917507605763" className="text-primary font-bold hover:underline">
                +91 7507605763
              </Link>
            </p>

            <p>📍 Nagpur, Maharashtra</p>

            <p>
              💻{" "}
              <Link
                href="https://github.com/buradeanushka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                GitHub
              </Link>
            </p>

            <p>
              💼{" "}
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
