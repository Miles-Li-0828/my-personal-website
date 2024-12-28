import localFont from "next/font/local";
import "../styles/globals.css";

const titleFont = localFont({
    src: "./fonts/Silkscreen-Regular.ttf",
    variable: "--font-silkscreen-Regular",
    weight: "400", // 根据字体权重调整
});

const bodyFont = localFont({
    src: "./fonts/RussoOne-Regular.ttf",
    variable: "--font-russoone-regular",
    weight: "400", // 根据字体权重调整
});


export const metadata = {
    title: "Miles Li",
    description: "Generated by create next app",
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
