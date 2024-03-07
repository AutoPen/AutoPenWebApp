import React, { useState } from 'react';

function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send form data to backend or display a confirmation message
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // You can add your form submission logic here
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, please feel free to contact us using the form below:</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUsPage;