import { Injectable } from "@angular/core";
import { Courses } from "./coursesmodel";
@Injectable({
    providedIn: 'root'
})
export class Languages {
    languagesList: Courses[] = [
        {
            courseId: "LG201",
            courseName: "C Programming Essentials",
            courseDescription: "Master the basics of procedural programming with C. Learn data types, control structures, arrays, pointers, and functions.",
            coursePrice: "₹999",
            courseDuration: "4 Weeks",
            courseLevel: "Beginner",
            courseImage: "c.png",
            courseSyllabus: [
                "Introduction to C and IDE setup",
                "Data types and variables",
                "Loops and conditionals",
                "Functions and arrays",
                "Pointers and memory management",
                "Structures and file handling"
            ],
            toolsAndTechnologies: ["GCC", "Code::Blocks", "Turbo C"],
            learningOutcomes: [
                "Write and debug C programs",
                "Understand memory handling with pointers",
                "Use arrays and structures efficiently"
            ],
            prerequisites: "None",
            instructors: [
                { name: "Ravi Kiran", designation: "Systems Programmer", profile: "prof.png" }
            ]
        },
        {
            courseId: "LG202",
            courseName: "C++ for Problem Solving",
            courseDescription: "Go beyond the basics and learn object-oriented programming, classes, STL, and DSA fundamentals in C++.",
            coursePrice: "₹1499",
            courseDuration: "5 Weeks",
            courseLevel: "Intermediate",
            courseImage: "c++.png",
            courseSyllabus: [
                "C++ syntax refresher",
                "Classes and objects",
                "Inheritance and polymorphism",
                "STL (Vectors, Maps, Sets)",
                "Introduction to recursion & sorting algorithms",
                "Stacks, Queues, and Linked Lists"
            ],
            toolsAndTechnologies: ["G++", "Visual Studio Code", "LeetCode"],
            learningOutcomes: [
                "Develop object-oriented programs in C++",
                "Solve problems using STL",
                "Understand basic data structures"
            ],
            prerequisites: "Basic C programming knowledge",
            instructors: [
                { name: "Anusha Jain", designation: "Competitive Coding Mentor", profile: "prof.png" }
            ]
        },
        {
            courseId: "LG203",
            courseName: "Python for Beginners",
            courseDescription: "A fun and easy intro to Python programming. Covers variables, loops, functions, file handling, and more!",
            coursePrice: "Free",
            courseDuration: "3 Weeks",
            courseLevel: "Beginner",
            courseImage: "python.png",
            courseSyllabus: [
                "Python installation and syntax",
                "Data types and operators",
                "Loops and conditionals",
                "Functions and modules",
                "File handling basics",
                "Intro to error handling"
            ],
            toolsAndTechnologies: ["Python 3", "Jupyter Notebook", "IDLE"],
            learningOutcomes: [
                "Write clean Python scripts",
                "Understand functions and modules",
                "Handle basic file input/output"
            ],
            prerequisites: "None",
            instructors: [
                { name: "Neeraj Mehta", designation: "Python Developer", profile: "prof.png" }
            ]
        },
        {
            courseId: "LG204",
            courseName: "Python for Data Analysis",
            courseDescription: "Learn how to work with datasets, analyze data using Pandas and NumPy, and visualize results using Matplotlib.",
            coursePrice: "₹1599",
            courseDuration: "4 Weeks",
            courseLevel: "Intermediate",
            courseImage: "pythonda.png",
            courseSyllabus: [
                "NumPy arrays and vectorized operations",
                "Data analysis with Pandas",
                "Cleaning and preprocessing data",
                "Data visualization using Matplotlib",
                "Grouping and aggregation techniques",
                "Real-world dataset case studies"
            ],
            toolsAndTechnologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
            learningOutcomes: [
                "Analyze and clean real-world data",
                "Perform advanced data manipulation",
                "Create insightful visualizations"
            ],
            prerequisites: "Basic Python knowledge",
            instructors: [
                { name: "Shruti Rawal", designation: "Data Analyst", profile: "prof.png" }
            ]
        },
        {
            courseId: "LG205",
            courseName: "Java Programming Bootcamp",
            courseDescription: "Learn Java from scratch and understand OOP concepts, data structures, file handling, and JDBC.",
            coursePrice: "₹1699",
            courseDuration: "6 Weeks",
            courseLevel: "Intermediate",
            courseImage: "java.png",
            courseSyllabus: [
                "Java basics and setup",
                "OOP principles: inheritance, polymorphism",
                "Exception handling",
                "Collections framework",
                "File handling and I/O",
                "JDBC and MySQL integration"
            ],
            toolsAndTechnologies: ["Java", "IntelliJ IDEA", "JDK", "MySQL"],
            learningOutcomes: [
                "Write object-oriented Java applications",
                "Use collections and handle files",
                "Build DB-connected applications"
            ],
            prerequisites: "Basic programming knowledge",
            instructors: [
                { name: "Vikram Nair", designation: "Java Developer", profile: "prof.png" }
            ]
        },
        {
            courseId: "LG206",
            courseName: "JavaScript Deep Dive",
            courseDescription: "Understand advanced JS topics including closures, promises, async/await, prototypes, and ES6+ features.",
            coursePrice: "₹1299",
            courseDuration: "3 Weeks",
            courseLevel: "Intermediate",
            courseImage: "js1.png",
            courseSyllabus: [
                "Advanced functions & scope",
                "Closures and lexical environments",
                "Promises and async/await",
                "JavaScript event loop",
                "Prototypes and inheritance",
                "ES6+ features"
            ],
            toolsAndTechnologies: ["Chrome DevTools", "VS Code", "Node.js"],
            learningOutcomes: [
                "Master asynchronous programming",
                "Use modern JavaScript features",
                "Understand JS internals deeply"
            ],
            prerequisites: "Basic JavaScript",
            instructors: [
                { name: "Pooja Agarwal", designation: "Frontend Engineer", profile: "prof.png" }
            ]
        },
        {
            courseId: "LG207",
            courseName: "C# with .NET Core",
            courseDescription: "Develop Windows and web applications using C# and .NET. Covers object-oriented design and APIs.",
            coursePrice: "₹1999",
            courseDuration: "5 Weeks",
            courseLevel: "Advanced",
            courseImage: "chash.png",
            courseSyllabus: [
                "C# syntax and OOP",
                ".NET Core framework overview",
                "Building desktop apps",
                "ASP.NET Core for web development",
                "REST APIs with .NET",
                "Entity Framework and DB access"
            ],
            toolsAndTechnologies: ["C#", ".NET Core", "Visual Studio", "SQL Server"],
            learningOutcomes: [
                "Build cross-platform applications",
                "Work with REST APIs",
                "Design scalable web systems"
            ],
            prerequisites: "OOP understanding and basic C/C++/Java",
            instructors: [
                { name: "Sahil Dev", designation: "Microsoft Stack Engineer", profile: "prof.png" }
            ]
        }
    ]

}