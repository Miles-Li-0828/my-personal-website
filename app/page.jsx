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
                {/* 宽屏布局 */}
                <div className="hidden md:flex flex-wrap md:flex-nowrap">
                    {/* 左侧内容：标题和介绍 */}
                    <div className="w-full md:w-2/3 lg:w-2/3 flex flex-col animate-fadeIn">
                        <h1 className="text-5xl font-bold mb-4">Welcome To Miles' Cyber World!</h1>
                        <p className="mb-4">
                            Hi, I’m Miles—yes, just like the Black Spider-Man, because I believe I can be a superhero in my own world, just like that picture over there! 🕷️ But unlike Spidey, I’m from China, the land of kung fu. No superpowers here, but I can definitely show you some moves! I hail from Kunming, Yunnan—a.k.a. Spring City—one of the most amazing places on Earth. Seriously, come visit, the weather is perfect, and the food will blow your mind.
                        </p>
                        <p className="mb-4">
                            By day, I’m a software engineer, and by night, a cyber-security enthusiast (okay, sometimes I’m just eating snacks and watching Netflix). My goal? To build cyber metropolises and protect everyone living in them. Coding feels like playing with cyber LEGO—I get this crazy sense of accomplishment every time I complete a project. As for cybersecurity, it’s like being the friendly neighborhood tech Spider-Man, patching holes in massive firewalls instead of chasing villains. Who needs a web-shooter when you’ve got a debugger?
                        </p>
                        <p>
                            Oh, I almost forgot to mention—I’m an ENFJ! I absolutely love meeting new people and making friends. If you’re interested in me (or just want to chat about kung fu, coding, or cybersecurity), you’re super-duper welcome to connect with me. Don’t worry, I don’t bite…unless you’re a cybersecurity threat. 😉
                        </p>
                    </div>

                    {/* 右侧内容：图片 */}
                    <div className="w-full md:w-1/2 flex justify-center items-start animate-slideIn">
                        <Image
                            src={cyberSoldier}
                            alt="Cyber Soldier"
                            width={500} // 调整为更大的宽度
                            height={500}
                            left-margin={200} // 添加左边距
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* 窄屏布局 */}
                <div className="flex md:hidden flex-col animate-fadeIn">
                    {/* 第一段文字 */}
                    <h1 className="text-4xl font-bold mb-4 text-center">Welcome To Miles' Cyber World!</h1>
                    <p className="mb-4 text-center">
                        Hi, I’m Miles—yes, just like the Black Spider-Man, because I believe I can be a superhero in my own world, just like that picture over there! 🕷️ But unlike Spidey, I’m from China, the land of kung fu. No superpowers here, but I can definitely show you some moves! I hail from Kunming, Yunnan—a.k.a. Spring City—one of the most amazing places on Earth. Seriously, come visit, the weather is perfect, and the food will blow your mind.
                    </p>

                    {/* 图片插入 */}
                    <div className="w-full flex justify-center mb-4">
                        <Image
                            src={cyberSoldier}
                            alt="Cyber Soldier"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>

                    {/* 其他段落 */}
                    <p className="mb-4">
                        By day, I’m a software engineer, and by night, a cyber-security enthusiast (okay, sometimes I’m just eating snacks and watching Netflix). My goal? To build cyber metropolises and protect everyone living in them. Coding feels like playing with cyber LEGO—I get this crazy sense of accomplishment every time I complete a project. As for cybersecurity, it’s like being the friendly neighborhood tech Spider-Man, patching holes in massive firewalls instead of chasing villains. Who needs a web-shooter when you’ve got a debugger?
                    </p>
                    <p>
                        Oh, I almost forgot to mention—I’m an ENFJ! I absolutely love meeting new people and making friends. If you’re interested in me (or just want to chat about kung fu, coding, or cybersecurity), you’re super-duper welcome to connect with me. Don’t worry, I don’t bite…unless you’re a cybersecurity threat. 😉
                    </p>
                </div>
            </main>

            {/* 页脚 */}
            <Footer />
        </div>
    );
};

export default Home;
