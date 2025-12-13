'use client'

import styled from "styled-components";
import StepItemWidget from "../components/StepItemWidget";

const Container = styled.div`
  display: flex;
`

const StemItemContainer = () => {
  return (
    <Container>
      <StepItemWidget />
    </Container>
  )
}

export default StemItemContainer;