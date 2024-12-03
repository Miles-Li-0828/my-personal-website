import Image from 'next/image';
import footerImage from '../public/footer.jpg'; // 确保路径正确
import wechatQrCode from '../public/wechat_qr.jpg'; // 确保二维码图片路径正确

const Footer = () => {
    return (
        <footer className="bg-black text-primary-text-color p-8">
            <div className="text-center md:text-left">
                <h2 className="text-accent-color text-2xl font-bold mb-6">CONNECT WITH ME</h2>
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:mr-8 mb-6 md:mb-0">
                        <Image src={footerImage} alt="Footer Image" width={150} height={150} className="rounded-lg filter drop-shadow-lg" />
                    </div>
                    <div>
                        <div className="flex space-x-6 mb-4">
                            <a href="https://www.instagram.com/milesli828/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram text-3xl hover:text-accent-color transition"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/yueming-miles-li/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin text-3xl hover:text-accent-color transition"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100077644104889" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook text-3xl hover:text-accent-color transition"></i>
                            </a>
                            <a href="https://github.com/Miles-Li-0828" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <i className="fab fa-github text-3xl hover:text-accent-color transition"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WeChat" onClick={(e) => {
                                e.preventDefault();
                                window.open('/wechat', '_blank');
                            }}>
                                <i className="fab fa-weixin text-3xl hover:text-accent-color transition"></i>
                            </a>
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
