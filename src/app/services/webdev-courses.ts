import { Injectable } from "@angular/core";
import { Courses } from "./coursesmodel";
@Injectable({
    providedIn: 'root'
})
export class WebdevCourses {
    webdevcoursesList: Courses[] = [
        {
            courseId: "WD101",
            courseName: "htmlcss",
            courseDescription: "Start your web journey by mastering HTML and CSS. Learn to build responsive layouts, design beautiful web pages, and understand the core of front-end development.",
            coursePrice: "Free",
            courseDuration: "3 Weeks",
            courseLevel: "Beginner",
            courseImage: "htmlcss.png",
            courseSyllabus: [
                "Week 1: HTML Basics, Elements, Forms, and Tables",
                "Week 2: CSS Styling, Box Model, Flexbox, and Grid",
                "Week 3: Responsive Design & Mini Project"
            ],
            toolsAndTechnologies: ["HTML5", "CSS3", "VS Code", "GitHub Pages"],
            learningOutcomes: [
                "Understand HTML structure and elements",
                "Apply CSS styling and layout techniques",
                "Build responsive web pages from scratch"
            ],
            prerequisites: "Basic understanding of HTML & CSS",
            instructors: [
                {
                    name: "Sneha Ramesh",
                    designation: "Frontend Developer",
                    profile: "prof.png"
                }
            ]
        }
        ,
        {
            courseId: "WD102",
            courseName: "JavaScript Essentials",
            courseDescription: "Understand how to bring websites to life using JavaScript. From variables and functions to DOM manipulation and events — everything is covered in a fun, interactive way.",
            coursePrice: "₹999",
            courseDuration: "4 Weeks",
            courseLevel: "Beginner",
            courseImage: "js.png",
            courseSyllabus: [
                "Week 1: Variables, Data Types, Operators",
                "Week 2: Functions, Loops, Arrays, Objects",
                "Week 3: DOM Manipulation, Events",
                "Week 4: Mini Project using JavaScript"
            ],
            toolsAndTechnologies: ["JavaScript", "Chrome DevTools", "CodePen"],
            learningOutcomes: [
                "Write basic to intermediate JavaScript code",
                "Manipulate DOM elements dynamically",
                "Understand how interactivity works in browsers"
            ],
            prerequisites: "Basic understanding of HTML & CSS",
            instructors: [
                {
                    name: "Arjun Patel",
                    designation: "JavaScript Instructor",
                    profile: "prof.png"
                }
            ]
        }
        ,
        {
            courseId: "WD103",
            courseName: "Frontend Web Design",
            courseDescription: "Master the principles of UI/UX and modern frontend frameworks. Build stunning websites using HTML5, CSS3, Bootstrap, and design systems.",
            coursePrice: "₹1499",
            courseDuration: "5 Weeks",
            courseLevel: "Intermediate",
            courseImage: "frontendweb.png",
            courseSyllabus: [
                "Week 1: UI/UX Principles, Wireframes",
                "Week 2: HTML5 & CSS3 Refresher",
                "Week 3: Bootstrap Components & Utilities",
                "Week 4: Responsive Design & Design Systems",
                "Week 5: Capstone Design Project"
            ],
            toolsAndTechnologies: ["HTML5", "CSS3", "Bootstrap", "Figma", "VS Code"],
            learningOutcomes: [
                "Apply UI/UX best practices to websites",
                "Use Bootstrap to create responsive designs",
                "Build visually appealing and user-friendly UIs"
            ],
            prerequisites: "Basic HTML & CSS knowledge",
            instructors: [
                {
                    name: "Manasa Rao",
                    designation: "UI/UX Designer",
                    profile: "prof.png"
                }
            ]
        }
        ,
        {
            courseId: "WD104",
            courseName: "React JS Bootcamp",
            courseDescription: "Learn React JS from scratch and build scalable frontend applications. Understand hooks, state management, components, and dynamic routing.",
            coursePrice: "₹1999",
            courseDuration: "6 Weeks",
            courseLevel: "Intermediate",
            courseImage: "react.png",
            courseSyllabus: [
                "Week 1: React Basics, Components, JSX",
                "Week 2: Props, State, Lifecycle Methods",
                "Week 3: React Hooks, useState & useEffect",
                "Week 4: React Router, Forms, Events",
                "Week 5: Context API, Project Setup",
                "Week 6: Capstone Project"
            ],
            toolsAndTechnologies: ["React", "JavaScript", "VS Code", "Firebase", "GitHub"],
            learningOutcomes: [
                "Develop dynamic frontend applications using React",
                "Understand component-driven architecture",
                "Build deployable React projects"
            ],
            prerequisites: "Intermediate JavaScript knowledge",
            instructors: [
                {
                    name: "Deepak Yadav",
                    designation: "React Developer",
                    profile: "prof.png"
                }
            ]
        }
        ,
        {
            courseId: "WD105",
            courseName: "Angular Full Course",
            courseDescription: "Become a pro in Angular. Learn component-based architecture, routing, services, reactive forms, and deployment with real-world projects.",
            coursePrice: "₹2199",
            courseDuration: "7 Weeks",
            courseLevel: "Intermediate",
            courseImage: "angular.png",
            courseSyllabus: [
                "Week 1: Angular CLI, Components, Modules",
                "Week 2: Data Binding, Directives",
                "Week 3: Routing, Lazy Loading",
                "Week 4: Services, HTTP Client",
                "Week 5: Reactive Forms & Validation",
                "Week 6: State Management & Deployment",
                "Week 7: Real-world Capstone Project"
            ],
            toolsAndTechnologies: ["Angular", "TypeScript", "Node.js", "Firebase"],
            learningOutcomes: [
                "Build enterprise-level SPAs using Angular",
                "Use reactive forms and services effectively",
                "Deploy and maintain Angular applications"
            ],
            prerequisites: "HTML, CSS, and JavaScript basics",
            instructors: [
                {
                    name: "Nikita Reddy",
                    designation: "Angular Developer",
                    profile: "prof.png"
                }
            ]
        }
        ,
        {
            courseId: "WD106",
            courseName: "Backend with Node.js",
            courseDescription: "Build scalable backend APIs using Node.js and Express. Learn routing, middleware, MongoDB integration, and authentication.",
            coursePrice: "₹2499",
            courseDuration: "6 Weeks",
            courseLevel: "Intermediate",
            courseImage: "nodejs.png",
            courseSyllabus: [
                "Week 1: Node.js Fundamentals, Modules",
                "Week 2: Express.js Routing, Middleware",
                "Week 3: MongoDB & Mongoose",
                "Week 4: REST APIs & CRUD Operations",
                "Week 5: Authentication & Authorization",
                "Week 6: Deployment & Capstone Project"
            ],
            toolsAndTechnologies: ["Node.js", "Express.js", "MongoDB", "Postman", "Render"],
            learningOutcomes: [
                "Develop RESTful APIs using Node.js",
                "Handle databases and server logic",
                "Secure and deploy backend services"
            ],
            prerequisites: "Basic JavaScript knowledge",
            instructors: [
                {
                    name: "Sai Vignesh",
                    designation: "Backend Developer",
                    profile: "prof.png"
                }
            ]
        }
        ,
        {
            courseId: "WD107",
            courseName: "Full Stack Development",
            courseDescription: "From frontend to backend — become a full-stack developer. Build and deploy complete web apps using MERN stack.",
            coursePrice: "₹3499",
            courseDuration: "8 Weeks",
            courseLevel: "Advanced",
            courseImage: "fullstack.png",
            courseSyllabus: [
                "Week 1: HTML, CSS, JavaScript Refresher",
                "Week 2: React Components & Routing",
                "Week 3: Node.js & Express Basics",
                "Week 4: MongoDB Integration",
                "Week 5: Full Stack Project Structure",
                "Week 6: Authentication & Security",
                "Week 7: Testing & Deployment",
                "Week 8: Final Capstone Project"
            ],
            toolsAndTechnologies: ["React", "Node.js", "Express", "MongoDB", "GitHub", "Render"],
            learningOutcomes: [
                "Build complete web applications end-to-end",
                "Work with frontend and backend technologies",
                "Deploy full-stack projects using modern tools"
            ],
            prerequisites: "Strong understanding of frontend and backend basics",
            instructors: [
                {
                    name: "Rajesh Sharma",
                    designation: "Full Stack Engineer",
                    profile: "prof.png"
                }
            ]
        }
        ,

    ]

}