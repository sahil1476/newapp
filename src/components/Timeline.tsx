import React, { useState } from 'react';
import { 
  ClipboardList, 
  FileCheck, 
  Building, 
  UserCheck, 
  Briefcase, 
  CheckCircle,
  MessageCircle,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const timelineSteps = [
  {
    title: 'Initial Application',
    description: 'Submit your application form with required documents',
    icon: ClipboardList,
    status: 'completed'
  },
  {
    title: 'Document Verification',
    description: 'Review and verification of submitted documents',
    icon: FileCheck,
    status: 'completed'
  },
  {
    title: 'Location Selection',
    description: 'Choose your preferred location in the freezone',
    icon: Building,
    status: 'current'
  },
  {
    title: 'Registration Approval',
    description: 'Official approval of your freezone registration',
    icon: UserCheck,
    status: 'upcoming'
  },
  {
    title: 'License Issuance',
    description: 'Issuance of your freezone business license',
    icon: Briefcase,
    status: 'upcoming'
  },
  {
    title: 'Setup Complete',
    description: 'Your freezone company is ready to operate',
    icon: CheckCircle,
    status: 'upcoming'
  }
];

const companyDetails = {
  name: "Tech Innovation FZE",
  type: "Free Zone Establishment",
  activity: "Technology Services & Consulting",
  manager: "John Smith",
  email: "info@techinnovation.fze",
  phone: "+971 4 123 4567",
  address: "Dubai South Business Park, Building A4",
  license: "DSB-2025-12345",
  employees: "5-10",
  investment: "AED 500,000"
};

function Timeline() {
  const completedSteps = timelineSteps.filter(step => step.status === 'completed').length;
  const progress = (completedSteps / timelineSteps.length) * 100;

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (accepted: boolean) => {
    if (accepted) {
      setIsVerified(true);
      setShowDetailsPopup(false);
    } else {
      setShowCommentForm(true);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCommentForm(false);
    setShowDetailsPopup(false);
    setComment('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-24">
      <div className="max-w-6xl mx-auto pt-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Dubai South Freezone Setup Process
        </h1>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-center text-gray-600 mb-12">
          Progress: {completedSteps} of {timelineSteps.length} steps completed ({Math.round(progress)}%)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Timeline connector lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 hidden lg:block" />
          
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 relative"
              >
                {/* Connector dots */}
                {index < timelineSteps.length - 1 && (
                  <div className="absolute right-0 top-1/2 w-8 h-0.5 bg-gray-200 -mr-8 hidden lg:block" />
                )}
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center mb-4
                  ${step.status === 'completed' ? 'bg-green-100 text-green-600' :
                    step.status === 'current' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'}
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className={`
                    px-3 py-1 rounded-full text-sm
                    ${step.status === 'completed' ? 'bg-green-100 text-green-800' :
                      step.status === 'current' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'}
                  `}>
                    {step.status.charAt(0).toUpperCase() + step.status.slice(1)}
                  </span>
                  {index === 1 && (
                    <button
                      onClick={() => setShowDetailsPopup(true)}
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Documents Link */}
        <div className="text-center mt-8">
          <Link 
            to="/documents" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View Company Documents
          </Link>
        </div>
      </div>

      {/* Company Details Popup */}
      {showDetailsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl w-full relative">
            <button
              onClick={() => setShowDetailsPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {Object.entries(companyDetails).map(([key, value]) => (
                <div key={key}>
                  <p className="text-sm text-gray-500 capitalize">{key.replace('_', ' ')}</p>
                  <p className="font-medium text-gray-900">{value}</p>
                </div>
              ))}
            </div>

            {!showCommentForm ? (
              <div className="flex space-x-4">
                <button
                  onClick={() => handleVerification(true)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleVerification(false)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            ) : (
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    Please provide your reason for rejection
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                  Submit Comment
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Chatbot Icon */}
      <div 
        className="fixed bottom-24 right-8 cursor-pointer"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <div className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
          <MessageCircle className="w-6 h-6" />
        </div>
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Freezone Assistant</h3>
            <p className="text-gray-600 text-sm mb-2">How can I help you with your freezone setup?</p>
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Dubai South Freezone. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/license" className="text-gray-600 hover:text-indigo-600 text-sm">License Renewal</Link>
              <Link to="/documents" className="text-gray-600 hover:text-indigo-600 text-sm">Documents</Link>
              <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Timeline;