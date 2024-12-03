import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portrait from '../public/portrait.jpg'; // 确保这个路径正确

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-primary-text-color p-4 flex items-center justify-between">
            <div className="flex items-center">
                <Image src={portrait} alt="Miles Li" width={50} height={50} className="rounded-full" />
                <Link href="/">
                    <a className="ml-4 text-white text-xl font-bold">MILES LI</a>
                </Link>
            </div>
            <div className="hidden md:flex space-x-8">
                <Link href="/about">
                    <a className="hover:text-accent-color transition">ABOUT ME</a>
                </Link>
                <Link href="/projects">
                    <a className="hover:text-accent-color transition">PROJECTS</a>
                </Link>
                <Link href="/funFact">
                    <a className="hover:text-accent-color transition">FUN FACTS</a>
                </Link>
                <Link href="/contact">
                    <a className="hover:text-accent-color transition">CONTACT ME</a>
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
                    <Link href="/about">
                        <a className="block py-2 hover:text-accent-color transition">ABOUT ME</a>
                    </Link>
                    <Link href="/projects">
                        <a className="block py-2 hover:text-accent-color transition">PROJECTS</a>
                    </Link>
                    <Link href="/funFact">
                        <a className="block py-2 hover:text-accent-color transition">FUN FACTS</a>
                    </Link>
                    <Link href="/contact">
                        <a className="block py-2 hover:text-accent-color transition">CONTACT ME</a>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Nav;
