import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    // 👇 ඔයාගේ EmailJS Keys මෙතන දාන්න
    const SERVICE_ID = 'service_uqwjr12';        // පියවර 2
    const TEMPLATE_ID = 'template_07lgexa';      // පියවර 3 (portfolio_contact)
    const REPLY_TEMPLATE_ID = 'template_gdn9x5t'; // පියවර 4 (thank_you_reply)
    const PUBLIC_KEY = '85cNm3Q0Wdbmlx3kd';           // පියවර 5

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // 1. Email එක ඔයාට යවන්න
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            };

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            // 2. Auto-reply එක sender ට යවන්න (Thank you)
            const replyParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            };

            await emailjs.send(SERVICE_ID, REPLY_TEMPLATE_ID, replyParams, PUBLIC_KEY);

            // Success
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);

        } catch (error) {
            console.error('Email error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">
                    Get In <span>Touch</span>
                </h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-icon"><FiMail /></div>
                            <div className="contact-detail">
                                <h4>Email Me</h4>
                                <p>hashenliyanaarachchi03@email.com</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-icon"><FiPhone /></div>
                            <div className="contact-detail">
                                <h4>Call Me</h4>
                                <p>+94 72 175 6177</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className="contact-icon"><FiMapPin /></div>
                            <div className="contact-detail">
                                <h4>Location</h4>
                                <p>Colombo, Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                        <div className="form-group">
              <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
              />
                        </div>
                        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                            <FiSend size={16} />
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p style={{ color: '#4ade80', marginTop: '1rem', textAlign: 'center' }}>
                                ✓ Message sent! You will receive a confirmation email shortly.
                            </p>
                        )}

                        {status === 'error' && (
                            <p style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center' }}>
                                ✗ Error sending message. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;