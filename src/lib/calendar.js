import { getLang } from './LanguageService'
import { Month, MonthEN, simplyToDateString } from './util'

export const dateArrayToSimply = (dateArray) => {
  const MonthTemp = getLang() === 'th' ? Month : MonthEN;
  const day = dateArray[0] === '-' ? '00' : dateArray[0].padStart(2, '00')
  const month = dateArray[1] === '-' ? '00' : (MonthTemp.findIndex((element) => element === dateArray[1]) + 1).toString().padStart(2, '00')
  const year = getLang() === 'th' ? parseInt(dateArray[2]) - 543 : dateArray[2]
  return `${year}${month}${day}`
}

export const simplyToDateArray = (dateText) => {
  return [getDay(dateText.substr(6, 2)).toString(), getMonth(dateText.substr(4, 2)), getYear(dateText.substr(0, 4)).toString()]
}


export const getDefautlDateTime = (defaultDate) => {
  if (defaultDate) {
    return [defaultDate.substr(6, 2), getMonth(defaultDate.substr(4, 2)), (parseInt(defaultDate.substr(0, 4)) + ( getLang() == 'th' ? 543 : 0)).toString()]  
  } else {
    return simplyToDateArray(new Date(new Date()).toISOString().slice(0, 10).replace(/-/g, ''))
  }
}

export const getDayOfWeek = (dateString) => {
  const date = new Date(simplyToDateString(dateString))
  return date.getDay(date)
}

export const getDay = (day) => {
  return day === '00' ? "-" : parseInt(day)
}

export const getMonth = (month) => {
  return month === '00' ? "-" : getLang() === 'th' ? Month[parseInt(month) - 1] : MonthEN[parseInt(month) - 1]
}

export const getYear = (year) => {
  return getLang() === 'th' ? parseInt(year) + 543 : parseInt(year)
}

export const DDMMYYYYtoSimply = (data) => {
  const year = parseInt(data.substr(4, 4)) - (getLang() === 'th' ? 543 : 0)
  return `${year}${data.substr(2, 2)}${data.substr(0, 2)}`
}

export const simplyToDDMMYYYY = (data) => {
  const year = parseInt(data.substr(0, 4)) + (getLang() === 'th' ? 543 : 0)
  return `${data.substr(6, 2)}${data.substr(4, 2)}${year}`
}