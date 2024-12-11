"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portrait from '../public/portrait.jpg'; // 确保这个路径正确
import '../styles/globals.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="font-bebas-neue bg-black text-primary-text-color p-4 flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/">
                    <Image src={portrait} alt="Miles Li" width={50} height={50} className="rounded-full" />
                </Link>
                <Link href="/" className="ml-4 text-white text-xl font-bold font-bebas-neue">
                    MILES LI
                </Link>
            </div>
            <div className="hidden md:flex space-x-8">
                <Link href="/about" className="hover:text-accent-color transition bebas-neue-regular">
                    ABOUT ME
                </Link>
                <Link href="/projects" className="hover:text-accent-color transition bebas-neue-regular">
                    PROJECTS
                </Link>
                <Link href="/funFact" className="hover:text-accent-color transition bebas-neue-regular">
                    FUN FACTS
                </Link>
                <Link href="/contact" className="hover:text-accent-color transition bebas-neue-regular">
                    CONTACT ME
                </Link>
            </div>
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-16 right-0 w-full bg-black text-center py-4">
                    <Link href="/about" className="block py-2 hover:text-accent-color transition">
                        ABOUT ME
                    </Link>
                    <Link href="/projects" className="block py-2 hover:text-accent-color transition">
                        PROJECTS
                    </Link>
                    <Link href="/funFact" className="block py-2 hover:text-accent-color transition">
                        FUN FACTS
                    </Link>
                    <Link href="/contact" className="block py-2 hover:text-accent-color transition">
                        CONTACT ME
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Nav;
