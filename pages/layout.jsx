import "../styles/globals.css";
import localFont from "next/font/local";

const titleFont = localFont({
    src: "/fonts/Silkscreen-Regular.ttf",
    variable: "--font-silkscreen-Regular",
    weight: "400",
});

const bodyFont = localFont({
    src: "/fonts/RussoOne-Regular.ttf",
    variable: "--font-russoone-regular",
    weight: "400",
});

export default function Layout({ children }) {
    return (
        <div
            className={`${titleFont.variable} ${bodyFont.variable}`}
            style={{
                "--font-title": "var(--font-silkscreen-Regular)",
                "--font-body": "var(--font-russoone-regular)",
            }}
        >
            {children}
        </div>
    );
}
