import { getPatchData } from "./PatchService";
import { NativeModules, Platform } from 'react-native';
import { getSession, setSession } from "./session";

var _lang = 'th'
var _dic = {}

export const getLang = () => _lang;
export const getLangUpper = () => _lang.toUpperCase();

export const getWord = (word) => (word && word != "") ? _dic[word]?.[_lang] || _dic[word]?.['en'] || `${word}[${_lang}]` : 'EMPTY_WORD';

export const switchLang = (lang) => {
   console.log(`[[==== System Languages Change to '${lang}' ====]]`)
   _lang = lang;
   return _lang;
}

export const initLanguage = () => {
   return switchLang('th') // disable default langauge

   const deviceLanguage =
      Platform.OS === 'ios'
         ? NativeModules.SettingsManager.settings.AppleLocale ||
         NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
         : NativeModules.I18nManager.localeIdentifier;

   console.log(deviceLanguage); //en_US
   const settingLanguage = /th/.test(deviceLanguage) ? 'th': 'en'
   const defaultLanguage = getSession().userID ? (
      getSession().lang || settingLanguage
   ) : (
      settingLanguage
   )
   switchLang(defaultLanguage)
   const session = getSession()
   setSession({ ...session, lang: defaultLanguage })

}

export const initDictionary = () => {
   _dic = getPatchData().dictionary || {}
}