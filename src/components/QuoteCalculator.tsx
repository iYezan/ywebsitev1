import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface QuoteFormData {
  service: string;
  users?: number;
  offices?: number;
  hours?: number;
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

const QuoteCalculator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    service: 'it-helpdesk',
    users: 1,
    offices: 1,
    hours: 1,
    name: '',
    email: '',
    phone: '',
    consent: false
  });
  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateQuote = () => {
    let total = 0;
    
    switch (formData.service) {
      case 'it-helpdesk':
        total = (formData.users || 0) * 50 + (formData.offices || 0) * 30;
        break;
      case 'web-development':
        total = (formData.hours || 0) * 20;
        break;
      case 'furniture-assembly':
        total = (formData.hours || 0) * 30;
        break;
    }

    return total;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const calculatedQuote = calculateQuote();
    setQuote(calculatedQuote);
  
    const emailData = {
      service_type: getServiceLabel(formData.service),
      users: formData.users !== undefined && formData.users !== 0 ? formData.users.toString() : "N/A",
      offices: formData.offices !== undefined && formData.offices !== 0 ? formData.offices.toString() : "N/A",
      hours: formData.hours !== undefined && formData.hours !== 0 ? formData.hours.toString() : "N/A",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      quote: calculatedQuote.toString(),
      quote_suffix: formData.service === "it-helpdesk" ? "/month" : "",
      consent: formData.consent ? "Yes" : "No"
    };
  
    try {
      // Send admin email with quote details
      await emailjs.send(
        'service_v7kvrih',
        'template_gn32osg',
        {
          subject: `New Quote Request from ${formData.name}`,
          message: `
Dear Admin,

A new quote request has been received. Here are the details:

**Service Details:**
- Service Type: ${emailData.service_type}
- Number of Users: ${emailData.users}
- Number of Offices: ${emailData.offices}
- Number of Hours: ${emailData.hours}
- Estimated Quote: £${emailData.quote}${emailData.quote_suffix}

**Customer Information:**
- Name: ${emailData.name}
- Email: ${emailData.email}
- Phone: ${emailData.phone}
- Contact User: ${formData.consent ? "YES" : "NO"}

Please follow up with the customer as soon as possible.

Best regards,
TechPro Services Team
          `,
          ...emailData
        },
        'gDPzNLH-lpydZPvkU'
      );

      // Send user confirmation email
      await emailjs.send(
        'service_v7kvrih',
        'template_lx5iw6a',
        {
          name: emailData.name,
          email: emailData.email,
          service: emailData.service_type,
          quote: emailData.quote + emailData.quote_suffix
        },
        'gDPzNLH-lpydZPvkU'
      );
  
      setShowQuote(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send quote. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };  

  const getServiceLabel = (service: string) => {
    switch (service) {
      case 'it-helpdesk':
        return 'IT Helpdesk Support';
      case 'web-development':
        return 'Website Development';
      case 'furniture-assembly':
        return 'Furniture Assembly';
      default:
        return service;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        {!showQuote ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get an Instant Quote</h2>
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#51af33] focus:ring-[#51af33]"
                    disabled={isLoading}
                  >
                    <option value="it-helpdesk">IT Helpdesk Support</option>
                    <option value="web-development">Website Development</option>
                    <option value="furniture-assembly">Furniture Assembly</option>
                  </select>
                </div>

                {formData.service === 'it-helpdesk' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Users
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.users}
                        onChange={(e) => setFormData({ ...formData, users: parseInt(e.target.value) })}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#51af33] focus:ring-[#51af33]"
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Offices
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.offices}
                        onChange={(e) => setFormData({ ...formData, offices: parseInt(e.target.value) })}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#51af33] focus:ring-[#51af33]"
                        disabled={isLoading}
                      />
                    </div>
                  </>
                )}

                {(formData.service === 'web-development' || formData.service === 'furniture-assembly') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Hours
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.hours}
                      onChange={(e) => setFormData({ ...formData, hours: parseInt(e.target.value) })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#51af33] focus:ring-[#51af33]"
                      disabled={isLoading}
                    />
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#51af33] focus:ring-[#51af33]"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#51af33] focus:ring-[#51af33]"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#51af33] focus:ring-[#51af33]"
                    disabled={isLoading}
                  />
                </div>

                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="h-4 w-4 rounded border-gray-300 text-[#51af33] focus:ring-[#51af33]"
                    />
                  </div>
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                    I consent to being contacted about my quote request via email or phone
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#51af33] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#438e2a] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Get Quote'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Quote</h2>
            <p className="text-4xl font-bold text-[#51af33] mb-4">
              £{quote} {formData.service === 'it-helpdesk' ? '/month' : ''}
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Quote Details</h3>
              <p className="text-gray-600">Service: {getServiceLabel(formData.service)}</p>
              {formData.service === 'it-helpdesk' && (
                <>
                  <p className="text-gray-600">Users: {formData.users}</p>
                  <p className="text-gray-600">Offices: {formData.offices}</p>
                </>
              )}
              {(formData.service === 'web-development' || formData.service === 'furniture-assembly') && (
                <p className="text-gray-600">Hours: {formData.hours}</p>
              )}
            </div>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! We've sent you a confirmation email with the quote details.
              {formData.consent && " Since you've consented to be contacted, our team will reach out to you shortly to discuss your requirements."}
            </p>
            <button
              onClick={onClose}
              className="bg-[#51af33] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#438e2a] transition duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteCalculator;