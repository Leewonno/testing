'use client'

import styled from "styled-components";
import StepItemWidget from "../components/StepItemWidget";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const Container = styled.div`
  display: flex;
`

const StepItemContainer = () => {

  const stepData = useSelector((state: RootState) => state.interx.interxList);

  return (
    <Container>
      {stepData.map((v, i) => {
        return (
          <StepItemWidget key={i} />
        )
      })}
    </Container>
  )
}

export default StepItemContainer;