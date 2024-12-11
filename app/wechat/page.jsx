import Image from 'next/image';
import '/styles/globals.css';

const WeChat = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-primary-text-color">
            <div className="text-center">
                <h1 className="text-accent-color text-3xl font-bold mb-6 text-center" >Scan to Connect on WeChat</h1>
                <Image src="/wechat_qr.jpg" alt="WeChat QR Code" width={300} height={300} className="rounded-lg filter drop-shadow-lg mx-auto" />
            </div>
        </div>
    );
};

export default WeChat;
