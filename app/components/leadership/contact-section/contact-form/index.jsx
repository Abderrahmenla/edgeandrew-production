/* eslint-disable no-unused-vars */
'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      message: event.target.elements.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    const result = await response.json();
  };

  return (
    <form
      name="contact"
      className="w-full sm:max-w-[860px]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="w-full flex items-center justify-center sm:col-span-2">
          <input
            className="w-full h-16 bg-gray_100 text-gray_custom p-3 rounded-lg"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="w-full flex items-center justify-center sm:col-span-1">
          <input
            className="w-full h-16 bg-gray_100 text-gray_custom p-3 rounded-lg"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="w-full flex items-center justify-center sm:col-span-1">
          <input
            className="w-full h-16 bg-gray_100 text-gray_custom p-3 rounded-lg"
            type="text"
            name="phone"
            placeholder="Phone"
          />
        </div>
        <div className="w-full flex items-center justify-center sm:col-span-2">
          <div className="w-full mb-0">
            <textarea
              name="message"
              className="w-full bg-gray_100 text-gray_custom p-3 rounded-lg"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div className="w-full flex items-center justify-center sm:col-span-2 text-center">
          <div className="w-full mb-0 flex items-center justify-center">
            <button
              className={' w-full sm:w-auto bg-indigo_900_ed text-white capitalizecursor-pointer font-normal not-italic md:px-10 sm:px-5 px-[46px] py-5 rounded-lg text-base flex items-center justify-center'}
              type="submit"
            >
              <span
                className={'font-normal text-lg text-white no-underline hover:text-white'}
              >
                                Submit Message
              </span>
            </button>
            {success || (failed && <span> {message} </span>)}
          </div>
        </div>
      </div>
    </form>
  );
}
