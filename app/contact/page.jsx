"use client"; // 必须放在文件顶部

import Nav from '../../components/Nav'; // 导入导航栏组件
import Footer from '../../components/Footer'; // 导入页脚组件
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setStatus("Please enter a valid email address.");
            return;
        }

        if (!formData.name || !formData.message) {
            setStatus("All fields are required.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(result.error || "Something went wrong.");
            }
        } catch (error) {
            setStatus("Failed to send message.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-primary-text-color">
            <header>
                <Nav />
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-center text-3xl font-bold mb-8">Contact Me (´･ω･`)</h1>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 bg-slate-300">Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 text-black focus:outline-none focus:ring focus:ring-blue-200 bg-slate-100"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 bg-slate-300">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 text-black focus:outline-none focus:ring focus:ring-blue-200 bg-slate-100"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 bg-slate-300">Message *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 text-black focus:outline-none focus:ring focus:ring-blue-200 bg-slate-100"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none"
                    >
                        Send Message
                    </button>
                    {status && <p className="text-center text-red-500 mt-4">{status}</p>}
                </form>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default ContactPage;
