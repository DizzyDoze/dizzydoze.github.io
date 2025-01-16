import React, { useState } from 'react';

const Section = ({ title, children, defaultOpen = false }) => {
    const [isVisible, setIsVisible] = useState(defaultOpen);

    return (
        <div className="w-full mb-8">
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="w-full text-center p-4 transition-all duration-300 hover:scale-105 focus:outline-none group"
            >
                <h2 className="text-2xl text-yellow-400 font-bold tracking-wide leading-tight inline-flex items-center gap-2">
                    <span className="text-green-400 opacity-70 group-hover:opacity-100">[</span>
                    {title}
                    <span className="text-green-400 opacity-70 group-hover:opacity-100">]</span>
                </h2>
            </button>

            {isVisible && (
                <div className="mt-4 animate-fadeIn">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Section;