import { createSlice } from '@reduxjs/toolkit';

// 단계별 목록
interface InterxState {
  interxList: InterxStepType[];
}

const initialState: InterxState = {
  interxList: [{
    level: 1,
    stepTitle: '지원(서류전형)',
    stepIcon: '✏️',
    applicantList: [
      {
        applicantName: "지원자1",
        applicantId: 'A01',
      },
      {
        applicantName: "지원자2",
        applicantId: 'A02',
      }
    ]
  },
  {
    level: 2,
    stepTitle: 'TA 스크린 콜',
    stepIcon: '📞',
    applicantList: [
      {
        applicantName: "지원자3",
        applicantId: 'A03',
      }
    ]
  },
  {
    level: 3,
    stepTitle: '1차 인터뷰 (실무)',
    stepIcon: '🥇',
    applicantList: [
    ]
  },
  {
    level: 4,
    stepTitle: '코딩테스트',
    stepIcon: '🖥️',
    applicantList: [
    ]
  },
  {
    level: 5,
    stepTitle: '2차 인터뷰 (임원)',
    stepIcon: '🥈',
    applicantList: [
    ]
  },
  {
    level: 6,
    stepTitle: '처우 협의',
    stepIcon: '🥉',
    applicantList: [
    ]
  }
  ]
};

export const interxSlice = createSlice({
  name: 'interx',
  initialState,
  reducers: {
    setInterxData: (state, action) => {
      state.interxList = action.payload;
    },
  },
});

export const { setInterxData } = interxSlice.actions;
export default interxSlice.reducer;
