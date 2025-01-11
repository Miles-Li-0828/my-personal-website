import localFont from "next/font/local";
import "../styles/globals.css";

const titleFont = localFont({
    src: "./fonts/Silkscreen-Regular.ttf",
    variable: "--font-silkscreen-Regular",
    weight: "400",
});

const bodyFont = localFont({
    src: "./fonts/RussoOne-Regular.ttf",
    variable: "--font-russoone-regular",
    weight: "400",
});

// 配置 Metadata API
export const metadata = {
    title: "Miles' Cyber World",
    description: "Generated by create next app",
    icons: {
        icon: "/icon.png", // 默认 Favicon
        apple: "/icon.png", // Apple Touch Icon
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${titleFont.variable} ${bodyFont.variable} antialiased`}
                style={{
                    "--font-title": "var(--font-silkscreen-Regular)",
                    "--font-body": "var(--font-russoone-regular)",
                }}
            >
                {children}
            </body>
        </html>
    );
}
