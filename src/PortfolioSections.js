import React, { useState } from 'react';
import { Copy, Check, Github, Linkedin, Mail } from 'lucide-react';


const ProjectsContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border border-green-400 rounded hover:bg-green-900 transition-colors group">
            <h2 className="text-yellow-400 text-lg">Deep Learning Model Showcase</h2>
            <p className="text-green-400 text-base body-font font-bold">A platform to demonstrate and visualize trained deep learning models for various applications.</p>
            <p className="text-yellow-400 text-base">Coming soon...</p>
        </div>
        <div className="p-4 border border-green-400 rounded hover:bg-green-900 transition-colors group">
            <h2 className="text-yellow-400 text-lg">Quadcopter Drone Build</h2>
            <p className="text-green-400 text-base body-font font-bold">A personal project involving design, assembly, and software
                integration for drone functionality.</p>
            <p className="text-yellow-400 text-base">Coming soon...</p>

        </div>
        <div className="p-4 border border-green-400 rounded hover:bg-green-900 transition-colors group">
            <h2 className="text-yellow-400 text-lg ">Financial Data Filtering App</h2>
            <p className="text-green-400 text-base body-font font-bold">An application to filter and analyze financial data using Flask,
                React, and MySQL.</p>
            <p className="text-yellow-400 text-base">Coming soon...</p>
        </div>
    </div>
);

const ExperienceContent = () => (
    <div className="space-y-4">
        {[
            {
                company: "University of San Francisco",
                role: "Teaching Assistant",
                period: "Aug 2024 – Present",
                duties: [
                    "Supported instruction in AI topics including Decision Trees, KNN, and reinforcement learning",
                    "Guided students through assignments and problem-solving sessions",
                    "Assisted in grading and review sessions to reinforce key concepts"
                ]
            },
            {
                company: "OPPO",
                role: "Software Engineer",
                period: "Mar 2019 – Oct 2020",
                duties: [
                    "Developed backend services and APIs for data analysis platforms",
                    "Automated operations using Python, improving platform efficiency",
                    "Handled data migration projects with Hadoop and Hive"
                ]
            },
            {
                company: "Octopus",
                role: "Software Engineer",
                period: "Feb 2018 – Mar 2019",
                duties: [
                    "Analyzed web structures and implemented web crawlers to extract valuable data",
                    "Optimized crawling efficiency using multi-threading and Redis",
                    "Led development of an E-commerce Monitor Platform, processing billions of comments for NLP sentiment analysis"
                ]
            },
            {
                company: "IBM",
                role: "IT Engineer",
                period: "Jan 2017 – Feb 2018",
                duties: [
                    "Developed SQL queries for data analysis, improving decision-making by 20%",
                    "Facilitated IT support for Asia-Pacific teams, enhancing collaboration",
                    "Provided infrastructure maintenance, reducing downtime by 30%"
                ]
            }
        ].map((job, index) => (
            <div key={index} className="p-4 border border-green-400 rounded hover:bg-green-900 transition-colors group">
                <h3 className="text-yellow-400 text-lg">{job.company}</h3>
                <p className="text-yellow-400 text-sm">{`${job.role} (${job.period})`}</p>
                <ul className="list-disc list-inside mt-2 body-font font-bold">
                    {job.duties.map((duty, i) => (
                        <li key={i} className="text-green-400 body-font">{duty}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

const EducationContent = () => (
    <div className="p-4 border border-green-400 rounded hover:bg-green-900 transition-colors group">
        <div className="text-yellow-400 text-lg">Aug 2023 – Present</div>
        <p className="text-green-400 body-font font-bold">
            M.S. in Computer Science, University of San Francisco
        </p>
    </div>
);

const SkillsContent = () => {
    const skills = [
        { category: "Languages", skills: "Python, Java, JavaScript, Golang, SQL, Shell" },
        { category: "Tools", skills: "MySQL, MongoDB, Redis, Spark, Yarn, Hadoop, Hive" },
        { category: "Frameworks", skills: "Flask, Django, React, Scrapy" },
        { category: "Others", skills: "Git, Linux, Docker" }
    ];

    return (
        <div className="space-y-4">
            {skills.map((item, index) => (
                <div
                    key={index}
                    className="p-4 border border-green-400 rounded hover:bg-green-900 transition-colors group"
                >
                    <div>
                        <div className="text-yellow-400 text-lg">{item.category}</div>
                        <div className="text-green-400 group-hover:text-yellow-400 body-font font-bold">{item.skills}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};



const ContactsContent = () => {
    const [copied, setCopied] = useState(false);

    const handleEmailClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('overdosedizzy@gmail.com');
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const contacts = [
        {
            type: 'Email',
            value: 'overdosedizzy@gmail.com',
            onClick: handleEmailClick,
            icon: copied ? <Check size={16} /> : <Copy size={16} />,
            isEmail: true,
            logo: <Mail size={29} className="inline-block ml-2 mb-1" />
        },
        {
            type: 'GitHub',
            value: 'github.com/DizzyDoze',
            link: 'https://github.com/DizzyDoze',
            icon: "→",
            isEmail: false,
            logo: <Github size={29} className="inline-block ml-2 mb-1" />
        },
        {
            type: 'LinkedIn',
            value: 'linkedin.com/in/yj-pro',
            link: 'https://www.linkedin.com/in/yj-pro',
            icon: "→",
            isEmail: false,
            logo: <Linkedin size={29} className="inline-block ml-2 mb-1" />
        }
    ];

    return (
        <div className="space-y-4">
            {contacts.map((contact, index) =>
                contact.isEmail ? (
                    <button
                        key={index}
                        onClick={contact.onClick}
                        className="block p-4 border border-green-400 rounded hover:bg-green-900 transition-colors group cursor-pointer w-full text-left"
                    >
                        <div className="flex items-center">
                            <div className="flex-grow">
                                <div className="text-yellow-400 text-lg">
                                    {contact.type}
                                    {contact.logo}
                                </div>
                                <div className="text-green-400 text-base group-hover:text-yellow-400 body-font font-bold">
                                    {contact.value}
                                </div>
                            </div>
                            <span className="text-yellow-400">{contact.icon}</span>
                        </div>
                    </button>
                ) : (
                    <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 border border-green-400 rounded hover:bg-green-900 transition-colors group cursor-pointer"
                    >
                        <div className="flex items-center">
                            <div className="flex-grow">
                                <div className="text-yellow-400 text-lg">
                                    {contact.type}
                                    {contact.logo}
                                </div>
                                <div className="text-green-400 text-base group-hover:text-yellow-400 body-font font-bold">
                                    {contact.value}
                                </div>
                            </div>
                            <span className="text-yellow-400">{contact.icon}</span>
                        </div>
                    </a>
                )
            )}
        </div>
    );
};

export const sectionContents = {
    Projects: ProjectsContent,
    Experience: ExperienceContent,
    Education: EducationContent,
    Skills: SkillsContent,
    Contacts: ContactsContent
};

export const sectionTitles = Object.keys(sectionContents);