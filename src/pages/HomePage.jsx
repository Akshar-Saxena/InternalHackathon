import React from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";

export default function HomePage() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        education: "",
        phoneNumber: "",
        occupation: "",
        sector: "",
        casteCategory: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        // Add logic to handle form submission (e.g., send data to server or perform validation)
        console.log(formData);
    };

    return (
        <div>
            <NavBar />
            <div className="relative">
                <img className="w-full" src="./back.png" alt="" />
            </div>
            <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">
                    Scheme Government Form
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-semibold mb-2"
                            htmlFor="name"
                        >
                            Name:
                            <input
                                className="w-full border rounded-md px-3 py-2 mt-1"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-semibold mb-2"
                            htmlFor="age"
                        >
                            Phone Number:
                            <input
                                className="w-full border rounded-md px-3 py-2 mt-1"
                                type="text"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-semibold mb-2"
                            htmlFor="phoneNumber"
                        >
                            Age:
                            <input
                                className="w-full border rounded-md px-3 py-2 mt-1"
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-semibold mb-2"
                            htmlFor="education"
                        >
                            Education:
                            <input
                                className="w-full border rounded-md px-3 py-2 mt-1"
                                type="text"
                                id="education"
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-semibold mb-2"
                            htmlFor="gender"
                        >
                            Gender:
                            <select
                                className="w-full border rounded-md px-3 py-2 mt-1"
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-semibold mb-2"
                            htmlFor="Occupation"
                        >
                            Occupation:
                            <select
                                className="w-full border rounded-md px-3 py-2 mt-1"
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                            >
                                <option value="">Select Occupation</option>
                                <option value="og">Organized</option>
                                <option value="uog">Un-Organized</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-semibold mb-2"
                            htmlFor="caste"
                        >
                            Occupation:
                            <select
                                className="w-full border rounded-md px-3 py-2 mt-1"
                                id="casteCategory"
                                name="casteCategory"
                                value={formData.casteCategory}
                                onChange={handleChange}
                            >
                                <option value="">Select Caste Category</option>
                                <option value="general">General</option>
                                <option value="obc">OBC</option>
                                <option value="sc">SC</option>
                                <option value="st">ST</option>
                            </select>
                        </label>
                    </div>
                    {/* Repeat the above structure for other form fields */}
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
