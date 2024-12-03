import Image from 'next/image';
import wechatQrCode from '../public/wechat_qr.jpg'; // 确保路径正确

const WeChat = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-primary-text-color">
            <div className="text-center">
                <h1 className="text-accent-color text-3xl font-bold mb-6">Scan to Connect on WeChat</h1>
                <Image src={wechatQrCode} alt="WeChat QR Code" width={300} height={300} className="rounded-lg filter drop-shadow-lg" />
            </div>
        </div>
    );
};

export default WeChat;
