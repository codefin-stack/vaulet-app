const crypto = require('crypto');

const appId = "IMP.H9%BJ&DPwF!9G^yM6SzGgp*X%fYv?3a!"
const appSecret = "Py^78UV4T_ugg!dSnDan=K#WUxzdyNse"
const nonce = "LFnF4pbS3Rn16XZWmP6SBZcP9tbJEeSc";

const generateSignature = (appId, appSecret, nonce) => {
  const hash = crypto.createHmac('SHA256', appSecret).update(appId + nonce).digest("hex")
  return`${nonce}.${hash}`
}

const validateSignature = (appId, appSecret, signature) => {
  const [nonce, inComeHash] = signature.split('.');
  const hash = crypto.createHmac('SHA256', appSecret).update(appId + nonce).digest("hex")

  return hash === inComeHash
}

(() => {
  console.log('appId', appId)
  console.log('appSecret', appSecret)
  console.log('nonce', nonce)

  
  const signature = generateSignature(appId, appSecret,nonce);
  console.log('app signature: ', signature);
  console.log('validate signature: ', validateSignature(appId, appSecret, signature))
})()