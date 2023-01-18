// OA Step code
export const STEP_FATCA = "STEP_FATCA";
export const STEP_PERSONAL_INFO = "STEP_PERSONAL_INFO";
export const STEP_BACKGROUND_INFO = "STEP_BACKGROUND_INFO";
export const STEP_CONTACT_INFO = "STEP_CONTACT_INFO";
export const STEP_BANK_ACCOUNT = "STEP_BANK_ACCOUNT";
export const STEP_KYC_IMAGE = "STEP_KYC_IMAGE";
export const STEP_INVESTMENT_OBJECTIVE = "STEP_INVESTMENT_OBJECTIVE";
export const STEP_SUITABILITY_TEST = "STEP_SUITABILITY_TEST";
export const STEP_OPEN_SAVING_ACCOUNT = "STEP_OPEN_SAVING_ACCOUNT";
export const STEP_OPEN_ACCOUNT_FCN = "STEP_OPEN_ACCOUNT_FCN";
export const STEP_OPEN_ACCOUNT_ID_CARD_IMAGE = "ID_CARD_IMAGE";
export const STEP_OPEN_ACCOUNT_PASSBOOK = "PASSBOOK";
export const STEP_OPEN_ID_CARD_ADDRESS= "ID_CARD_ADDRESS";
export const STEP_OPEN_ID_CARD_ISSUE_EXPIRE_DATE = "ID_CARD_ISSUE_EXPIRE_DATE";


export const openAccountGetPathName = (code) => {
  switch (code) {
    case STEP_FATCA:
      return "FATCAPage"
    case STEP_PERSONAL_INFO:
      return "PersonalInfoPage"
    case STEP_BACKGROUND_INFO:
      return "CareerBusinessPage"
    case STEP_CONTACT_INFO:
      return "ContactInformationPage"
    case STEP_BANK_ACCOUNT:
      return "AccountInformationPage"
    case STEP_KYC_IMAGE:
      return "CameraIdCardPage"
    case STEP_INVESTMENT_OBJECTIVE:
      return "InvestmentObjectivePage"
    case STEP_SUITABILITY_TEST:
      return "SuitabilityPage"
    case STEP_OPEN_SAVING_ACCOUNT:
      return "OpenSavingAccountCompletePage"
    case STEP_OPEN_ACCOUNT_FCN:
      return "SelectAccountPage"
    default:
      return code
  }
}