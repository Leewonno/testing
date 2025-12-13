// 지원자정보
type InterxApplicantType = {
  applicantName: string;
  applicantId: string;
}

// Step(단계) 정보
type InterxStepType = {
  level: number;
  stepTitle: string;
  stepIcon: string;
  // stepId: string;
  applicantList: InterxApplicantType[];
}
