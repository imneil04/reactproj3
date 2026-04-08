import React from "react";
import { motion } from "motion/react"; //updated version 
//import { Github, Linkedin, Mail } from "lucide-react";

export default function Resume() {
    return (
       <>
            <div className="min-h-screen bg-gray-950 text-white font-sans">
                {/**NAVBAR */}
                <nav className="fixed top-0 w-full bg-gray-950 backdrop-blur border-b border-gray-800">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 className="text-lg font-semibold">Mark DR</h1>
                        <div className="space-x-6 text-sm">
                            <a href="#about" className="hover:text-blue-400">About Me</a>
                            <a href="#projects" className="hover:text-blue-400">Projects</a>
                            <a href="#experience" className="hover:text-blue-400">Professional Experience</a>
                            <a href="#education" className="hover:text-blue-400">Education</a>
                            <a href="#certificates" className="hover:text-blue-400">Certificates</a>
                            <a href="#contact" className="hover:text-blue-400">Contact</a>
                        </div>
                    </div>
                </nav>

                {/**HERO */}
                <section className="pt-32 pb-20 text-center">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} 
                               animate={{ opacity: 1, y: 0 }} 
                               className="text-3xl md:text-6xl font-bold mb-4">
                        Hi, I'm Mark
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} 
                              animate={{ opacity: 1, y: 0 }} 
                              transition={{ delay: 0.2 }} 
                              className="text-gray-400 text-lg mb-6">
                        Full-Stack Software Developer         
                    </motion.p>

                    <motion.div initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ delay: 0.4 }}
                                className="space-x-4">
                        <a href="#projects" className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition">View Projects</a>
                        <a href="#contact" className="px-6 py-3 border border-gray-700 rounded-xl hover:border-blue-400 transition">Contact</a>
                    </motion.div>

                    {/**ABOUT */}
                    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
                        <p className="text-gray-400 text-center leading-relaxed">
                            A dedicated full-stack software developer with 4+ years of progressive coding experience seeking to contribute to your company’s success through my expertise in web programming, system design, database programming, and UI/UX design. 
                            A reliable team player with strong problem-solving skills, hands-on coding experience, and excellent communication abilities.
                        </p>
                    </section>

                    {/**TECH STACK */}
                    <section className="mx-w-5xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-semibold mb-6">Tech Stack Highlights</h2>
                        
                        <div className ="grid md:grid-cols-3 gap-6">

                            {/**FRONT-END */}
                            <div className="bg-gray-900 p-6 rounded-2xl mx-auto border border-gray-800">
                                <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-gray-700 shadow-md">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <h3 className="text-lg font-semibold mb-4 text-blue-400">Front-end</h3>
                                <div className="flex flex-wrap gap-2 cursor-pointer">
                                    {["HTML","CSS","Javascript","Express.js",
                                    "React",
                                    "Tailwind",
                                    "Bootstrap"].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-blue-500 transition">{tech}</span>
                                    ))}
                                </div>
                            </div>

                             {/**BACK-END */}
                            <div className="bg-gray-900 p-6 rounded-2xl mx-auto border border-gray-800">
                                <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-gray-700 shadow-md">
                                    <i className="fa-solid fa-gears"></i>
                                </div>
                                <h3 className="text-lg font-semibold mb-4 text-green-400">Back-end</h3>
                                <div className="flex flex-wrap gap-2 cursor-pointer">
                                    {["Node.js",
                                    "C#",
                                    "Java",
                                    "ASP.NET",
                                    ".NET Core",
                                    "Java Servlet Pages","Apache","MVC","Azure (Formerly TFS)"].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-blue-500 transition">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/**DBMS */}
                            <div className="bg-gray-900 p-6 rounded-2xl mx-auto border border-gray-800">
                                <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full bg-gray-700 shadow-md">
                                    <i className="fa-solid fa-code-fork"></i>
                                </div>
                                <h3 className="text-lg font-semibold mb-4 text-purple-400">DBMS, Version Control, Interface Design, and IDE</h3>
                                <div className="flex flex-wrap gap-2 cursor-pointer">
                                    {["SQL",
                                    "MySQL","Oracle","Git","Github","Figma","Canva","Visual Studio Code","Visual Studio IDE","Eclipse","Webstorm"
                                    ].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-blue-500 transition">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/**PROJECTS */}
                    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-semibold mb-10">Projects</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/**PROJ 1 */}
                            <motion.div whileHover={{ scale: 1.03 }}
                            className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                <h3 className="text-xl font-semibold mb-2">Childcare website app</h3>
                                <p className="text-gray-400 text-justify leading-relaxed mb-4">
                                   A project designed to create a safe, seamless, and reassuring experience for both parents and child directors. 
                                   It features a clean, user-friendly interface where parents can 
                                   easily explore services, enroll their children, and stay connected in real time. 
                                   With a focus on simplicity and trust, the app uses soft visuals, 
                                   intuitive navigation, and mobile-friendly design to make managing childcare feel effortless and transparent. 
                                </p>
                                <div className="mt-5">
                                    <a href="https://imneil04.github.io/reactproj1/" target="_blank" rel="noopener noreferrer" 
                                        className="
                                        px-4 py-3 
                                        bg-black 
                                        text-white rounded-lg hover:bg-emerald-700 transition-all">
                                    View Project
                                    </a>
                                </div>
                            </motion.div>
                            
                            {/**PROJ 2 */}
                            <motion.div whileHover={{ scale: 1.03 }}
                            className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                <h3 className="text-xl font-semibold mb-2">Cafe bookish website app</h3>
                                <p className="text-gray-400 text-justify leading-relaxed mb-4">
                                    A website app that offers a clean and inviting digital experience that reflects the atmosphere 
                                    of the café itself. It allows customers to browse the menu, view featured items, and place orders online
                                    with ease. Key features include category-based menus, a simple cart system, books to read (in works), and quick access to location, hours, and contact details.
                                    With a focus on minimal design, smooth interactions, and mobile responsiveness, the app makes it easy for customers to explore and enjoy
                                    the café anytime, and anywhere.  
                                </p>
                                <div className="mt-5">
                                    <a href="https://imneil04.github.io/reactproj2/" target="_blank" rel="noopener noreferrer" 
                                        className="
                                        px-4 py-3 
                                        bg-black 
                                        text-white rounded-lg hover:bg-emerald-700 transition-all">
                                    View Project
                                    </a>
                                </div>
                            </motion.div>
                            
                            {/**PROJ 3 */}
                            <motion.div whileHover={{ scale: 1.03 }}
                            className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                <h3 className="text-xl font-semibold mb-2">Portfolio website app</h3>
                                <p className="text-gray-400 text-justify leading-relaxed mb-4">
                                    A modern single-page app that is designed to showcase Mark's work, skills, and experience in a simple and engaging way. 
                                    It features a sleek, intuitive layout where visitors can easily navigate through the website, view details, and learn more about the Mark. 
                                    Key elements include a hero (name) section, about me section, project highlights, tech stack, and contact options. 
                                    With smooth animations, responsive design, and a minimalist aesthetic.
                                </p>
                                <div className="mt-5">
                                    <a href="https://imneil04.github.io/reactproj3/" target="_blank" rel="noopener noreferrer" 
                                        className="
                                        px-4 py-3 
                                        bg-black 
                                        text-white rounded-lg hover:bg-emerald-700 transition-all">
                                    View Project
                                </a>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/**EXPERIENCE */}
                    <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                       
                        <div className="space-y-8">
                             {/**EXP 1 */}
                            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-semibold text-lg">Software Developer</h3>
                                        <p className="text-sm text-gray-400">AGAT Laboratories</p>
                                    </div>
                                        <span className="text-sm text-gray-500">Feb 2023 – Jan 2026</span>
                                </div>

                                <ul className="space-y-3 text-justify">
                                    {[
                                    "Developed new and maintained existing custom-made report generator applications called exports for various clients.",
                                    "Participated in weekly meetings to review project timelines, and address any coding concerns, providing support to team members.",
                                        "Refractored legacy code to align with modern standards, enhancing application performance, maintainability, and overall stability.",
                                        "Test and deploy various web applications through different phases of software development to ensure overall standards is met.",
                                        "Played a key role in developing and designing a file management system to streamline file organization, tracking, and overall monitoring efficiency.",
                                    ].map((point, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-400">
                                            <span className="mt-2 w-2 h-2 bg-blue-400 rounded-full"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/**EXP 2 */}
                            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-semibold text-lg">Systems Consultant</h3>
                                        <p className="text-sm text-gray-400">Long View Systems</p>
                                    </div>
                                        <span className="text-sm text-gray-500">May 2021 – Dec 2021</span>
                                </div>

                                <ul className="space-y-3 text-justify">
                                    {[
                                        "Performed daily backlog ticket checks via ServiceNow for any outstanding ticket works.",
                                        "Provided troubleshooting support with regards to any technical issues to local and remote clients.",
                                        "Participated in team daily SCRUM meetings to go over team goals and work updates.",
                                    ].map((point, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-400">
                                            <span className="mt-2 w-2 h-2 bg-blue-400 rounded-full"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/**EXP 3 */}
                            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-semibold text-lg">IT Technical Support</h3>
                                        <p className="text-sm text-gray-400">Sysgen Solutions Group</p>
                                    </div>
                                        <span className="text-sm text-gray-500">May 2019 – Aug 2020</span>
                                </div>

                                <ul className="space-y-3 text-justify">
                                    {[
                                        "Provided consultation to clients with regards to best practices in maintaining a secure and optimal system infrastructure.",
                                        "Performed weekly and monthly SLA checks for client’s system infrastructure.",
                                        "Provided desktop support, account setup, account management, and mobile device setup for various clients.",
                                    ].map((point, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-400">
                                            <span className="mt-2 w-2 h-2 bg-blue-400 rounded-full"></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/**EDUCATION */}
                    <section id="education" className="max-w-5xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-semibold mb-6">Education</h2>

                        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                            <div className="flex flex-col justify-center items-center mb-4">
                                <div>
                                    <h3 className="font-semibold text-lg">IT Software Development</h3>
                                    <p className="text-sm text-gray-400">Southern Alberta Institute of Technology (SAIT)</p>
                                    <span className="text-sm text-gray-500">Sept 2021 – Oct 2022</span>
                                </div>
                                
                                <div className="mt-10">
                                    <h3 className="font-semibold text-lg">IT Computer Systems</h3>
                                    <p className="text-sm text-gray-400">Southern Alberta Institute of Technology (SAIT)</p>
                                    <span className="text-sm text-gray-500">Sept 2017 – Jun 2019</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/**CERTS */}
                    <section id="certificates" className="max-w-5xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>

                        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                            <div className="flex flex-col justify-center items-center mb-4">
                                <div>
                                    <h3 className="font-semibold text-lg">Front-End Development Libraries</h3>
                                    <p className="text-sm text-gray-400">Freecodecamp</p>
                                    <span className="text-sm text-gray-500">Mar 13, 2022</span>
                                </div>
                                
                                <div className="mt-10">
                                    <h3 className="font-semibold text-lg">Responsive Web Design</h3>
                                    <p className="text-sm text-gray-400">Freecodecamp</p>
                                    <span className="text-sm text-gray-500">Feb 21, 2022</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/**CONTACT */}
                    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 text-center">
                        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">

                            <h2 className="text-2xl font-semibold mb-6">Contact</h2>

                            <p className="text-gray-400 mb-4">
                                Feel free to reach out for opportunities or collaborations.
                            </p>

                            <div className="flex justify-center items-center mb-4">
                                <p className="text-blue-500">+1 (403)-400-7427 | neildelrosario47@gmail.com</p>
                            </div>

                            <div className="flex justify-center gap-6">
                                <a href="https://github.com/imneil04" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github text-3xl"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/mark-neil-del-rosario-0a7b7a83/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin text-3xl"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
       </>     
    );
};