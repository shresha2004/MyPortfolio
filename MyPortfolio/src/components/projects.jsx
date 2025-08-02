import React from "react";
import ProjectCard from "./projectCard"; // Import the card component

function Project() {
    const projects = [
        {
            id: 1,
            title: "Trade Tracker",
            date: "May 2024 - August 2024",
            description: "A Trade Tracker web application built with the MERN stack, offering users tools to learn about the stock market, track and analyze trades, and manage a portfolio efficiently.",
            technologies: ["HTML", "CSS", "AlphaVantage", "JavaScript", "MongoDB", "ExpressJS", "ReactJs", "NodeJS", "Cloudinary"],
            images: [
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736264430/TradingJournal/mfxwglzpbtem0hjboxjc.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736264432/TradingJournal/qarmza1nikgveqdu3ulq.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736264430/TradingJournal/svqcqs9kbpxewrvdypep.png",
            ],
            appLink: "https://trade-tracker-r4xv.vercel.app/",
            codeLink: "https://github.com/shresha2004/Trade_Tracker",
        },
        {
            id: 2,
            title: "Fare Well Cup",
            date: "Feb 2025 - March 2024",
            description: "A dynamic platform for the Farewell Cup 2025 cricket tournament, where hostelites register as players and captains bid in a real-time, point-based auction to build their teams. Built with the MERN stack, it ensures a seamless and engaging experience for all participants.s",
            technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "ExpressJS", "ReactJs", "NodeJS", "Cloudinary","Tailwind CSS"],
            images: [
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1741452029/MyPortfolio/sot7wg5nx5vqhqqrkueh.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1741452024/MyPortfolio/cjiejbtaa9qvb6n5f5u9.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1741452360/MyPortfolio/z2o7jw6avpiibdqqcxuz.jpg",
            ],
            appLink: "https://farewell-cup-frontend.vercel.app/",
            codeLink: "https://github.com/shresha2004/FarewellCup",
        },
        {
            id: 3,
            title: "Yelp Camp",
            date: "October 2023 - December 2023",
            description: "Developed a full-stack web app which has CRUD based functions.Passport.js authentication, and image uploads via Cloudinary. Deployed on Render with a responsive UI.",
            technologies: ["HTML", "CSS", "JavaScript", "MongoDB", "ExpressJS", "NodeJS","PassportJS","Bootstrap", "Cloudinary"],
            images: [
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736323565/stesgtccaxl5jsnesqzd.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736323552/ifpuovu57xnxmhehf9bk.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736323541/gmafexfi53nr6nbjcnkf.png",
            ],
            appLink: "https://yelpcampproject-wozt.onrender.com/",
            codeLink: "https://github.com/shresha2004/YELPCAMP",
        },
        {
            id: 4,
            title: "GDG Events management app",
            date: "November 2024",
            description: "A streamlined GDSC event management application to create, organize, and track events efficiently, featuring real-time updates, and attendee management.",
            technologies: ["HTML", "CSS", "JavaScript", "ReactJS","MongoDB", "ExpressJS", "NodeJS","Bootstrap", "Cloudinary"],
            images: [
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736327747/bftvh5huizkqxuxcsjyz.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736327753/s9ciwzezjbfqqijp9szm.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736327742/kaapjs11ponbutv02o2x.png",
            ],
            appLink: "https://event-management-app-nine.vercel.app/",
            codeLink: "https://github.com/shresha2004/EventManagementApp",
        },
        {
            id: 5,
            title: "Leet Log",
            date: "June 2025",
            description: "Leet-log is a React web app that fetches Java code files from a GitHub repository folder and displays them beautifully. Users can click on any file name to view its code with syntax highlighting.",
            technologies: ["HTML", "CSS", "JavaScript", "ReactJS","MongoDB", "Cloudinary"],
            images: [
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1754118670/ugw2643lqphprv9a8nbu.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1754118670/yqt4fyrh1ozgotaeewga.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1754118670/sgk7luknvrzzkpfoi2gb.png",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1754118671/o2mawwepsvyhgyukjpdv.png",
            ],
            appLink: "https://leet-log.vercel.app/",
            codeLink: "https://github.com/shresha2004/LeetLog",
        },
        {
            id: 6,
            title: "Learning Assessment of OE:RC Plane",
            date: "December 2024",
            description: "Built an RC plane as part of a learning assessment for the UAV subject in the Aero department, showcasing practical aerodynamics.",
            technologies: ["Aerodynamics", "Wing", "Servo motor", "Diviation","Receiver", "Propeller", "Battery"],
            images: [
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736745402/culoy8iwz7l0hotsr60l.jpg",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736329990/ifr700g2pzsskszdefqu.jpg",
                "https://res.cloudinary.com/dtyu88isr/image/upload/v1736329985/xpsptt9qiukggnsekj0d.jpg",
            ],
            appLink: "https://event-management-app-nine.vercel.app/",
            codeLink: "https://github.com/shresha2004/EventManagementApp",
        },
    ];

    return (
        <>
            <h1 className="text-white flex justify-center text-center text-3xl lg:text-4xl font-bold mb-3 underline underline-offset-2">
                Projects
            </h1>
            <p className="mt-2 text-white text-center font-semibold max-w-md mx-auto">
                I have explored diverse projects spanning software development and machine learning, <br />
                showcasing my versatility and passion for innovation. Here are a few highlights.
            </p>

            <div className="justify-center text-center">
                {/* Flexbox for mobile and grid for larger screens */}
                <div className="flex flex-wrap justify-center gap-6 p-6 w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-20">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Project;
