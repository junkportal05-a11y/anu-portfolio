"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, Badge } from "@nofinite/nui";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="mx-auto py-12 flex flex-col gap-16" style={{ width: "90%", maxWidth: "1100px" }}>
        
        {/* About */}
        <section className="text-center pt-8">
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
        <section className="text-center">
          <h2 className="text-primary text-4xl font-bold mb-8">Education</h2>
          <Card className="rounded-2xl p-8 shadow-lg border border-default transition-all hover:shadow-xl mx-auto bg-surface" style={{ maxWidth: "42rem" }}>
            <h3 className="text-primary text-2xl font-bold mb-4">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-subtle leading-relaxed mb-2">G H Raisoni College, Nagpur</p>
            <p className="text-subtle leading-relaxed">2024 - 2028</p>
          </Card>
        </section>

      </main>

      <Footer />
    </>
  );
}
