import React from 'react';
import SkillList from '../../common/SkillList';

function Skills() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Technical Skills</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Verification */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">Verification</h3>
                        <div className="flex flex-wrap gap-3">
                            <SkillList skill="UVM" />
                            <SkillList skill="SystemVerilog" />
                            <SkillList skill="Formal Verification" />
                            <SkillList skill="Functional Coverage" />
                            <SkillList skill="Assertion Based Verification" />
                            <SkillList skill="Debugging" />
                        </div>
                    </div>

                    {/* Hardware Design */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">Hardware Design</h3>
                        <div className="flex flex-wrap gap-3">
                            <SkillList skill="Verilog" />
                            <SkillList skill="VHDL" />
                            <SkillList skill="FPGA" />
                            <SkillList skill="ASIC" />
                            <SkillList skill="RTL Design" />
                            <SkillList skill="Computer Architecture" />
                        </div>
                    </div>

                    {/* Programming */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">Programming</h3>
                        <div className="flex flex-wrap gap-3">
                            <SkillList skill="C/C++" />
                            <SkillList skill="Python" />
                            <SkillList skill="Assembly" />
                            <SkillList skill="Bash/CSH" />
                            <SkillList skill="Perl" />
                            <SkillList skill="JavaScript" />
                        </div>
                    </div>

                    {/* Tools & Others */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">Tools & Frameworks</h3>
                        <div className="flex flex-wrap gap-3">
                            <SkillList skill="Vivado" />
                            <SkillList skill="Questasim" />
                            <SkillList skill="Git" />
                            <SkillList skill="Linux/UNIX" />
                            <SkillList skill="React" />
                            <SkillList skill="Tailwind CSS" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;