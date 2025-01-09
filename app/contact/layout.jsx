import RootLayout from '../layout'; // 引入根 layout 作为基础
import "../../styles/globals.css";

export const metadata = {
    title: "Contact Me",
    description: "Contact Me",
};

export default function WeChatLayout({ children }) {
    return (
        <RootLayout>
            {children}
        </RootLayout>
    );
}
