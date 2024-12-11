import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import cyberSoldier from '../public/cyberSoldier.jpg'; // 确保路径正确

const Home = () => {
    return (
        <div className="bg-black text-primary-text-color min-h-screen flex flex-col">
            {/* 导航栏 */}
            <Nav />

            {/* 内容区域 */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start">
                    {/* 左侧内容：标题和介绍 */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4 font-bebas">Your Title Here</h1>
                        <p className="mb-4">
                            Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                        </p>
                        <p className="mb-4">
                            Paragraph 2: Cras vel velit auctor, pharetra erat vitae, accumsan sem. Integer vehicula massa nec libero ullamcorper, sit amet tristique tortor aliquam.
                        </p>
                        <p>
                            Paragraph 3: Duis feugiat turpis ac ex fermentum, in ullamcorper odio dictum. Nulla facilisi.
                        </p>
                    </div>

                    {/* 右侧内容：图片 */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <Image
                            src={cyberSoldier}
                            alt="Cyber Soldier"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                </div>
            </main>

            {/* 页脚 */}
            <Footer />
        </div>
    );
};

export default Home;
