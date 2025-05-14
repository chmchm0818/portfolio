// 外部ライブラリ
import { useEffect, useState } from "react";
import Image from "next/image";

// MUI
import {
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

// 自作モジュール
import { animateTitle, animateUI } from "../ts/animation";
import ScrollIndicator from "../components/Animated";
import Footer from "../components/Footer";
import WorksModal from "@/components/Modal";
import { projects } from "@/ts/works";
import { Project } from "@/ts/types";

const CustomRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#000',
  },
  '& .MuiRating-iconEmpty': {
    color: '#ccc',
  },
});

export default function Home() {
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    animateTitle().then(() => {
      setShowUI(true);

      setTimeout(() => {
        animateUI();
      }, 600);
    });
  }, []);

  // モーダル

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleOpen = (project: Project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);
  

  return (
    <>
      <main>
      <header className="header fixed top-10 right-6 md:right-10 opacity-0 transition-opacity duration-1000 z-100">
        <ul className="flex flex-col items-end gap-2 md:gap-3">
          <li>
            <a href="#profile" className="md:text-lg font-[500]">
              PROFILE
            </a>
          </li>
          <li>
            <a href="#skill" className="md:text-lg font-medium">
              SKILL
            </a>
          </li>
          <li>
            <a href="#works" className="md:text-lg font-medium">
              WORKS
            </a>
          </li>
        </ul>
      </header>
        <section className="relative">
          <div className="w-full h-screen flex flex-col justify-center">
            <h1 className="title-1 animated-text text-[60px] sm:text-[90px] md:text-[130px] lg:text-[170px] font-black tracking-wide leading-[1.2] opacity-0">
              MOE&apos;s
            </h1>
            <h1 className="title-2 animated-text text-[60px] sm:text-[90px] md:text-[130px] lg:text-[170px] font-black tracking-wide leading-[1.2] opacity-0">
              PORTFOLIO
            </h1>
          </div>
          {showUI && (
            <div className="opacity-0 scroll-indicator">
              <ScrollIndicator />
            </div>
          )}
        </section>
        <section id="profile" className="my-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-center my-10">PROFILE</h2>
          <div className="max-w-5xl m-auto flex flex-col items-center md:flex-row md:items-start gap-10 md:gap-20 px-8">
            <Image
              src="/image/profile.webp"
              alt="Profile Image"
              width={250}
              height={250}
              className="w-40 h-40 md:w-[250px] md:h-[250px] rounded-full shadow-lg object-cover">
            </Image>
            <div>
              <p className="font-[500] leading-[1.8]">永瀬萌（ながせもえ）と申します。</p>
              <p className="font-[500] leading-[1.8]">WEB系の専門学校に入学し、2年間Web制作について学びました。</p>
              <p className="font-[500] leading-[1.8]">新卒でIT企業に就職し、フロントエンドエンジニアとして主にWeb開発に約1年間携わりました。</p>
            </div>
          </div>
        </section>
        <section id="skill" className="my-20 skill--section">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-center my-10">SKILL</h2>
          <p className="text-center">フロントエンド中心に技術習得に励んでおります。</p>
          <div className="md:max-w-3xl lg:max-w-5xl m-auto">
            <h3 className="text-3xl font-extrabold text-center my-10">FRONT-END</h3>
            <ul className="flex flex-col md:flex-row md:flex-wrap">
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/html.svg" alt="html logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">HTML5</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={5} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：4年</p>
                  <p className="leading-[1.8]">学生時代から学んでおり、実務経験があります。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/css.svg" alt="css logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">CSS3</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={5} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：4年</p>
                  <p className="leading-[1.8]">学生時代から学んでおり、実務経験があります。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/javascript.svg" alt="js logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">JavaScript</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={4} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：4年</p>
                  <p className="leading-[1.8]">学生時代から学んでおり、実務経験があります。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/typescript.svg" alt="ts logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">TypeScript</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={1} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：1年</p>
                  <p className="leading-[1.8]">絶賛勉強中です。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/react.svg" alt="react logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">React</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={2} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：2年</p>
                  <p className="leading-[1.8]">絶賛勉強中です。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/vitejs.svg" alt="vite logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">Vite</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={1} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：1年</p>
                  <p className="leading-[1.8]">アプリ開発で使用しました。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/expo.svg" alt="tailwind css logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">Expo</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={2} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：1年</p>
                  <p className="leading-[1.8]">Web開発で使用しました。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/next-js.svg" alt="next js logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">Next.js</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={1} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：1年</p>
                  <p className="leading-[1.8]">絶賛勉強中です。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/sass.svg" alt="sass logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">Sass</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={4} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：3年</p>
                  <p className="leading-[1.8]">Webサイト制作にて使用経験があります。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/tailwind-css.svg" alt="tailwind css logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">Tailwind CSS</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={2} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：1年</p>
                  <p className="leading-[1.8]">絶賛勉強中です。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/material-ui.svg" alt="tailwind css logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">Material UI</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={1} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：1年</p>
                  <p className="leading-[1.8]">絶賛勉強中です。</p>
                </div>
              </li>
            </ul>
            <h3 className="text-3xl font-extrabold text-center my-10">BACK-END</h3>
            <ul className="flex flex-col md:flex-row md:flex-wrap">
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/php.svg" alt="php logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">PHP</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={2} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：2年</p>
                  <p className="leading-[1.8]">学生時代から学んでおり、実務経験があります。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/laravel.svg" alt="php logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">Laravel</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={2} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：1年</p>
                  <p className="leading-[1.8]">Web開発にて実務経験があります。</p>
                </div>
              </li>
            </ul>
            <h3 className="text-3xl font-extrabold text-center my-10">TOOL</h3>
            <ul className="flex flex-col md:flex-row md:flex-wrap">
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/github.svg" alt="github logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">GitHub</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={3} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：2年</p>
                  <p className="leading-[1.8]">学生時代から学んでおり、実務経験があります。</p>
                </div>
              </li>
              <li className="md:w-1/2 p-8 flex items-start gap-5">
                <img src="/image/wordpress.svg" alt="wordpress logo" className="w-[80px] h-auto"/>
                <div>
                  <p className="font-bold mb-1">WordPress</p>
                  <div className="flex mb-1">
                    <CustomRating name="bw-rating" value={3} readOnly />
                  </div>
                  <p className="leading-[1.8]">学習歴：2年</p>
                  <p className="leading-[1.8]">Wordpressを使用しブランドサイトなどを作成した経験があります。</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="works" className="my-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-center my-10">WORKS</h2>
          <p className="text-center px-8">過去に作成したWebサイトやアプリケーションなどの作品をご紹介します。</p>
          <div className="max-w-5xl m-auto mt-10">
            <>
              <ul className="flex flex-col md:flex-row items-center md:items-stretch md:flex-wrap">
                {projects.map((project) => (
                  <li
                    key={project.id}
                    className="group cursor-pointer md:w-1/3 p-4"
                    onClick={() => handleOpen(project)}
                  >
                    <Card sx={{ maxWidth: 320, overflow: "hidden" }} className="h-full flex flex-col">
                      <Box className="overflow-hidden">
                        <CardMedia
                          sx={{ height: 200 }}
                          className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                          image={project.image}
                          title={project.title}
                        />
                      </Box>
                      <CardContent className="bg-white flex-1 flex flex-col justify-between">
                        <p className="text-lg font-bold mb-2">{project.title}</p>
                        <p>{project.description}</p>
                        <div className="flex justify-end gap-1 pt-3">
                          {project.tech.map((techItem, i) => (
                            <img
                              key={i}
                              src={techItem.src}
                              alt={techItem.alt}
                              className="w-[25px] h-[25px] rounded-full shadow-lg object-cover"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
              <WorksModal open={!!selectedProject} onClose={handleClose} project={selectedProject} />
            </>
          </div>
        </section>
      </main>
<Footer />
    </>
  );
}
