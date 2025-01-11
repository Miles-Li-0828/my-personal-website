import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });
        return config;
    },
    // 将 experimental.outputFileTracingIncludes 改为 outputFileTracingIncludes
    outputFileTracingIncludes: {
        "/blogpages/[id]": [path.join(__dirname, "blogs/content/**")],
    },
};

export default nextConfig;
