import { getPatchData } from "./PatchService";

var _conf = {}

export const getConfig = (word) => (word && word != "") ? _conf[word] : '';

export const initConfig = () => {
   _conf = getPatchData().config || {}
}