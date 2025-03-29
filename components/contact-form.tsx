'use client';

import React from 'react';
import SubmitBtn from './submit-btn';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        required
        aria-label="Your name"
        placeholder="Name"
        className="h-14 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        required
        aria-label="Your email"
        placeholder="Email"
        className="h-14 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        required
        aria-label="Your message"
        placeholder="Message"
        className="h-52 rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-center">
        <SubmitBtn />
      </div>
    </form>
  );
}
