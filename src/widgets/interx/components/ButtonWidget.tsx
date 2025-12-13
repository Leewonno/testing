'use client'

import Icon from "@/shares/components/Icon";
import { useState } from "react";
import styled from "styled-components";

const Widget = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftBox = styled.div`
  display: flex;
  gap: 0.5rem;
`

const AbleButton = styled.button<{ $able: boolean; }>`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #9ea0b7;
  border: 2px solid #f2f2f2;
  border-radius: 5px;
  padding: 2px 10px;
  cursor: pointer;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${(props) => props.$able ? "#6dd063" : "#ff2525"};
  }
`

const MemoAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
  padding: 2px 5px;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #ececec;
  }
`

const MemoAddButtonText = styled.div`
  font-size: 0.8rem;
  color: #9ea0b7;
`

const RightBox = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.2rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 2px;
`

const RightGroupButton = styled.label`
  border-radius: 5px;
  background-color: transparent;
  font-size: 0.8rem;
  padding: 2px 8px;
  cursor: pointer;
  color: #9ea0b7;
`

const HiddenRadioIpunt = styled.input`
  display: none;

  &:checked + label {
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    color: #000;
  }
`

const RightButton = styled.button`
  border: 2px solid #f2f2f2;
  border-radius: 5px;
  background-color: #fff;
  font-size: 0.8rem;
  padding: 2px 8px;
  cursor: pointer;
  color: #000;
`

const ButtonWidget = () => {
  const [isAble, setIsAble] = useState<boolean>(true);

  return (
    <Widget>
      <LeftBox>
        {/* 활성화 */}
        <AbleButton $able={isAble} onClick={() => setIsAble(!isAble)}>{isAble ? "활성화" : "비활성화"}</AbleButton>
        {/* 메모추가 */}
        <MemoAddButton>
          <Icon name="add" size="15px" color="#9ea0b7" />
          <MemoAddButtonText>메모 추가</MemoAddButtonText>
        </MemoAddButton>
      </LeftBox>
      <RightBox>
        {/* 지원자/메일함 */}
        <ButtonGroup>
          <HiddenRadioIpunt type="radio" name="button_group" id="applicant" defaultChecked />
          <RightGroupButton htmlFor="applicant">지원자</RightGroupButton>
          <HiddenRadioIpunt type="radio" name="button_group" id="mail" />
          <RightGroupButton htmlFor="mail">메일함</RightGroupButton>
        </ButtonGroup>
        {/* 채용팀 */}
        <RightButton>채용팀</RightButton>
      </RightBox>
    </Widget>
  )
}

export default ButtonWidget;