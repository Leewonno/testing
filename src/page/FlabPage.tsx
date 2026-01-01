'use client'

import { current } from "@reduxjs/toolkit"
import { MouseEvent, useRef, useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Section = styled.section`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const Card = styled.div<{ color: string, transform: string }>`
  width: 200px;
  height: 250px;
  background-color: ${({ color }) => color};
  border-radius: 1.5rem;
  cursor: pointer;
  transform: ${({ transform }) => transform};
  transition: transform 0.5s;
`

type CardType = {
  color: string;
}

const cardList: CardType[] = [
  { color: "#ffae00" },
  { color: "#0088ff" },
  { color: "#ff95e4" },
  { color: "#00ff1e" },
  { color: "#ddff00" },
  { color: "#00e1ff" },
]

export const FlabPage = () => {
  const [centerIndex, setCenterIndex] = useState<number>();
  const [transforms, setTransform] = useState<Record<number, string>>([]);

  const handleAnimation = async (e: MouseEvent<HTMLDivElement>, index: number) => {
    // 클릭한 Element
    const target = e.currentTarget;
    // 확인
    if (!target) return;
    // requestAnimationFrame 종료 후 이동할 X, Y 좌표
    const { translateX, translateY } = await new Promise<{
      translateX: number;
      translateY: number;
    }>((resolve) => requestAnimationFrame(() => {
      // 클릭한 Element 정보
      const rect = target.getBoundingClientRect();
      // 화면 중앙 좌표
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // 요소의 중심 좌표
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;
      // 이동할 할 거리
      const translateX: number = centerX - elementCenterX;
      const translateY: number = centerY - elementCenterY;

      resolve({ translateX, translateY })
    }));
    setTransform((prev) => {
      const next = { ...prev };
      if (centerIndex || centerIndex === 0) next[centerIndex] = 'translate(0px, 0px) scale(1)';
      if (centerIndex !== index) next[index] = `translate(${translateX}px, ${translateY}px) scale(2)`;
      return next
    })
    setCenterIndex(index);
  }

  return (
    <Layout>
      <Section>
        <CardBox>
          {cardList.map((v, i) => {
            return <Card key={`${v.color} -${i} `} color={v.color} transform={transforms[i] || 'translate(0px, 0px)'} onClick={(e) => handleAnimation(e, i)} />
          })}
        </CardBox>
      </Section>
    </Layout>
  )
}