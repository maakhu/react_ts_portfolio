"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import mateDev from "../public/mateAvatar.png"; // Import using public folder
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const lightText = "text-gray-700";
  const darkText = "dark:text-slate-300";
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Máté Egri Portfolio</title>
        <meta name="description" content="Generated by Next.js" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        {" "}
        {/* padding for  medium and large screens*/}
        <section className="max-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            {" "}
            {/* padding top & bottom 10 */}
            <h1 className={`text-xl font-extralight ${lightText} ${darkText}`}>developedbymaak</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className={`cursor-pointer text-2xl ${lightText} ${darkText}`}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Hi, my name is Máté Egri
            </h2>
            <h3 className={`text-2xl py-2 md:text-3xl ${darkText}`}>
              Full-stack Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto dark:text-slate-500">
              Freelancer Web-development Magician
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-6 py-3 text-gray-600 dark:text-slate-300">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96 sm: h-40 w-40 mt-4">
            <Image
              src={mateDev}
              className="rounded-full "
              alt={"Cartonised profile picture"}
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className={`text-3xl py1 md:text-3xl max-w-xl mx-auto pt-10 pb-5 ${darkText}`}>
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto dark:text-slate-300">
              As a full stack web developer, I can help you build and maintain
              both the front-end and the back-end of your website or
              application. I have expertise in various technologies and
              frameworks, such as {""}
              <span className="text-teal-500">
                 HTML, CSS, JavaScript, React, Angular, Node.js, MongoDB, MySQL,
                Laravel
              </span>
              , and more. I can design and create user-friendly interfaces,
              <span className="text-teal-500">web services and APIs</span>, data
              storage and processing solutions, and other features that meet
              your business needs.
            </p>
            <p className="text-md py-2 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto dark:text-slate-300">
              I can also perform tests, troubleshoot software, fix bugs, and
              collaborate with other developers on projects. Whether you need a
              simple website or a complex web application, I can deliver
              high-quality and scalable full stack development solutions for
              you.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} style={{ margin: "0 auto" }} alt="design logo"/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Affinity Photo</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">TailWind</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} style={{ margin: "0 auto" }} alt="code logo"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Latest Technologies</h4>
              <p className="text-gray-800 py-1">TypeScript</p>
              <p className="text-gray-800 py-1">React.JS</p>
              <p className="text-gray-800 py-1">Node.JS & Express</p>
              <p className="text-gray-800 py-1">MongoDB</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} style={{ margin: "0 auto" }} className="text-right" alt="like logo"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? Here it is how can I help you.
              </p>
              <h4 className="py-4 text-teal-600">I can assist you with</h4>
              <p className="text-gray-800 py-1">Code review</p>
              <p className="text-gray-800 py-1">Collaborate</p>
              <p className="text-gray-800 py-1">Design review</p>
              <p className="text-gray-800 py-1">Deploying</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className={`text-3xl py1 md:text-xl max-w-xl mx-auto ${darkText}`}>Portfolio</h3>
            <p className={`text-md py-2 leading-8 md:text-xl max-w-xl mx-auto text-gray-700 ${darkText}`}>
              I have worked on a full-stack browser-based online multiplayer game project called Tribes,
              where a player can  
              <span className="text-teal-500">
                HTML, CSS, JavaScript, React, Angular, Node.js, MongoDB, MySQL,
                Laravel
              </span>
              , and more. I can design and create user-friendly interfaces,
              <span className="text-teal-500">web services and APIs</span>, data
              storage and processing solutions, and other features that meet
              your business needs.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt={"web design"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt={"web design"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt={"web design"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt={"web design"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt={"web design"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                alt={"web design"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
