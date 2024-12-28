import RootLayout from '../layout'; // 引入根 layout 作为基础
import "../../styles/globals.css";

export const metadata = {
    title: "Miles' WeChat QR Code",
    description: "This is the WeChat section of the website",
};

export default function WeChatLayout({ children }) {
    return (
        <RootLayout>
            {children}
        </RootLayout>
    );
}
