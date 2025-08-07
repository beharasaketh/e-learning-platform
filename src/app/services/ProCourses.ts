import { Injectable } from "@angular/core";
import { Courses } from "./coursesmodel";
@Injectable({
  providedIn: 'root'
})
export class ProCourses {
  proCoursesList: Courses[] = [
    {
      courseId: "PR401",
      courseName: "Mastering DSA with C++",
      courseDescription: "Deep dive into all major data structures and algorithms. Focused on placement preparation and logical thinking.",
      coursePrice: "₹2999",
      courseDuration: "8 Weeks",
      courseLevel: "Advanced",
      courseImage: "dsachash.png",
      courseSyllabus: [
        "Arrays, Strings, and Pointers",
        "Stacks, Queues, Linked Lists",
        "Trees, Graphs, and Hash Maps",
        "Recursion and Backtracking",
        "Greedy, Divide & Conquer, DP",
        "Practice with Leetcode and GFG"
      ],
      toolsAndTechnologies: ["C++", "STL", "LeetCode", "GFG", "VS Code"],
      learningOutcomes: [
        "Strong grasp of all core DSA topics",
        "Able to solve medium-to-hard coding problems",
        "Ready for tech interviews"
      ],
      prerequisites: "Basic knowledge of C++ and loops",
      instructors: [
        { name: "Amit Raghav", designation: "Senior Instructor - DSA", profile: "prof.jpg" }
      ]
    },
    {
      courseId: "PR402",
      courseName: "System Design for Developers",
      courseDescription: "Learn how to design scalable systems and backend architecture for real-world applications like Netflix, Uber, etc.",
      coursePrice: "₹3499",
      courseDuration: "6 Weeks",
      courseLevel: "Advanced",
      courseImage: "sd.png",
      courseSyllabus: [
        "Scalability, Load Balancing, and Caching",
        "Database Sharding and Consistency Models",
        "High-Level Designs of Real Apps",
        "CAP Theorem, Microservices, API Gateways"
      ],
      toolsAndTechnologies: ["PostgreSQL", "Redis", "Kafka", "Docker", "AWS"],
      learningOutcomes: [
        "Understand trade-offs in scalable systems",
        "Able to create high-level designs for interviews",
        "Prepared for LLD/HLD system design rounds"
      ],
      prerequisites: "Knowledge of backend development and APIs",
      instructors: [
        { name: "Sonal Jain", designation: "System Architect", profile: "prof.jpg" }
      ]
    },
    {
      courseId: "PR403",
      courseName: "Build a Startup Website",
      courseDescription: "Learn how to build a professional website for a real startup. Includes Figma design, full-stack dev, and deployment.",
      coursePrice: "₹2599",
      courseDuration: "5 Weeks",
      courseLevel: "Advanced",
      courseImage: "portfolio.png",
      courseSyllabus: [
        "Figma UI/UX Design",
        "Frontend using React/Angular",
        "Backend with Node.js & MongoDB",
        "Hosting on Vercel or Netlify"
      ],
      toolsAndTechnologies: ["Figma", "React", "Node.js", "MongoDB", "Netlify"],
      learningOutcomes: [
        "Design and develop a complete startup site",
        "Understand full-stack project lifecycle",
        "Deploy live production-ready apps"
      ],
      prerequisites: "Basic knowledge of frontend and backend",
      instructors: [
        { name: "Niharika Mehta", designation: "UI Engineer & Mentor", profile: "prof.jpg" }
      ]
    },
    {
      courseId: "PR404",
      courseName: "Competitive Coding Guide",
      courseDescription: "Master programming for competitive coding platforms like Codeforces, Leetcode, and CodeChef.",
      coursePrice: "₹1499",
      courseDuration: "4 Weeks",
      courseLevel: "Advanced",
      courseImage: "ccg.png",
      courseSyllabus: [
        "Time and Space Complexity",
        "Advanced Recursion, Bitmasking",
        "DP Tricks, Graph Problems",
        "Live contests and weekly leaderboards"
      ],
      toolsAndTechnologies: ["C++", "Python", "Codeforces", "CodeChef"],
      learningOutcomes: [
        "Able to crack online rounds",
        "Understand optimal logic building techniques",
        "Participate in and win coding contests"
      ],
      prerequisites: "Comfortable with basic programming logic",
      instructors: [
        { name: "Karthik Sharma", designation: "Competitive Programming Coach", profile: "prof.jpg" }
      ]
    },
    {
      courseId: "PR405",
      courseName: "AI Projects Bootcamp",
      courseDescription: "A hands-on bootcamp to build 3 AI projects: Chatbot, Image Classifier, and Language Translator using Python and TensorFlow.",
      coursePrice: "₹2999",
      courseDuration: "6 Weeks",
      courseLevel: "Advanced",
      courseImage: "aiboot.png",
      courseSyllabus: [
        "AI Basics and TensorFlow Introduction",
        "NLP and Chatbot Building",
        "Image Classification with CNNs",
        "Building a Translator using Seq2Seq"
      ],
      toolsAndTechnologies: ["Python", "TensorFlow", "Keras", "Jupyter", "Google Colab"],
      learningOutcomes: [
        "Hands-on AI project building experience",
        "Understand key AI/ML concepts",
        "Build a portfolio of AI projects"
      ],
      prerequisites: "Python and basic ML knowledge",
      instructors: [
        { name: "Dr. Ananya Rao", designation: "AI Research Mentor", profile: "prof.jpg" }
      ]
    },
    {
      courseId: "PR406",
      courseName: "Web 3.0 & Blockchain Basics",
      courseDescription: "Understand how Web 3.0 and blockchain works. Build basic decentralized applications (DApps) using Solidity.",
      coursePrice: "₹1899",
      courseDuration: "4 Weeks",
      courseLevel: "Advanced",
      courseImage: "blockchain.png",
      courseSyllabus: [
        "Blockchain Fundamentals",
        "Smart Contracts with Solidity",
        "Ethereum and Metamask Integration",
        "Build & Deploy a DApp"
      ],
      toolsAndTechnologies: ["Solidity", "Ethereum", "Remix IDE", "MetaMask"],
      learningOutcomes: [
        "Understand how blockchain and crypto apps work",
        "Deploy your own smart contracts",
        "Build basic Web3 applications"
      ],
      prerequisites: "Basic web development and JS",
      instructors: [
        { name: "Rahul Krishnan", designation: "Blockchain Developer", profile: "prof.jpg" }
      ]
    },
    {
      courseId: "PR407",
      courseName: "Ethical Hacking for Beginners",
      courseDescription: "Understand network security, penetration testing, tools like Kali Linux, and how ethical hacking works.",
      coursePrice: "₹2299",
      courseDuration: "5 Weeks",
      courseLevel: "Advanced",
      courseImage: "ethicalhacking.png",
      courseSyllabus: [
        "Introduction to Cyber Security",
        "Footprinting, Scanning, and Enumeration",
        "Network Sniffing & SQL Injection",
        "Kali Linux, Wireshark & Password Cracking"
      ],
      toolsAndTechnologies: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite"],
      learningOutcomes: [
        "Perform basic ethical hacking operations",
        "Familiar with hacking tools and attack methods",
        "Understand legal and ethical boundaries"
      ],
      prerequisites: "Basic computer networking knowledge",
      instructors: [
        { name: "Zoya Siddiqui", designation: "Cybersecurity Trainer", profile: "zoya_hack.jpg" }
      ]
    }
  ]



}