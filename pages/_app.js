import "../styles/globals.css";
import localFont from "next/font/local";
import Head from "next/head"; // 引入 Head 组件

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

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icon.png" /> {/* 全局设置 Favicon */}
                <link rel="apple-touch-icon" href="/icon.png" /> {/* Apple 图标 */}
                <title>Miles' Blogs</title> {/* 默认标题 */}
            </Head>
            <div
                className={`${titleFont.variable} ${bodyFont.variable}`}
                style={{
                    "--font-title": "var(--font-silkscreen-Regular)",
                    "--font-body": "var(--font-russoone-regular)",
                }}
            >
                <Component {...pageProps} />
            </div>
        </>
    );
}
