"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, Link } from "@nofinite/nui";

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="mx-auto py-12 flex flex-col gap-16" style={{ width: "90%", maxWidth: "1100px" }}>
        
        <section className="text-center pt-8">
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

            {/* Placeholder projects to meet "3-4 projects" criteria */}
            <Card className="rounded-2xl p-8 shadow-lg border border-default transition-all hover:shadow-xl flex flex-col justify-between bg-surface">
              <div>
                <h3 className="text-primary text-2xl font-bold mb-4">Portfolio Website</h3>
                <p className="text-subtle leading-relaxed mb-6">
                  A personal portfolio website built with Next.js, customized with 
                  the NUI component library and strictly styled with NUICSS utilities 
                  for a fully responsive and clean layout.
                </p>
              </div>
              <Link
                href="https://github.com/junkportal05-a11y/anu-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline self-start"
              >
                View Project →
              </Link>
            </Card>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
