import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import Head from "next/head"; // 导入 Head 组件
import "../../styles/globals.css";
import path from "path";
import fs from "fs";

export async function getStaticPaths() {
    const contentDir = path.join(process.cwd(), "pages/blog/content");
    const files = fs.readdirSync(contentDir);

    const paths = files.map((file) => ({
        params: { id: file.replace(".html", "") },
    }));

    console.log("Generated Paths:", paths);

    return { paths, fallback: true }; // 保持 fallback 为 true
}

export async function getStaticProps({ params }) {
    const contentDir = path.join(process.cwd(), "pages/blog/content");
    const content = fs.readFileSync(path.join(contentDir, `${params.id}.html`), "utf-8");

    // 假设标题是 HTML 中的第一个 <h1> 标签
    const titleMatch = content.match(/<h1>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1] : "Blog";

    return { props: { content, id: params.id, title } };
}

const BlogPage = ({ content, title }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-black text-primary-text-color">
            <Head>
                <title>{title}</title> {/* 动态设置标题 */}
            </Head>
            <header>
                <Nav />
            </header>
            <main className="container mx-auto px-4 py-8">
                <button
                    onClick={() => window.history.back()}
                    className="text-blue-500 hover:underline mb-4"
                    style={{
                        fontFamily: "var(--font-body)", // 使用全局字体变量
                    }}
                >
                    ← Back
                </button>
                <article
                    className="bg-black p-6 rounded-lg shadow-md prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                    style={{
                        "--tw-prose-headings": "white", // 设置标题颜色为白色
                    }}
                ></article>
            </main>
        </div>
    );
};

export default BlogPage;
