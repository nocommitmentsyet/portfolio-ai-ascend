
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import Navbar from "@/components/Navbar";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
}

const CareerCoaching = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Backend integration will happen here
    // The backend will handle the AI response and update the messages
  };

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-portfolioai-vivid-purple to-portfolioai-bright-blue">
            Career Coaching
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get personalized guidance for your career journey. Ask about skill gaps, career transitions, job search strategies, and more.
          </p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 px-4 pb-4">
          <ScrollArea ref={scrollAreaRef} className="h-[calc(100vh-300px)] w-full">
            <div className="space-y-6 p-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 mt-20">
                  <p className="text-lg mb-2">👋 Hi! I'm your AI Career Coach</p>
                  <p>Ask me anything about your career journey and I'll help guide you.</p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${message.isUser ? 'order-last' : 'order-first'}`}>
                      {!message.isUser && (
                        <div className="text-sm font-medium text-portfolioai-purple mb-2">
                          AI Coach
                        </div>
                      )}
                      <div
                        className={`rounded-lg p-4 ${
                          message.isUser
                            ? 'bg-portfolioai-purple text-white ml-auto'
                            : 'bg-gray-50 text-gray-900'
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm leading-relaxed">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Input Area */}
        <div className="border-t bg-white p-4">
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-4xl mx-auto">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What skills should I learn to move from marketing to product?"
              className="flex-1 text-sm"
              autoFocus
            />
            <Button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-portfolioai-purple hover:bg-portfolioai-vivid-purple px-4"
            >
              <Send size={16} />
              <span className="hidden sm:inline ml-2">Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerCoaching;
