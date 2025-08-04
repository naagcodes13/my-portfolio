"use client";

import NavigationBar from "@/components/sections/navbar";
import { HoverEffect } from "../ui/card-hover-effect";

export const projects_desc = [
  {
    title: "AI-Powered Court Crawler (Josh Software)",
    description:
      "Built an AI-assisted system using Playwright and LLMs to automate Indian High Court website navigation and extract cause lists and judgments.",
    link: "https://github.com/your-repo-link",
  },
  {
    title: "Distributed Logging System for Microservices",
    description:
      "Built a real-time logging architecture using Kafka, Elasticsearch, Fluentd, and Kibana for log aggregation and failure detection across services.",
    link: "https://github.com/naag1311/distributed-logging-system",
  },
  {
    title: "Real-time ASL Translator (Gemini 2.0 + Streamlit)",
    description:
      "Built a live ASL translator using webcam feed, Google Gemini Flash for sign detection, and TTS for dynamic audio output.",
    link: "https://github.com/your-repo-link",
  },
  {
    title: "RAG-based PDF Chatbot for Legal Q&A",
    description:
      "Created a legal Q&A chatbot using LangChain, FAISS, and OpenAI to answer user queries from PDF-based judgments and court orders.",
    link: "https://github.com/your-repo-link",
  },
  {
    title: "Candlestick Chart-Based Stock Return Predictor",
    description:
      "Used CNNs to predict stock returns from chart images generated from Tesla stock data with regression-based analysis.",
    link: "https://github.com/your-repo-link",
  },
  {
    title: "Hate Speech Recognizer",
    description:
      "Trained ML classifiers (SVC, Decision Tree, KNN) for hate speech detection on social media datasets with 90% accuracy.",
    link: "https://github.com/naag1311/ML_assignments/blob/main/hate_speech_recognition.ipynb",
  },
  {
    title: "MedictoBplus: AI-Powered Medical Chatbot",
    description:
      "Built a medical chatbot with symptom checker and BMI calculator using Flask, HTML, and NLP for intelligent responses.",
    link: "https://github.com/naag1311/medictoBplus",
  },
  {
    title: "BlogSphere: Content Aggregation and Analysis",
    description:
      "Contributed to a blog platform using Node.js, Express, and MongoDB with interactive UI and post sharing.",
    link: "https://github.com/your-repo-link",
  },
  {
    title: "Online Multiplayer Wordle-like Game",
    description:
      "Created a Python multiplayer Wordle game using Tkinter for GUI and sockets with threading for real-time gameplay.",
    link: "https://github.com/naag1311/wordle",
  },
  {
    title: "Product Cost Estimation Tool (Sansera Engineering)",
    description:
      "Developed an ML tool that estimates product costs by integrating SAP and real-time pricing data for accurate quotes.",
    link: "https://github.com/your-repo-link",
  }
];

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects_desc} />
    </div>
  );
}

export default function Projects() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black">
      {/* ✅ Navbar (Ensuring proper stacking order) */}
      <div className="relative z-20">
        <NavigationBar />
      </div>

      {/* ✅ Placeholder for future project content */}
      <div className="relative z-10 flex-1 flex justify-center items-center text-white text-3xl">
        {/* Add any future project content here */}
      </div>

      {/* ✅ CardHoverEffectDemo to show hover cards */}
      <CardHoverEffectDemo />
    </main>
  );
}
