"use client";

import React from "react";
import TypeIt from "typeit-react";
// import { FaBirthdayCake } from "react-icons/fa";
// import { SiBloglovin } from "react-icons/si";
// import {
//   GoPerson,
//   GoHome,
//   GoMail,
//   GoMortarBoard,
//   GoMarkGithub,
// } from "react-icons/go";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div
        id="introduction"
        className="about-inner max-w-4xl mx-auto text-center mb-12 px-4"
      >
        <div className="typeit h-20 text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          <TypeIt
            options={{
              strings: [
                "안녕하세요 : ) <br/>주니어 Frontend 개발자 고한샘입니다.",
              ],
              speed: 100,
              loop: true,
              loopDelay: [2500],
              waitUntilVisible: true,
            }}
          />
        </div>
        <p className="text-lg text-gray-700 mb-4">
          저는 다양한 문제를 해결하는 것을 즐기며 경영학을 전공하였습니다.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          프론트엔드 개발에 흥미를 느껴, 관련 기술을 배우고 지속적으로
          성장하고자 노력하고 있습니다.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          특히 사용자 경험을 최우선으로 고려한 인터페이스를 설계하는 데 관심이
          많습니다.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          코드잇 프론트엔드 과정을 통해 쌓은 다양한 기술 스택을 활용하여,
        </p>
        <p className="text-lg text-gray-700">
          효율적이고 매력적인 웹 애플리케이션을 개발하고자 합니다.
        </p>
      </div>
      <div
        id="profile"
        className="about-inner max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          ABOUT
        </h2>
        <div className="profile-inner flex flex-col md:flex-row items-center">
          <div className="profile-img w-24 h-24 bg-gray-300 rounded-full mb-6 md:mb-0 md:mr-8 flex items-center justify-center text-gray-500">
            {/* 여기에 텍스트로 이미지 대체 */}
            <p>[Profile Image]</p>
          </div>
          <div className="profile-list">
            <ul className="text-lg text-gray-700 mb-4">
              <li className="mb-2">
                {/* <GoPerson /> */}
                <span className="font-semibold">[이름 아이콘]</span> 고한샘
              </li>
              <li className="mb-2">
                {/* <FaBirthdayCake /> */}
                <span className="font-semibold">[생일 아이콘]</span> 1992. 03.
                12
              </li>
              <li className="mb-2">
                {/* <GoHome /> */}
                <span className="font-semibold">[주소 아이콘]</span>{" "}
                제주특별자치도 제주시
              </li>
              <li className="mb-2">
                {/* <GoMail /> */}
                <span className="font-semibold">[이메일 아이콘]</span>{" "}
                gohansaem@gmail.com
              </li>
              <li className="mb-2">
                {/* <GoMortarBoard /> */}
                <span className="font-semibold">[학력 아이콘]</span> 광운대학교
                (경영학부 졸업)
              </li>
              <li className="mb-2">
                {/* <GoMortarBoard /> */}
                <span className="font-semibold">[수료 아이콘]</span> 코드잇
                프론트엔드 6기 수료 예정 (2024. 09. 02)
              </li>
            </ul>
            <ul className="text-lg text-gray-700">
              <li className="mb-2">
                <a
                  href="https://github.com/YourGitHubUsername"
                  className="text-blue-500 hover:underline"
                >
                  {/* <GoMarkGithub /> */}
                  <span className="font-semibold">[GitHub 아이콘]</span> Git
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://velog.io/@YourBlogUsername"
                  className="text-blue-500 hover:underline"
                >
                  {/* <SiBloglovin /> */}
                  <span className="font-semibold">[Blog 아이콘]</span> BLOG
                </a>
              </li>
              {/* <li><a href="#"><IoNewspaperOutline/><span>RESUME</span></a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
