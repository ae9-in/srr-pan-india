import React, { useState, useEffect } from 'react';

export default function EnquiryForm({ prefilledProduct, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    gst: '',
    volume: '',
    product: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
        product: prefilledProduct
      }));
      
      // Scroll to form if a product is selected
      const formElement = document.getElementById('enquiry-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [prefilledProduct]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.businessName.trim()) newErrors.businessName = 'Business Name is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact Person is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.product) newErrors.product = 'Please select a product of interest';
    if (!formData.volume) newErrors.volume = 'Please select a monthly volume';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newEnquiry = {
      ...formData,
      id: Date.now(),
      status: 'Pending',
      date: new Date().toISOString()
    };
    
    const existingEnquiries = JSON.parse(localStorage.getItem('srr_enquiries') || '[]');
    localStorage.setItem('srr_enquiries', JSON.stringify([newEnquiry, ...existingEnquiries]));

    setSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    }
  };

  return (
    <section id="enquiry-form" className="w-full bg-surface-container-low py-section-padding-desktop fade-in-section">
      <div className="max-w-3xl mx-auto px-gutter">
        <div className="bg-surface p-8 md:p-12 rounded-2xl shadow-lg border border-outline-variant transition-all duration-500">
          
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto text-on-primary">
                <i className="ph-fill ph-check-circle text-5xl"></i>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Thank You, Partner!</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
                Your B2B wholesale enquiry has been received. Our dedicated team will get in touch with you within 24 hours.
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    businessName: '',
                    contactPerson: '',
                    phone: '',
                    gst: '',
                    volume: '',
                    product: ''
                  });
                }}
                className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Request Wholesale Pricing</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Fill out the form below and our B2B team will contact you within 24 hours.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Business Name */}
                  <div className="flex flex-col">
                    <label htmlFor="businessName" className="mb-2 text-on-surface-variant text-xs font-label-md uppercase tracking-wider">
                      Business Name *
                    </label>
                    <input 
                      type="text" 
                      id="businessName" 
                      placeholder="e.g. Heritage Spiritual Stores" 
                      value={formData.businessName}
                      onChange={handleChange}
                      className={`w-full bg-surface border ${errors.businessName ? 'border-error' : 'border-outline-variant'} rounded-lg px-4 py-3.5 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all`}
                    />
                    {errors.businessName && <span className="text-error text-xs mt-1">{errors.businessName}</span>}
                  </div>

                  {/* Contact Person */}
                  <div className="flex flex-col">
                    <label htmlFor="contactPerson" className="mb-2 text-on-surface-variant text-xs font-label-md uppercase tracking-wider">
                      Contact Person *
                    </label>
                    <input 
                      type="text" 
                      id="contactPerson" 
                      placeholder="e.g. Rajesh Kumar" 
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={`w-full bg-surface border ${errors.contactPerson ? 'border-error' : 'border-outline-variant'} rounded-lg px-4 py-3.5 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all`}
                    />
                    {errors.contactPerson && <span className="text-error text-xs mt-1">{errors.contactPerson}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="mb-2 text-on-surface-variant text-xs font-label-md uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="e.g. +91 98765 43210" 
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-surface border ${errors.phone ? 'border-error' : 'border-outline-variant'} rounded-lg px-4 py-3.5 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all`}
                    />
                    {errors.phone && <span className="text-error text-xs mt-1">{errors.phone}</span>}
                  </div>

                  {/* GST Number */}
                  <div className="flex flex-col">
                    <label htmlFor="gst" className="mb-2 text-on-surface-variant text-xs font-label-md uppercase tracking-wider">
                      GST Number (Optional)
                    </label>
                    <input 
                      type="text" 
                      id="gst" 
                      placeholder="e.g. 29AAAAA1111A1Z1" 
                      value={formData.gst}
                      onChange={handleChange}
                      className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3.5 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  {/* Product Interest */}
                  <div className="flex flex-col">
                    <label htmlFor="product" className="mb-2 text-on-surface-variant text-xs font-label-md uppercase tracking-wider">
                      Product Interest *
                    </label>
                    <div className="relative">
                      <select 
                        id="product" 
                        value={formData.product}
                        onChange={handleChange}
                        className={`w-full bg-surface border ${errors.product ? 'border-error' : 'border-outline-variant'} rounded-lg px-4 py-3.5 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none appearance-none transition-all`}
                      >
                        <option value="" disabled>Select Product of Interest</option>
                        <option value="Pure Camphor (Kapur)">Pure Camphor (Kapur)</option>
                        <option value="Premium Agarbatti">Premium Agarbatti</option>
                        <option value="Sambrani & Dhoop">Sambrani & Dhoop</option>
                        <option value="Pooja Oil & Diyas">Pooja Oil & Diyas</option>
                        <option value="Kumkum & Haldi">Kumkum & Haldi</option>
                        <option value="Cotton Wicks">Cotton Wicks</option>
                        <option value="Wholesale Packs">Wholesale Packs</option>
                        <option value="Price List & Brochure Request">Price List & Brochure Request</option>
                        <option value="Dealer Program Enrollment">Dealer Program Enrollment</option>
                        <option value="General Wholesale Inquiry">General Wholesale Inquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                        <i className="ph ph-caret-down"></i>
                      </div>
                    </div>
                    {errors.product && <span className="text-error text-xs mt-1">{errors.product}</span>}
                  </div>

                  {/* Monthly Volume */}
                  <div className="flex flex-col">
                    <label htmlFor="volume" className="mb-2 text-on-surface-variant text-xs font-label-md uppercase tracking-wider">
                      Monthly Requirement *
                    </label>
                    <div className="relative">
                      <select 
                        id="volume" 
                        value={formData.volume}
                        onChange={handleChange}
                        className={`w-full bg-surface border ${errors.volume ? 'border-error' : 'border-outline-variant'} rounded-lg px-4 py-3.5 text-on-surface focus:ring-1 focus:ring-primary focus:border-primary outline-none appearance-none transition-all`}
                      >
                        <option value="" disabled>Select Monthly Volume</option>
                        <option value="small">Up to ₹50,000</option>
                        <option value="medium">₹50,000 - ₹2,00,000</option>
                        <option value="large">Over ₹2,00,000</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                        <i className="ph ph-caret-down"></i>
                      </div>
                    </div>
                    {errors.volume && <span className="text-error text-xs mt-1">{errors.volume}</span>}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md mt-4"
                >
                  Submit Enquiry
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
