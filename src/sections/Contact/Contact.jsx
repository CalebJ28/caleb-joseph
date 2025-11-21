import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Get In Touch</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                    I'm currently looking for new opportunities in Design Verification and Hardware Engineering.
                    Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href="mailto:caleb.joseph@torontomu.ca"
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                    >
                        <Mail size={24} />
                        Say Hello
                    </a>
                </div>

                <div className="mt-16 flex justify-center gap-8">
                    <a
                        href="https://www.linkedin.com/in/calebj28/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-600 transition-colors"
                    >
                        <Linkedin size={32} />
                    </a>
                    <a
                        href="https://github.com/Calebj28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-600 transition-colors"
                    >
                        <Github size={32} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
