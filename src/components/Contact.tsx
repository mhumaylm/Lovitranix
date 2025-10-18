import React, { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace this with your actual Formspree form URL
  const FORMSPREE_URL = "https://formspree.io/f/xyznndad";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Contact us today to learn how we can help your business get discovered 
              on Google Search and Maps. Our team is ready to answer your questions 
              and get you started.
            </p>
            
            {/* CONTACT DETAILS SECTION REMOVED */}
          </div>
          
          <div className="contact-form">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="form-success" style={{
                background: '#d4edda',
                color: '#155724',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #c3e6cb'
              }}>
                ✅ Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="form-error" style={{
                background: '#f8d7da',
                color: '#721c24',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #f5c6cb'
              }}>
                ❌ There was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="business">Business Name</label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="form-control"
                  placeholder="Enter your business name"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">How Can We Help? *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={4}
                  placeholder="Tell us about your business and goals"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn" 
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span style={{marginRight: '8px'}}>⏳</span>
                    SENDING...
                  </>
                ) : (
                  <>
                    <span style={{marginRight: '8px'}}>📨</span>
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;