"use client";

import React from "react";
import styled from "styled-components";

// Ability 스타일 컴포넌트
const Ability = styled.div<{ ability: number }>`
  width: ${(props) => props.ability}%;
  background-color: #4caf50; /* 원하는 배경색으로 설정 */
  height: 20px; /* 높이 설정 */
  border-radius: 5px; /* 모서리 둥글기 설정 */
  position: relative;
`;

// AbilityPercent 스타일 컴포넌트
const AbilityPercent = styled.div`
  position: absolute;
  right: 10px; /* 오른쪽 여백 */
  top: 50%;
  transform: translateY(-50%);
  color: #fff; /* 글자색 설정 */
  font-weight: bold; /* 글자 굵기 설정 */
`;

// SkillName 스타일 컴포넌트
const SkillName = styled.div`
  font-size: 16px; /* 기술 이름 폰트 크기 */
  margin-right: 10px; /* 스킬 이름과 바 사이 여백 */
  color: #4a4a4a; /* gray-800 색상 */
  min-width: 120px; /* 고정된 최소 너비 */
`;

// AbilityBar 스타일 컴포넌트
const AbilityBar = styled.div`
  margin-bottom: 15px; /* 각 스킬 바 사이 여백 */
  display: flex; /* Flexbox 사용 */
  align-items: center; /* 수직 정렬 */
`;

function Skills() {
  const mainSkills = [
    { lang: "HTML5", ability: 80 },
    { lang: "CSS3", ability: 80 },
    { lang: "JavaScript", ability: 70 },
    { lang: "TanstackQuery", ability: 60 },
    { lang: "React", ability: 70 },
    { lang: "TypeScript", ability: 60 },
    { lang: "Next.js", ability: 60 },
    { lang: "TailwindCSS", ability: 60 },
    { lang: "MongoDB", ability: 30 },
    { lang: "Mantine UI", ability: 50 },
    { lang: "Figma", ability: 40 },
    { lang: "Jira", ability: 60 },
    { lang: "Github", ability: 80 },
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Main Skills
      </h2>
      <ul className="list-none p-0">
        {mainSkills.map((ele) => (
          <li key={`${ele.lang}-${ele.ability}`} className="mb-4">
            <AbilityBar>
              <SkillName>{ele.lang}</SkillName>
              <Ability ability={ele.ability}>
                <AbilityPercent>{ele.ability} %</AbilityPercent>
              </Ability>
            </AbilityBar>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
