import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container">

       {/* Hero */}
      <section className="hero">
         <Image
          src="/profile.jpg"
          alt="Anushka Burade"
          width={180}
          height={180}
          className="profile"
        /> 

      <h1>Hi, I&apos;m Anushka Burade 👋</h1>

      <h2>BCA Student • Frontend Developer • AI Enthusiast</h2>

  <p>
    Passionate about Web Development, Artificial Intelligence, and
    building modern, responsive websites. I enjoy creating innovative
    projects using HTML, CSS, JavaScript, Python, and Computer Vision.
  </p>

  <div className="hero-buttons">
    <a href="#projects" className="btn">
      View Projects
    </a>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn secondary"
    >
      Download Resume
     </a>
   </div>
      </section>

        {/* About */}
        <section className="container">
          <h2>About Me</h2>

          <p>
            I am currently pursuing my Bachelor of Computer Applications (BCA)
            at G H Raisoni College, Nagpur.I enjoy building responsive websites 
            using HTML, CSS and JavaScript while exploring Artificial 
            Intelligence and Computer Vision. I am always eager to learn  
            new technologies and solve real-world problems through code.
          </p>
        </section>

        {/* Skills */}
        <section className="container">
          <h2>Skills</h2>

          <div className="skills">
           
           <span>HTML</span>
           <span>CSS</span>
           <span>JavaScript</span>
           <span>Python</span>
           <span>OpenCV</span>
           <span>MediaPipe</span>
           <span>MySQL</span>
            <span>Git</span>
            <span>GitHub</span>
         </div>
        </section>
          
       {/* Education */}
      <section id="education" className="container">

         <h2>Education</h2>

       <div className="card">

        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p>G H Raisoni College, Nagpur</p>
         <p>2024 - 2028</p>

       </div>
        </section>

       {/* Projects */}
        <section id="projects" className="container">
          <h2>Projects</h2>

          <div className="projects">

            <div className="card">
              <h3>Mouse Control via Eye Tracking</h3>

              <p>
                AI-powered computer vision application that enables users
                to control the mouse cursor using eye movements.
                Developed using Python, OpenCV and MediaPipe.
              </p>

              <a
                href="https://github.com/buradeanushka/mouse-control-via-eye-tracking"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>

            <div className="card">
              <h3>AI Detector</h3>

              <p>
                AI-powered application that detects AI-generated content using
                machine learning techniques with a clean and responsive
                interface.
                <strong>Status:</strong> Under Development
              </p>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container">
      <h2>Contact</h2>

          <p>
           📧{" "}
            <a href="mailto:buradeanushka@gmail.com">
             buradeanushka@gmail.com
            </a>
          </p>

          <p>
           📱{" "}
            <a href="tel:+917507605763">
              +91 7507605763
            </a>
          </p>

          <p>📍 Nagpur, Maharashtra</p>

          <p>
            💻{" "}
            <a
              href="https://github.com/buradeanushka"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>

          <p>
            💼{" "}
            <a
              href="https://www.linkedin.com/in/anushka-burade"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}


