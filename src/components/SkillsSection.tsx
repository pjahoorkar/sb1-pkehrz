import React from 'react';
import { Brain, BarChart, Users, Lightbulb, Target, Workflow } from 'lucide-react';

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function SkillCard({ icon: Icon, title, description }: SkillCardProps) {
  return (
    <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function SkillsSection() {
  const skills = [
    {
      icon: Brain,
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies using advanced AI-driven market analysis and trend forecasting."
    },
    {
      icon: BarChart,
      title: "Financial Analysis",
      description: "Generate detailed financial insights, optimize resource allocation, and identify growth opportunities."
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Enhance team productivity through AI-powered workflow optimization and performance analytics."
    },
    {
      icon: Lightbulb,
      title: "Innovation Pipeline",
      description: "Identify emerging market opportunities and guide product development with data-driven insights."
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Proactively identify and mitigate business risks using predictive modeling and scenario analysis."
    },
    {
      icon: Workflow,
      title: "Process Optimization",
      description: "Streamline operations and improve efficiency through intelligent automation and workflow analysis."
    }
  ];

  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Don't hire. Add{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            superpowers
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Cosmos brings executive-level expertise to your fingertips, empowering your business with AI-driven insights and strategic guidance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}