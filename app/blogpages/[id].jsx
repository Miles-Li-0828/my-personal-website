import Nav from "../../components/Nav";

export async function getStaticPaths() {
    const fs = require("fs");
    const files = fs.readdirSync("blogs/content");

    const paths = files.map((file) => ({
        params: { id: file.replace(".md", "") },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const fs = require("fs");
    const content = fs.readFileSync(`blogs/content/${params.id}.md`, "utf-8");

    return { props: { content, id: params.id } };
}

const BlogPage = ({ content }) => {
    return (
        <div className="min-h-screen bg-black text-primary-text-color">
            <header>
                <Nav />
            </header>
            <main className="container mx-auto px-4 py-8">
                <button
                    onClick={() => window.history.back()}
                    className="text-blue-500 hover:underline mb-4"
                >
                    ← Back
                </button>
                <article className="bg-white p-6 rounded-lg shadow-md">
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </article>
            </main>
        </div>
    );
};

export default BlogPage;
