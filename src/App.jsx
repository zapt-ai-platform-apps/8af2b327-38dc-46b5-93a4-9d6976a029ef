import React from 'react';

const subjects = [
  { 
    name: "Maths",
    topics: ["Addition", "Subtraction", "Multiplication", "Division"]
  },
  { 
    name: "English", 
    topics: ["Verbs", "Nouns", "Prepositions", "Adjectives", "Sentences"]
  },
  { 
    name: "Science",
    topics: ["Plants", "Fossils", "Separating Mixtures", "Shadows", "Important Organs", "Alive or Not Alive"]
  }
];

function SubjectCard({ subject }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{subject.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        {subject.topics.map((topic, index) => (
          <div key={index} className="bg-gray-100 px-4 py-2 rounded-md">
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Learning Subjects
        </h1>
        <div className="space-y-6">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      </div>
      <div className="text-center mt-8 text-gray-600">
        Made on <a href="https://www.zapt.ai" className="font-semibold hover:text-indigo-600">ZAPT</a>
      </div>
    </div>
  );
}