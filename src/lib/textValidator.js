import { cleanTextNumber } from "./util"

const EMAIL_SIMPLE_FORMAT = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
/** EMAIL_FULL_FORMAT START
 * reference: https://en.wikipedia.org/wiki/Email_address
 * reference diagram: https://i.stack.imgur.com/YI6KR.png
 */
const EMAIL_FULL_FORMAT_REGEXP = {
  group1: '[a-zA-Z0-9_\\-\\#\\!\\%\\$\\\'\\‘\\&\\+\\*\\/\\=\\?\\^\\`\\{\\|\\}\\~]',
  group2: '[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x20\\x21\\x23-\\x5B\\x5D-\\x7F]',
  group3: '[\\x01-\\x09\\x0B\\x0C\\x0E-\\x7F]',
  domainGroup1: '([a-zA-Z0-9]([a-zA-Z0-9\\-]*[a-zA-Z0-9]){0,1}\\.)+[a-zA-Z0-9]([a-zA-Z0-9\\-]*[a-zA-Z0-9])*',
  domainGroup2: '\\[(((25[0-5])|(2[0-4][0-9])|([0-1]{0,1}[0-9][0-9]{0,1}))\\.){3}((25[0-5])|(2[0-4][0-9])|([0-1]{0,1}[0-9][0-9]{0,1}))\\]',
  templateRegex: '^(GROUP1+([.]{0,1}GROUP1+)*|("(GROUP2|(\\GROUP3))*"))@(DOMAIN_GROUP_1|DOMAIN_GROUP_2)$'
}
const APPLY_EMAIL_REGEXP = EMAIL_FULL_FORMAT_REGEXP.templateRegex
  .replace(/GROUP1/ig, EMAIL_FULL_FORMAT_REGEXP.group1)
  .replace(/GROUP2/ig, EMAIL_FULL_FORMAT_REGEXP.group2)
  .replace(/GROUP3/ig, EMAIL_FULL_FORMAT_REGEXP.group3)
  .replace(/DOMAIN_GROUP_1/ig, EMAIL_FULL_FORMAT_REGEXP.domainGroup1)
  .replace(/DOMAIN_GROUP_2/ig, EMAIL_FULL_FORMAT_REGEXP.domainGroup2)
const EMAIL_FULL_FORMAT = new RegExp(APPLY_EMAIL_REGEXP)
/* EMAIL_FULL_FORMAT END */
const LASER_ID_FORMAT = /^[A-Z]{2}[0-9]{10}$/

/**
 * 
 * @param {*} text input text
 */
export const isEmailFormat = (text) => {
  return EMAIL_FULL_FORMAT.test(text)
}


export const isLaserIdForm = (text) => {
  text = cleanTextNumber(text)
  return LASER_ID_FORMAT.test(text)
}