"use client";
import { 
  FaGithub, 
  FaTelegramPlane, 
  FaEnvelope, 
  FaSun, 
  FaMoon, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";


export default function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ntwgsi3",
      "template_wfkuef2",
      e.target as HTMLFormElement,
      "-Ua9yGhM3oEJE7WBt"
    )
    .then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message.");
        console.log(error.text);
      }
    );

  (e.target as HTMLFormElement).reset();
};
  const projects = [
    {
      title: "JobSeekAI",
      description:
        "An AI-powered job recommendation platform that analyzes uploaded resumes and helps users discover the best matching job opportunities using intelligent resume parsing and skill analysis.",
      tech: ["React", "Next.js", "FastAPI", "MongoDB", "AI", "REST API"],
      github: "https://github.com/kidustilahun1/Jobseek.ai",
    },
    {
      title: "Food Delivery System",
      github: "https://github.com/kidustilahun1/food-delivery-system",
      description:
        "A full-stack food delivery platform developed for Enat Food House with online ordering, menu management, and responsive UI.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Performance Evaluation System",
      github: "https://github.com/kidustilahun1/performance-evaluation-intern-project",
      description:
        "A web-based performance evaluation system designed to manage employee assessments, track progress, and generate evaluation reports efficiently.",
      tech: ["MongoDB", "MySQL", "Bootstrap"],
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PHP",
    "MySQL",
    "Git",
    "Tailwind CSS",
    "REST API",
  ];

  return (
    <div
      className={`min-h-screen font-sans transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black"
      }`}
    >
      {/* Navbar */}
      {/* Navbar */}
{/* Navbar */}
<nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
  darkMode ? "bg-black/30 border-white/10" : "bg-white/50 border-black/10"
}`}>
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo (Stays pinned to the left) */}
    <h1 className="text-2xl font-bold tracking-wide">
      Kidus<span className="text-cyan-500">.</span>
    </h1>

    {/* Right-aligned Navigation Group (Brings links and toggle together) */}
    <div className="flex items-center gap-8">
      {/* Desktop Navigation Links */}
      <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${
        darkMode ? "text-gray-300" : "text-gray-600"
      }`}>
        <a href="#home" className="hover:text-cyan-500 transition">Home</a>
        <a href="#about" className="hover:text-cyan-500 transition">About</a>
        <a href="#skills" className="hover:text-cyan-500 transition">Skills</a>
        <a href="#projects" className="hover:text-cyan-500 transition">Projects</a>
        <a href="#contact" className="hover:text-cyan-500 transition">Contact</a>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition text-lg"
        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile Menu Button (Stays hidden on desktop screens) */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-2xl text-cyan-500 focus:outline-none"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  {mobileMenuOpen && (
    <div className={`md:hidden absolute w-full border-b backdrop-blur-lg px-6 py-4 flex flex-col gap-4 text-center font-medium ${
      darkMode ? "bg-slate-950/95 border-white/10 text-gray-300" : "bg-white/95 border-black/10 text-gray-700"
    }`}>
      <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500 py-2">Home</a>
      <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500 py-2">About</a>
      <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500 py-2">Skills</a>
      <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500 py-2">Projects</a>
      <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-cyan-500 py-2">Contact</a>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >

        


        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Full Stack Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Kidus Tilahun
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              A passionate Computer Science & Engineering student at ASTU,
              focused on building modern, responsive, and user-friendly web
              applications using frontend and backend technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold shadow-lg shadow-cyan-500/30"
             >
             View Projects
              </a>

              <a
               href="/MY CV.docx"
              download
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
>
             Download CV
            </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
                <img
               src="/my pic.png"
               alt="Kidus Tilahun"
               className="w-full h-full object-cover object-top rounded-full"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                Who Am I?
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                I am a 4th year Computer Science & Engineering student with a
                strong passion for full-stack web development. I enjoy creating
                beautiful interfaces, solving backend challenges, and building
                real-world systems.
              </p>

              <p className="text-gray-400 leading-relaxed">
                My goal is to become a professional software engineer and work
                on impactful digital solutions that improve people's lives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 rounded-3xl p-8 text-center">
                <h4 className="text-4xl font-bold text-cyan-400 mb-2">3+</h4>
                <p className="text-gray-300">Projects Completed</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 rounded-3xl p-8 text-center">
                <h4 className="text-4xl font-bold text-pink-400 mb-2">4th</h4>
                <p className="text-gray-300">Year Student</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/20 rounded-3xl p-8 text-center">
                <h4 className="text-4xl font-bold text-yellow-400 mb-2">
                  Full
                </h4>
                <p className="text-gray-300">Stack Developer</p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/20 rounded-3xl p-8 text-center">
                <h4 className="text-4xl font-bold text-emerald-400 mb-2">
                  ASTU
                </h4>
                <p className="text-gray-300">CSE Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900/80 border border-white/10 hover:border-cyan-400/50 transition rounded-2xl p-6 text-center hover:-translate-y-2 duration-300 shadow-lg"
              >
                <p className="font-semibold text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/40 transition duration-300 hover:-translate-y-3 shadow-2xl"
              >
                <div className="h-52 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center text-5xl font-bold text-white">
                  0{index + 1}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            I am available for freelance projects, collaborations, and software
            development opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
              <h4 className="text-cyan-400 font-semibold mb-2">Email</h4>
              <p className="text-gray-300">kidustila64@gmail.com</p>
            </div>

            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
              <h4 className="text-cyan-400 font-semibold mb-2">Location</h4>
              <p className="text-gray-300">Ethiopia, Adama</p>
            </div>

            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
              <h4 className="text-cyan-400 font-semibold mb-2">University</h4>
              <p className="text-gray-300">ASTU</p>
            </div>
          </div>

<form
  onSubmit={sendEmail}
  className="max-w-2xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl space-y-6"
>
  <input
    type="text"
    name="from_name"
    placeholder="Your Name"
    required
    className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 focus:border-cyan-400 outline-none text-white"
  />

  <input
    type="email"
    name="from_email"
    placeholder="Your Email"
    required
    className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 focus:border-cyan-400 outline-none text-white"
  />

  <textarea
    name="message"
    rows={5}
    placeholder="Your Message"
    required
    className="w-full px-5 py-4 rounded-2xl bg-black/30 border border-white/10 focus:border-cyan-400 outline-none text-white resize-none"
  ></textarea>

  <button
    type="submit"
    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-[1.02] transition duration-300 shadow-2xl shadow-cyan-500/30"
  >
    Send Message
  </button>
</form>
         
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
<footer className="border-t border-white/10 py-8 px-6">
  <div className="flex items-center justify-center gap-6 text-gray-500 flex-wrap">
    
    <p>© 2026 Kidus Tilahun. All rights reserved.</p>

    {/* Social Icons */}
    <div className="flex items-center gap-4">
      {/* GitHub */}
      <a
        href="https://github.com/kidustilahun1"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
          className="w-5 h-5 invert"
        />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/yikuneni_19_21"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
          alt="Telegram"
          className="w-5 h-5"
        />
      </a>

      {/* Email */}
      <a
        href="mailto:kidustila64@gmail.com"
        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          alt="Email"
          className="w-5 h-5"
        />
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}
