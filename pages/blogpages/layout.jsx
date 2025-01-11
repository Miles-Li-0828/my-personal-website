import RootLayout from '../layout'; // 引入根 layout 作为基础
import "../../styles/globals.css";

export const metadata = {
    title: "Blog",
    description: "Blog",
};

export default function WeChatLayout({ children }) {
    return (
        <RootLayout>
            {children}
        </RootLayout>
    );
}
