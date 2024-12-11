"use client";

import Image from 'next/image';
import footerImage from '../public/footer.png'; // 确保路径正确
import '../styles/globals.css';

const Footer = () => {
    return (
        <footer className="bg-black text-primary-text-color p-8">
            <div className="text-center md:text-left">
                <h2 className="text-accent-color text-2xl font-bold mb-6">CONNECT WITH ME</h2>
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex flex-col md:flex-row items-center md:items-start md:mr-8 mb-6 md:mb-0">
                        <Image
                            src={footerImage}
                            alt="Footer Image"
                            width={180}
                            height={180}
                            className="rounded-lg filter drop-shadow-lg w-auto min-w-[150px] object-contain"
                        />

                    </div>
                    <div>
                        <div className="flex space-x-6 mb-4">
                            <button onClick={() => window.open('https://www.linkedin.com/in/yueming-miles-li/', '_blank')} aria-label="WeChat" className="focus:outline-none">
                                <Image src="/icons/LinkedInIcon.png" alt="LinkedIn" width={40} height={40} className="hover:text-accent-color transition" />
                            </button>
                            <button onClick={() => window.open('https://www.instagram.com/milesli828/', '_blank')} aria-label="WeChat" className="focus:outline-none">
                                <Image src="/icons/insIcon.png" alt="instagram" width={40} height={40} className="hover:text-accent-color transition" />
                            </button>
                            <button onClick={() => window.open('https://www.facebook.com/profile.php?id=100077644104889', '_blank')} aria-label="WeChat" className="focus:outline-none">
                                <Image src="/icons/facebookIcon.png" alt="facebook" width={40} height={40} className="hover:text-accent-color transition" />
                            </button>
                            <button onClick={() => window.open('https://github.com/Miles-Li-0828', '_blank')} aria-label="WeChat" className="focus:outline-none">
                                <Image src="/icons/githubIcon.png" alt="github" width={40} height={40} className="hover:text-accent-color transition" />
                            </button>
                            <button onClick={() => window.open('/wechat', '_blank')} aria-label="WeChat" className="focus:outline-none">
                                <Image src="/icons/WeChatIcon.png" alt="WeChat" width={40} height={40} className="hover:text-accent-color transition" />
                            </button>
                        </div>
                        <p className="text-lg">
                            No matter where you come from, whether you're a tech geek, a coffee addict, or just someone with a great meme collection—I'm always up for making a new friend. Let's connect and share some laughs!
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
