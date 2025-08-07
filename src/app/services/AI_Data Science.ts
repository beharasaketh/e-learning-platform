import { Injectable } from "@angular/core";
import { Courses } from "./coursesmodel";
@Injectable({
  providedIn: 'root'
})
export class Aicourse {
  aiCoursesList: Courses[] = [
    {
      courseId: "AI301",
      courseName: "Introduction to AI",
      courseDescription: "Get introduced to the world of Artificial Intelligence. Understand what AI is, how it works, and where it's applied today.",
      coursePrice: "₹799",
      courseDuration: "2 Weeks",
      courseLevel: "Beginner",
      courseImage: "introtoai.png",
      courseSyllabus: [
        "Week 1: History of AI, Real-life Applications",
        "Week 2: Basics of AI Techniques and Logic"
      ],
      toolsAndTechnologies: ["Google Teachable Machine", "Python (basics)", "YouTube AI Demos"],
      learningOutcomes: [
        "Understand what Artificial Intelligence is",
        "Recognize common applications of AI",
        "Build basic AI logic with visual tools"
      ],
      prerequisites: "Curiosity and basic computer knowledge",
      instructors: [
        {
          name: "Sai santosh",
          designation: "AI Educator",
          profile: "prof.png"
        }
      ]
    },
    {
      courseId: "AI302",
      courseName: "Machine Learning with Python",
      courseDescription: "Train models, analyze data, and build intelligent systems using sklearn, Pandas, and Jupyter Notebooks.",
      coursePrice: "₹1999",
      courseDuration: "6 Weeks",
      courseLevel: "Intermediate",
      courseImage: "mlwithpython.png",
      courseSyllabus: [
        "Week 1: Introduction to ML & Python Refresher",
        "Week 2: Supervised vs Unsupervised Learning",
        "Week 3: Pandas, Numpy, Data Preprocessing",
        "Week 4: Regression & Classification Models",
        "Week 5: Model Evaluation & Cross Validation",
        "Week 6: Mini Project"
      ],
      toolsAndTechnologies: ["Python", "Pandas", "scikit-learn", "Jupyter Notebook"],
      learningOutcomes: [
        "Build and train ML models",
        "Analyze and prepare datasets",
        "Evaluate and fine-tune your models"
      ],
      prerequisites: "Basic Python programming",
      instructors: [
        {
          name: "B G Mani Deepak",
          designation: "Data Science Lead",
          profile: "prof.png"
        }
      ]
    },
    {
      courseId: "AI303",
      courseName: "Deep Learning with TensorFlow",
      courseDescription: "Build neural networks from scratch, train deep learning models, and deploy them using TensorFlow and Keras.",
      coursePrice: "₹2499",
      courseDuration: "7 Weeks",
      courseLevel: "Advanced",
      courseImage: "dlwithtensor.png",
      courseSyllabus: [
        "Week 1: Neural Networks & Perceptrons",
        "Week 2: Activation Functions, Loss, Optimizers",
        "Week 3: TensorFlow Basics",
        "Week 4: Building CNNs",
        "Week 5: Image Classification Projects",
        "Week 6: Overfitting, Regularization",
        "Week 7: Deployment Basics"
      ],
      toolsAndTechnologies: ["TensorFlow", "Keras", "Python", "Colab"],
      learningOutcomes: [
        "Understand deep learning foundations",
        "Train CNNs for classification tasks",
        "Deploy basic deep learning models"
      ],
      prerequisites: "Basic ML and Python knowledge",
      instructors: [
        {
          name: "Shweta Patil",
          designation: "AI & Deep Learning Engineer",
          profile: "prof.png"
        }
      ]
    },
    {
      courseId: "AI304",
      courseName: "NLP: Talk to Machines",
      courseDescription: "Learn how computers understand text and language using NLP techniques like tokenization, sentiment analysis, and transformers.",
      coursePrice: "₹1899",
      courseDuration: "4 Weeks",
      courseLevel: "Advanced",
      courseImage: "nlp.png",
      courseSyllabus: [
        "Week 1: NLP Basics & Tokenization",
        "Week 2: Stemming, Lemmatization",
        "Week 3: Sentiment Analysis, TF-IDF",
        "Week 4: Intro to Transformers & BERT"
      ],
      toolsAndTechnologies: ["NLTK", "spaCy", "Hugging Face", "Python"],
      learningOutcomes: [
        "Build models to analyze text",
        "Understand NLP pipeline components",
        "Explore transformer-based models"
      ],
      prerequisites: "Python and Machine Learning basics",
      instructors: [
        {
          name: "Rahul Sen",
          designation: "NLP Specialist",
          profile: "prof.png"
        }
      ]
    },
    {
      courseId: "AI305",
      courseName: "Computer Vision Crash Course",
      courseDescription: "Build image classification and object detection models using OpenCV and CNNs. No prior experience needed!",
      coursePrice: "₹1699",
      courseDuration: "3 Weeks",
      courseLevel: "Intermediate",
      courseImage: "computervision.png",
      courseSyllabus: [
        "Week 1: OpenCV Basics, Image Preprocessing",
        "Week 2: CNN Fundamentals, Image Classification",
        "Week 3: Object Detection & Mini Project"
      ],
      toolsAndTechnologies: ["OpenCV", "TensorFlow", "Python"],
      learningOutcomes: [
        "Work with images using OpenCV",
        "Train CNNs for classification",
        "Understand object detection basics"
      ],
      prerequisites: "Basic Python programming",
      instructors: [
        {
          name: "Divya S",
          designation: "Computer Vision Trainer",
          profile: "prof.png"
        }
      ]
    },
    {
      courseId: "AI306",
      courseName: "AI in Real Life",
      courseDescription: "Understand how AI is transforming healthcare, agriculture, education, and entertainment — explained in simple terms.",
      coursePrice: "₹999",
      courseDuration: "2 Weeks",
      courseLevel: "Beginner",
      courseImage: "aiinreal.png.png",
      courseSyllabus: [
        "Week 1: AI in Healthcare & Education",
        "Week 2: AI in Agriculture & Entertainment"
      ],
      toolsAndTechnologies: ["Case Studies", "Videos", "Demos"],
      learningOutcomes: [
        "Explore real-world applications of AI",
        "Understand domain-specific use cases",
        "Get inspired to pursue AI projects"
      ],
      prerequisites: "No technical background required",
      instructors: [
        {
          name: "Sneha Das",
          designation: "AI Outreach Educator",
          profile: "prof.png"
        }
      ]
    },
    {
      courseId: "AI307",
      courseName: "Generative AI Basics",
      courseDescription: "Explore how tools like ChatGPT, DALL·E, and generative AI models work. Learn prompt engineering and basic use cases.",
      coursePrice: "₹1499",
      courseDuration: "2 Weeks",
      courseLevel: "Intermediate",
      courseImage: "genaibasics.png",
      courseSyllabus: [
        "Week 1: What is Generative AI, Use Cases",
        "Week 2: Prompt Engineering, ChatGPT, DALL·E"
      ],
      toolsAndTechnologies: ["ChatGPT", "DALL·E", "Prompt Tools", "OpenAI APIs"],
      learningOutcomes: [
        "Understand how generative AI models work",
        "Use ChatGPT and DALL·E for creative tasks",
        "Master prompt writing basics"
      ],
      prerequisites: "Basic curiosity and internet access",
      instructors: [
        {
          name: "B Saketh",
          designation: "Creative AI Instructor",
          profile: "saketh.png"
        }
      ]
    }
  ]


}