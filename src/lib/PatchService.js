import _ from 'lodash';
import { apiGetCurrentVersion } from '../api/SystemApi';
import { USE_MOCK_PATCH } from '../config';
import AsyncStorage from 'react-native-encrypted-storage';
import { apiCallFile } from '../api/apiCall';
// import { patchLocal } from './PatchLocal';

const PATCH = "PATCH"
let patch = null;
let updated = false;

export const getPatchVersion = () => (!patch) ? 'NoPatchData' : getPatchData().version?.patchVersion;

export const getPatchData = () => {
  if (patch) {
    return patch;
  }
  throw new Error('No patch data !! Please call initPatch()')
}

const retrivePatchFromStorage = async () => {
  try {
    const patchFile = await AsyncStorage.getItem(PATCH)
    const patchObj = JSON.parse(patchFile || "{}")
    console.log("🚀 ~ file: PatchService.js ~ line 23 ~ retrivePatchFromStorage ~ patchFile", Object.keys(patchObj))
    if (patchObj && patchObj.version?.patchVersion) {//sessionOBJ.token 
      patch = { ...patchObj }
    }
    return true
  } catch (error) {
    console.log('!!!!! workInitSession Error !!!!!! \n', error)
    return false
  }
}

/**
 * @typedef {Object} checkPatchVersionResult True if patch need to update
 * @property {Boolean} checkPatchVersionResult.isNeedUpdate TRUE means patch need to update
 * @property {String} checkPatchVersionResult.patchPath
 */

/**
 * Check patch version between Local patch and Remote patch
 * @return {Promise<checkPatchVersionResult>} checkPatchVersionResult, 
 */
const checkPatchVersion = async () => {
  try {
    // Get Remote Patch Version
    const remotePatchResponse = await apiGetCurrentVersion()
    const currentVersion = remotePatchResponse?.data?.GetCurrentPatchVersion
    const remotePatchVersion = currentVersion?.patchVersion
    const pathPatch = currentVersion?.pathPatchVersion
    
    // Get local Patch Version
    const localPatchVersion = getPatchVersion()
    
    console.log("🚀 ~ file: PatchService.js ~ line 47 ~ checkPatchVersion ~ remotePatchVersion", remotePatchVersion)
    console.log("🚀 ~ file: PatchService.js ~ line 48 ~ checkPatchVersion ~ localPatchVersion", localPatchVersion)
    
    if (remotePatchVersion !== getPatchVersion()) {
      return { 
        isNeedUpdate: true, 
        patchPath: pathPatch 
      }
    }

    return {
      isNeedUpdate: false,
      patchPath: null
    }
  } catch (error) {
    console.log("🚀 ~ file: PatchService.js ~ line 41 ~ checkPatchVersion ~ error", error)
    throw error
  }
}

/**
 * 
 * @param {*} patchPath 
 * @param {*} progressFunction 
 * @param {*} beginFuncion 
 */
const updatePatch = async (patchPath, progressFunction) => {
  try {
    const responsePatch = await apiCallFile(
      {
        uri: patchPath,
      },
      progressFunction
    )
    AsyncStorage.setItem(PATCH, JSON.stringify(responsePatch))
    patch = responsePatch
    return true
  } catch (error) {
    throw error
  }
}

export const initPatch = async (downloadProgress) => {
  if (USE_MOCK_PATCH) {
    return mockPatch()
  }

  try {
    await retrivePatchFromStorage()
    const result = await checkPatchVersion()
    console.log("🚀 ~ file: PatchService.js ~ line 92 ~ initPatch ~ isNeedUpdate", JSON.stringify(result, null, 2))
    if (result.isNeedUpdate) {
      return await updatePatch(result?.patchPath, downloadProgress)
    }

    return true
  } catch (error) {
    throw error
  }
}


const mockPatch = () => {
  // patch = patchLocal;
  updated = true;
  return true
}