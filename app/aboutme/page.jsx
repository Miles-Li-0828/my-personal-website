import Nav from '../../components/Nav'; // 导入导航栏组件
import Footer from '../../components/Footer'; // 导入页脚组件
import Image from 'next/image';
import QMiles from '../../public/abtMe/miles_q.jpg'; // 图片路径请根据需要调整
import Kunming from '../../public/abtMe/kunming.jpg';
import LegoMiles from '../../public/abtMe/miles_lego.jpg';
import Spiderman from '../../public/abtMe/spiderman.jpg';
import MoreAbtMe from '../../public/abtMe/moreAbtMe.jpg';
import Coco from '../../public/abtMe/coco.jpg';
import StandUp from '../../public/abtMe/standUp.jpg';
import KickBoxing from '../../public/abtMe/kickBoxing.jpg';

const AboutMePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-primary-text-color">
            {/* 导航栏 */}
            <header>
                <Nav />
            </header>

            {/* 内容区域 */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {/* 第一部分：快速自我介绍 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
                        <h1 className="text-5xl font-bold mb-4">Hey there!</h1>
                        <p className="mb-4">
                            Welcome to my corner of the internet! I’m guessing you’ve already checked out my quick intro on the home page. If not, no hard feelings (but seriously, go take a look—it’s pretty neat).
                        </p>
                        <p className="mb-4">
                            Since you’re here, let me introduce myself again—because who doesn’t love a good “About Me” story?
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 animate-slideIn">
                        <Image
                            src={QMiles}
                            alt="Placeholder Image"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* 第二部分：我的根基 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
                    <div className="w-full md:w-1/2 animate-fadeIn">
                        <Image
                            src={Kunming}
                            alt="Placeholder Image"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-slideIn">
                        <h2 className="text-4xl font-semibold mb-4">A Bit About My Roots 🌏</h2>
                        <p className="mb-4">
                            I hail from Kunming, the "Spring City" of Yunnan, China—undoubtedly the best city in the world (and no, I’m not biased at all). Why the “Spring City”? Well, Kunming boasts spring-like weather all year round. No need for shoveling snow or sweating through summer—just eternal spring vibes!
                        </p>
                        <p className="mb-4">
                            If you’re thinking, “That sounds amazing!”, you’re absolutely right. Kunming is a must-visit in your lifetime. I could ramble on about its beauty, but I’ll save you the essay. Instead, here’s a link to Kunming’s <a href="https://en.wikipedia.org/wiki/Kunming">Wikipedia page</a>. Go on, have a peek—I’ll wait.
                        </p>
                    </div>
                </div>

                {/* 第三部分：我的编码生活 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
                        <h2 className="text-4xl font-semibold mb-4">The Backend Engineer 🎩💻</h2>
                        <p className="mb-4">
                            Now, about my coding life. I’m a Backend Engineer, fluent in Python and Java. And hey, since you’re on this site—which is deployed on Vercel—you’ve probably guessed I dabble in JavaScript and Next.js, too. I’ve spent countless late nights wrestling with Python Flask and Java SpringBoot, which I like to think makes me a framework whisperer.
                        </p>
                        <p className="mb-4">
                            The best part of backend development? The moment I wrap up a project. That’s when I feel like a cyber artist, crafting digital masterpieces. Wondering what I’ve created? Check out my Projects page—it’s like an online art gallery, but for code. 🎨
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 animate-slideIn">
                        <Image
                            src={LegoMiles}
                            alt="Placeholder Image"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* 第四部分：从网络安全到网络英雄 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
                    <div className="w-full md:w-1/2 animate-fadeIn">
                        <Image
                            src={Spiderman}
                            alt="Placeholder Image"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-slideIn">
                        <h2 className="text-4xl font-semibold mb-4">From Cyber Codes to Cyber Heroes 🕸️🛡️</h2>
                        <p className="mb-4">
                            If you’re wondering why my name is Miles, it’s not just because it’s cool—it’s also inspired by Miles Morales, the black Spider-Man and my all-time favorite superhero. While I can’t swing between skyscrapers or save the city from villains, I aspire to be a cyber superhero.
                        </p>
                        <p className="mb-4">
                            My dream? To become a Cybersecurity Specialist, defending the digital world from bad actors (not the Hollywood kind). Right now, I’m sharpening my skills on TryHackMe, diving into Security Operations Center (SOC) training. If you’re from TryHackMe reading this, please let your boss know I deserve commission for this free plug. 😜
                        </p>
                    </div>
                </div>

                {/* 第五部分：狗狗 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
                        <h2 className="text-4xl font-semibold mb-4">Meet My Family Member 🐶</h2>
                        <p className="mb-4">
                            Oh, by the way, I’m definitely a dog person. Let me introduce you to a very special member of my family—my little sister, Coco. She’s currently living in my hometown with my parents, keeping them company. Adorable, isn’t she? I mean, look at her fluffy face—just like her owner, full of charm and personality (or so I’d like to think)! 😂
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 animate-slideIn">
                        <Image
                            src={Coco}
                            alt="Placeholder Image"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* 第六部分：脱口秀 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
                    <div className="w-full md:w-1/2 animate-fadeIn">
                        <Image
                            src={StandUp}
                            alt="Placeholder Image"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-slideIn">
                        <h2 className="text-4xl font-semibold mb-4">On the Way of Stand-Up 🎤</h2>
                        <p className="mb-4">
                            I’m a huge fan of stand-up comedy—seriously, who doesn’t love a good laugh? If you’ve noticed a few punchlines sprinkled throughout this website, you’ve caught on to my secret ambition. Yes, I’m on the way to becoming a stand-up comedian!
                        </p>
                        <p className="mb-4">
                            So, here’s your chance: grab an autograph from me now because once I hit the big stage and become famous, it’s going to be a lot harder to catch me. Think of it as an investment in a future comedy superstar. 😉
                        </p>
                    </div>
                </div>

                {/* 第七部分：自由搏击 */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
                        <h2 className="text-4xl font-semibold mb-4">My Favorite Sport: Kickboxing 🥊</h2>
                        <p className="mb-4">
                            When it comes to sports, kickboxing is hands down my favorite. There’s just something incredibly exhilarating about combat sports—they really get your adrenaline pumping!
                        </p>
                        <p className="mb-4">
                            If you’re also into martial arts or have some insights into fighting techniques, let’s chat. Better yet, if the opportunity arises, I’d love to spar with you. But fair warning: you might end up on your knees begging me to take it easy. 😂
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 animate-slideIn">
                        <Image
                            src={KickBoxing}
                            alt="Placeholder Image"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                </div>

                {/* 第八部分：想了解更多？ */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-8">
                    <div className="w-full md:w-1/2 animate-fadeIn">
                        <Image
                            src={MoreAbtMe}
                            alt="Placeholder Image"
                            width={400}
                            height={400}
                            className="rounded-lg filter drop-shadow-lg max-w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-slideIn">
                        <h2 className="text-4xl font-semibold mb-4">Wanna Know More?</h2>
                        <p className="mb-4">
                            If you’ve made it this far, I must’ve piqued your curiosity. Great! Let’s connect—I’d love to chat about tech, Kunming, or how to be a cyber superhero. You’ll find all the right buttons and links below 👇👇👇
                        </p>
                    </div>
                </div>
            </main>

            {/* 页脚 */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AboutMePage;
