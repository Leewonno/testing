'use client'

import styled from "styled-components"


const Widget = styled.div`
  display: flex;
  width: 100%;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: #35312d;
`

const TitleWidtet = () => {
  return (
    <Widget>
      <Title>프론트엔드 (Frontend) 개발자 - 데이터 스페이스 (Dataspace)</Title>
    </Widget>
  )
}

export default TitleWidtet;