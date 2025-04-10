import React from 'react';
import { Download, Share2, Gift } from 'lucide-react';

const documents = [
  {
    name: 'Business License Certificate',
    type: 'PDF',
    size: '2.4 MB',
    status: 'Ready'
  },
  {
    name: 'Trade Registration Document',
    type: 'PDF',
    size: '1.8 MB',
    status: 'Ready'
  },
  {
    name: 'Immigration Card',
    type: 'PDF',
    size: '1.2 MB',
    status: 'Ready'
  },
  {
    name: 'Establishment Card',
    type: 'PDF',
    size: '890 KB',
    status: 'Ready'
  },
  {
    name: 'Share Certificate',
    type: 'PDF',
    size: '1.5 MB',
    status: 'Ready'
  },
  {
    name: 'Office Lease Agreement',
    type: 'PDF',
    size: '3.2 MB',
    status: 'Ready'
  }
];

function Documents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-24">
      <div className="max-w-6xl mx-auto pt-12 px-4">
        {/* Congratulations Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Share2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Congratulations on Your Freezone Setup!
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your business is now officially registered in Dubai South Freezone. 
            Below you'll find all your important documents ready for download.
          </p>
        </div>

        {/* Documents Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Documents</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Document Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documents.map((doc, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {doc.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 flex items-center justify-end gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Refer and Earn Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Refer & Earn Program</h2>
              <p className="text-indigo-100 mb-6">
                Refer your business partners to Dubai South Freezone and earn rewards 
                for each successful registration. Get up to AED 5,000 for each referral!
              </p>
              <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Start Referring
              </button>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <Gift className="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents;