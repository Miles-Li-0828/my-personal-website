"use client";

import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";

const BlogsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const blogs = [
        { id: "1", title: "The Battle Within: Grappling with a Life-Changing Choice", description: "Description 1", date: "2025-01-10", image: "/blog/1.jpg" },

        // Add more blogs here
    ];

    const filteredBlogs = blogs.filter(
        (blog) =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen bg-black text-primary-text-color">
            <header>
                <Nav />
            </header>
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4 text-center">Blogs</h1>
                <p className="text-center text-gray-500 mb-6">Find my latest thoughts and updates here!</p>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-black"
                    />
                </div>
                <div className="grid gap-6">
                    {filteredBlogs.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default BlogsPage;
