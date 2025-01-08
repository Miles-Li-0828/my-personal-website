import Nav from '../../components/Nav'; // 导入导航栏组件
import Footer from '../../components/Footer'; // 导入页脚组件
import ProjectCard from '../../components/ProjectCard'; // 导入项目卡片组件


const ProjectsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-primary-text-color">
            {/* 导航栏 */}
            <header>
                <Nav />
            </header>

            {/* 内容区域 */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {/* 项目展示标题 */}
                <h1 className="text-3xl font-bold text-center mb-8">
                    Miles' Masterpieces
                </h1>

                {/* 简单介绍 */}
                <p className="mb-4">
                    Welcome to my cyber art gallery! These are the masterpieces I’ve been curating over the years (okay, maybe just days… fine, hours—who’s counting?). Take a peek! Sure, some might be simpler than a "Hello World," but hey, they still showcase my sweat, code, and questionable number of late-night snacks. Enjoy!
                </p>

                {/* 项目列表 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <ProjectCard
                        imageSrc="/projects/promptopia.jpg"
                        title="Promptopia"
                        description="Promptopia is a Next.js-powered web app where users can share and explore creative prompts for Large Language Models, featuring user authentication, dynamic profiles, and a MongoDB-backed database for seamless prompt sharing and discovery."
                        link="https://github.com/Miles-Li-0828/nextjs-promptopia?tab=readme-ov-file"
                    />

                    <ProjectCard
                        imageSrc="/projects/hi5.jpg"
                        title="HiFive Game"
                        description="The HiFive Game is a refactored strategic card game utilizing object-oriented principles and design patterns to create a modular, maintainable, and dynamic gameplay experience with intelligent player strategies."
                        link="https://github.com/Miles-Li-0828/HiFive-Game"
                    />

                    <ProjectCard
                        imageSrc="/projects/security.jpg"
                        title="The End of Privacy: Navigating a Surveillance Society"
                        description="This project examines the erosion of privacy in the digital age, highlighting the tension between privacy-enhancing technologies, surveillance methods, and societal trade-offs in balancing security and personal rights."
                        link="https://github.com/Miles-Li-0828/The-End-of-Privacy-Navigating-a-Surveillance-Society"
                    />

                    <ProjectCard
                        imageSrc="/projects/automail.jpg"
                        title="Automail System"
                        description="The Automail System is an automated mail sorting and delivery solution for large buildings, utilizing modular design, GRASP principles, and advanced robot behaviors like FLOORING mode for efficient and scalable operations."
                        link="https://github.com/Miles-Li-0828/Specification-for-Automail"
                    />

                    <ProjectCard
                        imageSrc="/projects/shadowMario.jpg"
                        title="Shadow Mario"
                        description="A simple 2D platformer game developed with the Bagel library, where players navigate levels, collect coins, avoid enemies, and reach the flag to complete challenges."
                        link="https://github.com/Miles-Li-0828/Shadow-Mario"
                    />

                    <ProjectCard
                        imageSrc="/projects/bookstore.jpg"
                        title="SmartBook ML: Intelligent Bookstore Management"
                        description="Leveraging machine learning to predict book ratings and segment recommendations, enhancing bookstore operations and customer experience."
                        link="https://github.com/Miles-Li-0828/Bookstore-Mechine-Learning-Model-Advanced-Inventory-and-Personalized-Recommendation-System"
                    />

                    <ProjectCard
                        imageSrc="/projects/convex.jpg"
                        title="Convex Hull Algorithms Research and Shortest Path Algorithms Implementations"
                        description="Code implementations and research findings related to two fundamental topics in computational geometry and graph theory: Convex Hull Algorithms and Shortest Path Algorithms."
                        link="https://github.com/Miles-Li-0828/Convex-Hull-Algorithms-Research-and-Shortest-Path-Algorithms-Implementations"
                    />

                    <ProjectCard
                        imageSrc="/projects/snakeGame.jpg"
                        title="Snake Game"
                        description="Snake game made by Python Turtle. This is a project for python beginners."
                        link="https://github.com/Miles-Li-0828/Snake_Game"
                    />

                </div>
            </main>

            {/* 页脚 */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default ProjectsPage;