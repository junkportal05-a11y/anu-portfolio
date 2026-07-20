"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Avatar, Button, Card, Badge, Link, Container, Flex, Grid, Stack } from "@nofinite/nui";

export default function Home() {
  return (
    <div className="bg-muted min-h-screen text-default">
      <Navbar />

      <Container size="xl" className="py-12">
        <Stack gap="4rem">
          
          {/* Hero */}
          <section className="text-center pt-12">
            <Flex direction="column" align="center" gap={24}>
              <Avatar
                src="/profile.jpg"
                alt="Anushka Burade"
                size="xl"
                className="border-4 border-surface shadow-xl"
              />

              <h1 className="text-5xl md:text-6xl font-bold text-default">
                Hi, I&apos;m Anushka Burade 👋
              </h1>

              <h2 className="text-primary text-2xl md:text-3xl font-semibold">
                BCA Student • Frontend Developer • AI Enthusiast
              </h2>

              <Container size="md">
                <p className="leading-relaxed text-lg text-subtle">
                  Passionate about Web Development, Artificial Intelligence, and
                  building modern, responsive websites. I enjoy creating innovative
                  projects using HTML, CSS, JavaScript, Python, and Computer Vision.
                </p>
              </Container>

              <Flex wrap="wrap" justify="center" gap={16} className="mt-4">
                <Link href="#projects">
                  <Button color="primary" size="lg" className="rounded-xl shadow-sm hover:shadow-md transition-all">
                    View Projects
                  </Button>
                </Link>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-xl shadow-sm hover:shadow-md transition-all bg-surface text-default border-default hover:bg-subtle">
                    Download Resume
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </section>

          {/* About */}
          <section className="text-center">
            <h2 className="text-primary text-4xl font-bold mb-8">About Me</h2>
            <Container size="md">
              <p className="leading-relaxed text-lg text-subtle">
                I am currently pursuing my Bachelor of Computer Applications (BCA)
                at G H Raisoni College, Nagpur. I enjoy building responsive websites
                using HTML, CSS and JavaScript while exploring Artificial
                Intelligence and Computer Vision. I am always eager to learn
                new technologies and solve real-world problems through code.
              </p>
            </Container>
          </section>

          {/* Skills */}
          <section className="text-center">
            <h2 className="text-primary text-4xl font-bold mb-8">Skills</h2>
            <Flex justify="center" wrap="wrap" gap={16} className="mt-6">
              {['HTML', 'CSS', 'JavaScript', 'Python', 'OpenCV', 'MediaPipe', 'MySQL', 'Git', 'GitHub'].map(skill => (
                <Badge key={skill} variant="outline" size="lg" color="primary" className="px-6 py-2 rounded-full shadow-sm hover:bg-primary hover:text-inverse transition-all text-base font-semibold cursor-default">
                  {skill}
                </Badge>
              ))}
            </Flex>
          </section>

          {/* Education */}
          <section id="education" className="text-center">
            <h2 className="text-primary text-4xl font-bold mb-8">Education</h2>
            <Container size="md">
              <Card className="rounded-2xl p-8 shadow-lg border border-transparent transition-all hover:shadow-xl bg-surface">
                <h3 className="text-primary text-2xl font-bold mb-4">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-subtle leading-relaxed mb-2">G H Raisoni College, Nagpur</p>
                <p className="text-subtle leading-relaxed">2024 - 2028</p>
              </Card>
            </Container>
          </section>

          {/* Projects */}
          <section id="projects" className="text-center">
            <h2 className="text-primary text-4xl font-bold mb-8">Projects</h2>
            
            <Grid columns="auto-fit" minColWidth="320px" gap={32} className="mt-10 text-left">
              <Card className="rounded-2xl p-8 shadow-lg border border-transparent transition-all hover:shadow-xl flex flex-col justify-between bg-surface">
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
                  className="text-primary font-bold hover:underline self-start mt-4"
                >
                  View Project →
                </Link>
              </Card>

              <Card className="rounded-2xl p-8 shadow-lg border border-transparent transition-all hover:shadow-xl flex flex-col justify-between bg-surface">
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

              <Card className="rounded-2xl p-8 shadow-lg border border-transparent transition-all hover:shadow-xl flex flex-col justify-between bg-surface">
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
                  className="text-primary font-bold hover:underline self-start mt-4"
                >
                  View Project →
                </Link>
              </Card>
            </Grid>
          </section>

          {/* Contact */}
          <section id="contact" className="text-center pb-12">
            <h2 className="text-primary text-4xl font-bold mb-8">Contact</h2>
            
            <Container size="sm">
              <Stack gap={16} className="text-lg text-subtle mt-4">
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

                <p>
                  📍{" "}
                  <span>Nagpur, Maharashtra</span>
                </p>

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
              </Stack>
            </Container>
          </section>

        </Stack>
      </Container>

      <Footer />
    </div>
  );
}
