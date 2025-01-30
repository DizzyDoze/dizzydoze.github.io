import React, { useState, useEffect } from 'react';
import FlashGame from "./FlashGame";
import { sectionContents, sectionTitles } from './PortfolioSections';

// Import pixel arrows
import ArrowDown from './assets/pixel_arrow_down.png';
import ArrowLeft from './assets/pixel_arrow_left.png';
import ArrowUp from './assets/pixel_arrow_up.png';
import ArrowRight from './assets/pixel_arrow_right.png';

function Portfolio() {
    const [activeSection, setActiveSection] = useState('Projects');

    useEffect(() => {
        const handleKeyDown = (event) => {
            const currentIndex = sectionTitles.indexOf(activeSection);
            let newIndex = currentIndex;

            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    newIndex = (currentIndex - 1 + sectionTitles.length) % sectionTitles.length;
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    newIndex = (currentIndex + 1) % sectionTitles.length;
                    break;
                default:
                    return;
            }

            setActiveSection(sectionTitles[newIndex]);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeSection]);

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

            <section id="games" className="w-full max-w-4xl overflow-hidden mb-12" style={{ height: "180px" }}>
                <FlashGame />
            </section>

            {/* Navigation UI */}
            <div className="w-full max-w-4xl flex justify-center mb-8">
                {sectionTitles.map((title) => (
                    <button
                        key={title}
                        onClick={() => setActiveSection(title)}
                        className={`px-6 py-2 transition-all duration-300 hover:scale-105 focus:outline-none ${
                            activeSection === title ? 'text-green-400' : 'text-yellow-400'
                        }`}
                    >
                        {activeSection === title && <span className="text-green-400 text-3xl">[</span>}
                        {title}
                        {activeSection === title && <span className="text-green-400 text-3xl">]</span>}
                    </button>
                ))}
            </div>

            <div className="w-full max-w-4xl p-6 min-h-[400px] animate-fadeIn">
                {ActiveComponent ? <ActiveComponent /> : <p className="text-yellow-400">Loading...</p>}
            </div>


            {/* Footer */}
            <footer className="w-full max-w-4xl flex flex-col items-center mt-auto p-4">
                {/* Interactive Control Panel Above Footer */}
                <div className="flex flex-row items-center space-x-4 mb-2">
                    <button
                        onClick={() => setActiveSection(sectionTitles[(sectionTitles.indexOf(activeSection) - 1 + sectionTitles.length) % sectionTitles.length])}
                        className="pixel-button">
                        <img src={ArrowLeft} alt="Left" />
                    </button>
                    <button
                        onClick={() => setActiveSection(sectionTitles[(sectionTitles.indexOf(activeSection) - 1 + sectionTitles.length) % sectionTitles.length])}
                        className="pixel-button">
                        <img src={ArrowUp} alt="Up" />
                    </button>
                    <button
                        onClick={() => setActiveSection(sectionTitles[(sectionTitles.indexOf(activeSection) + 1) % sectionTitles.length])}
                        className="pixel-button">
                        <img src={ArrowDown} alt="Down" />
                    </button>
                    <button
                        onClick={() => setActiveSection(sectionTitles[(sectionTitles.indexOf(activeSection) + 1) % sectionTitles.length])}
                        className="pixel-button">
                        <img src={ArrowRight} alt="Right" />
                    </button>
                </div>

                {/* Footer Text Below */}
                <p className="text-xs text-green-500">
                    &copy; {new Date().getFullYear()} Junsheng (YJ) Ye. All rights reserved.
                </p>
            </footer>


        </div>
    );
}

export default Portfolio;
