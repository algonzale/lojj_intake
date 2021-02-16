export type ClientStatus =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '0'
  | 'RESOLVED'
  | 'MIT'
  | 'WITHDRAWN'

export enum PIPAppStatus {
  DONE = 'DONE',
  NOTDONE = 'NOT DONE',
}

export enum HI {
  NO = 'NO',
  MEDICAID = 'MEDICAID',
  MEDICARE = 'MEDICARE',
}

export type HIType = HI | string

export type Priors = 'No' | string

export type LW = 'Yes' | 'No' | 'Maybe'

export type YesNo = 'Yes' | 'No'

export interface ClientViewModel {
  clientName: string
  caseNotes?: string
  isGov?: boolean
  phoneNumber: string
  DOB: string
  PIPUMUIMClaimNo?: string
  PDResolved?: YesNo
  LiabClaimNo?: string
  spoken?: string
  DOI: string
  SOL: string
  PIPLimits?: number
  PIPExhausted?: boolean
  UMUIMLimits?: string
  LiabLimits?: string
  clientStatus?: ClientStatus
  caseManager?: string
  attorney?: string
  PIPAppStatus?: PIPAppStatus
  knownProviders?: string
  HI: HIType
  costs?: string
  injuriesIntake: string
  priors: Priors
  referred?: string
  PDAdjuster?: string
  referring?: string
  MIT?: string
  liens?: string
  important?: string
  LORPIP?: boolean
  LORLiabUM?: boolean
  liabAdjuster?: string
  UMUIMAdjuster?: string
  PIPAdjuster?: string
  PDValue?: number
  LW: LW
  liabAccepted?: boolean
  recordsReq?: string
  demandPrepped?: string
  demandSent?: string
  languages?: string
  SSN?: string
  address?: string
  emergencyContactName?: string
  emergencyContactPhone?: string
  emergencyContactRelation?: string
  email?: string
  spouse?: string
  PIPName?: string
  PIPPhone?: string
  PIPPolicyNumber?: string
  AdverseName?: string
  AdversePhone?: string
  AdversePolicyNumber?: string
  AdverseClaimNumber?: string
  AdverseMMY?: string
  PIPCoverage?: 'Full' | 'Simple'
  theoryOfLiab?: string
  passengers?: string
  PRCityAndInfo?: string
  PRCaseNo?: string
  timeOfIncident?: string
  resolved?: YesNo
  gov?: YesNo
  WC?: YesNo
  hasPD?: YesNo
  airbags?: YesNo
  PIPMMY?: string
  howHear?: string
  criminalHist?: string
  HHS?: string
  employer?: string
  wage?: string
  whoIntake?: string
  treatment?: string
  tow?: string
  loanOwner?: string
  intakeDate?: string
}

export type CreateRecordParams = Pick<
  ClientViewModel,
  | 'clientName'
  | 'DOB'
  | 'phoneNumber'
  | 'isGov'
  | 'DOI'
  | 'SOL'
  | 'PDResolved'
  | 'HI'
  | 'LW'
  | 'knownProviders'
  | 'injuriesIntake'
  | 'priors'
  | 'referred'
  | 'caseNotes'
  | 'intakeDate'
>
