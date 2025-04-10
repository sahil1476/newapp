import React, { useState, useEffect } from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

function LicenseRenewal() {
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [showRenewalPopup, setShowRenewalPopup] = useState(false);

  useEffect(() => {
    // Set license expiry date (example: 45 days from now)
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 45); // For demo purposes, set to 45 days

    const calculateDaysRemaining = () => {
      const today = new Date();
      const timeDiff = expiryDate.getTime() - today.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysRemaining(daysDiff);

      if (daysDiff <= 60 && !showRenewalPopup) {
        setShowRenewalPopup(true);
      }
    };

    calculateDaysRemaining();
    const timer = setInterval(calculateDaysRemaining, 86400000); // Update every 24 hours

    return () => clearInterval(timer);
  }, []);

  const handleRenewalResponse = (accepted: boolean) => {
    if (accepted) {
      // Handle renewal acceptance
      alert('Thank you for choosing to renew. Our team will contact you shortly.');
    }
    setShowRenewalPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-24">
      <div className="max-w-4xl mx-auto pt-12 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Calendar className="w-12 h-12 text-indigo-600 mr-4" />
            <h1 className="text-3xl font-bold text-gray-900">License Status</h1>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-indigo-600 mb-2">
              {daysRemaining}
            </div>
            <div className="text-xl text-gray-600">Days Remaining</div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">License Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">License Type</p>
                <p className="font-semibold">Commercial License</p>
              </div>
              <div>
                <p className="text-gray-600">Issue Date</p>
                <p className="font-semibold">January 1, 2024</p>
              </div>
              <div>
                <p className="text-gray-600">Expiry Date</p>
                <p className="font-semibold">December 31, 2024</p>
              </div>
              <div>
                <p className="text-gray-600">Status</p>
                <p className="font-semibold text-green-600">Active</p>
              </div>
            </div>
          </div>

          {daysRemaining <= 60 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
                <p className="text-yellow-700">
                  Your license will expire soon. Consider renewing to avoid any business disruptions.
                </p>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowRenewalPopup(true)}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Renew License
          </button>
        </div>
      </div>

      {/* Renewal Popup */}
      {showRenewalPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">License Renewal</h2>
            <p className="text-gray-600 mb-6">
              Your license will expire in {daysRemaining} days. Would you like to proceed with the renewal process?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleRenewalResponse(true)}
                className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                Accept
              </button>
              <button
                onClick={() => handleRenewalResponse(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LicenseRenewal;