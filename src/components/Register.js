import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [res, setRes] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default submission
    try {
      const response = await axios.post("http://13.48.43.63:3001/users/register/", formData);
      console.log("Form data successfully submitted!!", response.data);
      setRes("Register Successful!! :)");
      setForm({
        name: "",
        email: "",
        password: ""
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="flex justify-center items-center bg-cover bg-center bg-no-repeat bg-orange min-h-screen" style={{ backgroundImage: "url('/pexels-joyston-judah-331625-933054.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed' }} onSubmit={handleSubmit}>
      <div className="form-group dark:bg-blue bg-pink-90 bg-opacity-40 w-2/5 my-10 border-4 rounded p-5 m-3 ">
        <h1 className="font-bold text-2xl text-white text-center mb-4">Register Here!!</h1>
        <label htmlFor="name" className="text-white">Name:</label>
        <input
          className="border border-gray-300 p-2 rounded m-3 w-full"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
        /><br />

        <label htmlFor="email" className="text-white">Email:</label>
        <input
          className="border border-gray-300 p-2 rounded m-3 w-full"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        /><br />

        <label htmlFor="password" className="text-white">Password:</label>
        <input
          className="border border-gray-300 p-2 rounded m-3 w-full"
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        /><br />

        <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded w-full mt-4" type="submit">Submit</button>

        {res && (
          <p className="text-white text-center mt-2">{res}</p>
        )}

        {res && (
          <p className="text-white text-center">
            <Link to="/login" className="underline">Login here</Link>
          </p>
        )}
      </div>
    </form>
  );
}
