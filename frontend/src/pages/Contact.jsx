import React from "react";

export default function Contact() {
  return (
    <div className="mx-auto max-w-md p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
