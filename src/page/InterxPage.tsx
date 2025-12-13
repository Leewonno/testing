'use client'

import ButtonWidget from "@/widgets/interx/components/ButtonWidget"
import TitleWidtet from "@/widgets/interx/components/TitleWidget"
import StemItemContainer from "@/widgets/interx/ui/StemItemContainer"
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
`

export const InterxPage = () => {
  return (
    <Layout>
      <Section>
        <TitleWidtet />
        <ButtonWidget />
        <StemItemContainer />
      </Section>
    </Layout>
  )
}