
import _ from 'lodash';
import { getLang, getWord } from './LanguageService';
import numeral from 'numeral';
import moment from 'moment';
import 'moment/locale/th'
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { SystemSelector } from '../reducers/SystemReducer';

export const TypeName = 'NAME';
export const TypeLastname = 'LASTNAME';
export const TypePoint = 'POINT';
export const FullDay = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
export const FullDayEN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const Day = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
export const DayEN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const ShortDay = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
export const ShortDayEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const ShortDayEnCapital = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
export const Month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
export const ShortMonth = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
export const MonthEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const ShortMonthEN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const BangkokTh = "กรุงเทพมหานคร"

export const isValidEmail = (email) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9_%+-]+[.][A-Z0-9._%+-]+$/i)
export const cleanNumber = (text) => text.replace(/\D/g, '');
export const cleanText = (text) => text.replace(/[^a-zA-Z0-9ก-๙\s\-]/g, '');
export const cleanEmail = (text) => text.replace(/[^a-zA-Z0-9_@.\-\#\!\%\$\&\+\*\/\=\?\^\{\|\}\~\[\]]/g, '');
export const cleanThaiName = (text) => text.replace(/[^ก-๙\s\.]/g, '').trim();
export const ThaiNameForSort = (text) => text.replace(/^[ไใโเแ]/, '')
export const cleanTextNumber = (text) => text.replace(/[^a-zA-Z0-9]/g, '');

const MILISECOND = 1
const SECOND = MILISECOND * 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

export const isEmpty = (value) => {
    return (value === undefined || value == null || value.length <= 0) ? true : false;
}

export const cleanCurrency = (text, decimal) => {
    if (decimal) {
        const [full, dec] = text.split('.', 2)
        const dot = dec || text.match(/\./) ? '.' : ''
        return numeral(full.replace(/[^0-9]/g, '') || 0).format('0,0') + dot + (dec ? dec.replace(/\D/g, '') : '')
    }
    return numeral(text.replace(/\D/g, '') || 0).format('0,0')
}

export const cleanCurrencyFixDecimal = (text, decimal) => {
    if (decimal) {
        const [full, dec] = text.split('.', 2)
        const dot = dec ? `.${dec.substr(0, decimal)}`: text.match(/\./) ? '.' : ''
        return numeral(full.replace(/[^0-9]/g, '') || 0).format('0,0') + dot
    }
    return numeral(text.replace(/\D/g, '') || 0).format('0,0')
}

export const NormalDateString = (date) => {
    date = new Date(date);
    let newDate = '';
    newDate += (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()) + ' ';
    newDate += (getLang() == 'th' ? Month[date.getMonth()] : MonthEN[date.getMonth()]) + ' ';
    newDate += (getLang() == 'th' ? (date.getFullYear() + 543) : date.getFullYear());
    return newDate;
}

export const YearString = (year) => {
    const yearNum = parseInt(year)
    return getLang() == 'th' ? yearNum + 543 + "" : year;
}

export const LongDateString = (date,{ comma } = {}) => {
    date = new Date(date);
    let newDate = '';
    newDate = (getLang() == 'th' ? FullDay[date.getDay()] : FullDayEN[date.getDay()]) ;
    if (comma) {
        newDate += (getLang() == 'th' ? '' : ',')
    }
    newDate += ' '
    newDate += (getLang() == 'th' ? 'ที่ ' : '')
    newDate += date.getDate() + ' ';
    newDate += (getLang() == 'th' ? ShortMonth[date.getMonth()] : ShortMonthEN[date.getMonth()]) + ' ';
    newDate += date.getFullYear() + (getLang() == 'th' ? 543 : 0);
    return newDate;
}

export const ShortDateString = (date, { isShortYear } = {}) => {
    if (!date) { return '-' }
    date = new Date(date);
    let newDate = '';
    newDate += (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()) + ' ';
    newDate += (getLang() == 'th' ? ShortMonth[date.getMonth()] : ShortMonthEN[date.getMonth()]) + ' ';
    if (isShortYear) {
        let year = '' + (getLang() == 'th' ? (date.getFullYear() + 543) : date.getFullYear());
        newDate += year.substr(2, 2);
    } else {
        newDate += (getLang() == 'th' ? (date.getFullYear() + 543) : date.getFullYear());
    }
    return newDate;
}

export const ShortMonthYearString = (date) => {
    if (!date) { return '-' }
    date = new Date(date);
    let newDate = '';
    newDate += (getLang() == 'th' ? ShortMonth[date.getMonth()] : ShortMonthEN[date.getMonth()]) + ' ';
    let year = '' + (getLang() == 'th' ? (date.getFullYear() + 543) : date.getFullYear());
    newDate += year.substr(2, 2);
    return newDate;
}

export const shortenMonth = (long) => {
    const FullMonth = getLang() == 'th' ? Month : MonthEN
    const Shorten = getLang() == 'th' ? ShortMonth : ShortMonthEN
    return Shorten[_.indexOf(FullMonth, long)]
}

export const FormatFullDateTime = (date) => {
    if (!date || date?.trim() === "") {
        return "-";
    }
    // datetime = new Date(date);
    return moment(date).format('DD MMM YYYY | HH:mm:ss')
    // return moment(date).format('ll')
};

export const TimeString = (date) => {
    date = new Date(date);
    let timeString = date.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
    if (Platform.OS === 'android' && timeString.length > 5) {
        return timeString.substr(0, 5)
    } 
    return timeString
}

export const dateEN = (date) => {
    if (date == 99) return 'last date of month';
    if (10 < date && date < 20) return date + 'th';
    switch (date % 10) {
        case 1:
            return date + 'st';
        case 2:
            return date + 'nd';
        case 3:
            return date + 'rd';
        default:
            return date + 'th';
    }
}

const EngToThaiDay = (day) => {
    return FullDay[_.indexOf(FullDayEN, day)] || day
}

const ThaiToEngDay = (day) => {
    return FullDayEN[_.indexOf(FullDay, day)] || day
}

export const getDayList = () => {
    switch (getLang()) {
        case 'th':
            return FullDay;
        default:
            return FullDayEN;
    }
}

export const getSimpleDayList = () => {
    switch (getLang()) {
        case 'th':
            return Day;
        default:
            return DayEN;
    }
}

export const getShortDayList = () => {
    switch (getLang()) {
        case 'th':
            return ShortDay;
        default:
            return ShortDayEn;
    }
}

export const getShortMonthList = () => {
    switch (getLang()) {
        case 'th':
            return ShortMonth;
        default:
            return ShortMonthEN;
    }
}

export const getShortWorkDayList = () => {
    return getShortDayList().slice(1, -1)
}

export const getWorkDayList = () => {
    return getDayList().slice(1, -1)
}

export const getDayName = (day) => {
    switch (getLang()) {
        case 'th':
            return EngToThaiDay(day);
        default:
            return day;
    }
}

export const getDayENum = (day) => {
    switch (getLang()) {
        case 'th':
            return ThaiToEngDay(day);
        default:
            return day;
    }
}

// วันทำการสุดท้ายของเดือน
// ทุกวันจันทร์
// 1
/**
 * @param {string} params.wordingSuffix คำต่อท้าย day
 * @param {boolean} params.isDateOrdinal ใช้แสดงลำดับวันที่เฉพาะ en  display EX: 1st, 2nd
 */
export const cycleDate = (period, day, dateOfWeek, params) => {
    switch (period) {
        case 'M':
            return day != 99 ?  `${(getLang() === 'th' ? day : (params?.isDateOrdinal ? getDateOrdinal(day) : day))}${(!!params?.wordingSuffix ? params?.wordingSuffix : '')}` : getWord('last_work_day_of_month')
        case 'W':
            return `${getWord("dca_every_day").replace('{DAY}',getDayList()[ShortDayEnCapital.indexOf(dateOfWeek)])}`
        default:
            return '-';
    }
}

// Old version from ROA
// export const cycleDate = (period, day, dateOfWeek) => {
//     switch (period) {
//         case 'Monthly':
//             return `${getLang() == 'th' ? 'ทุกวัน' : 'every '}${(!day) ? ' -' : getLang() == 'en' ? dateEN(day) : day != 99 ? 'ที่ ' + day : 'ทำการสุดท้าย'}`;
//         case 'Weekly':
//             return `${getLang() == 'th' ? 'ทุก' : 'every '}${(!dateOfWeek) ? ' -' : getLang() == 'th' ? EngToThaiDay(dateOfWeek) : dateOfWeek}`;
//         default:
//             return '-';
//     }
// }

const replaceRealTime = (text, format, limit, mask) => {
    let replace = "";
    _.forEach(text, (char, index) => {
        if (index >= limit) { return replace; }
        const item = _.find(format, spec => spec.index == index)
        if (item) {
            replace += (item.char + char);
        } else {
            if (mask?.find(obj => obj == index)) {
                replace += 'X';
            } else {
                replace += char;
            }
        }
    })
    return replace;
}

/**
 * if mobile number store in database as Thai universal format (+66)
 * change 66 to 0 and limit length to 10
 * @param {string} number 
 * @returns {string}
 */
export const phoneNumberThUniversalToLocal = (number) => {
    if (isEmpty(number)) {
        return number
    }
    const first = number[0];
    const second = first != undefined ? number[1] : undefined;

    if (first === '6' && second === '6' && number?.length >= 11) {
        return `0${number.substring(2)}`.substring(0, 10)
    } else {
        return number
    }
}

export const PhoneNumberFormat = (number) => {
    let format, limit;
    if (isEmpty(number)) {
        return number
    }
    const first = number[0];
    if (first == '0') {
        format = [
            { index: 3, char: '-' },
            { index: 6, char: '-' }
        ]
        limit = 10;
    } else {
        format = [
            { index: 0, char: '0' },
            { index: 2, char: '-' },
            { index: 5, char: '-' }
        ]
        limit = 9;
    }
    return replaceRealTime(number, format, limit)

}

export const PhoneNumberUniversalFormat = (number) => {
    let format, limit;
    if (isEmpty(number)) {
        return number
    }
    const first = number[0];
    const second = first != undefined ? number[1] : undefined;
    if (first == '0') {
        if (second == '2') {
            format = [
                { index: 0, char: '(' },
                { index: 2, char: ') ' },
                { index: 5, char: ' - ' },
            ]
            limit = 9;
        } else {
            format = [
                { index: 0, char: '(' },
                { index: 3, char: ') ' },
                { index: 6, char: ' - ' },
            ]
            limit = (second && second.match(/[9876]/)) ? 10 : 9;
        }
    } else {
        format = [
            { index: 0, char: '(+' },
            { index: 2, char: ') ' },
            { index: 4, char: ' ' },
            { index: 7, char: ' ' },
        ]
        limit = 11;
    }


    return replaceRealTime(number, format, limit)
}

export const PhoneNumberMasking = (number) => {
    first = number.substr(0, number.length - 4)
    second = number.substr(number.length - 4)
    first = first.replace(/[\d]/ig, 'x')
    return first + second
}

export const PhoneNumberMaskingDash = (number) => {
    first = number.substr(0, number.length - 4)
    second = number.substr(number.length - 4)
    first = first.replace(/[\d]/ig, 'x')
    result = first + second
    const format = [
        { index: 3, char: '-' },
        { index: 6, char: '-' },
    ]
    return replaceRealTime(result, format, 12)
}

export const CitizenMasking = (id) => {
    first = id.substr(0, id.length - 4)
    second = id.substr(id.length - 4)
    first = first.replace(/[\d]/ig, 'x')
    return first + second
}

export const EWalletMasking = (id) => {
    first = id.substr(0, 3)
    second = id.substr(3, 8)
    third = id.substr(11)
    second = second.replace(/[\d]/ig, 'x')
    return first + second + third
}

export const EWalletFormat = (id) => {
    const format = [
        { index: 3, char: '-' },
        { index: 11, char: '-' },
    ]
    return replaceRealTime(id, format, 15)
}

export const CitizenFormat = (id) => {
    const format = [
        { index: 1, char: '-' },
        { index: 5, char: '-' },
        { index: 10, char: '-' },
        { index: 12, char: '-' }
    ]
    return replaceRealTime(id, format, 13)
}

export const LaserIDFormat = (id, flag) => {
    const format = [
        { index: 3, char: '-' },
        { index: 10, char: '-' }
    ]
    const mask = flag ? [4, 5, 6, 7, 8, 9] : null
    return replaceRealTime(id, format, 12, mask)
}

export const CreditCardFormat = (number) => {
    const format = [
        { index: 4, char: '  ' },
        { index: 8, char: '  ' },
        { index: 12, char: '  ' },
    ]
    return replaceRealTime(number, format, 16)
}

export const BankAccountMasking = (number) => {
    if (!number) return number
    first = number.substr(0, 4)
    second = number.substr(4, 5)
    third = number.substr(9, number?.length || 1)
    first = first.replace(/[\d]/ig, 'x')
    third = third.replace(/[\d]/ig, 'x')
    return first + second + third
}

export const BankAccountFormat = (number) => {
    const format = [
        { index: 3, char: '-' },
        { index: 4, char: '-' },
        { index: 9, char: '-' },
        { index: 10, char: '-' },
    ]
    return replaceRealTime(number, format, 15)
}

export const UnitHolderFormat = (number) => {
    const format = [
        { index: 3, char: '-' },
        { index: 4, char: '-' },
        { index: 9, char: '-' },
    ]
    return replaceRealTime(number, format, 10)
}

export const DateFormat = (date) => {
    const format = [
        { index: 2, char: '/' },
        { index: 4, char: '/' },
    ]
    return replaceRealTime(date, format, 8)
}

export const checkID = (id) => {
    if (id.length != 13) return false;
    for (i = 0, sum = 0; i < 12; i++)
        sum += parseFloat(id.charAt(i)) * (13 - i); if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12)))
        return false; return true;
}

export const roundNumber = (num) => Math.round(num * 100) / 100
// export const roundNumber = (num) =>  num.toFixed(2)

export const dateStringToSimply = (date) => {
    return new Date(date).toISOString().slice(0, 10).replace(/-/g, "")
}

export const dateIsoToSimplyTime = (date) => {
    const time = date.split('T')[1] || ''
    const timeString = time.slice(0, 5) || ''
    const simplyTime = timeString.replace(':', '') || ''
    return simplyTime
}

export const simplyToDate = (dateText) => {
    return dateText && dateText != "" ? dateText.substr(6, 2) : null
}

export const simplyToMonth = (dateText) => {
    return dateText && dateText != "" ? dateText.substr(4, 2) : null
}

export const simplyToYear = (dateText) => {
    return dateText && dateText != "" ? dateText.substr(0, 4) : null
}

export const simplyToDateString = (dateText) => {
    return dateText && dateText != "" ? dateText.substr(0, 4) + '-' + dateText.substr(4, 2) + '-' + dateText.substr(6, 2) : null
}

export const simplyToTimeString = (timeText) => {
    return timeText && timeText != "" ? timeText.substr(0, 2) + ':' + timeText.substr(2, 2): null
}

export const simplyToDateTimeObject = (dateText) => {
    const dateString = dateText && dateText != "" ? (
        dateText.substr(0, 4) + '-' + dateText.substr(4, 2) + '-' + dateText.substr(6, 2) + 'T' + dateText.substr(8, 2) + ':' + dateText.substr(10, 2) + ':' + dateText.substr(12, 2)
    ) : (
        null
    )
    return new Date(dateString)
}

export const simplyToDateTimeStringHHMM = (dateText) => {
    return dateText && dateText != "" ? dateText.substr(8, 2) + ':' + dateText.substr(10, 2) : null
}

export const simplyTimeToTimeStringHHMM = (dateText) => {
    return dateText && dateText != "" ? dateText.substr(0, 2) + ':' + dateText.substr(2, 2) : null
}

export const simplyTimeToTimeStringHHMMSS = (dateText) => {
    return dateText && dateText != "" ? dateText.substr(0, 2) + ':' + dateText.substr(2, 2) + ':' + dateText.substr(4, 2) : null
}

export const simplyDateTimeToShortDateTimeString = (dateText) => {
    return `${ShortDateString(simplyToDateString(dateText))} | ${simplyToDateTimeStringHHMM(dateText)}`
}

export const simplyToDateStringDDMMYYY = (dateText) => {
    return dateText && dateText != "" ? dateText.substr(6, 2) + '-' + dateText.substr(4, 2) + '-' + dateText.substr(0, 4) : null
}

export const simplyBuddhistToGregorian = (dateText) => {
    return dateText && dateText != "" ? (parseInt(dateText.substr(0, 4)) - 543) + dateText.substr(4, 6) : null
}

export const timeStringToTimeFormat = (timeString) => {
    return timeString && timeString != "" ? timeString.substr(0, 2) + ":" + timeString.substr(2, 4) : null
}

export const maxRiskLevel = (investor) => {
    if (investor === 1) {
        return 1
    } else if (investor === 2) {
        return 4
    } else if (investor === 3) {
        return 5
    } else if (investor === 4) {
        return 7
    }
    return 9
}

export const riskLevelText = (investor) => {
    if (investor === 1) {
        return "1"
    } else if (investor === 2) {
        return "1-4"
    } else if (investor === 3) {
        return "1-5"
    } else if (investor === 4) {
        return "1-7"
    }
    return "8+"
}

export const paramsToProps = (Page) => {
    return (props) => {
        const { updateLayout } = useSelector(SystemSelector) // force update
        const { route } = props
        props = { updateLayout: updateLayout, ...props, ...route?.params }
        return Page(props)
    }
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
export const Base64 = {
    btoa: (input = '') => {
        let str = input;
        let output = '';

        for (let block = 0, charCode, i = 0, map = chars;
            str.charAt(i | 0) || (map = '=', i % 1);
            output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

            charCode = str.charCodeAt(i += 3 / 4);

            if (charCode > 0xFF) {
                throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            }

            block = block << 8 | charCode;
        }

        return output;
    },

    atob: (input = '') => {
        let str = input.replace(/=+$/, '');
        let output = '';

        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (let bc = 0, bs = 0, buffer, i = 0;
            buffer = str.charAt(i++);

            ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
        ) {
            buffer = chars.indexOf(buffer);
        }

        return output;
    }
};

export const mapAddressKey = (key, address) => {
    switch (key) {
        case 'subDistrict':
            return address?.subdistrict_th ? 'subdistrict_th' : address?.subdistrict_en ? 'subdistrict_en' : 'subDistrict'
        case 'district':
            return address?.district_th ? 'district_th' : address?.district_en ? 'district_en' : 'district'
        case 'province':
            return address?.province_th ? 'province_th' : address?.province_en ? 'province_en' : 'province'
        default:
            return key
    }
}

export const getFullAddress = (address) => {
    let fullAddress = address?.addressName ? `${address?.addressName}` : "";
    // fullAddress += " " +  `${address.addressNumber}`;

    // (number and addressNumber is same)
    const addressKey = ['addressNumber', 'moo', 'building', 'room', 'floor', 'soi', 'road', 'village', 'subDistrict', 'district', 'province'/*, 'country', 'phoneNumber'*/, 'zipCode']

    address.addressNumber = address?.addressNumber || address?.number
    
    addressKey.forEach(key => {
        const mapKey = mapAddressKey(key, address)
        if (!!address?.[mapKey]) {
            switch (key) {
                // case "number":
                //     fullAddress += fullAddress === "" ? getWord("address_number"): ` ${getWord("address_number")}`;
                //     break;
                case "addressNumber":
                    fullAddress += fullAddress === "" ? getWord("address_number"): ` ${getWord("address_number")}`;
                    break;
                case "moo":
                    fullAddress += " " + getWord("moo");
                    break;
                case "building":
                    fullAddress += ` ${getWord("village")}/${getWord("building")}`;
                    break;
                // case "village":
                //     fullAddress += " " + getWord("village");
                //     break;
                case "room":
                    fullAddress += " " + getWord("room");
                    break;
                case "floor":
                    fullAddress += " " + getWord("floor");
                    break;
                case "soi":
                    fullAddress += " " + getWord("soi");
                    break;
                case "road":
                    fullAddress += " " + getWord("road");
                    break;
                case "subDistrict":
                    fullAddress += ` ${getWord('sub_district')}`
                    // fullAddress += " " + (address.province_th === BangkokTh ? getWord("sub_district_bangkok") : getWord("sub_district_non_bangkok"));
                    break;
                case "district":
                    fullAddress += ` ${getWord('district')}`
                    // fullAddress += " " + (address.province_th === BangkokTh ? getWord("district_bangkok") : getWord("district_non_bangkok"));
                    break;
                case "province":
                    fullAddress += " " + getWord("province");
                    break;
                case "zipCode":
                    fullAddress += " " + getWord("postal_number");
                    break;
                default:
                    break;
            }
            fullAddress += " " + address[mapKey];
        }
    })
    return fullAddress;
}

export const checkSumCardId = (text) => {
    if (text) {
        let count = 13
        let sum = 0
        let index = 0
        const cleanText = text.replace(/[\D]/ig, '')
        const num = cleanText.split("")

        while (count >= 2) {
            sum += num[index] * count
            count--
            index++
        }
        const result = 11 - (sum % 11)
        return (result % 10) == num[12]
    }
    return false
}

export const getTimeString = (text) => {
    const newText = JSON.stringify(text)
    if (newText.length <= 1) {
        return "0" + newText
    }
    return newText
}

export const calculateOTPLockTime = (time) => {
    if (new Date(time).getTime() > new Date().getTime()) {
        const diffTime = (new Date(time) - new Date())
        const newTime = {
            minute: (Math.floor((diffTime % HOUR) / MINUTE)),
            second: (Math.floor((diffTime % MINUTE) / SECOND))
        }
        return `${getTimeString(newTime.minute)}:${getTimeString(newTime.second)}`
    } else {
        const newTime = {
            hour: 0,
            minute: 0,
            second: 0,
            milisecond: 0
        }
        return `${getTimeString(newTime.minute)}:${getTimeString(newTime.second)}`
    }
}

export const round2Digit = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
}

export const accountTypeToString = (accountType) => {
    switch (accountType) {
      case 'D':
        return getWord("current_account_type")
      case 'S':
        return getWord("saving_account_type")
      case 'X':
        return getWord("tax_free_account_type")
      case 'T':
        return getWord("setting_saving")
      default:
        return getWord("setting_saving")
    }
  }

export const extractYoutubeVideoId = (videoLink) => {
    if (isEmpty(videoLink)) {
        return null
    }
    const urlEx = videoLink.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (urlEx[2]!== undefined)?urlEx[2].split(/[^0-9a-z_\-]/i)[0]:null
}

export function getAge(dateString, { yearOnly } = {}) {
    var today = new Date();
    if (yearOnly) {
        birthYear = dateString.substr(0, 4)
        return today.getFullYear() - birthYear
    }
    
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export function getMonthDifference(start, end) {
    var startDate = new Date(start)
    var endDate = new Date(end)

    return (
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear())
    );
}

export const convertToYYYYMMDD = (date) => {
    return date ? date.replace(/[\D]/ig, '') : date
}

export const getDefaultBirthDate = (birthdate) => {
    const currentDate = new Date();
    const beforeCurr = currentDate.setFullYear(currentDate.getFullYear() - 20)
    var d = new Date(beforeCurr),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
  
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
  
    return birthdate ? birthdate.split('-').join('') : [year, month, day].join('')
}

export const getDefaultDate = () => {
    const currentDate = new Date();
    const beforeCurr = currentDate.setFullYear(currentDate.getFullYear())
    var d = new Date(beforeCurr),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('');
  }

export const checkInputEN = (text) => {
    return text ? /^[a-zA-Z\s]+$/.test(text) : ''
}
  
export const displayProfitLossValue = (value, percentage) => {
    const profitLossValue = numeral(value || 0).format('+0,0.00')
    if (value < 0 && numeral(numeral(percentage || 0).format('0,0.00')).value() == 0) {
      return  `${profitLossValue} (-${numeral(percentage || 0).format('0,0.00')}%)`
    } else {
      return `${profitLossValue} (${numeral(percentage || 0).format('+0,0.00')}%)`
    }
}

export const getLangKey = (field) => {
    if (getLang() === 'th') {
      return field + 'Th';
    }
    return field + 'En';
  };

export const getLangAddressKey = (key) => {
    switch (key) {
        case 'subDistrict':
            return getLang() === 'th' ? 'subdistrict_th' : 'subdistrict_en'
        case 'district':
            return getLang() === 'th' ? 'district_th' : 'district_en'
        case 'province':
            return getLang() === 'th' ? 'province_th' : 'province_en'
        default:
            return key
    }
};


export const getDateOrdinal = (date) => {
    if(typeof date === 'number') {
        const dateString = String(date);
        const last = + dateString.slice(-2);
        if (last > 3 && last < 21) return dateString + 'th';
        switch (last % 10) {
        case 1:  return dateString + "st";
        case 2:  return dateString + "nd";
        case 3:  return dateString + "rd";
        default: return dateString + "th";
        } 
    } else {
        return date || "-"
    }
  }