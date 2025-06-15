import React from 'react';
import Navbar from "@/components/Navbar";

const MockInterviewCoach = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto py-16 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="flex flex-col items-center gap-4 mb-4">
            <span className="inline-block text-[2.5rem]">🎯</span>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Mock Interview Coach</h1>
          </div>
          <p className="text-gray-600 text-lg mb-8">
            Practice with AI-powered interview simulations and get real-time feedback.
          </p>
          {/* Example chat UI or more content can go here */}
          <div className="text-gray-400">(Chat interface coming soon.)</div>
        </div>
      </div>
    </div>
  );
};

export default MockInterviewCoach;
