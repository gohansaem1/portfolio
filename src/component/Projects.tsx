"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Card 컴포넌트
const Card: React.FC<{ proj: any }> = ({ proj }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg h-full flex flex-col">
      <div className="bg-gray-200 flex items-center justify-center h-40 mb-4 relative">
        {proj.image ? (
          <Image
            src={proj.image}
            alt={proj.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full text-gray-600">
            <p>이미지 준비 중</p>
          </div>
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
        <p className="text-gray-700 mb-2">{proj.detail}</p>
        <p className="text-gray-600 mb-2">기술: {proj.tech.join(", ")}</p>
        <p className="text-gray-600 mb-2">작업: {proj.work.join(", ")}</p>
        <p className="text-gray-600 mb-2">
          {proj.start} - {proj.end}
        </p>
        <div className="mt-4">
          <Link href={proj.demo} target="_blank" rel="noopener noreferrer">
            <span className="block text-blue-500 hover:underline mb-2">
              라이브 데모
            </span>
          </Link>
          <Link href={proj.source} target="_blank" rel="noopener noreferrer">
            <span className="block text-blue-500 hover:underline">
              소스 코드
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Projects 컴포넌트
const Projects: React.FC = () => {
  const projects = [
    {
      title: "날씨 앱",
      image: "", // 빈 문자열로 설정하여 텍스트로 대체
      detail: "실시간 날씨 정보를 제공하는 반응형 날씨 앱입니다.",
      start: "2023.01.10",
      end: "2023.02.05",
      tech: ["React", "CSS", "OpenWeather API"],
      work: ["프론트엔드 개발", "API 통합"],
      demo: "https://example.com/weather-app",
      source: "https://github.com/YourUsername/weather-app",
    },
    {
      title: "작업 관리자",
      image: "", // 빈 문자열로 설정하여 텍스트로 대체
      detail: "일일 작업과 활동을 조직하는 작업 관리 애플리케이션입니다.",
      start: "2023.03.01",
      end: "2023.03.20",
      tech: ["Vue.js", "Bootstrap", "Firebase"],
      work: ["UI/UX 디자인", "프론트엔드 개발"],
      demo: "https://example.com/task-manager",
      source: "https://github.com/YourUsername/task-manager",
    },
    {
      title: "레시피 찾기",
      image: "", // 빈 문자열로 설정하여 텍스트로 대체
      detail: "재료를 기반으로 레시피를 검색하고 찾는 웹 애플리케이션입니다.",
      start: "2023.04.05",
      end: "2023.04.25",
      tech: ["Angular", "Sass", "Recipe API"],
      work: ["프론트엔드 개발", "API 통합"],
      demo: "https://example.com/recipe-finder",
      source: "https://github.com/YourUsername/recipe-finder",
    },
    {
      title: "포트폴리오 웹사이트",
      image: "", // 빈 문자열로 설정하여 텍스트로 대체
      detail:
        "다양한 프로젝트와 기술을 보여주는 개인 포트폴리오 웹사이트입니다.",
      start: "2023.05.10",
      end: "2023.05.30",
      tech: ["Next.js", "Tailwind CSS"],
      work: ["디자인", "프론트엔드 개발"],
      demo: "https://example.com/portfolio",
      source: "https://github.com/YourUsername/portfolio",
    },
  ];

  const [flipAll, setFlipAll] = useState(false);
  const [flip, setFlip] = useState<number | null>(null);

  const cardFlip = (n: number) => {
    setFlip(flip === n ? null : n);
  };

  return (
    <section id="projects" className="max-w-4xl mx-auto bg-gray-100 py-12">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        PROJECTS
      </h2>
      <div className="flex justify-center mb-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setFlipAll(!flipAll)}
        >
          {flipAll ? "모두 리셋" : "모두 플립"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`relative w-full h-80 perspective-1000 ${
              flip === idx || flipAll ? "animate-flip" : ""
            }`}
            onClick={() => cardFlip(idx)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 ${
                flip === idx || flipAll ? "rotate-y-180" : ""
              }`}
            >
              <div className="absolute inset-0">
                <Card proj={proj} />
              </div>
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-600 rotate-y-180 backface-hidden">
                <p>추가 정보</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
