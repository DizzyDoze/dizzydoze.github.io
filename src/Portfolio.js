import React, { useState } from 'react';
import FlashGame from "./FlashGame";
import { sectionContents, sectionTitles } from './PortfolioSections';

function Portfolio() {
    const [activeSection, setActiveSection] = useState('Projects');
    const ActiveComponent = sectionContents[activeSection];

    return (
        <div className="bg-black text-green-300 font-custom min-h-screen flex flex-col items-center p-4">
            {/* Header Section */}
            <header className="w-full max-w-4xl text-center mb-8">
                <h1 className="text-4xl text-yellow-500 font-bold tracking-wide leading-tight">YJ</h1>
                <p className="mt-2 text-ml leading-relaxed tracking-normal">
                    Software Engineer with 3+ years of experience, specializing in Full-Stack Development. Actively developing expertise in Deep Learning, Generative AI, and Quadcopter Drone systems.
                </p>
            </header>

            <section id="games" className="w-full max-w-4xl overflow-hidden mb-12" style={{height: "180px"}}>
                <FlashGame/>
            </section>

            {/* Navigation */}
            <div className="w-full max-w-4xl flex justify-center mb-8">
                {sectionTitles.map((title) => (
                    <button
                        key={title}
                        onClick={() => setActiveSection(title)}
                        className="px-6 py-2 transition-all duration-300 hover:scale-105 focus:outline-none"
                    >
                        <span className="text-xl text-yellow-400 font-bold font-custom tracking-wide leading-tight inline-flex items-center gap-1">
                            {activeSection === title && (
                                <span className="text-green-400 text-3xl font-custom">[</span>
                            )}
                            {title}
                            {activeSection === title && (
                                <span className="text-green-400 text-3xl font-custom">]</span>
                            )}
                        </span>
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <div className="w-full font-custom max-w-4xl p-6 min-h-[400px] animate-fadeIn">
                <ActiveComponent />
            </div>

            {/* Footer */}
            <footer className="w-full max-w-4xl text-center mt-auto">
                <p className="text-xs font-custom text-green-500 leading-relaxed">
                    &copy; {new Date().getFullYear()} Junsheng (YJ) Ye. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default Portfolio;