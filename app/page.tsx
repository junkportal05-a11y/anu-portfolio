"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Avatar, Button, Card, Badge, Link } from "@nofinite/nui";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-[90%] max-w-[1100px] mx-auto py-12 flex flex-col gap-24">

        {/* Hero */}
        <section className="text-center pt-16 flex flex-col items-center">
          <Avatar
            src="/profile.jpg"
            alt="Anushka Burade"
            size="xl"
            className="w-48 h-48 border-[6px] border-white shadow-xl shadow-blue-500/20 mb-8"
          />

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m Anushka Burade 👋
          </h1>

          <h2 className="text-blue-600 text-2xl md:text-3xl font-semibold mb-6">
            BCA Student • Frontend Developer • AI Enthusiast
          </h2>

          <p className="max-w-3xl mx-auto leading-relaxed text-lg text-gray-700">
            Passionate about Web Development, Artificial Intelligence, and
            building modern, responsive websites. I enjoy creating innovative
            projects using HTML, CSS, JavaScript, Python, and Computer Vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link href="#projects">
              <Button color="primary" size="lg" className="rounded-xl px-8 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
                View Projects
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button color="neutral" size="lg" className="rounded-xl px-8 bg-gray-900 text-white hover:bg-gray-800 transition-transform hover:-translate-y-1">
                Download Resume
              </Button>
            </Link>
          </div>
        </section>

        {/* About */}
        <section className="text-center">
          <h2 className="text-blue-600 text-4xl font-bold mb-8">About Me</h2>
          <p className="max-w-4xl mx-auto leading-relaxed text-lg text-gray-700">
            I am currently pursuing my Bachelor of Computer Applications (BCA)
            at G H Raisoni College, Nagpur. I enjoy building responsive websites
            using HTML, CSS and JavaScript while exploring Artificial
            Intelligence and Computer Vision. I am always eager to learn
            new technologies and solve real-world problems through code.
          </p>
        </section>

        {/* Skills */}
        <section className="text-center">
          <h2 className="text-blue-600 text-4xl font-bold mb-8">Skills</h2>
          <div className="flex justify-center flex-wrap gap-4 mt-6">
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 text-base font-semibold border-none cursor-default">HTML</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 text-base font-semibold border-none cursor-default">CSS</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 text-base font-semibold border-none cursor-default">JavaScript</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 text-base font-semibold border-none cursor-default">Python</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 text-base font-semibold border-none cursor-default">OpenCV</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 text-base font-semibold border-none cursor-default">MediaPipe</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 text-base font-semibold border-none cursor-default">MySQL</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 text-base font-semibold border-none cursor-default">Git</Badge>
            <Badge variant="outline" size="lg" className="px-6 py-2 rounded-full shadow-sm bg-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 text-base font-semibold border-none cursor-default">GitHub</Badge>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="text-center">
          <h2 className="text-blue-600 text-4xl font-bold mb-8">Education</h2>
          <Card className="rounded-2xl p-8 shadow-lg border-none hover:-translate-y-2 transition-transform hover:shadow-2xl hover:shadow-blue-500/20 max-w-2xl mx-auto">
            <h3 className="text-blue-600 text-2xl font-bold mb-4">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-gray-700 leading-relaxed mb-2">G H Raisoni College, Nagpur</p>
            <p className="text-gray-700 leading-relaxed">2024 - 2028</p>
          </Card>
        </section>

        {/* Projects */}
        <section id="projects" className="text-center">
          <h2 className="text-blue-600 text-4xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-left">
            
            <Card className="rounded-2xl p-8 shadow-lg border-none hover:-translate-y-2 transition-transform hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col justify-between">
              <div>
                <h3 className="text-blue-600 text-2xl font-bold mb-4">Mouse Control via Eye Tracking</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  AI-powered computer vision application that enables users
                  to control the mouse cursor using eye movements.
                  Developed using Python, OpenCV and MediaPipe.
                </p>
              </div>
              <Link
                href="https://github.com/buradeanushka/mouse-control-via-eye-tracking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline self-start"
              >
                View Project →
              </Link>
            </Card>

            <Card className="rounded-2xl p-8 shadow-lg border-none hover:-translate-y-2 transition-transform hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col justify-between">
              <div>
                <h3 className="text-blue-600 text-2xl font-bold mb-4">AI Detector</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  AI-powered application that detects AI-generated content using
                  machine learning techniques with a clean and responsive
                  interface.<br/><br/>
                  <strong>Status:</strong> Under Development
                </p>
              </div>
            </Card>

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="text-center pb-12">
          <h2 className="text-blue-600 text-4xl font-bold mb-8">Contact</h2>
          
          <div className="flex flex-col gap-4 text-lg text-gray-700">
            <p>
              📧{" "}
              <Link href="mailto:buradeanushka@gmail.com" className="text-blue-600 font-bold hover:underline">
                buradeanushka@gmail.com
              </Link>
            </p>

            <p>
              📱{" "}
              <Link href="tel:+917507605763" className="text-blue-600 font-bold hover:underline">
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
                className="text-blue-600 font-bold hover:underline"
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
                className="text-blue-600 font-bold hover:underline"
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
