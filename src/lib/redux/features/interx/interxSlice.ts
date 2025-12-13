import { createSlice } from '@reduxjs/toolkit';

// 단계별 목록
interface InterxState {
  interxList: InterxStepType[];
}

const initialState: InterxState = {
  interxList: [{
    level: 1,
    stepTitle: '',
    stepIcon: '',
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
  }]
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
