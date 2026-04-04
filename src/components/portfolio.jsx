import React from "react";
import { motion } from "motion/react"; //updated version 
//import { Github, Linkedin, Mail } from "lucide-react";

export default function Resume() {
    return (
       <>
            <div className="min-h-screen bg-gray-950 text-white font-sans">
                {/**NAVBAR */}
                <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur border-b border-gray-800">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 className="text-lg font-semibold">Mark DR</h1>
                        <div className="space-x-6 text-sm">
                            <a href="#about" className="hover:text-blue-400">About Me</a>
                            <a href="#projects" className="hover:text-blue-400">Projects</a>
                            <a href="#experience" className="hover:text-blue-400">Professional Experience</a>
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
                        Full-Stack Software Developer focused on cloud-based applications & modern web applications           
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
                        <p className="text-gray-400 leading-relaxed">
                            A more meaningful description will be placed here later on. Now just a placeholder.
                        </p>
                    </section>

                    {/**TECH STACK */}
                    <section className="mx-w-5xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
                        
                        <div className ="flex flex-col gap-6">

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
                        
                            <motion.div whileHover={{ scale: 1.03 }}
                            className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                <h3 className="text-xl font-semibold mb-2">Childcare website app</h3>
                                <p className="text-gray-400 mb-4">
                                    A web-based solution that organized and manages files efficiently 
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.03 }}
                            className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                <h3 className="text-xl font-semibold mb-2">Cafe bookish website app</h3>
                                <p className="text-gray-400 mb-4">
                                    A web-based solution that organized and manages files efficiently 
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.03 }}
                            className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                <h3 className="text-xl font-semibold mb-2">Portfolio website app</h3>
                                <p className="text-gray-400 mb-4">
                                    A web-based solution that organized and manages files efficiently 
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/**EXPERIENCE */}
                    <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
                        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                        <div className="border-l border-gray-800 pl-6 space-y-6">
                            <div>
                                <h3 className="font-semibold">Software Developer</h3>
                                <p className="text-gray-400 text-sm">Something meaningful here later on, just placeholder for now.</p>
                            </div>
                        </div>
                    </section>


                </section>
            </div>
       </>     
    );
};