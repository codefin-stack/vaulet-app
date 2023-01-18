const patchLocal = {
  version: {
    patchVersion: '1.0',
  },
  config: {
    "minimum_invest": 1000,
    "max_buy_mutaul": 50000000,
    "max_transfer_out": 2000000,
    "limit_step": 10000,
    "max_risk_level": 5,
    "compare_limit": 15,
    "approve_day": "1",

    "switch_language": false,
  },
  dictionary: {
    // Start legacy key using in old version of mobile
    // please ignore this section
    "fund_recommend": {
      "th": "กองทุนแนะนำ",
      "en": "Recommend"
    },
    "order_after": {
      "en": "Order after cut-off time",
      "th": "คำสั่งหลังเวลา"
    },
    "or_in_holiday": {
      "en": ", or on fund holiday will be effective on the next business day.",
      "th": "น. หรือในวันหยุดกอง"
    },
    "first_all_transaction_will_available_next": {
      "en": "The system will immediately",
      "th": "ระบบจะดำเนินการตัดเงินจากบัญชีเข้าพอร์ตลงทุน"
    },
    "second_all_transaction_will_available_next": {
      "en": "deduct money from the payment account.",
      "th": "ทันทีเพื่อทำรายการซื้อกองทุน ตามแผนการลงทุน"
    },
    "expected_retirement_age_placeholder": {
      "th": "ระบุอายุที่คาดว่าจะเกษียณ",
      "en": "Please specify"
    },
    "spending_after_retirement_until_placeholder": {
      "th": "ระบุหลังเกษียณคาดว่าจะใช้เงินจนถึงอายุ",
      "en": "Please specify"
    },
    "spending_after_retirement_per_month_placeholder": {
      "th": "ระบุหลังเกษียณต้องการใช้เงินเดือนละ",
      "en": "Please specify"
    },
    "first_investment_placeholder": {
      "th": "ระบุเงินที่พร้อมลงทุนครั้งแรก",
      "en": "Please specify"
    },
    "minimum_purchase_value": {
      "th": "มูลค่าการซื้อขั้นต่ำ (บาท)",
      "en": "Minimum (THB)"
    },
    "expect_retirement_money_placeholder": {
      "th": "ระบุคาดการณ์เงินที่ต้องมีหลังเกษียณ",
      "en": "Please specify"
    },
    "spending_after_retirement_per_month_info": {
      "th": "โดยทั่วไปหลังเกษียณ คุณจะใช้จ่ายเงินต่อเดือนอยู่ที่ประมาณ 70% ของค่าใช้จ่ายก่อนเกษียณอายุ แต่สามารถปรับเปลี่ยนได้ตามความเหมาะสมขึ้นอยู่กับ Lifestyle และ ภาระค่าใช้จ่าย (โดยระบบจะนำค่านี้มาปรับค่าด้วยอัตราเงินเฟ้อจนถึงวันที่คุณเกษียณ)",
      "en": "Generally after retirement your expense will be approximately 70% of your monthly expenses before retirement. However this can be adjusted according lifestyle and expenses. (This value will be adjusted with inflation rate.)"
    },
    "spending_after_retirement_until_info": {
      "th": "อายุขัยคาดการณ์โดยเฉลี่ย 85 ปี",
      "en": "Average life expectancy is 85 years"
    },
    "inflation_rate_info": {
      "th": "อัตราเงินเฟ้อโดยเฉลี่ย อยู่ที่ระหว่าง 0.5% - 3.0% ต่อปี",
      "en": "The average inflation rate is 0.5% - 3% p.a."
    },
    "retirement_return_rate_info": {
      "th": "หลังเกษียณ คุณควรวางแผนออมหรือลงทุนในทางเลือกที่ให้ผลตอบแทนสูงกว่าอัตราเงินเฟ้อ ทั้งนี้เพื่อป้องกันไม่ให้ค่าของเงินหรืออำนาจซื้อในอนาคตของคุณลดลง",
      "en": "After retirement, you should plan to save or invest in low risk savings or investment that offers higher returns than inflation to prevent the decline of purchasing power."
    },
    "plan": {
      "th": "แผน",
      "en": "plan"
    },
    "robo_investment_universe_acceptance_description_1": {
      "en": "N/A",
      "th": "ธนาคารจะมีการแนะนำสัดส่วนการลงทุนที่เหมาะสมกับสถานการณ์การลงทุนและระดับความเสี่ยงที่ลูกค้าเลือก เพื่อการลงทุนอย่างมีประสิทธิภาพ โดยทีมงานผู้เชี่ยวชาญด้านการลงทุนทำหน้าที่คัดเลือกกลุ่มกองทุนที่มีแนวทางการบริหารเหมาะสมในการเป็นตัวแทนของทรัพย์สินแต่ละประเภททั้งนี้อาจมีการเปลี่ยนแปลงตามความเหมาะสม\n\nโดยกลุ่มกองทุนรวมที่จะถูกนำไปใช้ในการพิจารณาการลงทุน (Investment Universe) ให้กับคุณในอนาคต มีดังต่อไปนี้\n"
    },
    "robo_investment_universe_acceptance_description_2": {
      "en": "N/A",
      "th": "คุณสามารถดูข้อมูลกองทุนในกลุ่มพิจารณาการลงทุนในภายหลัง ได้ที่ เมนูตั้งค่าของพอร์ต"
    },
    "alert_minimum_to_maintain_dialog_1": {
      "en": "Sorry, the ending balance (after the transaction) ",
      "th": "ขออภัย จำนวนเงินคงเหลือในบัญชีหลังจากทำ"
    },
    "alert_minimum_to_maintain_dialog_2": {
      "en": "cannot be less than ",
      "th": "ธุรกรรม ต้องไม่น้อยกว่าจำนวนเงินขั้นต่ำที่ต้อง"
    },
    "alert_minimum_to_maintain_dialog_3": {
      "en": "the required minimum balance of this account. ",
      "th": "คงค้างสำหรับบัญชีนี้"
    },
    "alert_dialy_cash_limit_dialog_1": {
      "en": "Sorry, the total buying amount exceeds ",
      "th": "ขออภัย คุณไม่สามารถซื้อกองทุนได้เกิน"
    },
    "alert_dialy_cash_limit_dialog_2": {
      "en": "the maximum buying limit. ",
      "th": "วงเงินซื้อต่อวัน คุณสามารถเปลี่ยนวงเงินได้"
    },
    "alert_dialy_cash_limit_dialog_3": {
      "en": "N/A",
      "th": "สูงสุด {50 ล้าน} บาท ที่เมนูตั้งค่า"
    },
    "SettingSelector": {
      "en": "Manage My Personal Information",
      "th": "จัดการข้อมูลส่วนตัว"
    },
    "warning": {
      "en": "Warning",
      "th": "คำเตือน"
    },
    "receive_date_information_not_new_line": {
      "en": "The Estimated Receiving Date may be changed depending on the operation of the AMCs.",
      "th": "วันที่คาดว่าจะได้รับเงิน เป็นเพียงการประมาณการเท่านั้น ทั้งนี้อาจมีการเปลี่ยนแปลงได้ ขึ้นอยู่กับ บลจ. ดำเนินการ"
    },
    "robo_withdraw_description_1_1": {
      "en": "After the investment withdrawal, if the port has a value less than  ",
      "th": "หลังการถอนเงินลงทุน หากเงินลงทุนเหลือน้อยกว่า"
    },
    "robo_withdraw_description_1_2": {
      "en": "THB, the system will  force selling all outstanding units.",
      "th": "บาท ธนาคารจะถอนเงินลงทุนทั้งหมดในพอร์ตลงทุนของคุณ"
    },
    "robo_withdraw_sub_description_3": {
      "en": "N/A",
      "th": "กรณีขอรับเงินก้อนเดียว เงินค่าขายคืนแต่ละกองจะได้รับดอกเบี้ยเงินฝากจนกว่าจะได้รับเงินครบทั้งก้อน"
    },
    "net_assets": {
      "th": "มูลค่าทรัพย์สินสุทธิ",
      "en": "Net Assets"
    },
    "setting_pin_donot_match": {
      "en": "PIN does not match. Please try again.",
      "th": "PIN ไม่ตรงกัน โปรดลองอีกครั้ง"
    },
    "setting_consent_noti": {
      "en": "Do you want to leave this screen without saving?",
      "th": "คุณกำลังจะออกจากขั้นตอนการกำหนดการแจ้งตือน กำไร/ขาดทุน โดยที่ยังไม่ได้บันทึกการเปลี่ยนแปลง"
    },
    "edit_plan": {
      "th": "แก้ไขข้อมูลแผน",
      "en": "Edit Port Name"
    },
    "confirm_cancel": {
      "en": "Do you want to cancel the order?",
      "th": "ยืนยันยกเลิก"
    },
    "current_port_value__forward": {
      "en": "Current Market Value (THB)",
      "th": "มูลค่าพอร์ตปัจจุบันยกมา"
    },
    // End legacy key using in old version of mobile


    "login": {
      "en": "Login",
      "th": "เข้าสู่ระบบ"
    },
    "enter_pin": {
      "en": "Please enter PIN",
      "th": "โปรดใส่ PIN"
    },
    "register": {
      "en": "Register",
      "th": "ลงชื่อเข้าใช้"
    },
    "new_register": {
      "en": "Sign Up",
      "th": "ลงทะเบียนสมาชิกใหม่"
    },
    "close": {
      "en": "Close",
      "th": "ปิด"
    },
    "ok": {
      "en": "OK",
      "th": "ตกลง"
    },
    "cancel": {
      "en": "Cancel",
      "th": "ยกเลิก"
    },
    "cancel_item": {
      "en": "Cancel",
      "th": "ยกเลิกรายการ"
    },
    "ignore_item": {
      "en": "Ignore",
      "th": "ยกเลิกรายการ",
    },
    "cancel_retry": {
      "en": "Cancel",
      "th": "ยกเลิกการลองอีกครั้ง"
    },
    "reset": {
      "en": "Reset",
      "th": "รีเซ็ต"
    },
    "reset_pin": {
      "en": "Reset PIN",
      "th": "รีเซ็ต PIN"
    },
    "try_again": {
      "th": "ลองอีกครั้ง",
      "en": "Retry"
    },
    "login_title": {
      "en": "Login to Applicaiton",
      "th": "เข้าใช้งานแอพพลิเคชั่น"
    },
    "login_failed": {
      "th": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
      "en": "invalid username or password."
    },
    "loading": {
      "en": "Loading",
      "th": "กำลังโหลด"
    },
    "reading": {
      "en": "Reading",
      "th": "อ่านบัตร"
    },
    "read_card": {
      "en": "Read Card",
      "th": "อ่านบัตร"
    },
    "call": {
      "en": "Call",
      "th": "โทร"
    },
    "reject": {
      "en": "Reject",
      "th": "ส่งกลับ"
    },
    "back": {
      "en": "Back",
      "th": "กลับ"
    },
    "go_back": {
      "en": "Back",
      "th": "ย้อนกลับ"
    },
    "logout": {
      "en": "Logout",
      "th": "ออกจากระบบ"
    },
    "confirm_logout": {
      "en": "Confirm To Logout",
      "th": "ต้องการออกจากระบบ"
    },
    "touch_id": {
      "en": "Touch ID",
      "th": "Touch ID"
    },
    "error_topic": {
      "en": "Alert",
      "th": "ขออภัย"
    },
    "male": {
      "en": "Male",
      "th": "ชาย"
    },
    "female": {
      "en": "Female",
      "th": "หญิง"
    },
    "citizenId_mismatch": {
      "en": "CitizenId mismatch",
      "th": "บัตรประชาชนไม่ตรงกับระบบ"
    },
    "dark_mode": {
      "en": "Dark Mode",
      "th": "โหมดกลางคืน"
    },
    "change_lang": {
      "en": "Language",
      "th": "เปลี่ยนภาษา"
    },
    "select_placeholder": {
      "en": "Please selelct",
      "th": "กรุณาเลือก"
    },
    "th": {
      "en": "Thai",
      "th": "ไทย"
    },
    "en": {
      "en": "English",
      "th": "อังกฤษ"
    },
    "setting": {
      "en": "Setting",
      "th": "ตั้งค่าระบบ"
    },
    "lists": {
      "en": "List",
      "th": "รายชื่อ"
    },
    "operation_completed": {
      "en": "Operation completed",
      "th": "ดำเนินการสำเร็จ"
    },
    "goto_homepage": {
      "en": "Back to HomePage",
      "th": "กลับสู่หน้าหลัก"
    },
    "send": {
      "en": "Send",
      "th": "ส่ง"
    },
    "lh_bank_m_choice": {
      "en": "LH Bank M Choice",
      "th": "LH Bank M Choice"
    },
    "lh_bank_debit_card": {
      "en": "LH Bank Debit Card",
      "th": "LH Bank Debit Card"
    },
    "username": {
      "en": "Username",
      "th": "Username"
    },
    "username_placeholder": {
      "en": "Create Username",
      "th": "ตั้ง Username"
    },
    "password": {
      "en": "Password",
      "th": "Password"
    },
    "password_placeholder": {
      "en": "Create Password",
      "th": "ตั้ง Password"
    },
    "confirm_password": {
      "en": "Confirm Password",
      "th": "ยืนยัน Password"
    },
    "confirm_password_placeholder": {
      "en": "Reconfirm Password",
      "th": "ยืนยัน Password อีกครั้ง"
    },
    "incorrect_password": {
      "en": "Incorrect password",
      "th": "ใส่รหัสไม่ถูกต้อง"
    },
    "optional_register": {
      "en": "Or Sign Up With",
      "th": "หรือ ลงทะเบียนผ่าน"
    },
    "enter_username": {
      "en": "Enter Username",
      "th": "กรอก Username"
    },
    "enter_password": {
      "en": "Enter Password",
      "th": "กรอก Password"
    },
    "already_register": {
      "en": "Already have an Account",
      "th": "ลงทะเบียนแล้ว",
    },
    "not_register_yet": {
      "en": "Haven't signed up?",
      "th": "ยังไม่ได้ลงทะเบียน?",
    },
    "forget_username_password_question": {
      "en": "Forgot Username/Password?",
      "th": "ลืม Username/Password?",
    },
    "username_properties_1": {
      "en": "Must be between 6 to 20 characters",
      "th": "ความยาว 6-20 ตัวอักษร",
    },
    "username_properties_2": {
      "en": "Must be a combination of letter and number",
      "th": "ประกอบด้วยภาษาอังกฤษ หรือ ตัวเลข",
    },
    "username_properties_error_1": {
      "en": "Username already exists",
      "th": "Username มีอยู่แล้วในระบบ โปรดกำหนด Username อีกครั้ง",
    },
    "username_properties_error_2": {
      "en": "Username format invalid",
      "th": "Username ไม่ถูกต้องตามรูปแบบ",
    },
    "password_properties_error_1": {
      "en": "Password format invalid",
      "th": "Password ไม่ถูกต้องตามรูปแบบ",
    },
    "confirm_password_properties_error_1": {
      "en": "Passwords didn't match. Try again.",
      "th": "Password ไม่ตรงกัน กรุณาลองอีกครั้ง",
    },
    "password_properties_1": {
      "en": "Must be between 8 to 30 characters.",
      "th": "ความยาว 8-30 ตัวอักษร",
    },
    "password_properties_2": {
      "en": "Must contain at least 3 of the following criteria:",
      "th": "ประกอบด้วยประเภทของตัวอักษร 3 ใน 4 ประเภทดังนี้",
    },
    "password_properties_2_1": {
      "en": "at least one uppercase or capital letter (ex: A, B, etc.)",
      "th": "ตัวพยัญชนะตัวใหญ่ เช่น A, B เป็นต้น",
    },
    "password_properties_2_2": {
      "en": "at least one lowercase letter (ex: a, b, etc.)",
      "th": "ตัวพยัญชนะตัวเล็ก เช่น a, b เป็นต้น",
    },
    "password_properties_2_3": {
      "en": "at least one digit of number (ex: 0, 1, 2, etc.)",
      "th": "ตัวเลข เช่น 0, 1, 2 เป็นต้น",
    },
    "password_properties_2_4": {
      "en": "at least one special character (ex:!, $, #, %, ect.) ",
      "th": "อักขระพิเศษ เช่น !, $, #, % เป็นต้น",
    },
    "password_properties_3": {
      "en": "Must not be the same with Username.",
      "th": "ห้ามซ้ำกับ Username",
    },
    "password_properties_4": {
      "en": "Must not contain any three identical consecutive characters (ex: AAA, 111, etc.)",
      "th": "ห้ามมีอักษร หรือ ตัวเลข ซ้ำกันตั้งแต่ 3 ตัวขึ้นไป เช่น AAA, 111",
    },
    "continue": {
      "en": "Continue",
      "th": "ดำเนินการต่อ",
    },
    "next": {
      "en": "Next",
      "th": "ดำเนินการต่อ",
    },
    "notification": {
      "en": "Notification",
      "th": "แจ้งเตือน",
    },
    "alert": {
      "en": "Alert",
      "th": "แจ้งเตือน",
    },
    "notification_detail": {
      "en": "You have already signed up. Please sign in with your Username/Password.",
      "th": "คุณมี Username/Password ของ Profita อยู่แล้ว โปรดลงชื่อเข้าใช้ ด้วย Username/Password ของคุณ",
    },
    "already_have_username_password": {
      "en": "You have already signed up. Please sign in with your Username/Password.",
      "th": "คุณมี Username/Password ของ Profita อยู่แล้ว โปรดลงชื่อเข้าใช้ ด้วย Username/Password ของคุณ",
    },
    "sorry_cannot_register": {
      "en": "Sorry, you cannot sign up the account for using the appliction.",
      "th": "ขออภัย คุณไม่สามารถเปิดบัญชี\nใช้งานแอปพลิเคชันได้",
    },
    "sorry_cannot_proceed_signup_request": {
      "en": "Sorry, we cannot proceed your sign up request.",
      "th": "ขออภัย คุณไม่สามารถลงทะเบียนใช้งานแอปพลิเคชันได้",
    },
    "sorry_invalid_pin_exceed_limit": {
      "en": "Sorry, you have entered incorrect PIN exceeding the limit ",
      "th": "ขออภัย คุณใส่ PIN ไม่ถูกต้อง เกินจำนวนครั้งที่กำหนด",
    },
    "mchoice_unauthorized": {
      "en": "Sorry, unable to verify your identity \nfor Profita registration \nthrough LH Bank M Choice.",
      "th": "ขออภัย ไม่สามารถยืนยันตัวตน\nเพื่อลงทะเบียน Profita\nผ่าน LH Bank M Choice ได้",
    },
    "mchoice_unauthorized_error_code": {
      "en": "9002",
      "th": "9002",
    },
    "mchoice_not_allow": {
      "en": "Sorry, unable to verify your identity \nfor Profita registration \nthrough LH Bank M Choice.",
      "th": "ขออภัย ไม่สามารถยืนยันตัวตน\nเพื่อลงทะเบียน Profita\nผ่าน LH Bank M Choice ได้",
    },
    "mchoice_not_allow_error_code": {
      "en": "9003",
      "th": "9003",
    },
    "mchoice_not_ready": {
      "en": "Sorry, \nLH Bank M Choice is not ready \nfor registering Profita. ",
      "th": "ขออภัย\nสถานะ LH Bank M Choice ของคุณ\nไม่พร้อมใช้ลงทะเบียน Profita",
    },
    "mchoice_not_ready_error_code": {
      "en": "9001",
      "th": "9001",
    },
    "sorry_invalid_pin_exceed_bank_limit": {
      "en": "Sorry, You have entered invalid PIN exceeding the limit.",
      "th": "ขออภัย คุณใส่ PIN ไม่ถูกต้อง เกินจำนวนครั้งที่ธนาคารกำหนด",
    },
    "sorry_invalid_pin_remaining": {
      "en": "Sorry, You enter incorrect PIN. Prease try again",
      "th": "ขออภัย คุณใส่ PIN ไม่ถูกต้อง โปรดลองใหม่อีกครั้ง (คงเหลือ)",
    },
    "sorry_not_found": {
      "en": "Sorry, Authentication failed.",
      "th": "ขออภัย ไม่พบข้อมูลของคุณในระบบ",
    },
    "sorry_invalid_input_exceed_bank_limit": {
      "en": "Sorry, You have entered incorrect exceeding the limit.",
      "th": "ขออภัย คุณกรอกข้อมูลไม่ถูกต้อง เกินจำนวนครั้งที่ธนาคารกำหนด",
    },
    "sorry_incorrect_citizen": {
      "en": "Your ID card information is incorrect.\nPlease check again.",
      "th": "ข้อมูลบัตรประชาชนของคุณไม่ถูกต้อง\nโปรดตรวจสอบอีกครั้ง",
    },
    "user_not_found": {
      "en": "Authentication Failed",
      "th": "ไม่พบข้อมูลของคุณในระบบ",
    },
    "register_other_way": {
      "en": "Select other methods for sign up.",
      "th": "ลงทะเบียนด้วยวิธีอื่น",
    },
    "please_register_other_way": {
      "en": "Select other methods for sign up.",
      "th": "โปรดลงทะเบียนด้วยวิธีอื่น",
    },
    "please_call_center_if_question": {
      "en": "If you have any questions, please contact Call Center 1327",
      "th": "หากมีข้อสงสัยโปรดสอบถามข้อมูลเพิ่มเติมที่ Call Center 1327",
    },
    "please_select_other_authentication": {
      "en": "Please select other method for identification verification.",
      "th": "โปรดเลือกการยืนยันตัวตนด้วยวิธีการอื่น",
    },
    "new_login": {
      "en": "Sign In",
      "th": "ลงชื่อเข้าใช้",
    },
    "manual_page_header": {
      "en": "Sign Up Conditions",
      "th": "การลงทะเบียนใช้งาน",
    },
    "manual_page_info_1": {
      "en": "An investor must be an individual person, at least 20 years old and must not be a U.S. citizen.",
      "th": "ผู้ลงทุน ต้องเป็นบุคคลธรรมดา มีอายุ 20 ปีขึ้นไป และไม่มีสัญชาติอเมริกัน",
    },
    "manual_page_info_2": {
      "en": "Have Mutual Fund Account and Savings Account with LH Bank.",
      "th": "มีบัญชีลงทุน และ บัญชีออมทรัพย์ กับ LH Bank",
    },
    "manual_page_info_3": {
      "en": "If not, the accounts can be opened online via the application (for Thai citizens only).",
      "th": "หากยังไม่มี สามารถเปิดบัญชีแบบออนไลน์ได้ผ่านแอปพลิเคชัน (เฉพาะบุคคลที่มีสัญชาติไทยเท่านั้น)",
    },
    "manual_page_info_4": {
      "en": "An investor who does not have LH Bank M Choice or LH Bank Debit Card for authentication can choose either Counter Service 7-Eleven or National Digital ID (NDID) for identity verification.",
      "th": "สำหรับลูกค้าที่ไม่มีบัญชีผู้ใช้งาน LH Bank M Choice หรือ LH Bank Debit Card สามารถยืนยันและพิสูจน์ตัวตนเพื่อเปิดบัญชีที่ เคาเตอร์เซอร์วิส 7-Eleven หรือ ผ่าน National Digital ID (NDID)",
    },
    "manual_page_info_5": {
      "en": "N/A",
      "th": "สงวนสิทธิ์การเปิดบัญชีกับผู้ที่มีสัญชาติอเมริกัน",
    },
    "manual_page_info_6": {
      "en": "Required document and information for sign up",
      "th": "ข้อมูลสำหรับการลงทะเบียนใช้งานแอปพลิเคชัน",
    },
    "manual_page_info_7": {
      "en": "National ID Card",
      "th": "บัตรประชาชน",
    },
    "manual_page_info_9": {
      "en": "E-mail Address",
      "th": "อีเมล",
    },
    "dopa_page_header": {
      "en": "Please fill-in the information to sign up.",
      "th": "กรุณากรอกข้อมูลเพื่อลงทะเบียน",
    },
    "username_setup_page_header": {
      "en": "Set Username and Password",
      "th": "กำหนด Username และ Password",
    },
    "mobile_setup_page_header": {
      "en": "Enter Mobile Number",
      "th": "กรอกเบอร์มือถือ",
    },
    "mobile_format_error": {
      "en": "Invalid mobile number format",
      "th": "รูปแบบเบอร์มือถือไม่ถูกต้อง",
    },
    "mobile_check_page_header": {
      "en": "Mobile Number Verification",
      "th": "ตรวจสอบเบอร์มือถือ",
    },
    "mobile_phone_number": {
      "en": "Mobile Number",
      "th": "เบอร์มือถือ",
    },
    "available_mobile_phone_number": {
      "en": "Mobile Number",
      "th": "เบอร์มือถือที่ติดต่อได้",
    },
    "mobile_phone_number_placeholder": {
      "en": "Enter Mobile Number",
      "th": "ระบุเบอร์มือถือ",
    },
    "if_you_want_to_change_mobile_number": {
      "en": "If you would like to sign up with a different Mobile Number, Please choose to sign up by having identity verification at 7-Eleven or NDID service. Click",
      "th": "หากคุณต้องการลงทะเบียนด้วยเบอร์มือถืออื่น\nโปรดลงทะเบียนด้วยวิธียืนยันและพิสูจน์ตัวตนที่ 7-Eleven หรือ NDID คลิก", // remove 'หรือ NDID LC-1025'
    },
    "mobile_validate_header": {
      "en": "Mobile Number Verification",
      "th": "ยืนยันเบอร์มือถือ",
    },
    "please_enter_otp_mobile": {
      "en": "Please enter OTP sent to your registered Mobile Number.",
      "th": "โปรดระบุรหัส OTP ที่ได้รับผ่านเบอร์มือถือ",
    },
    "please_enter_otp_email": {
      "en": "Please enter OTP sent to your registered E-mail.",
      "th": "โปรดระบุรหัส OTP ที่ได้รับผ่านอีเมล",
    },
    "via_mobile": {
      "en": "via mobile",
      "th": "ผ่านเบอร์มือถือ",
    },
    "via_email": {
      "en": "via email",
      "th": "ผ่าน email",
    },
    "not_receive_otp": {
      "en": "not receive otp",
      "th": "ไม่ได้รับรหัส",
    },
    "request_again": {
      "en": "request again",
      "th": "ขออีกครั้งใน",
    },
    "seconds": {
      "en": "seconds",
      "th": "วินาที",
    },
    "otp_valid_for_5_minutes": {
      "en": "N/A",
      "th": "รหัส OTP จะมีอายุการใช้งาน 5 นาที",
    },
    "reference_number": {
      "en": "Ref",
      "th": "รหัสอ้างอิง (Ref)",
    },
    "send_otp_again": {
      "en": "Resend OTP?",
      "th": "ส่งรหัส OTP อีกครั้ง?",
    },
    "lock_because_wrong_otp": {
      "en": "You can request OTP again",
      "th": "คุณสามารถขอรหัส OTP ได้อีกครั้ง",
    },
    "email_setup_page_header": {
      "en": "Enter E-mail Address",
      "th": "กรอกอีเมล",
    },
    "email_format_error": {
      "en": "Incorrect E-mail address format",
      "th": "รูปแบบอีเมลไม่ถูกต้อง",
    },
    "email": {
      "en": "E-mail Address",
      "th": "อีเมล",
    },
    "email_placeholder": {
      "en": "Enter E-mail address.",
      "th": "ระบุอีเมล",
    },
    "email_validate_header": {
      "en": "E-mail Verification",
      "th": "ยืนยันอีเมล",
    },
    "register_page_header": {
      "en": "Please fill-in the information to sign up.",
      "th": "โปรดกรอกข้อมูลเพื่อลงทะเบียน",
    },
    "passCode_page_header": {
      "en": "Enter Profita PIN",
      "th": "กรอก PIN ของ Profita",
    },
    "setup_pin": {
      "en": "Create PIN",
      "th": "ตั้ง PIN",
    },
    "confirm_pin": {
      "en": "Confirm PIN",
      "th": "ยืนยัน PIN",
    },
    "success_register": {
      "en": "Success Registered",
      "th": "คุณลงทะเบียนสำเร็จ",
    },
    "not_now": {
      "en": "Not now",
      "th": "ไม่ใช่ตอนนี้",
    },
    "enter_card_id": {
      "en": "Enter ID Number",
      "th": "ระบุเลขบัตรประชาชน",
    },
    "citizen_card": {
      "en": "National ID",
      "th": "บัตรประชาชน",
    },
    "card_id": {
      "en": "Citizen ID",
      "th": "เลขบัตรประชาชน",
    },
    "passport": {
      "en": "Passport",
      "th": "หนังสือเดินทาง",
    },
    "passport_no": {
      "en": "Passport No",
      "th": "เลขหนังสือเดินทาง",
    },
    "passport_issuing": {
      "en": "Passport issuing country",
      "th": "ประเทศที่ออกหนังสือเดินทาง",
    },
    "enter_passport_issuing": {
      "en": "Enter Passport issuing country",
      "th": "ระบุประเทศที่ออกหนังสือเดินทาง",
    },
    "thai_people": {
      "en": "Thai People",
      "th": "สัญชาติไทย",
    },
    "foreign_person": {
      "en": "Foreign Person",
      "th": "บุคคลต่างชาติ",
    },
    "enter_passport_no": {
      "en": "Enter passport No",
      "th": "ระบุเลขหนังสือเดินทาง",
    },
    "enter_debit_card": {
      "en": "Enter debit card",
      "th": "ระบุหมายเลขบัตรเดบิต",
    },
    "debit_card_no": {
      "en": "Debit card No.",
      "th": "หมายเลขบัตรเดบิต",
    },
    "debit_card": {
      "en": "Debit card",
      "th": "บัตรเดบิต",
    },
    "enter_pin_debit_card": {
      "en": "Enter PIN debit card",
      "th": "ระบุ PIN บัตรเดบิต",
    },
    "debit_pin_card": {
      "en": "PIN debit card",
      "th": "PIN บัตรเดบิต",
    },
    "laser_number": {
      "en": "Laser Code",
      "th": "เลขหลังบัตรประชาชน",
    },
    "laser_code_of_id_card": {
      "en": "Laser Code of the ID Card",
      "th": "เลขหลังบัตรประชาชน",
    },
    "enter_laser_number": {
      "en": "Enter Laser Code. ex. JT1234567890",
      "th": "เลขหลังบัตรประชาชน เช่น JT1234567890",
    },
    "example_laser_number": {
      "en": "Example of the Laser Code",
      "th": "ตัวอย่างเลขหลังบัตรประชาชน",
    },
    "laser_number_invalid": {
      "en": "Please specify Laser Code",
      "th": "กรุณาระบุเลขหลังบัตร",
    },
    "title_firstname_placeholder": {
      "en": "Select a title",
      "th": "เลือกคำนำหน้าชื่อ",
    },
    "title_firstname_th": {
      "en": "Title (THAI)",
      "th": "คำนำหน้าชื่อ (ภาษาไทย)",
    },
    "firstname_th": {
      "en": "Name (Thai)",
      "th": "ชื่อ (ภาษาไทย)",
    },
    "firstname_th_uppercase": {
      "en": "Name (THAI)",
      "th": "ชื่อ (ภาษาไทย)",
    },
    "enter_firstname_th": {
      "en": "Enter Thai name",
      "th": "ระบุชื่อ (ภาษาไทย)",
    },
    "lastname_th": {
      "en": "Last name (Thai)",
      "th": "นามสกุล (ภาษาไทย)",
    },
    "lastname_th_uppercase": {
      "en": "Last name (THAI)",
      "th": "นามสกุล (ภาษาไทย)",
    },
    "enter_lastname_th": {
      "en": "Enter Thai last name",
      "th": "ระบุนามสกุล (ภาษาไทย)",
    },
    "title_firstname_en": {
      "en": "Title (ENGLISH)",
      "th": "คำนำหน้าชื่อ (ภาษาอังกฤษ)",
    },
    "enter_firstname_en": {
      "en": "Enter your name",
      "th": "ระบุชื่อ (ภาษาอังกฤษ)",
    },
    "firstname_en": {
      "en": "Name",
      "th": "ชื่อ (ภาษาอังกฤษ)",
    },
    "firstname_en_uppercase": {
      "en": "Name (ENGLISH)",
      "th": "ชื่อ (ภาษาอังกฤษ)",
    },
    "lastname_en": {
      "en": "Last name (ENGLISH)",
      "th": "นามสกุล (ภาษาอังกฤษ)",
    },
    "enter_lastname_en": {
      "en": "Enter your last name",
      "th": "ระบุนามสกุล (ภาษาอังกฤษ)",
    },
    "date_of_birth": {
      "en": "Date of Birth (DD/MM/YYYY A.D.)",
      "th": "วัน/เดือน/ปีเกิด (พ.ศ.)",
    },
    "enter_date_of_birth": {
      "en": "Enter Date of Birth",
      "th": "ระบุวันเกิด",
    },
    "gender": {
      "en": "Gender",
      "th": "เพศ"
    },
    "expire_date": {
      "en": "Expiry Date",
      "th": "วันที่บัตรหมดอายุ"
    },
    "expire_date_placeholder": {
      "en": "Expiry Date",
      "th": "เลือกวันที่บัตรหมดอายุ"
    },
    "select_expire_date_placeholder": {
      "en": "Select expiry date",
      "th": "เลือกวันที่บัตรหมดอายุ"
    },
    "dopa_alert_1": {
      "en": "N/A",
      "th": "กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง",
    },
    "dopa_alert_2": {
      "en": "N/A",
      "th": "กรุณากรอกเลขหลังบัตรประชาชนให้ถูกต้อง",
    },
    "register_page_citizen_invalid": {
      "en": "Incorrect ID card number",
      "th": "เลขบัตรประชาชนไม่ถูกต้อง",
    },
    "register_page_laser_invalid": {
      "en": "Incorrect Laser Code",
      "th": "เลขหลังบัตรประชาชนไม่ถูกต้อง",
    },
    "register_page_debit_invalid": {
      "en": "Incorrect Debit Card number",
      "th": "เลขบัตรเดบิตไม่ถูกต้อง",
    },
    "register_page_debit_pin_invalid": {
      "en": "Incorrect PIN",
      "th": "เลข PIN ไม่ถูกต้อง",
    },
    "term_and_condition_page_header": {
      "en": "Terms and Conditions",
      "th": "ข้อกำหนดและเงื่อนไข",
    },
    "pdpa_header": {
      "en": "PDPA Update",
      "th": "การจัดการข้อมูลส่วนบุคคล",
    },
    "term_and_condition_header_1": {
      "en": "I accept the Terms and Conditions.",
      "th": "ข้าพเจ้ายอมรับข้อกำหนดและเงื่อนไข",
    },
    "term_and_condition_remark": {
      "en": "I have read and understood the terms and conditions above.",
      "th": "ข้าพเจ้าได้อ่านและเข้าใจข้อกำหนดและเงื่อนไขข้างต้นนี้แล้ว",
    },
    "term_and_condition_title_1_1": {
      "en": "Terms and Conditions of use of the  Profita",
      "th": "ข้อกำหนดและเงื่อนไขการใช้บริการ Profita",
    },
    "click_to_show_info": {
      "en": "Click to view details.",
      "th": "คลิกดูรายละเอียด",
    },
    "show_info": {
      "en": "Details",
      "th": "ดูรายละเอียด",
    },
    "term_and_condition_infomation": {
      "en": "Terms and Conditions",
      "th": "รายละเอียดข้อตกลงและเงื่อนไข",
    },
    "term_and_condition_modal_info": {
      "en": "N/A",
      "th": "ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของท่าน เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของท่าน เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของท่าน เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน ข้อมูลภาพจำลองใบหน้าของท่าน\n      ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของท่าน เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของท่าน เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของท่าน เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน ข้อมูลภาพจำลองใบหน้าของท่าน\n      ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของท่าน เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของท่าน เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของท่าน เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน ข้อมูลภาพจำลองใบหน้าของท่าน"
    },
    "term_and_condition_title_1_2": {
      "en": "Consent for collection, use and/or disclosure of biometric data to verify and identify your identity:",
      "th": "ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผย ข้อมูลภาพจำลองใบหน้าของคุณ เพื่อวัตถุประสงค์ในการยืนยัน และระบุตัวตน"
    },
    "term_and_condition_info_1_2": {
      "en": "To verify and identify your identity through facial recognition in order to apply for and/or use LH Bank’s products and/or services via LH Bank’s branches and/or LH Bank’s service points.",
      "th": "สำหรับการสมัคร และ/หรือ ใช้ผลิตภัณฑ์ และ/หรือ บริการของธนาคาร ณ สาขาของธนาคาร และ/หรือ ณ ช่องทางการให้บริการของธนาคาร "
    },
    "term_and_condition_header_2": {
      "en": "Consent for collection, use and/or disclosure of your Personal Data for LH Bank and LH Bank's financial groups for the pupose as follows:",
      "th": "ความยินยอมในการเก็บรวบรวม ใช้ และ/หรือ เปิดเผยข้อมูลส่วนบุคคล เพื่อวัตถุประสงค์ต่างๆ ต่อไปนี้:",
    },
    "term_and_condition_title_2_1": {
      "en": "Consent for collection, use and/or disclosure of your Personal Data for LH Bank’s marketing purpose:",
      "th": "ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผยข้อมูลส่วนบุคคลของคุณ เพื่อวัตถุประสงค์ทางการตลาดของธนาคาร"
    },
    "term_and_condition_info_2_1": {
      "en": "To offer you the financial products/services or personalize promotion that are specifically analyzed by LH Bank to meet your individual specific needs.",
      "th": "เพื่อเสนอผลิตภัณฑ์ และ/หรือ บริการทางการเงินที่ธนาคารวิเคราะห์แล้วว่าตรงกับความต้องการของคุณ",
    },
    "term_and_condition_title_2_2": {
      "en": "Consent for collection, use and/or disclosure of your Personal Data to LH Bank’s financial group per the PDPA and the Bank of Thailand Notification re: Regulations on Market Conduct including rules, regulations, notifications, guidelines, interpretations, legal opinions and amendments which may be issued thereunder by the authorities from time to time to LH’s financial group for products or services offering:",
      "th": "ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผยข้อมูลส่วนบุคคลของคุณให้กับกลุ่มการเงินของธนาคาร"
    },
    "term_and_condition_info_2_2": {
      "en": "To disclose your Personal Data to LH’s financial group for the purpose of offering and selling the products or services under LH’s financial group.",
      "th": "เพื่อวัตถุประสงค์ในการเสนอ และขายผลิตภัณฑ์/บริการที่เกี่ยวกับกลุ่มการเงินของธนาคาร"
    },
    "term_and_condition_title_2_3": {
      "en": "Consent for collection, use and/or disclosure of your Personal Data for LH Bank’s product development purpose:",
      "th": "ความยินยอมเพื่อเก็บรวบรวม ใช้ และ/หรือ เปิดเผยข้อมูลส่วนบุคคลของคุณ"
    },
    "term_and_condition_info_2_3": {
      "en": "For LH Bank to use your Personal Data to develop better product or services based on data analytics, market research and statistical analysis to fulfill my satisfaction with Bank service.",
      "th": "เพื่อพัฒนาผลิตภัณฑ์ หรือบริการที่ดีขึ้น โดยอาศัยการวิเคราะห์ข้อมูล การวิจัยตลาด และการวิเคราะห์ทางสถิติเพื่อตอบสนองความพึงพอใจของคุณที่มีต่อบริการของธนาคาร"
    },
    "identity_header": {
      "en": "Select a method for identity verification.",
      "th": "เลือกรูปแบบการยืนยันตัวตน"
    },
    "identity_info_1": {
      "en": "7-Elevenn",
      "th": "ที่ 7-Eleven"
    },
    "identity_info_2": {
      "en": "National Digital ID (NDID)",
      "th": "National Digital ID (NDID)"
    },
    "identity_info_3": {
      "en": "N/A",
      "th": "ผ่านแอปของธนาคารที่คุณเคยยืนยันตัวตนและบันทึกภาพใบหน้าไว้กับธนาคาร (อยู่ระหว่างให้บริการภายใต้ Regulatory Sandbox ของธนาคารแห่งประเทศไทย)"
    },
    "identity_fail_header": {
      "en": "Please contact Call Center at 1327",
      "th": "โปรดติดต่อสาขาเพื่อสมัครใช้บริการ\nหรือติดต่อ Call Center 1327"
    },
    "or": {
      "en": "Or",
      "th": "หรือ",
    },
    "sign_up_with": {
      "en": "Sign up with",
      "th": "สมัครบริการด้วย",
    },
    "biometric_enable": {
      "en": "Enable Biometric Login.",
      "th": "เปิดใช้งาน Biometric Login แทนการใช้ PIN"
    },
    "biometric_open": {
      "en": "Enable",
      "th": "เปิดใช้งาน Biometric"
    },
    "biometric_info_1": {
      "en": "When you enable Biometric Login, you will be able to login using Biometrics based on your device settings instead of entering the PIN.",
      "th": "เมื่อคุณเปิดใช้งาน Biometric Login คุณจะสามารถเข้าใช้งานแอปพลิเคชัน ด้วย Biometrics ตามการตั้งค่าอุปกรณ์ของคุณแทนการใช้ PIN"
    },
    "pin_donot_match": {
      "en": "Failed to reconfirm PIN. Please try again \nor step back to set a new PIN.",
      "th": "PIN ไม่ตรงกัน โปรดลองอีกครั้ง\nหรือกลับไปตั้งค่า PIN ใหม่"
    },
    "verification_complete_name_th": {
      "en": "Full Name (Thai)",
      "th": "ชื่อ-นามสกุล (ไทย)"
    },
    "verification_complete_name_en": {
      "en": "Full Name (English)",
      "th": "ชื่อ-นามสกุล (อังกฤษ)"
    },
    "setting_complete_name_th": {
      "en": "Name-Last name (Thai)",
      "th": "ชื่อ-นามสกุล (ไทย)"
    },
    "setting_complete_name_en": {
      "en": "Name-Last name (English)",
      "th": "ชื่อ-นามสกุล (อังกฤษ)"
    },
    "verification_complete_address": {
      "en": "House Registration Address",
      "th": "ที่อยู่ตามทะเบียนบ้าน"
    },
    "verification_complete_date_of_birth": {
      "en": "Date of Birth",
      "th": "วัน/เดือน/ปี เกิด"
    },
    "select_verification_complete_date_of_birth": {
      "en": "Date of Birth",
      "th": "ระบุวัน/เดือน/ปี เกิด"
    },
    "verification_complete": {
      "en": "Successful Identity Verification",
      "th": "ยืนยันตัวตนสำเร็จ"
    },
    "verification_complete_ref": {
      "en": "Reference ID",
      "th": "เลขที่อ้างอิง"
    },
    "verification_complete_ref_short_term": {
      "en": "Ref ",
      "th": "เลขที่อ้างอิง"
    },
    "regis_debit_header": {
      "en": "Enter LH Bank Debit Card information for registration ",
      "th": "กรอกข้อมูล LH Bank Debit Card\nเพื่อลงทะเบียน"
    },
    "save": {
      "en": "Save",
      "th": "บันทึก",
    },
    "not_save": {
      "en": "Not save",
      "th": "ไม่บันทึก",
    },
    "save_list": {
      "en": "Save",
      "th": "บันทึกรายการ",
    },
    "save_list_at": {
      "th": "บันทึกรายการ ณ วันที่",
      "en": "Created on",
    },
    "renew": {
      "en": "Renew",
      "th": "สร้างใหม่",
    },
    "description": {
      "en": "Description",
      "th": "รายละเอียด",
    },
    "details": {
      "en": "Details",
      "th": "รายละเอียด",
    },
    "7_11_verify_description_1": {
      "en": "Sign up for Profita \nand/or open an account with LHBANK",
      "th": "ลงทะเบียนใช้งาน Profita\nและ/หรือเปิดบัญชี LH Bank",
    },
    "7_11_verify_description_2": {
      "en": "Please present QR code with ID card at Counter Service 7-Eleven.",
      "th": "โปรดแสดง QR Code\nพร้อมบัตรประชาชนตัวจริง\nเพื่อยืนยันตัวตนที่เคาเตอร์เซอร์วิส 7-Eleven",
    },
    "ready": {
      "en": "Ready",
      "th": "พร้อมแล้ว",
    },
    "you_can_begin_trading_fund": {
      "en": "You're all set for the FUNd journey!",
      "th": "คุณสามารถทำการซื้อขายกองทุนได้ทันที",
    },
    "login_for_trading": {
      "en": "GO !!!",
      "th": "เข้าสู่ระบบ เพื่อซื้อขายกองทุน",
    },
    "here": {
      "en": "Click",
      "th": "ที่นี่",
    },
    "step_at": {
      "en": "Step",
      "th": "ขั้นตอนที่"
    },
    "account_opening_process": {
      "en": "Account Opening Steps",
      "th": "ขั้นตอนการเปิดบัญชี"
    },
    "pre_open_modal_account_detail": {
      "en": "N/A",
      "th": "       - Sale Fact Sheet-ผลิตภัณฑ์ออมทรัพย์ Pro-Fit - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - Sale Fact Sheet-ผลิตภัณฑ์ออมทรัพย์ Pro-Fit - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - Sale Fact Sheet-ผลิตภัณฑ์ออมทรัพย์ Pro-Fit - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - Sale Fact Sheet-ผลิตภัณฑ์ออมทรัพย์ Pro-Fit - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่า"
    },
    "pre_open_modal_account_condition": {
      "en": "N/A",
      "th": "       - เนื้อหา T&C ของ-ข้อกำหนดและเงื่อนไขผลิตภัณฑ์ออมทรัพย์ Pro-Fit - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - เนื้อหา T&C ของ-ข้อกำหนดและเงื่อนไขผลิตภัณฑ์ออมทรัพย์ Pro-Fit - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - เนื้อหา T&C ของ-ข้อกำหนดและเงื่อนไขผลิตภัณฑ์ออมทรัพย์ Pro-Fit - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - เนื้อหา T&C ของ-ข้อกำหนดและเงื่อนไขผลิตภัณฑ์ออมทรัพย์ Pro-Fit - ในกรณีที่ระบุจำนวนเงินหน่วย"
    },
    "pre_open_modal_fund_detail": {
      "en": "N/A",
      "th": "       - Sale Fact Sheet-การเปิดบัญชีกองทุน - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - Sale Fact Sheet-การเปิดบัญชีกองทุน - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - Sale Fact Sheet-การเปิดบัญชีกองทุน - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - Sale Fact Sheet-การเปิดบัญชีกองทุน - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วย"
    },
    "pre_open_modal_fund_condition": {
      "en": "N/A",
      "th": "       - เนื้อหา T&C ของ-การเปิดบัญชีกองทุน - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - เนื้อหา T&C ของ-การเปิดบัญชีกองทุน - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - เนื้อหา T&C ของ-การเปิดบัญชีกองทุน - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มีหรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืนหรือค่าธรรมเนียมการสับเปลี่ยน(ถ้ามี)บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนปรเะสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง\n      - เนื้อหา T&C ของ-การเปิดบัญชีกองทุน - ในกรณีที่ระบุจำนวนเงินหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วย"
    },
    "open_account_step_STEP_FATCA": {
      "en": "FATCA",
      "th": "FATCA",
    },
    "open_account_step_STEP_DATA_OPEN_ACCOUNT": {
      "en": "Account Opening Form",
      "th": "ข้อมูลเปิดบัญชี",
    },
    "open_account_step_STEP_PERSONAL_INFO": {
      "en": "Personal Information",
      "th": "ข้อมูลส่วนตัว",
    },
    "open_account_step_STEP_BACKGROUND_INFO": {
      "en": "Occupation and Business",
      "th": "อาชีพและธุรกิจ",
    },
    "open_account_step_STEP_CONTACT_INFO": {
      "en": "Contact Information",
      "th": "ข้อมูลการติดต่อ",
    },
    "open_account_step_STEP_BANK_ACCOUNT": {
      "en": "Account Information",
      "th": "ข้อมูลบัญชี",
    },
    "open_account_step_STEP_KYC_IMAGE": {
      "en": "ID Card Picture",
      "th": "ภาพถ่ายบัตรประชาชน",
    },
    "open_account_step_STEP_INVESTMENT_OBJECTIVE": {
      "en": "Investment Objective",
      "th": "วัตถุประสงค์การลงทุน",
    },
    "open_account_step_STEP_SUITABILITY_TEST": {
      "en": "Suitability Assessment",
      "th": "แบบประเมิน",
    },
    "open_account_step_STEP_OPEN_SAVING_ACCOUNT": {
      "en": "Open Digital Savings Account",
      "th": "เปิดบัญชีเงินฝากออมทรัพย์ดิจิทัล",
    },
    "open_account_step_STEP_OPEN_ACCOUNT_FCN": {
      "en": "Open Mutual Fund Account",
      "th": "เปิดบัญชีกองทุน",
    },
    "FATCA": {
      "en": "FATCA",
      "th": "FATCA",
    },
    "american_people": {
      "en": "U.S. Person",
      "th": "บุคคลอเมริกัน",
    },
    "Fatca_description_1": {
      "en": "I hereby declare and confirm that\n- I am ",
      "th": "ข้าพเจ้า"
    },
    "Fatca_description_2": {
      "en": "not ",
      "th": " “ไม่ได้เป็น” ",
    },
    "Fatca_description_3": {
      "en": "a U.S. citizen.\n- I do not hold multiple citizenships, one of which is U.S. citizenship.\n- I am not a holder of any U.S. Permanent Resident Card (e.g.Green card).\n- I do not have a current U.S. residence address.\n- I am not a U.S. resident for U.S. tax purposes.",
      "th": "พลเมืองอเมริกัน / ไม่ได้ถือบัตรประจำตัวผู้มีถิ่นที่อยู่ถาวร (กรีนการ์ด) / ไม่มีถิ่นที่อยู่หรือที่อยู่อาศัยในสหรัฐอเมริกา / ไม่มีข้อบ่งชี้อื่นใดว่าอาจเป็นบุคคลอเมริกาซึ่งมีหน้าที่เสียภาษีให้กับสหรัฐอเมริกา",
    },
    "Fatca_not_america": {
      "en": "I am not a U.S. Person and do not meet the criteria of U.S. Person.",
      "th": "ไม่เป็นบุคคลอเมริกาและไม่มีข้อบ่งชี้ใดๆว่าเป็นบุคคลอเมริกา",
    },
    "Fatca_america": {
      "en": "I am a U.S. Person or meet the criteria of U.S. Person.",
      "th": "เป็นบุคคลอเมริกัน / มีข้อบ่งชี้ใดๆ ว่าเป็นบุคคลอเมริกัน",
    },
    "save_data": {
      "en": "Save",
      "th": "บันทึกข้อมูล",
    },
    "save_and_return_to_overview_view_list": {
      "en": "Back to Account Opening Steps",
      "th": "กลับไปหน้าขั้นตอนการเปิดบัญชี",
    },
    "save_and_return_to_open_account_page": {
      "th": "บันทึกและกลับหน้าเปิดบัญชี",
    },
    "self_certification_terms_and_conditions_title": {
      "en": "Details of terms and conditions for self-declaration",
      "th": "รายละเอียดข้อตกลงและเงื่อนไขการรับรองตนเอง",
    },
    "self_certification_terms_and_conditions_details": {
      "en": "N/A",
      "th": "หากท่านต้องการทำงานในสหรัฐอเมริกาเป็นการชั่วคราว ภายใต้กฎหมายว่าด้วยการเข้าเมืองสหรัฐฯ ท่านจะต้องได้รับวีซ่าให้ถูกประเภทตามประเภทของงานที่จะไปทำ สำหรับงานแรงงานชั่วคราวส่วนใหญ่กำหนดไว้ว่านายจ้างหรือตัวแทนจะต้องยื่นคำร้อง และผ่านการอนุมัติจากสำนักงานตรวจคนเข้าเมืองและสัญชาติของสหรัฐอเมริกา (USCIS) ในสหรัฐอเมริกาก่อน ผู้สมัครจึงจะสามารถมายื่นคำร้องขอวีซ่าทำงานได้\n\nผู้สมัครวีซ่าประเภท H, L, O, P และ Q ทั้งหมดต้องได้รับการอนุมัติ คำร้อง Form I-129โดยสำนักงาน USCIS ก่อนที่ท่านจะสามารถยื่นคำร้องขอวีซ่าทำงานที่สถานทูตหรือสถานกงสุลอเมริกาได้ เมื่อคำร้องผ่านการอนุมัติแล้ว นายจ้างหรือตัวแทนของท่านจะได้รับ Notice of Action, Form I-797 ซึ่งเป็นการแจ้งว่าคำร้องของท่านผ่านการอนุมัติแล้ว เจ้าหน้าที่กงสุลจะตรวจสอบคำร้องของท่านผ่านระบบจัดการข้อมูลคำร้อง (PIMS) ขณะสัมภาษณ์\n      \nท่านต้องนำใบเสร็จชำระเงินค่าธรรมเนียม I-129 SEVIS มาด้วยในวันสัมภาษณ์ ณ สถานทูตหรือสถานกงสุลอเมริกาเพื่อใช้ในการตรวจสอบการอนุมัติคำร้องของท่าน โปรดทราบว่าคำร้องที่ผ่านการอนุมัติแล้วไม่ได้เป็นสิ่งรับประกันว่าวีซ่าของท่านจะผ่านการอนุมัติ หากพบว่าท่านขาดคุณสมบัติในการได้รับวีซ่าภายใต้กฎหมายว่าด้วยการเข้าเมืองสหรัฐฯ\n      ",
    },
    "confirm_data": {
      "en": "Confirm",
      "th": "ยืนยันข้อมูล",
    },
    "confirm_data_to_bank": {
      "en": "I hereby confirm that the above information is true, correct, accurate and complete.",
      "th": "ข้าพเจ้ายืนยันว่า คำรับรองที่ให้ไว้กับธนาคารดังกล่าวเป็นความจริงทุกประการ",
    },
    "Fatca_law_between_thai_and_usa": {
      "en": "This is in accordance with the Agreement between the Government of the Kingdom of Thailand and the Government of USA for cooperation in improvement of International Taxation 2017.",
      "th": "เพื่อปฎิบัติให้เป็นไปตาม พ.ร.บ การปฎิบัติการตามความตกลงระหว่างรัฐบาลแห่งราชอาณาจักรไทยกับรัฐบาลแห่งประเทศสหรัฐอเมริกาเพื่อความร่วมมือในการปรับปรุงการปฎิบัติการตามภาษีอากรระหว่างประเทศ พ.ศ.2560",
    },
    "i_verified_information_is_correct": {
      "en": "I have verified and confirmed that the information is correct.",
      "th": "ข้าพเจ้าได้ตรวจสอบข้อมูลแล้วว่าถูกต้อง",
    },
    "invalid_duplicate_pin": {
      "en": "PIN contains 6 duplicate numbers",
      "th": "PIN มีตัวเลขซ้ำกัน 6 ตัว โปรดลองอีกครั้ง",
    },
    "invalid_sequence_pin": {
      "en": "The PIN has a sequence of numbers.",
      "th": "PIN มีตัวเลขเรียงกัน โปรดลองอีกครั้ง",
    },
    "accept": {
      "en": "Accept",
      "th": "ยอมรับ"
    },
    "not_accept": {
      "en": "Decline",
      "th": "ไม่ยอมรับ"
    },
    "decline": {
      "en": "Decline",
      "th": "ยกเลิก"
    },
    "refuse": {
      "en": "Refuse",
      "th": "ปฏิเสธ"
    },
    "allow": {
      "en": "Allow",
      "th": "ยินยอม"
    },
    "invalid_phone_no": {
      "en": "Mobile Number less than 10 digits",
      "th": "เบอร์มือถือไม่ครบ 10 หลัก",
    },
    "nationality": {
      "en": "Nationality",
      "th": "สัญชาติ",
    },
    "marital_status_verify": {
      "en": "Status",
      "th": "สถานภาพ",
    },
    "marital_status": {
      "en": "Marital Status",
      "th": "สถานภาพ",
    },
    "marital_status_placeholder": {
      "en": "Marital Status",
      "th": "ระบุสถานภาพ",
    },
    "nationality_placeholder": {
      "en": "Nationality",
      "th": "ระบุสัญชาติ",
    },
    "spouse_information": {
      "en": "Spouse information",
      "th": "ข้อมูลคู่สมรส",
    },
    "personal_information": {
      "en": "Personal Information",
      "th": "ข้อมูลส่วนตัว",
    },
    "id_card_information": {
      "en": "ID Card Information",
      "th": "ข้อมูลบัตรประชาชน",
    },
    "setting_id_card_expire": {
      "th": "หมดอายุ",
      "en": "Expires on",
    },
    "setting_id_card_info": {
      "th": "ข้อมูลบัตรประชาชน",
      "en": "ID Card Information",
    },
    "id_card_cannot_update_title": {
      "th": "ขออภัย ไม่สามารถอัปเดตข้อมูลบัตร\nได้ในขณะนี้",
      "en": "Sorry, You have already updated ID Card information.",
    },
    "id_card_cannot_update_detail": {
      "th": "เนื่องจากธนาคารอยู่ระหว่าง\nการตรวจสอบข้อมูล",
      "en": "Please wait for the information approval.",
    },
    "life_time": {
      "en": "Lifelong",
      "th": "ตลอดชีวิต",
    },
    "life_long": {
      "en": "Lifelong",
      "th": "ตลอดชีพ",
    },
    "country_placeholder": {
      "en": "N/A",
      "th": "ระบุประเทศ",
    },
    "involvement_politicians": {
      "en": "Politically Exposed Persons",
      "th": "ความเกี่ยวข้องกับนักการเมือง",
    },
    "personal_info_condition_1": {
      "en": "Are you a politically exposed person / family member of a politically exposed person / intimate person of a politically exposed person or family member of a politically exposed person?",
      "th": "คุณเป็นผู้มีสถานภาพทางการเมืองหรือเป็นสมาชิกในครอบครัว หรือเป็นผู้ใกล้ชิดกับบุคคลผู้มีสถานภาพทางการเมืองหรือไม่?",
    },
    "personal_info_condition_2": {
      "en": "I have verified and confirmed that the information is correct.",
      "th": "ข้าพเจ้าได้ตรวจสอบข้อมูลแล้วว่าถูกต้อง",
    },
    "authentication": {
      "en": "Identity Verification",
      "th": "ยืนยันตัวตน",
    },
    "successfully_saved": {
      "en": "N/A",
      "th": "บันทึกสำเร็จแล้ว",
    },
    "contact_information": {
      "en": "Contact Information",
      "th": "ข้อมูลการติดต่อ",
    },
    "address": {
      "en": "Addresses",
      "th": "ที่อยู่",
    },
    "delivery_address": {
      "en": "Contact Address",
      "th": "ที่อยู่จัดส่งหลัก",
    },
    "other_delivery_address": {
      "en": "Additional Contact Address",
      "th": "ที่อยู่จัดส่งเอกสารเพิ่มเติม",
    },
    "resident_address": {
      "en": "ID Card Address",
      "th": "ที่อยู่ตามบัตรประชาชน",
    },
    "work_address": {
      "en": "Work Address",
      "th": "ที่อยู่ที่ทำงาน",
    },
    "company_name": {
      "en": "Company Name",
      "th": "ชื่อสถานที่ทำงาน",
    },
    "current_address": {
      "en": "Current Address",
      "th": "ที่อยู่ปัจจุบัน",
    },
    "select_address": {
      "en": "Select Address",
      "th": "เลือกที่อยู่",
    },
    "other_delivery_address_name": {
      "en": "N/A",
      "th": "ชื่อที่อยู่จัดส่งเอกสารเพิ่มเติม",
    },
    "work_address_name": {
      "en": "Workplace Name",
      "th": "ชื่อสถานที่ทำงาน",
    },
    "please_specify_work_address_name": {
      "en": "Please specify workplace name",
      "th": "กรุณาระบุชื่อสถานที่ทำงาน",
    },
    "prominent_point": {
      "th": "จุดเด่น",
      "en": "Highlights",
    },
    "add": {
      "en": "Add",
      "th": "เพิ่ม",
    },
    "edit": {
      "en": "Edit",
      "th": "แก้ไข",
    },
    "remark_other_delivery_address": {
      "en": "Note: If the document cannot be delivered by E-mail, we will send it to the address below.",
      "th": "หมายเหตุ: หากเอกสารไม่สามารถจัดส่งทางอีเมลได้ ทางเราจะจัดส่งไปทางที่อยู่ด้านล่าง",
    },
    "remark": {
      "en": "Note:",
      "th": "หมายเหตุ"
    },
    "remarks": {
      "en": "Remarks",
      "th": "หมายเหตุ"
    },
    "add_data": {
      "en": "Add Information",
      "th": "เพิ่มข้อมูล",
    },
    "edit_data": {
      "en": "Edit Information",
      "th": "แก้ไขข้อมูล",
    },
    "edit_info": {
      "en": "Edit",
      "th": "แก้ไขข้อมูล",
    },
    "if_have": {
      "en": "if any",
      "th": "ถ้ามี",
    },
    "address_number": {
      "en": "Address No.",
      "th": "บ้านเลขที่",
    },
    "room": {
      "en": "Room No.",
      "th": "ห้อง",
    },
    "building": {
      "en": "Building",
      "th": "อาคาร",
    },
    "village": {
      "en": "Mooban",
      "th": "หมู่บ้าน",
    },
    "floor": {
      "en": "Floor",
      "th": "ชั้น",
    },
    "soi": {
      "en": "Soi",
      "th": "ซอย",
    },
    "road": {
      "en": "Road",
      "th": "ถนน",
    },
    "moo": {
      "en": "Moo No.",
      "th": "หมู่ที่",
    },
    "sub_district": {
      "en": "Sub-district/Tambol",
      "th": "แขวง/ตำบล",
    },
    "district": {
      "en": "District/Amphur",
      "th": "เขต/อำเภอ",
    },
    "province": {
      "en": "Province",
      "th": "จังหวัด",
    },
    "postal_number": {
      "en": "Postal Code",
      "th": "รหัสไปรษณีย์",
    },
    "country": {
      "en": "Country",
      "th": "ประเทศ"
    },
    "account_information": {
      "en": "Account information",
      "th": "ข้อมูลบัญชี"
    },
    "account_information_detail": {
      "en": "Account Details",
      "th": "รายละเอียดบัญชี"
    },
    "objective_account_opening": {
      "en": "Purpose of account",
      "th": "วัตถุประสงค์ในการเปิดบัญชี"
    },
    "objective_account_opening_placeholder": {
      "en": "Select purpose of account",
      "th": "โปรดเลือกวัตถุประสงค์ในการเปิดบัญชี"
    },
    "income_source_deposit": {
      "en": "Source of funds",
      "th": "แหล่งที่มาของเงินฝาก"
    },
    "income_source_deposit_placeholder": {
      "en": "Select source of funds",
      "th": "โปรดเลือกแหล่งทีมาของเงินฝาก"
    },
    "amount_of_business_per_month": {
      "en": "N/A",
      "th": "ปริมาณการธุกรรมต่อเดือน"
    },
    "deposit": {
      "en": "N/A",
      "th": "ฝากเงิน (รวมรายการโอนเงินเข้า)"
    },
    "withdraw": {
      "en": "N/A",
      "th": "ถอนเงิน (รวมรายการโอนเงินออก)"
    },
    "amount": {
      "en": "Amount",
      "th": "จำนวน",
    },
    "amount_unit": {
      "en": "Units",
      "th": "จำนวนหน่วย",
    },
    "unit_amount": {
      "en": "Amount",
      "th": "จำนวนหน่วย",
    },
    "net_asset_value": {
      "th": "มูลค่าหน่วยลงทุน",
      "en": "NAV",
    },
    "amount_baht": {
      "en": "Amount (THB)",
      "th": "จำนวนเงิน (บาท)"
    },
    "number_of_times": {
      "en": "N/A",
      "th": "จำนวนครั้ง"
    },
    "career_business": {
      "en": "Occupation",
      "th": "อาชีพ และ ธุรกิจ"
    },
    "country_of_income": {
      "en": "Country's source of income",
      "th": "ประเทศที่มาของรายได้"
    },
    "country_of_income_placeholder": {
      "en": "Specify the country of source of income",
      "th": "โปรดระบุประเทศที่มาของรายได้"
    },
    "source_of_income": {
      "en": "Source of income",
      "th": "แหล่งที่มาของรายได้"
    },
    "source_of_income_placeholder": {
      "en": "Specify the source of income",
      "th": "ระบุแหล่งที่มาของรายได้"
    },
    "salary": {
      "en": "Salary",
      "th": "เงินเดือน"
    },
    "saving": {
      "en": "Savings",
      "th": "เงินออม"
    },
    "retirement_money": {
      "en": "Retirement Funds",
      "th": "เงินเกษียณ"
    },
    "heritage": {
      "en": "Inheritance",
      "th": "มรดก"
    },
    "investment": {
      "en": "Investment",
      "th": "การลงทุน"
    },
    "business": {
      "en": "Business",
      "th": "ประกอบธุรกิจ"
    },
    "other": {
      "en": "Others",
      "th": "อื่นๆ"
    },
    "please_specify": {
      "en": "Specify",
      "th": "โปรดระบุ"
    },
    "career": {
      "en": "Occupation",
      "th": "อาชีพ"
    },
    "career_placeholder": {
      "en": "Select occupation",
      "th": "โปรดเลือกอาชีพ"
    },
    "monthly_income": {
      "en": "Monthly Income",
      "th": "รายได้ต่อเดือน"
    },
    "average_monthly_income": {
      "en": "Average Monthly Income",
      "th": "รายได้เฉลี่ยต่อเดือน"
    },
    "business_type": {
      "en": "Occupation/Business ",
      "th": "รายละเอียดอาชีพ/ธุรกิจ"
    },
    "business_type_placeholder": {
      "en": "Select a business type",
      "th": "โปรดเลือกรายละเอียดอาชีพ/ธุรกิจ"
    },
    "sorry_cannot_open_account": {
      "en": "Sorry, your account cannot be opened.",
      "th": "ขออภัย คุณไม่สามารถเปิดบัญชีได้",
    },
    "sorry_transaction_failed": {
      "en": "Sorry, the transaction is not successful.",
      "th": "ขออภัย ทำรายการไม่สำเร็จ",
    },
    "please_process_again": {
      "en": "Please try again.",
      "th": "โปรดทำรายการใหม่อีกครั้ง",
    },
    "process_again": {
      "en": "process again.",
      "th": "โปรดทำรายการใหม่",
    },
    "dear_user": {
      "en": "Hello, Khun",
      "th": "สวัสดีครับ คุณ",
    },
    "dear_user_without_name": {
      "en": "Hello,",
      "th": "สวัสดีครับ",
    },
    "not_registed": {
      "en": "Open Accounts for Trading Funds",
      "th": "เปิดบัญชีเพื่อชื้อขายกองทุน",
    },
    "verify_not_complete": {
      "en": "Your registration not completed",
      "th": "คุณยังยืนยันตัวตนไม่สำเร็จ",
    },
    "read_more": {
      "en": "See more",
      "th": "อ่านต่อ",
    },
    "hide": {
      "en": "Hide",
      "th": "ปิด",
    },
    "show_more": {
      "en": "Show more",
      "th": "แสดงเพิ่มเติม",
    },
    "fill_in": {
      "en": "Fill in",
      "th": "ระบุเอง",
    },
    "add_new_address": {
      "en": "N/A",
      "th": "เพิ่มที่อยู่ใหม่",
    },
    "feed": {
      "en": "Feed",
      "th": "ข่าวสาร",
    },
    "port": {
      "en": "Portfolio",
      "th": "พอร์ต",
    },
    "robo_port": {
      "en": "Port",
      "th": "พอร์ต",
    },
    "suspense_account": {
      "en": "ROBO Savings Account",
      "th": "บัญชีพักเงิน",
    },
    "portfolio": {
      "en": "Portfolio",
      "th": "พอร์ตโฟลิโอ",
    },
    "mutual_funds": {
      "en": "Mutual Funds",
      "th": "กองทุน",
    },
    "fund": {
      "en": "Fund",
      "th": "กองทุน",
    },
    "funds": {
      "en": "Funds",
      "th": "กองทุน",
    },
    "all_fund": {
      "en": "All",
      "th": "กองทุนทั้งหมด",
    },
    "fund_unit": {
      "en": "Fund",
      "th": "รายการ",
    },
    "funds_unit": {
      "en": "Funds",
      "th": "รายการ",
    },
    "robo": {
      "en": "ROBO",
      "th": "ROBO",
    },
    "you_do_not_have_investment_portfolio_yet": {
      "en": "You don't have an investment portfolio yet.",
      "th": "คุณยังไม่มีพอร์ตการลงทุน",
    },
    "remark_portfolio_appear_when_alloted_success": {
      "en": "Remark : Your portfolio will be displayed when your first subscription order is completed.",
      "th": "หมายเหตุ : คุณสามารถดูพอร์ตโฟลิโอได้ เมื่อได้รับการจัดสรรหน่วยลงทุนครั้งแรก สำเร็จ",
    },
    "age_more_than_20": {
      "en": "An investor must be at least 20 years old.",
      "th": "ผู้ลงทุนต้องมีอายุ 20 ปีขึ้นไป",
    },
    "signature": {
      "en": "Signature",
      "th": "ลายเซ็น",
    },
    "your_signature": {
      "en": "N/A",
      "th": "ลายเซ็นของคุณ",
    },
    "example_signature": {
      "en": "N/A",
      "th": "ตัวอย่างลายเซ็น",
    },
    "sign": {
      "en": "Sign",
      "th": "เซ็นชื่อ",
    },
    "please_sign": {
      "en": "Please sign below.",
      "th": "กรุณาเซ็นลายเซ็น",
    },
    "confirm": {
      "en": "Confirm",
      "th": "ยืนยัน",
    },
    "sign_again": {
      "en": "Sign again",
      "th": "เซ็นใหม่",
    },
    "camera_id_card": {
      "en": "A Picture of ID Card",
      "th": "ภาพถ่ายบัตรประชาชน",
    },
    "camera_card": {
      "en": "Take a Picture",
      "th": "ถ่ายภาพบัตร",
    },
    "photo_of_your_id_card": {
      "en": "Your ID Card Picture",
      "th": "ภาพถ่ายบัตรประชาชนของคุณ",
    },
    "id_card_guide": {
      "en": "How to take a picture of ID card",
      "th": "คำแนะนำในการถ่ายบัตรประชาชน",
    },
    "highest_return_funds": {
      "en": "Top Return Funds",
      "th": "กองทุนผลตอบแทนสูงสุด",
    },
    "recommended_funds": {
      "en": "Recommended Funds",
      "th": "กองทุนแนะนำ",
    },
    "invest_news": {
      "en": "Invest news",
      "th": "ข่าวสารการลงทุน",
    },
    "whats_new": {
      "en": "What's New",
      "th": "What's New",
    },
    "news_and_activity": {
      "en": "News and Activities",
      "th": "ข่าวสารและกิจกรรม"
    },
    "news": {
      "en": "News",
      "th": "ข่าวสาร"
    },
    "promotion": {
      "en": "Promotion",
      "th": "โปรโมชั่น"
    },
    "promotion_list": {
      "en": "N/A",
      "th": "รายการโปรโมชั่น"
    },
    "promotion_en": {
      "en": "Promotion",
      "th": "Promotion"
    },
    "perspective_invest_1": {
      "en": "Investment View",
      "th": "มุมมองการลงทุน"
    },
    "perspective_invest_2": {
      "en": "Investment\nView",
      "th": "มุมมอง\nการลงทุน"
    },
    "Digital_Channel_1": {
      "th": "บทวิเคราะห์พิเศษ",
      "en": "Special Review"
    },
    "Digital_Channel_2": {
      "th": "บทวิเคราะห์\nพิเศษ",
      "en": "Special\nReview"
    },
    "seminar_1": {
      "th": "สัมมนาการลงทุน",
      "en": "Seminar"
    },
    "seminar_2": {
      "th": "สัมมนา\nการลงทุน",
      "en": "Seminar"
    },
    "see_more": {
      "th": "ดูเพิ่มเติม",
      "en": "See more",
    },
    "camera_id_card_info_1": {
      "en": "Clear image and all information can be read",
      "th": "รูปภาพไม่เบลอ เห็นตัวอักษรชัดเจน และเห็นภาพบัตรเต็มใบ",
    },
    "camera_id_card_info_2": {
      "en": "No reflection, not too dark/bright and in-focus",
      "th": "ไม่ถ่ายสะท้อนแสงและไม่มืดหรือสว่างเกินไป",
    },
    "take_a_new_photo": {
      "en": "Retake a picture",
      "th": "ถ่ายรูปใหม่",
    },
    "please_put_your_id_card_in_frame": {
      "en": "Place the ID card in the frame",
      "th": "โปรดวางบัตรประชาชนให้อยู่ในกรอบ",
    },
    "open_saving_account_success": {
      "en": "Successful Account Opening",
      "th": "เปิดบัญชีออมทรัพย์สำเร็จ",
    },
    "account_type": {
      "en": "Account type",
      "th": "ประเภทบัญชี",
    },
    "product_name": {
      "en": "Product name",
      "th": "ชื่อผลิตภัณฑ์",
    },
    "product_term_and_description_sent_to_your_email": {
      "en": "Product details and conditions have been successfully sent to your registered email address.",
      "th": "รายละเอียดผลิตภัณฑ์และเงื่อนไขได้ถูกส่งไปยังอีเมลของคุณที่ให้ไว้กับทางธนาคารเรียบร้อยแล้ว",
    },
    "account_for_selling_unit_and_receiving_dividends": {
      "en": "Bank Account for Redemption Proceeds and Dividend",
      "th": "บัญชีธนาคารสำหรับการขายหน่วยลงทุนและรับเงินปันผล",
    },
    "please_select_account": {
      "en": "Select an account",
      "th": "โปรดเลือกบัญชี",
    },
    "assessment_form": {
      "th": "แบบประเมิน",
      "en": "Assessment form"
    },
    "suitabilyty_question": {
      "th": "คำถามแบบประเมิน",
      "en": "Question"
    },
    "risk_assessment_results": {
      "en": "Assessment Result",
      "th": "ผลการประเมินความเสี่ยง",
    },
    "risk_acceptance": {
      "en": "Accept the Fund Risks",
      "th": "ยอมรับความเสี่ยง",
    },
    "robo_create_risk_acceptance": {
      "en": "Risk Acceptance",
      "th": "ยอมรับความเสี่ยง",
    },
    "your_risk_level": {
      "en": "Your Risk Tolerance Level",
      "th": "ระดับความเสี่ยงของคุณ",
    },
    "risk_level": {
      "th": "ระดับความเสี่ยงของคุณ",
      "en": "Risk Tolerance Level"
    },
    "you_do_not_have_suitability_test": {
      "en": "Risk assessment has not been done.",
      "th": "คุณยังไม่ได้ประเมินความเสี่ยง",
    },
    "appropriate_risk_level": {
      "en": "Suitable fund risk level",
      "th": "ระดับความเสี่ยงของกองทุนที่เหมาะสมกับคุณ",
      "en": "Suitable fund risk level",
    },
    "fund_risk_level": {
      "en": "Fund risk level",
      "th": "ระดับความเสี่ยงของกองทุนนี้",
    },
    "fund_risk_level_fund_detail_policy": {
      "en": "Risk Level",
      "th": "ระดับความเสี่ยงของกองทุนนี้",
    },
    "bank_branch": {
      "en": "N/A",
      "th": "สำนัก/สาขา",
    },
    "branch": {
      "en": "Branch",
      "th": "สาขา",
    },
    "branch_amc": {
      "en": "Branch/AMC.",
      "th": "สาขา/บลจ.",
    },
    "account_number": {
      "en": "Account No.",
      "th": "เลขที่บัญชี",
    },
    "account_number_slip": {
      "en": "Account number",
      "th": "เลขที่บัญชี",
    },
    "account_name": {
      "en": "Account name",
      "th": "ชื่อบัญชี",
    },
    "risk_acceptance_risk_delicate": {
      "en": "I have studied the fund porspectus, the associated risks, and the comparison of the performance of the fund in which I am investing and have fully read and understood the Terms and Conditions. I hereby accept such Terms and Conditions.",
      "th": "ข้าพเจ้าได้ศึกษาหนังสือชี้ชวน ความเสี่ยง และข้อมูลการ เปรียบเทียบผลการดำเนินงานของกองทุนรวมที่ข้าพเจ้าจะทำรายการ พร้อมทั้งได้อ่านข้อตกลงการใช้บริการเป็นที่เข้าใจแล้ว และยอมรับเงื่อนไขดังกล่าว",
    },
    "risk_acceptance_risk_level": {
      "en": "I hereby acknowledge and accept that this Fund has higher risk level than my Risk Profile, I understand and accept the risk of this Fund.",
      "th": "กองทุนรวมที่ลูกค้าประสงค์จะลงทุน มีระดับความเสี่ยงสูงกว่าระดับความเสี่ยงที่ลูกค้ายอมรับได้หรือเป็นการลงทุนที่ไม่เป็นไปตามคำแนะนำเกี่ยวกับการจัดสรรการลงทุน (Asset Allocation) ลูกค้าได้รับทราบข้อมูล และระดับความเสี่ยงเป็นอย่างดีแล้วยืนยันจะลงทุนในกองทุนรวมดังกล่าว",
    },
    "risk_acceptance_risk_level_deposit": {
      "en": "I hereby acknowledge that this port contains the fund that is invested abroad and is not higher than 90% against foreign exchange risk. The fund will have foreign exchange risk exposure. This may cause investors to receive return lower than initial amount of invest. I fully understand risks of such investment and confirm to invest in the fund mentioned above.",
      "th": "แผนการลงทุนที่ลูกค้าประสงค์จะลงทุน มีกองทุนรวมที่มีระดับความเสี่ยงสูงกว่าระดับความเสี่ยงที่ลูกค้ายอมรับได้ หรือเป็นการลงทุนที่ไม่เป็นไปตามคำแนะนำเกี่ยวกับการจัดสรรการลงทุน (Asset Allocation) ลูกค้าได้รับทราบข้อมูล และระดับความเสี่ยงเป็นอย่างดีแล้วยืนยันจะลงทุนในแผนการลงทุนดังกล่าว",
    },
    "risk_acceptance_rate_exchange": {
      "en": "I hereby acknowledge that foreign investment carries with its risk of exchange rates. Where initial investment can lose value due to exchange rate fluctuations or they can profit due to favorable exchange rate changes.",
      "th": "กองทุนรวมที่ลูกค้าประสงค์จะลงทุน มีการลงทุนในต่างประเทศและไม่ได้ทำสัญญาป้องกันความเสี่ยงจากอัตราแลกเปลี่ยน หรือมีนโยบายป้องกันความเสี่ยงต่ำกว่าร้อยละ 90 กองทุนจะมีความเสี่ยงจากอัตราแลกเปลี่ยน ซึ่งอาจทำให้ลูกค้าได้รับเงินคืนต่ำกว่าเงินลงทุนแรกเริ่มได้ลูกค้าได้รับทราบข้อมูลแล้วยืนยันจะลงทุนในกองทุนรวมดังกล่าว",
    },
    "risk_acceptance_rate_exchange_deposit": {
      "th": "แผนการลงทุนที่ลูกค้าประสงค์จะลงทุน มีกองทุนรวมที่มีการลงทุนในต่างประเทศและไม่ได้ทำสัญญาป้องกันความเสี่ยงจากอัตราแลกเปลี่ยน หรือมีนโยบายป้องกันความเสี่ยงต่ำกว่าร้อยละ 90 กองทุนจะมีความเสี่ยงจากอัตราแลกเปลี่ยน ซึ่งอาจทำให้ลูกค้าได้รับเงินคืนต่ำกว่าเงินลงทุนแรกเริ่มได้ ลูกค้าได้รับทราบข้อมูลแล้วยืนยันจะลงทุนในแผนการลงทุนดังกล่าว",
      "en": "I hereby acknowledge that foreign investment carries with its risk of exchange rates. Where initial investment can lose value due to exchange rate fluctuations or they can profit due to favorable exchange rate changes."
    },
    "risk_acceptance_tax_saving": {
      "en": "The fund that you wish to invest is a tax saving fund, which you have acknowledge the conditions relating to tax saving according to the investment do not comply witch tax saving conditions, your investment shall be treated as a breach of tax saving investment conditions, prescribed by the Revenue Department.",
      "th": "กองทุนที่ลูกค้าประสงค์จะลงทุนนั้นเป็นกองทุนประเภทสิทธิประโยชน์ทางภาษี ลูกค้าได้รับทราบเงื่อนไขเกี่ยวกับการลงทุนในกองทุนข้างต้นว่าในกรณีลูกค้ามีการลงทุนไม่เป็นไปตามเงื่อนไขสิทธิประโยชน์ทางภาษี ลูกค้าจะถูกบังคับตามข้อปฏิบัติในการผิดเงื่อนไขการลงทุนตามที่กรมสรรพากรกำหนด",
    },
    "the_service_provider_is_not_available_at_this_time": {
      "en": "Sorry, the transaction cannot be processed at this time.",
      "th": "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้",
    },
    "sorry_you_cannot_open_account_because_you_already_have_profit_account": {
      "en": "Sorry, your account cannot be opened.\nYou already have a Pro-Fit Digital Savings account.",
      "th": "ขออภัย คุณไม่สามารถเปิดบัญชีได้\nเนื่องจากคุณมีบัญชีเงินฝากออมทรัพย์ดิจิทัล โปร-ฟิต แล้ว",
    },
    "thank_for_trust_lh_bank": {
      "en": "Thank you for your trust and confidence in LH Bank.",
      "th": "ขอบคุณที่ไว้วางใจ\nธนาคารแลนด์ แอนด์ เฮ้าส์",
    },
    "please_wait_for_approve": {
      "en": "Please wait for approval within ",
      "th": "โปรดรอผลการอนุมัติ\nภายใน ",
    },
    "within": {
      "en": "within",
      "th": "ภายใน",
    },
    "day": {
      "en": "business days.",
      "th": "วัน",
    },
    "back_to_home": {
      "en": "Home",
      "th": "กลับหน้าหลัก",
    },
    "recommend_investment": {
      "th": "แนะนำสัดส่วนการลงทุน",
      "en": "Recommended Asset Allocation",
    },
    "re_assessment": {
      "en": "Take Risk Assessment",
      "th": "ทำแบบประเมินใหม่",
      "en": "Take Risk Assessment",
    },
    "reasonable_risk": {
      "en": "Suitable risk level",
      "th": "ความเสี่ยงที่เหมาะสม",
      "en": "Suitable risk level",
    },
    "this_fund": {
      "en": "This fund",
      "th": "กองทุนนี้",
    },
    "sales_sheet": {
      "en": "Sales Sheet",
      "th": "ดูรายละเอียด",
    },
    "open_mutual_fund_account": {
      "en": "Open Mutual Fund Account",
      "th": "เปิดบัญชีกองทุน",
    },
    "open_mutual_fund_account_fund_connext": {
      "en": "Open FundConnext Account for Online Mutual Fund Trading",
      "th": "เปิดบัญชีกองทุน FundConnext",
    },
    "open_investment_account": {
      "en": "Open Account",
      "th": "เปิดบัญชีลงทุน",
    },
    "open_fund_account_info_1": {
      "en": "Open FundConnext account to trade mutual with various leading asset management companies.",
      "th": "เปิดบัญชีที่เดียว ซื้อได้มากถึง 12 บลจ. ชั้นนำ",
    },
    "open_fund_account_info_2": {
      "en": "Build investment self-discipline with DCA function.",
      "th": "สร้างวินัยในการลงทุนแบบสม่ำเสมอ กำหนดความถี่ได้ด้วยตัวคุณเอง (DCA)",
    },
    "hyphen": {
      "en": "-",
      "th": "-",
    },
    "almost_ready": {
      "en": "Almost Ready !",
      "th": "เกือบลงทุนได้แล้ว !",
    },
    "open_savings_account": {
      "en": "Open Savings Account",
      "th": "เปิดบัญชีเงินฝากออมทรัพย์",
    },
    "open_savings_account_info_1": {
      "en": "No minimum amount required, No Passbook",
      "th": "ไม่มีขั้นต่ำในการเปิดบัญชี ไม่มีสมุดคู่ฝาก",
    },
    "open_savings_account_info_2": {
      "en": "No Fee for money transfer via the application",
      "th": "โอนเงินผ่านแอปพลิเคชัน ฟรี!",
    },
    "terms_and_onditions_mutual_fund_account_opening": {
      "en": "Terms and Conditions - Mutual Fund Account Opening",
      "th": "ข้อกำหนดและเงื่อนไขการเปิดบัญชีกองทุน",
    },
    "terms_and_onditions_mutual_fund_investment_services": {
      "en": "Terms and Conditions - Mutual Fund Investment Services",
      "th": "ข้อกำหนดและเงื่อนไขสำหรับการใช้บริการลงทุนในหน่วยลงทุน",
    },
    "open_savings_account_and_mutual_fund_account": {
      "en": "Open Savings Account and Mutual Fund Account",
      "th": "เปิดบัญชีเงินฝากออมทรัพย์\nพร้อมบัญชีกองทุน",
    },
    "buy_fund": {
      "en": "Buy",
      "th": "ซื้อกองทุน",
    },
    "money_amount": {
      "en": "Amount",
      "th": "จำนวนเงิน",
    },
    "sell_amount": {
      "en": "Sell Amount",
      "th": "จำนวนที่ขาย",
    },
    "minimum_order_value": {
      "en": "Minimum Buy Amount",
      "th": "มูลค่าการซื้อขั้นต่ำ",
    },
    "minimum_initial_order_value": {
      "en": "N/A",
      "th": "มูลค่าขั้นต่ำของการสั่งซื้อครั้งแรก (บาท)",
    },
    "credit_limit_can_purchased_today": {
      "en": "The remaining buying limit today (THB)",
      "th": "วงเงินที่ทำรายการซื้อได้ในวันนี้ (บาท)",
    },
    "deduct_account": {
      "en": "Payment Account",
      "th": "บัญชีตัดเงิน",
    },
    "select_unitholder": {
      "en": "Select an Unitholder",
      "th": "เลือกเลขที่ผู้ถือหน่วยลงทุน",
    },
    "set_dca": {
      "en": "Set-up DCA",
      "th": "ตั้งรายการแบบประจำ (DCA)",
    },
    "dca_every_day": {
      "en": "Every {DAY}",
      "th": "ทุก{DAY}",
    },
    "set_dca_success": {
      "en": "Successful Set-up DCA",
      "th": "ตั้งรายการแบบประจำ (DCA) สำเร็จ",
    },
    "confirm_set_dca": {
      "en": "DCA Confirmation",
      "th": "ยืนยันการตั้งรายการแบบประจำ (DCA)",
    },
    "dca": {
      "en": "DCA",
      "th": "รายการแบบประจำ (DCA)",
    },
    "history_dca": {
      "th": "ดูประวัติ DCA",
      "en": "DCA History",
    },
    "dca_investment_list": {
      "th": "รายการลงทุนแบบประจำ (DCA)",
      "en": "DCA",
    },
    "dca_all_history_transaction": {
      "th": "ประวัติรายการลงทุนแบบประจำ (DCA) ทั้งหมด",
      "en": "DCA Transaction History",
    },
    "robo_dca_all_history_transaction": {
      "th": "ประวัติรายการลงทุนแบบประจำ (DCA) ทั้งหมด",
      "en": "Total DCA",
    },
    "transaction_dca_success": {
      "th": "ทำรายการ DCA สำเร็จ",
      "en": "Successful Set-up DCA",
    },
    "baht": {
      "en": "THB",
      "th": "บาท",
    },
    "check_data": {
      "en": "Review",
      "th": "ตรวจสอบรายการ",
      "en": "Review",
    },
    "transaction_date": {
      "en": "Transaction Date",
      "th": "วันที่ทำรายการ",
    },
    "investment_day": {
      "th": "วันที่ลงทุน",
      "en": "Transaction Date",
    },
    "investment_day_schedule": {
      "th": "วันที่ลงทุน",
      "en": "Schedule",
    },
    "effect_date": {
      "en": "Effective Date",
      "th": "วันที่มีผล",
    },
    "effect_transaction_date": {
      "th": "วันที่รายการมีผล",
      "en": "Effective Date",
    },
    "type": {
      "en": "Schedule Type",
      "th": "ประเภท"
    },
    "dca_type": {
      "en": "DCA Type",
      "th": "ประเภท"
    },
    "every_date": {
      "en": "Every",
      "th": "ทุกวันที่"
    },
    "every": {
      "th": "ทุก",
      "en": "Every",
    },
    "of_month": {
      "th": "ของเดือน",
      "en": "of month",
    },
    "period": {
      "th": "ระยะเวลา",
      "en": "Period",
    },
    "start_date": {
      "th": "วันที่เริ่มต้น",
      "en": "Start Date",
    },
    "start_day": {
      "th": "วันเริ่มต้น",
      "en": "Start Date"
    },
    "end_date": {
      "th": "วันที่สิ้นสุด",
      "en": "End Date",
    },
    "end_day": {
      "th": "วันสิ้นสุด",
      "en": "End Date"
    },
    "start_date_end_date": {
      "th": "วันที่เริ่ม-สิ้นสุด",
      "en": "Start Date-End Date"
    },
    "cancel_transaction": {
      "th": "ยกเลิกการทำรายการ",
      "en": "Cancel"
    },
    "cancel_the_transaction": {
      "th": "ยกเลิกการทำรายการ",
      "en": "Cancel Transaction"
    },
    "cancel_dca_transaction": {
      "th": "ยกเลิกการทำรายการแบบประจำ?",
      "en": "Cancel DCA?"
    },
    "robo_cancel_dca_transaction_confirm_dialog": {
      "th": "ยกเลิกการทำรายการแบบประจำ?",
      "en": "Do you want to cancel the DCA schedule"
    },
    "investment_cycle": {
      "th": "รอบการลงทุน",
      "en": "Schedule",
    },
    "account_insufficient_funds_to_complete_transaction": {
      "th": "บัญชีของคุณมีจำนวนเงินไม่เพียงพอในการทำรายการ",
      "en": "Sorry, you do not have enough balance in this account to cover the transaction."
    },
    "order_after_cut_off_time": {
      "th": "คำสั่งหลังเวลา {CUT_OFF_TIME} น. หรือตรงกับวันหยุดกอง",
      "en": "Order after cut-off time {CUT_OFF_TIME}, or on fund holiday"
    },
    "cannot_proceed_in_holiday": {
      "th": "กองทุนผลประโยชน์ทางภาษีนี้ไม่รองรับการขายหลังเวลา {TIME} น. (Cut-off time) หรือ วันหยุดกองทุน",
      "en": "Cannot proceed a redemption order for this tax saving fund after {TIME} (Cut-off time) , or on fund holiday."
    },
    "will_available_next": {
      "th": "จะมีผลในวันทำการถัดไป",
      "en": "will be effective on the next business day."
    },
    "all_transaction_will_available_next": {
      "th": "ระบบจะดำเนินการตัดเงินจากบัญชีเข้าพอร์ตลงทุนทันทีเพื่อทำรายการซื้อกองทุน ตามแผนการลงทุน",
      "en": "The system will immediately deduct money from the payment account."
    },
    "weekly": {
      "th": "รายสัปดาห์",
      "en": "Weekly",
    },
    "monthly": {
      "th": "รายเดือน",
      "en": "Monthly",
    },
    "robo_dca_every_monthly": {
      "th": "รายเดือน ทุกวันที่ {DATE}",
      "en": "{DATE} of every month",
    },
    "robo_dca_every_monthly_last_day": {
      "en": "Monthly, every last business day of the month.",
      "th": "รายเดือน ทุกวันทำการสุดท้ายของเดือน",
    },
    "robo_dca_every_weekly": {
      "th": "รายสัปดาห์ ทุก{DAY}",
      "en": "every {DAY}",
    },
    "welcome_header_info_1": {
      "th": "Meet Your Goal in Your Way ",
      "en": "Meet Your Goal in Your Way",
    },
    "welcome_detail_info_1": {
      "th": "เลือกลงทุนในกองทุนจากบลจ. ชั้นนำ หรือให้ ROBO Advisor ช่วยวางแผนและบริหารการลงทุนสร้างผลตอบแทนตามเป้าหมาย ตอบโจทย์ทุกจังหวะการลงทุนได้ในแอปเดียว",
      "en": "Choose your own way to invest from leading asset management companies or let ROBO Advisor help you plan and manage your investment portfolios. All in one application.",
    },
    "welcome_header_info_2": {
      "th": "Goal-based Investment Planning",
      "en": "Goal-based Investment Planning",
    },
    "welcome_detail_info_2": {
      "th": "สร้างแผนการลงทุนได้หลากหลาย เพื่อตอบโจทย์ทุกเป้าหมายชีวิต",
      "en": "Dream… and build your investment plan that works for you.",
    },
    "welcome_header_info_3": {
      "th": "ROBO Advisor",
      "en": "ROBO Advisor",
    },
    "welcome_detail_info_3": {
      "th": "จัดพอร์ตการลงทุนได้อย่างมืออาชีพ พร้อมปรับสมดุลให้โดยอัตโนมัติ หรือเลือกการแจ้งเตือนให้คุณตัดสินใจก็ได้ ตามใจคุณ",
      "en": "Help you invest like a Pro. Allocate your funds to a professionally-crafted portfolio. Support fully automated rebalancing or notifying you to decide.",
    },
    "welcome_header_info_4": {
      "th": "Information Hub",
      "en": "Information Hub",
    },
    "welcome_detail_info_4": {
      "th": "ศูนย์รวมข้อมูลการลงทุนที่วิเคราะห์ เจาะลึกและเปรียบเทียบให้คุณพร้อมรับมือในทุกจังหวะการลงทุน",
      "en": "Investment information at your fingertips.",
    },
    "risk": {
      "th": "ความเสี่ยง",
      "en": "Risk Level",
    },
    "fund_dividend": {
      "th": "ปันผล",
      "en": "Dividend",
    },
    "compare": {
      "th": "เปรียบเทียบ",
      "en": "Compare",
    },
    "uncompare": {
      "th": "นำออกจากรายการเปรียบเทียบ",
      "en": "Remove from comparison list",
    },
    "fund_type": {
      "th": "ประเภทกองทุน",
      "en": "Asset Class",
    },
    "group_ALL": {
      "th": "ทุกประเภท",
      "en": "All",
    },
    "group_TAX_SAVING": {
      "th": "Tax Saving",
      "en": "Tax Saving",
    },
    "group_PROPERTY": {
      "th": "Property",
      "en": "Property",
    },
    "group_FOREIGN_FUNDS": {
      "th": "Foreign Funds",
      "en": "Foreign Funds",
    },
    "group_FIXED_INCOME": {
      "th": "Fixed Income",
      "en": "Fixed Income",
    },
    "group_MIXED_FUND": {
      "th": "Mixed Fund",
      "en": "Mixed Fund",
    },
    "group_EQUITY": {
      "th": "Equity",
      "en": "Equity",
    },
    "group_MONEY_MARKET": {
      "th": "Money Market",
      "en": "Money Market",
    },
    "group_OIL": {
      "th": "Oil",
      "en": "Oil",
    },
    "group_GOLD": {
      "th": "Gold",
      "en": "Gold",
    },
    "group_OTHERS": {
      "th": "Others",
      "en": "Others",
    },
    "tab_ALL": {
      "th": "ทั้งหมด",
      "en": "All",
    },
    "tab_FOLLOW": {
      "th": "ติดตาม",
      "en": "Following",
    },
    "tab_SUBSCRIBE": {
      "th": "มีหน่วยลงทุน",
      "en": "My Funds",
    },
    "fund_detail_overview": {
      "th": "ภาพรวม",
      "en": "Overview",
    },
    "fund_detail_performance": {
      "th": "ผลการดำเนินงาน",
      "en": "Performance",
    },
    "fund_strategy_detail": {
      "th": "นโยบายการลงทุน",
      "en": "Investment Strategy",
    },
    "investment_policy": {
      "th": "นโยบายการลงทุน",
      "en": "Investment Policy",
    },
    "fund_detail_trading": {
      "th": "ข้อมูลการซื้อขาย",
      "en": "Trading Information",
    },
    "recommended_plan": {
      "th": "แผนแนะนำ",
      "en": "Recommended Plans",
    },
    "select_plan_that_right_for_you": {
      "en": "Invest with ROBO Advisor",
      "th": "ลงทุนกับ ROBO Advisor",
    },
    "invest": {
      "th": "ลงทุน",
      "en": "Invest",
    },
    "robo_dca_item_invest_amount": {
      "th": "จำนวนเงินลงทุน",
      "en": "Invest",
    },
    "choose_plan": {
      "th": "เลือกแผนเพื่อลงทุน",
      "en": "Select Investment Plan",
    },
    "goal_plan": {
      "th": "แผนตามเป้าหมายชีวิต",
      "en": "Goal-Based Planning",
    },
    "goal_plan_detail": {
      "th": "วางแผนการลงทุนตามเป้าหมายและระยะเวลาที่คุณต้องการลงทุน",
      "en": "Plan your investment to achieve life goals e.g. Retirement Planing.",
    },
    "grow_plan": {
      "th": "แผนเติบโตความมั่งคั่ง",
      "en": "Wealth Growth Planning",
    },
    "wealth_growth_plan": {
      "th": "เติบโตความมั่งคั่ง",
      "en": "wealth growth plan",
    },
    "grow_plan_detail": {
      "th": "สำหรับผู้ที่ต้องการนำเงินก้อนมาสร้างรายได้ ตามผลตอบแทนที่หวัง บนความเสี่ยงที่ยอมรับได้",
      "en": "Plan your investment to achieve life goals e.g. Retirement Planning.",
    },
    "investment_plan": {
      "th": "แผนธีมการลงทุน",
      "en": "Thematic Plans",
    },
    "investment_plan_detail": {
      "th": "สูตรสำเร็จการลงทุน เพื่อตอบโจทย์ความชื่นชอบที่แตกต่าง",
      "en": "Special invesment plans for those who believe in particular economic trends.",
    },
    "fill_detail": {
      "th": "โปรดกรอกรายละเอียด",
      "en": "Please specify",
    },
    "specify_detail": {
      "th": "โปรดระบุรายละเอียด",
      "en": "Please Specify",
    },
    "plan_name": {
      "th": "ชื่อแผน",
      "en": "Port Name",
    },
    "plan_name_placeholder": {
      "th": "ระบุชื่อแผน",
      "en": "N/A",
    },
    "plan_name_duplicated_please_change": {
      "th": "ชื่อแผนซ้ำ โปรดกำหนดชื่อแผนอีกครั้ง",
      "en": "You already have this a port name.",
    },
    "read_investment_manual": {
      "th": "อ่านคู่มือการลงทุน",
      "en": "Read the Investment Guide",
    },
    "investment_manual": {
      "th": "คู่มือการลงทุน",
      "en": "Read the Investment Guide",
    },
    "account_opening_form": {
      "th": "ข้อมูลเปิดบัญชี",
      "en": "Account Opening Form",
    },
    "occupation": {
      "th": "อาชีพและธุรกิจ",
      "en": "Occupation",
    },
    "idcard_picture_and_signature": {
      "th": "ภาพถ่ายบัตรประชาชนและลายเซ็น",
      "en": "ID Card Picture and Signature",
    },
    "suitability_assessment": {
      "th": "แบบประเมินความเหมาะสมในการลงทุน",
      "en": "Suitability Assessment",
    },
    "open_profit_digital_savings": {
      "th": "เปิดบัญชีเงินฝากออมทรัพย์ดิจิทัล โปร-ฟิต",
      "en": "Open Pro-Fit Digital Savings",
    },
    "no": {
      "th": "ไม่ใช่",
      "en": "No",
    },
    "yes": {
      "th": "ใช่",
      "en": "Yes",
    },
    "please_specify_position": {
      "th": "โปรดระบุตำแหน่งงาน",
      "en": "(Please specify the position)",
    },
    "lh_bank": {
      "th": "ธนาคารแลนด์ แอนด์ เฮ้าส์",
      "en": "LH Bank"
    },
    "buy_fund_success": {
      "th": "ทำรายการซื้อกองทุนสำเร็จ",
      "en": "Successful Subscription Order",
    },
    "buy_fund_success_waiting": {
      "th": "ทำรายการซื้อกองทุนสำเร็จ (รอดำเนินการ)",
      "en": "Successful Subscription Order (Waiting for processing)"
    },
    "dca_confirm_description": { // subscription DCA confirm page
      "th": "โปรดตรวจสอบรายการให้ถูกต้อง\nคุณสามารถยกเลิกรายการลงทุนแบบประจำ (DCA) ได้ที่เมนู\nพอร์ตโฟลิโอ > ลงทุนแบบประจำ (DCA)",
      "en": "Please review the information. You can cancel your Regular Investment (DCA) at Portfolio> DCA menu."
    },
    "you_can_cancel_dca_by_go_to": { // subscription DCA slip
      "th": "คุณสามารถยกเลิกรายการได้ที่เมนู พอร์ตโฟลิโอ > ลงทุนแบบประจำ (DCA)",
      "en": "You can cancel DCA order at Portfolio> DCA Menu"
    },
    "you_can_cancel_dca_by_go_to_robo": { // Robo DCA slip
      "th": "คุณสามารถยกเลิกรายการได้ที่เมนู\nตั้งค่าแผน > ลงทุนแบบประจำ (DCA)",
      "en": "You can cancel your Regular Investment (DCA) at ROBO Port Setting > Set-up DCA menu.",
    },
    "share_slip": {
      "th": "แชร์สลิป",
      "en": "Share Slip",
    },
    "prospectus": {
      "th": "หนังสือชี้ชวน",
      "en": "Fund Fact Sheet",
    },
    "view_prospectus": {
      "en": "N/A",
      "th": "ดูหนังสือชี้ชวนสรุปข้อมูลสำคัญ",
    },
    "investment_period": {
      "th": "ระยะเวลาการลงทุน",
      "en": "Investment Period",
    },
    "investment_period_year": {
      "th": "ระยะเวลาการลงทุน (ปี)",
      "en": "Investment Period (Years)",
    },
    "please_enter_money": {
      "th": "โปรดระบุจำนวนเงิน",
      "en": "Specify Amount",
    },
    "enter_number": {
      "th": "ระบุจำนวน",
      "en": "Sepecify",
    },
    "please_enter_number_of_years": {
      "th": "โปรดระบุจำนวนปี",
      "en": "specify the number of years",
    },
    "investment_period_placeholder": {
      "th": "ระบุระยะเวลาการลงทุน",
      "en": "Specify investment period",
    },
    "initial_investment_amount": {
      "th": "เงินทุนเริ่มต้น",
      "en": "First Investment Amount",
    },
    "initial_investment": {
      "th": "เงินลงทุนเริ่มต้น",
      "en": "First Investment",
    },
    "minimum": {
      "th": "ขั้นต่ำ",
      "en": "Minimum",
    },
    "initial_investment_placeholde": {
      "th": "ระบุเงินลงทุนเริ่มต้น",
      "en": "N/A",
    },
    "minimum_baht": {
      "th": "ขั้นต่ำ (บาท)",
      "en": "Minimun (THB)",
    },
    "investment_per_month": {
      "th": "เงินลงทุนต่อเดือน",
      "en": "Monthly Investment",
    },
    "investment_per_month_placeholde": {
      "th": "ระบุเงินลงทุนต่อเดือน",
      "en": "N/A",
    },
    "wealth_growth_plan_info": {
      "th": "เป็นเพียงข้อมูลที่นำไปวิเคราะห์เท่านั้น ระบบไม่มีการเรียกเก็บเงินของคุณ ณ ขณะนี้",
      "en": "For planning purpose only, not a buying order.",
    },
    "return_risk_level": {
      "th": "เลือกโมเดลพอร์ต",
      "en": "Select Model Port",
    },
    "balanced_port": {
      "th": "Balanced Port",
      "en": "Balanced Port",
    },
    "expected_return": {
      "th": "ผลตอบแทนที่คาดว่าจะได้รับ",
      "en": "Expected Return",
    },
    "potential_loss": {
      "th": "ผลขาดทุนที่อาจเกิดขึ้น",
      "en": "Possible loss",
    },
    "percen": {
      "th": "%",
      "en": "%",
    },
    "suitable_risk_level_of_investor": {
      "th": "เหมาะกับระดับความเสี่ยงของผู้ลงทุน",
      "en": "Suitable for investor's risk tolerance",
    },
    "month": {
      "th": "เดือน",
      "en": "Month",
    },
    "months": {
      "th": "เดือน",
      "en": "Months",
    },
    "per_year": {
      "th": "ต่อปี",
      "en": "p.a.",
    },
    "at_year": {
      "th": "ปีที่",
      "en": "Year",
    },
    "wealth_growth_plan_info_2": {
      "th": "สำหรับระยะเวลาการลงทุน 1 ปี ที่ระดับความเชื่อมั่น 90%",
      "en": "N/A",
    },
    "estimate_investment": {
      "th": "ประมาณการผลการลงทุน",
      "en": "Portfolio Analysis",
    },
    "accept_and_continue": {
      "th": "ยอมรับและดำเนินการต่อ",
      "en": "Accept and Proceed",
    },
    "prospectus_accept": {
      "th": "ข้าพเจ้าได้ศึกษาหนังสือชี้ชวน ความเสี่ยงและข้อมูลการเปรียบเทียบผลการดำเนินงานของกองทุนรวมที่ข้าพเจ้าจะทำรายการ พร้อมทั้งได้อ่านข้อตกลงการใช้บริการเป็นที่เข้าใจแล้ว และยอมรับเงื่อนไขดังกล่าว",
      "en": "I have studied the fund porspectus, the associated risks, and the comparison of the performance of the fund in which I am investing and have fully read and understood the Terms and Conditions. I hereby accept such Terms and Conditions.",
    },
    "start": {
      "th": "เริ่มต้น",
      "en": "Start",
    },
    "subscribe": {
      "th": "ซื้อ",
      "en": "Buy",
    },
    "redeem": {
      "th": "ขาย",
      "en": "Sell",
    },
    "switch": {
      "th": "สับเปลี่ยน",
      "en": "Switch",
    },
    "switching": {
      "th": "สับเปลี่ยน",
      "en": "Switching",
    },
    "transfer_in": {
      "th": "โอนเข้า",
      "en": "Transfer-In",
    },
    "transfer_out": {
      "th": "โอนออก",
      "en": "Transfer-Out",
    },
    "go_to_setting": {
      "en": "Please go to \"Setting\" menu on this device. ",
      "th": "โปรดไปที่ setting ของเครื่อง",
    },
    "open_biometric": {
      "en": "Enable Biometric Login",
      "th": "เพื่อเปิดใช้งานระบบ Biometric",
    },
    "use": {
      "en": "Use",
      "th": "ใช้",
    },
    "for_profita": {
      "en": "for profita",
      "th": "สำหรับ profita",
    },
    "investment_growth_chart_description": {
      "th": "รายละเอียดการจำลองเงินลงทุนดังรูป เป็นเพียงผลลัพธ์จากการคำนวณโดยมีพื้นฐานจากผลตอบแทนในอดีตเพื่อช่วยในการตัดสินใจ มิใช่การยืนยันผลตอบแทนในอนาคต",
      "en": "The estimeated investment values shown in the figure are calculated based on historical data and is therefore not guaranteed into the future."
    },
    "30_percent_chance": {
      "th": "โอกาส 30%",
      "en": "Probability 30%",
    },
    "60_percent_chance": {
      "th": "โอกาส 60%",
      "en": "Probability 60%",
    },
    "estimate_value": {
      "th": "ค่าประมาณการ",
      "en": " Estimated value",
    },
    "estimate": {
      "en": "Estimated",
      "th": "ประมาณการ",
    },

    "have_30_percent_chance_of_getting_more": {
      "th": "มีโอกาส 30% ที่จะได้มากกว่า",
      "en": "30 % probability of a value greater than that"
    },
    "have_30_percent_chance_of_getting_less": {
      "th": "มีโอกาส 30% ที่จะได้น้อยกว่า",
      "en": "30 % probability of a value less than that"
    },
    "investment_result_estimate": {
      "th": "ประมาณการผลการลงทุน",
      "en": "Investment Planning Analysis"
    },
    "total_investment": {
      "th": "รวมเงินลงทุนทั้งหมด",
      "en": "Total Cost"
    },
    "investment_cost": {
      "th": "รวมเงินลงทุนทั้งหมด",
      "en": "Investment Cost"
    },
    "total_investment_cost": {
      "th": "รวมเงินลงทุนทั้งหมด",
      "en": "Total Investment Cost"
    },
    "estimate_port_value": {
      "th": "ประมาณการมูลค่าพอร์ต",
      "en": "Estimated Port Value"
    },
    "investment_growth_chart": {
      "th": "กราฟการเติบโตของเงินลงทุน",
      "en": "Forecasting Port Performance"
    },
    "investment_chart": {
      "th": "กราฟการลงทุน",
      "en": "Investment Historical Chart"

    },
    "ready_initial_investment": {
      "th": "เงินที่พร้อมลงทุนครั้งแรก",
      "en": "First Investment ",
    },
    "robo_start_investment": {
      "th": "เงินที่พร้อมลงทุนครั้งแรก",
      "en": "Start Investment",
    },
    "current_plan_not_possible_because": {
      "th": "แผนการลงทุนไม่สามารถเกิดขึ้นได้จริง เนื่องจากคุณระบุเงินลงทุนต่ำเกินไป โปรดปรับแผนการลงทุน",
      "en": "The goal cannot be achieved. Please adjust your investment plan."
    },
    "adjust_initial_investment_to": {
      "th": "ปรับเงินลงทุนเริ่มต้นเป็น",
      "en": "Increase First Investment to"
    },
    "adjust_investment_to": {
      "th": "ปรับเงินลงทุนเป็น",
      "en": "Increase Monthly Investment to"
    },
    "show_recommend_investment_port": {
      "th": "แสดงพอร์ตการลงทุนที่แนะนำ",
      "en": "Show a Model Port",
    },
    "please_choose": {
      "th": "โปรดเลือกเป้าหมายการลงทุน",
      "en": "Select your investment goal",
    },
    "port_name_placeholder": {
      "th": "โปรดระบุชื่อแผน",
      "en": "Specify port name",
    },
    "year": {
      "th": "ปี",
      "en": "Year",
    },
    "years": {
      "th": "ปี",
      "en": "Years",
    },
    "current_age": {
      "th": "อายุปัจจุบัน",
      "en": "Current Age",
    },
    "create_plan_age": {
      "th": "อายุตอนสร้างแผน",
      "en": "The age when a plan was created.",
    },
    "expected_retirement_age": {
      "th": "อายุที่คาดว่าจะเกษียณ",
      "en": "Expected Retirement Age",
    },
    "spending_after_retirement_until": {
      "th": "หลังเกษียณคาดว่าจะใช้เงินจนถึงอายุ",
      "en": "Life expectancy",
    },
    "spending_after_retirement_per_month": {
      "th": "หลังเกษียณต้องการใช้เงินเดือนละ",
      "en": "Expected monthly expense after retirement",
    },
    "inflation_rate": {
      "th": "อัตราเงินเฟ้อ",
      "en": "Inflation Rate",
    },
    "inflation_rate_placeholder": {
      "th": "โปรดระบุอัตราเงินเฟ้อ",
      "en": "Specify inflation rate",
    },
    "percen_per_year": {
      "th": "% ต่อปี",
      "en": "% p.a.",
    },
    "return_rate_after_retirement": {
      "th": "อัตราผลตอบแทนหลังเกษียณ",
      "en": "Expected yield on savings after retirement",
    },
    "return_rate_after_retirement_placeholder": {
      "th": "โปรดระบุอัตราผลตอบแทนหลังเกษียณ",
      "en": "Specify percent",
    },
    "first_investment": {
      "th": "เงินที่พร้อมลงทุนครั้งแรก",
      "en": "First Investment ",
    },
    "expect_retirement_money": {
      "th": "คาดการณ์เงินที่ต้องมีหลังเกษียณ",
      "en": "Expected Investment Amount after Retirement",
    },
    "expect_how_much_need_retire": {
      "th": "คาดการณ์เงินที่ต้องมีหลังเกษียณ",
      "en": "How much will you need to retire",
    },
    "expect_target_money": {
      "th": "คาดการณ์เงินที่ต้องมี",
      "en": "Expected Port Value",
    },
    "expect_investment_amount": {
      "th": "คาดการณ์เงินที่ต้องมี",
      "en": "Expected Investment Amount",
    },
    "how_much_need_retire": {
      "th": "เงินที่จะต้องมีเพื่อใช้หลังเกษียณ",
      "en": "How much will you need to retire",
    },
    "money_for_retirement": {
      "th": "เงินที่จะต้องมีเพื่อใช้หลังเกษียณ",
      "en": "Expected Investment Amount after Retirement",
    },
    "help_assess": {
      "th": "ช่วยประเมินให้",
      "en": "Find out how much I'll need",
    },
    "specify_yourself": {
      "th": "ต้องการระบุเอง",
      "en": "I know how much I'll need",
    },
    "please_specify_correct_amount": {
      "th": "โปรดระบุจำนวนเงินไม่น้อยกว่า (บาท)",
      "en": "Please specify an amount at least (THB)",
    },
    "bank_account_amount_not_enough": {
      "th": "บัญชีมีจำนวนเงินไม่พอในการทำรายการ",
      "en": "Insufficient fund",
    },
    "latest_total_value": {
      "th": "มูลค่ารวมล่าสุด",
      "en": "Total Market Value",
    },
    "robo_header": {
      "th": "ROBO Advisor",
      "en": "ROBO Advisor",
    },
    "all_plan": {
      "th": "แผนทั้งหมด",
      "en": "Total",
    },
    "robo_port": {
      "th": "แผน",
      "en": "Port",
    },
    "robo_ports": {
      "th": "แผน",
      "en": "Ports",
    },
    "skip": {
      "th": "ข้าม",
      "en": "Skip",
    },
    "recommend_investment_port": {
      "th": "พอร์ตการลงทุนที่แนะนำ",
      "en": "Recommended Model Port",
    },
    "open_investment_port": {
      "th": "เปิดพอร์ตการลงทุน",
      "en": "Open Port",
    },
    "strategy": {
      "th": "กลยุทธ์",
      "en": "Strategy"
    },
    "confirm_rebalance": {
      "th": "ยืนยันปรับกลยุทธ์",
      "en": "Confirm Rebalancing"
    },
    "rebalance_strategy_effective_date": {
      "en": "Port Strategy ( EFFECTIVEDATE )",
      "th": "กลยุทธ์การปรับพอร์ต ( EFFECTIVEDATE )"
    },
    "maximum_risk_in_port": {
      "th": "ความเสี่ยงสูงสุดของกองทุนในพอร์ต",
      "en": "Highest Fund Risk Level in Port"
    },
    "show_historical_returns": {
      "th": "ดูผลตอบแทนย้อนหลัง",
      "en": "View Historical Performance",
    },
    "hide_historical_returns": {
      "th": "ซ่อนผลตอบแทนย้อนหลัง",
      "en": "Hide Historical Performance",
    },
    "average_return_per_year": {
      "th": "ผลตอบแทนเฉลี่ยต่อปี",
      "en": "Annual Average Return",
    },
    "maximum_return_at_year": {
      "th": "มีผลตอบแทนสูงสุด ปีที่",
      "en": "Highest Return is in Year",
    },
    "minimum_return_at_year": {
      "th": "มีผลตอบแทนต่ำสุด ปีที่",
      "en": "Lowest Return is in Year",
    },
    "data_in_10_year_of_this_port": {
      "th": "ข้อมูลผลตอบแทนปีที่ผ่านมาของพอร์ตนี้่ คำนวณจากผลตอบแทนของแต่ละกองทุนตามสัดส่วนการลงทุนที่แนะนำ โดยจะแสดงย้อนหลังได้ถึงปีที่มีข้อมูลผลตอบแทนของกองทุนครบทุกกอง",
      "en": "This portfolio's performance is calculated based on the returns of the recommended funds and their allocation according to the model port. The performance can be shown back up to the year that has all funds' returns",
    },
    "past_performance_is_not_guarantee_of_future_performance": {
      "th": "ผลการดำเนินงานในอดีตไม่ได้เป็นเครื่องยืนยันผลการดำเนินงานในอนาคต",
      "en": "The performance is calculated based on historical data and is therefore not guaranteed into the future.",
    },
    "recommend": {
      "th": "แนะนำ",
      "en": "Recommended"
    },
    "optional": {
      "th": "ทางเลือก",
      "en": "Alternative Fund",
    },
    "investment_portfolio": {
      "th": "พอร์ตลงทุน",
      "en": "Portfolio",
    },
    "proportion_asset_allocation": {
      "th": "สัดส่วน",
      "en": "Asset Allocation",
    },
    "proportion_allocation": {
      "th": "สัดส่วน",
      "en": "Allocation",
    },
    "proportion": {
      "th": "สัดส่วน",
      "en": "Proportion",
    },
    "please_select_plan": {
      "th": "กรุณาเลือกแผนที่คุณต้องการ",
      "en": "Thematic Investment Plans",
    },
    "list_plan": {
      "th": "รายการ",
      "en": "Plan",
    },
    "list_plans": {
      "th": "รายการ",
      "en": "Plans",
    },
    "list": {
      "th": "รายการ",
      "en": "Transaction",
    },
    "Transac": {
      "th": "รายการ",
      "en": "Transac",
    },
    "dca_plan_unit": {
      "th": "รายการ",
      "en": "DCA Plan",
    },
    "dca_plans_unit": {
      "th": "รายการ",
      "en": "DCA Plans",
    },
    "transactions": {
      "th": "รายการ",
      "en": "Transactions",
    },
    "list_unit_holder": {
      "th": "รายการ",
      "en": "Unitholders",
    },
    "list_unitholder": {
      "th": "รายการ",
      "en": "Unitholder",
    },
    "port_value_exclude_transactions_today": {
      "th": "มูลค่าการลงทุนที่แสดงไม่รวมการซื้อ ขาย สับเปลี่ยนในวันนี้",
      "en": "Port value excluding Buy/Sell/Switch transactions today.",
    },
    "list_year": {
      "th": "รายการ",
      "en": "Years",
    },
    "list_item": {
      "th": "รายการ",
      "en": "Item",
    },
    "list_items": {
      "th": "รายการ",
      "en": "Items",
    },
    "list_all": {
      "th": "รายการทั้งหมด",
      "en": "Total",
    },
    "return_value": {
      "th": "เป้าหมายผลตอบแทน",
      "en": "Epected Return",
    },
    "target": {
      "th": "เป้าหมาย",
      "en": "Target",
    },
    "plan_details": {
      "th": "รายละเอียดแผน",
      "en": "Investment Description",
    },
    "formular_plan_info": {
      "th": "รายละเอียดแกระจายเงินลงทุนในหลายสินทรัพย์ เพื่อสะสมมูลค่าเงินลงทุน บนเป้าหมายผลตอบแทน 12.0% ต่อปี หรือ 2 เท่าตัวใน 9 ปี (ไม่ใช่การการันตี) ผน",
      "en": "N/A",
    },
    "investment_theme_plan": {
      "th": "แผนธีมการลงทุน",
      "en": "Thematic Plans",
    },
    "robo_fee_acceptance_header": {
      "th": "ค่าธรรมเนียมการใช้บริการ",
      "en": "ROBO Advisor's Service Fee",
    },
    "robo_fee_acceptance_page_header": {
      "th": "ค่าธรรมเนียมการใช้บริการ ROBO Advisor",
      "en": "ROBO Advisor's Service Fee",
    },
    "robo_fee_acceptance_sub_header": {
      "en": "Terms and Conditions",
      "th": "เงื่อนไขค่าธรรมเนียมการใช้บริการ ROBO Advisor",
    },
    "robo_fee_acceptance_description": {
      "en": "N/A",
      "th": "ขณะนี้ธนาคารได้ยกเว้นค่าธรรมเนียมการใช้บริการ ROBO Advisor แต่ธนาคารมีสิทธิประกาศเปลี่ยนแปลง กำหนดอัตรา และเงื่อนไขเกี่ยวกับค่าธรรมนียมและค่าใช้บริการ ROBO Advisor ได้ตามที่เห็นสมควร",
    },
    "robo_term_and_conditions_header": {
      "th": "ข้อตกลงและเงื่อนไขการให้บริการ",
      "en": "Terms and Conditions - ROBO Advisor",
    },
    "robo_term_and_conditions_description": {
      "en": "N/A",
      "th": "1. อัตราเงินเฟ้อทั่วไปของสหรัฐชะลอลงสู่เพิ่มขึ้น 0.3% จากช่วงเดียวกันปีก่อนในเดือน เม.ย. จาก 1.5% ในเดือน มี.ค. เมื่อเทียบเป็นต่อเดือน อัตราเงินเฟ้อทั่วไปลดลง 0.8% จากเดือนก่อนหน้าในเดือน เม.ย. โดยมีสาเหตุหลักจากการร่วงลงของราคาน้ำมัน ส่วนอัตราเงินเฟ้อพื้นฐานซึ่งไม่รวมหมวดอาหารและพลังงานเพิ่มขึ้น 1.4% จากช่วงเดียวกันปีก่อนหลังจากเพิ่มขึ้น 2.1% ในเดือนก่อนหน้า\n\n2. อัตราเงินเฟ้อทั่วไปของจีนเพิ่มขึ้น 3.3% จากช่วงเดียวกันปีก่อนในเดือน เม.ย. ชะลอลงจากเพิ่มขึ้น 4.3% ในเดือน มี.ค. โดยมีสาเหตุหลักจากการลดลงของราคาอาหาร ส่วนอัตราเงินเฟ้อพื้นฐานซึ่งไม่รวมหมวดอาหารและพลังงานเพิ่มขึ้น 1.1% จากช่วงเดียวกันปีก่อน ซะลอลงจาก 1.2% ในเดือน มี.ค.\n\n3. อัตราเงินเฟ้อทั่วไปของจีนเพิ่มขึ้น 3.3% จากช่วงเดียวกันปีก่อนในเดือน เม.ย. ชะลอลงจากเพิ่มขึ้น 4.3% ในเดือน มี.ค. โดยมีสาเหตุหลักจากการลดลงของราคาอาหาร ส่วนอัตราเงินเฟ้อพื้นฐานซึ่งไม่รวมหมวดอาหารและพลังงานเพิ่มขึ้น 1.1% จากช่วงเดียวกันปีก่อน ซะลอลงจาก 1.2% ในเดือน มี.ค.\n\n4. อัตราเงินเฟ้อทั่วไปของจีนเพิ่มขึ้น 3.3% จากช่วงเดียวกันปีก่อนในเดือน เม.ย. ชะลอลงจากเพิ่มขึ้น 4.3% ในเดือน มี.ค. โดยมีสาเหตุหลักจากการลดลงของราคาอาหาร ส่วนอัตราเงินเฟ้อพื้นฐานซึ่งไม่รวมหมวด\n",
    },
    "robo_investment_universe_acceptance_header": {
      "th": "กองทุนในกลุ่มพิจารณาการลงทุน",
      "en": "Fund Universe",
    },
    "robo_save_and_exit_description": {
      "th": "คุณต้องการบันทึกแผนการลงทุนนี้ เพื่อเปิดพอร์ตภายหลังหรือไม่",
      "en": "Do you want to save this investment plan to open a port later?"
    },
    "no_mutual_account_dialog": {
      "th": "คุณยังเปิดบัญชีไม่สำเร็จ โปรดดำเนินการต่อ",
      "en": "You need to open FundConnext Account for Online Mutual Fund Trading",
    },
    "no_saving_account_dialog": {
      "th": "ขออภัย ไม่พบบัญชีสำหรับตัดเงิน \nโปรดตรวจสอบสถานะบัญชีของคุณ",
      "en": "Sorry, you don't have any active savings account. Please check your account status.",
    },
    "no_receiveable_saving_account_dialog": {
      "th": "ขออภัย ไม่พบบัญชีสําหรับรับเงิน\nโปรดตรวจสอบสถานะบัญชีของคุณ",
      "en": "Sorry, you don't have any active savings account. Please check your account status.",
    },
    "idenifycation_card_expired_warning": {
      "th": "บัตรประชาชน หรือ Passport ของคุณหมดอายุ หรือใกล้หมดอายุ โปรดติดต่อสาขาของธนาคารเพื่อปรับปรุงข้อมูล เมื่อคุณต้องการซื้อกองทุนกับ บลจ. ที่คุณไม่เคยซื้อมาก่อน",
      "en": "Your ID card/Passport has expired or nearly expired. Please contact the bank branch to update information otherwise you will not be able to buy funds from AMCs that you have never purchased before.",
    },
    "trading_idenifycation_card_expired_error": {
      "th": "ขออภัย คุณไม่สามารถซื้อกองทุนได้ เนื่องจากบัตรประชาชน หรือ Passport ของคุณหมดอายุ หรือใกล้หมดอายุ โปรดติดต่อสาขาของธนาคารเพื่อปรับปรุงข้อมูล",
      "en": "Unfortunately, you cannot buy this fund because your ID card/Passport has expired or nearly expired. Please contact the bank branch to update information.",
    },
    "suit_expired_dialog": {
      "th": "แบบประเมินความเสี่ยงของคุณหมดอายุ",
      "en": "Your risk assessment has expired",
    },
    "system_error_dialog": {
      "th": "ขออภัย ไม่สามารถทำรายการได้ในขณะนี้ \nกรุณาติดต่อ Call Center 1327",
      "en": "Sorry, we are not able to process the transaction at this time, please contact Call Center 1327.",
    },
    "system_error_please_try_again": {
      "en": "Unable to process at this time. \nPlease try again.",
      "th": "ขออภัยไม่สามารถดำเนินการได้ในขณะนี้\nโปรดลองใหม่อีกครั้ง"
    },
    "sell_fund": {
      "th": "ขายกองทุน",
      "en": "Sell",
    },
    "sellable_volume": {
      "th": "มูลค่าที่ขายคืนได้",
      "en": "Redeemable Amount",
    },
    "holding_value": {
      "th": "มูลค่าที่ถือครอง",
      "en": "Holding value",
    },
    "unit_holder_id": {
      "th": "เลขที่ผู้ถือหน่วยลงทุน",
      "en": "Unitholder",
    },
    "enter_money_amount": {
      "th": "ระบุจำนวนเงิน",
      "en": "Specify Amount",
    },
    "enter_selling_volume": {
      "th": "ระบุจำนวนการขาย",
      "en": "Specify Sell Amount",
    },
    "enter_switch_out_amount": {
      "th": "ระบุจำนวนการสับเปลี่ยนออก",
      "en": "Specify Switching Out Amount",
    },
    "unit": {
      "th": "หน่วย",
      "en": "Units",
    },
    "one_unit": {
      "th": "หน่วย",
      "en": "Unit",
    },
    "value_at_date": {
      "th": "มูลค่า ณ วันที่",
      "en": "Market Value as of ",
    },
    "minimum_sell_value": {
      "th": "มูลค่าขายขั้นต่ำ",
      "en": "Minimum Sell",
    },
    "please_enter_amount_that_not_lower_than_minimum_sell_amount": {
      "th": "โปรดระบุจำนวนที่ไม่น้อยกว่ามูลค่าการขายขั้นต่ำ",
      "en": "Please specify the amount not less than the minimum sell amount.",
    },
    "please_enter_amount_that_not_greater_than_sellable_amount": {
      "th": "โปรดระบุจำนวนที่ไม่เกินมูลค่าที่ขายคืนได้",
      "en": "Please specify the amount not over redeemable amount.",
    },
    "please_sell_all_unit": {
      "th": "กรุณาระบุจำนวนขายทั้งหมดเป็นหน่วย",
      "en": "Please specify sell amount in units.",
    },
    "not_enough_remain_balance_dialog_1": {
      "th": "ขออภัย หลังทำการขายยอดคงเหลือไม่ถึงขั้นต่ำที่กองทุนกำหนด",
      "en": "The remaining balance after redemption must not be less than the minimum balance",
    },
    "not_enough_remain_balance_dialog_2": {
      "th": "โปรดทำรายการขายออกทั้งหมดเป็นหน่วย",
      "en": "Please sell all outstanding units.",
    },
    "switch_not_enough_remain_balance_dialog_1": {
      "th": "จำนวนคงเหลือหลังจากสับเปลี่ยนออกไม่ถึงที่กำหนด",
      "en": "The remaining balance after switching out must not be less than the minimum balance",
    },
    "switch_not_enough_remain_balance_dialog_2": {
      "th": "โปรดทำรายการสับเปลี่ยนออกทั้งหมดเป็นหน่วย",
      "en": "Please switch all outstanding units.",
    },
    "now_is_time_during_non_business_hours": {
      "th": "ขณะนี้ไม่อยู่ในช่วงเวลาดำเนินการที่ทาง บลจ. กำหนด",
      "en": "Currently, it is after cut-off time or on fund holiday.",
    },
    "system_will_process_at_date": {
      "th": "ระบบจะดำเนินการให้ในวันที่",
      "en": "The transaction will be effective on",
    },
    "sell_fund_confirm": {
      "th": "ยืนยันการขายกองทุน",
      "en": "Sell Confirmation",
    },
    "receiving_account": {
      "th": "บัญชีรับเงิน",
      "en": "Receiving Account",
    },
    "from_sell_transaction": {
      "th": "จากรายการขายกองทุน",
      "en": "Amount from Redemption (THB)",
    },
    "total_investment_amount": {
      "th": "รวมเป็นจำนวนเงิน",
      "en": "Total Amount (THB)",
    },
    "receiving_method": {
      "th": "ช่องทางการรับเงิน",
      "en": "Receiving Type",
    },
    "receive_date": {
      "th": "วันที่คาดว่าจะได้รับเงิน",
      "en": "Expected Receiving Date",
    },
    "settlement_date": {
      "th": "วันที่คาดว่าจะได้รับเงิน",
      "en": "Expected Settlement Date",
    },
    "received_date": {
      "th": "วันที่ได้รับเงิน",
      "en": "Receiving Date",
    },
    "please_validate_information": {
      "th": "โปรดตรวจสอบข้อมูลให้ถูกต้อง หากยืนยันแล้ว\nจะไม่สามารถเปลี่ยนแปลงได้",
      "en": "Please review the information. The order cannot be changed after confirmation.",
    },
    "please_validate_information_not_new_line": {
      "th": "โปรดตรวจสอบข้อมูลให้ถูกต้อง หากยืนยันแล้วจะไม่สามารถเปลี่ยนแปลงได้",
      "en": "Please review the information. The order cannot be changed after confirmation.",
    },

    "please_validate_information_2": {
      "th": "กรุณาตรวจสอบข้อมูลให้ถูกต้อง หากยืนยันแล้ว\nจะไม่สามารถเปลี่ยนแปลงได้",
      "en": "Please verify the above information. After confirmation,\nthe transaction  cannot be changed.",
    },
    "please_validate_information_dca": {
      "th": "โปรดตรวจสอบข้อมูลให้ถูกต้อง \nคุณสามารถยกเลิกรายการได้ที่เมนู ตั้งค่าแผน > \nลงทุนแบบประจำ (DCA)",
      "en": "Please review the information.\nYou can cancel your Regular Investment (DCA) at ROBO Port Setting > Set-up DCA menu.",
    },
    "sell_fund_info_1": {
      "th": "ในกรณีที่ระบุจำนวนหน่วยที่ขายคืนมากกว่าจำนวนหน่วยที่มี หรือระบุจำนวนเงินที่ต้องการได้รับจากการขายคืนมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืน (ถ้ามี) บริษัทจัดการถือว่าผู้ถือหน่วยลงทุนประสงค์ที่จะขายคืนหน่วยลงทุนทั้งหมดเท่าที่ปรากฏอยู่ในรายการที่บันทึกโดยนายทะเบียนหน่วยลงทุนนั้น",
      "en": "In case of specifying the number of investment units to be redeemed more than the number of investment units in possession, or in case of specifying the amount of money wished to be received from the redemption more than the values of investment units after deduction of back-end fee (if any), then, the management company shall deem that the investment unitholder wishes to redeem all investment units as appeared in the particulars recorded by the investment unit registrar."
    },
    "switching_fund_info_1": {
      "th": "ในกรณีที่ระบุจำนวนหน่วยที่สับเปลี่ยนออกมากกว่าจำนวนหน่วยที่มี หรือระบุจำนวนเงินที่ต้องการสับเปลี่ยนออกมากกว่ามูลค่าหน่วยลงทุนหลังหักค่าธรรมเนียมการรับซื้อคืน หรือค่าธรรมเนียมการสับเปลี่ยน (ถ้ามี) บริษัทจัดการจะถือว่าผู้ถือหน่วยลงทุนประสงค์ที่จะสับเปลี่ยนหน่วยลงทุนทั้งหมดตามจำนวนที่ปรากฎในสมุดทะเบียนผู้ถือหน่วยลงทุนไปยังกองทุนปลายทาง",
      "en": "In case of specifying the number of investment units to be switched out more than the number of investment units in possession, or in case of specifying the amount of money wished to be received from the switching out more than the values of investment units after deduction of the back-end fee or the switching fee (if any), then, the management company shall deem that the investment unitholder wishes to switch all investment units as appeared in the particulars recorded by the investment unit registrar."
    },
    "insert_pin": {
      "th": "ใส่ PIN",
      "en": "Enter PIN",
    },
    "confirm_transaction": {
      "th": "เพื่อยืนยันการทำรายการ",
      "en": "to confirm the transaction",
    },
    "confirm_transaction_title": {
      "th": "ยืนยันการทำรายการ",
      "en": "confirm the transaction"
    },
    "add_investment_amount_confirmation": {
      "th": "ยืนยันการทำรายการ",
      "en": "Add Investment Amount Confirmation"
    },
    "investment_withdrawal_confirmation": {
      "th": "ยืนยันการทำรายการ",
      "en": "Investment Withdrawal Confirmation"
    },
    "confirm_transaction_title_change_email": {
      "th": "ยืนยันการทำรายการ",
      "en": "Confirm Change E-mail Address"
    },
    "confirm_transaction_title_change_mobile": {
      "th": "ยืนยันการทำรายการ",
      "en": "Confirm Change Mobile Number"
    },
    "confirm_transaction_title_change_password": {
      "th": "ยืนยันการทำรายการ",
      "en": "Confirm Change Password"
    },
    "confirm_transaction_title_change_pin": {
      "th": "ยืนยันการทำรายการ",
      "en": "Confirm Change PIN"
    },
    "confirm_transactio_rebalance_order_confirmationn": {
      "th": "ยืนยันการทำรายการ",
      "en": "Rebalance Order Confirmation"
    },
    "sell_fund_success": {
      "th": "ทำรายการขายกองทุนสำเร็จ",
      "en": "Successful Redemption Order",
    },
    "switching_fund_success": {
      "th": "ทำรายการสับเปลี่ยนสำเร็จ",
      "en": "Successful Switching Order",
    },
    "status_while_pending": {
      "th": "ระหว่างดำเนินการ",
      "en": "Inprogress",
    },
    "status_pending": {
      "th": "รอดำเนินการ",
      "en": "Waiting for processing"
    },
    "status_inprogress": {
      "th": "รอดำเนินการ",
      "en": "In progress"
    },
    "status_waiting_allot": {
      "th": "รอจัดสรร",
      "en": "Waiting for Allocation",
    },
    "status_suspending": {
      "th": "รอแก้ไขรายการ",
      "en": "Suspended",
    },
    "status_waiting_approve": {
      "en": "N/A",
      "th": "ระหว่างดำเนินการ",
    },
    "status_success_allot": {
      "en": "Allotted",
      "th": "จัดสรรแล้ว",
    },
    "status_success": {
      "en": "Success",
      "th": "สำเร็จ",
    },
    "status_completed": {
      "en": "Completed",
      "th": "สำเร็จ",
    },
    "status_canceled": {
      "en": "Canceled",
      "th": "ยกเลิกรายการ",
    },
    "status_failed": {
      "th": "ไม่สำเร็จ",
      "en": "Failed",
    },
    "status_rejected": {
      "th": "ไม่สำเร็จ",
      "en": "Rejected",
    },
    "status_unsuccess": {
      "th": "ไม่สำเร็จ",
      "en": "Unsuccess",
    },
    "status_all": {
      "th": "สถานะทั้งหมด",
      "en": "All Status",
    },
    "date_of_issue": {
      "en": "Issue Date",
      "th": "วันที่ออกบัตร",
    },
    "select_date_of_issue": {
      "en": "Issue Date",
      "th": "เลือกวันที่ออกบัตร",
    },
    "alert_minimum_to_maintain_dialog": {
      "en": "Sorry, the ending balance (after the transaction) cannot be less than the required minimum balance of this account (MINIMUM_BALANCE Baht). Please re-enter the amount.",
      "th": "ขออภัย จำนวนเงินคงเหลือในบัญชีหลังจากทำธุรกรรม ต้องไม่น้อยกว่าจำนวนเงินขั้นต่ำที่ต้องคงค้างสำหรับบัญชีนี้ (MINIMUM_BALANCE บาท)",
    },
    "alert_dialy_cash_limit_dialog": {
      "en": "Sorry, the total buying amount exceeds the maximum buying limit. You can change the limit up to {50 M} Baht in Setting Menu.",
      "th": "ขออภัย คุณไม่สามารถซื้อกองทุนได้เกินวงเงินซื้อต่อวัน คุณสามารถเปลี่ยนวงเงินได้สูงสุด (50 ล้าน) บาท ที่เมนูตั้งค่า"
    },
    "deduct_from_account_for_subscription_dialog_1": {
      "en": "Your account will be debited at 07:00 on the effective date. You can cancel your order before that time.",
      "th": "ระบบจะดำเนินการตัดเงินจากบัญชี\n เงินฝากเพื่อชำระเงินลงทุนเวลา 07:00 น. ของวันที่มีผล\nคุณสามารถยกเลิกรายการได้ก่อนระบบจะดำเนินการ"
    },
    "deduct_from_account_for_subscription_dialog_2": {
      "en": "N/A",
      "th": "น. ของวันที่มีผล คุณสามารถยกเลิกรายการได้ก่อนระบบจะดำเนินการ"
    },
    "buy_fund_confirm": {
      "th": "ยืนยันการซื้อกองทุน",
      "en": "Buy Confirmation"
    },
    "return_YTD": {
      "th": "Year to date return",
      "en": "Year to date return"
    },
    "return_ONE_WEEK": {
      "th": "Past 1-week return",
      "en": "Past 1-week return",
    },
    "return_ONE_MONTH": {
      "th": "Past 1-month return",
      "en": "Past 1-month return"
    },
    "return_THREE_MONTH": {
      "th": "Past 3-month return",
      "en": "Past 3-month return"
    },
    "return_SIX_MONTH": {
      "th": "Past 6-month return",
      "en": "Past 6-month return"
    },
    "return_ONE_YEAR": {
      "th": "Past 1-year return",
      "en": "Past 1-year return"
    },
    "return_THREE_YEAR": {
      "th": "Past 3-year return",
      "en": "Past 3-year return"
    },
    "return_FIVE_YEAR": {
      "th": "Past 5-year return",
      "en": "Past 5-year return"
    },
    "return_TEN_YEAR": {
      "th": "Past 10-year return",
      "en": "Past 10-year return"
    },
    "return_MAX": {
      "th": "Since inception return",
      "en": "Since inception return"
    },
    "YTD": {
      "th": "YTD",
      "en": "YTD"
    },
    "ONE_WEEK": {
      "th": "1W",
      "en": "1W",
    },
    "ONE_MONTH": {
      "th": "1M",
      "en": "1M"
    },
    "THREE_MONTH": {
      "th": "3M",
      "en": "3M"
    },
    "SIX_MONTH": {
      "th": "6M",
      "en": "6M"
    },
    "ONE_YEAR": {
      "th": "1Y",
      "en": "1Y"
    },
    "THREE_YEAR": {
      "th": "3Y",
      "en": "3Y"
    },
    "FIVE_YEAR": {
      "th": "5Y",
      "en": "5Y"
    },
    "TEN_YEAR": {
      "th": "10Y",
      "en": "10Y"
    },
    "MAX": {
      "th": "MAX",
      "en": "MAX"
    },
    "dont_have_unitholder": {
      "th": "จะได้รับจาก บลจ. เมื่อมีการซื้อกองทุนครั้งแรกสำเร็จ",
      "en": "Unitholder will be created when the first subscription order is completed."
    },
    "switch_fund": {
      "th": "สับเปลี่ยนกองทุน",
      "en": "Switching Fund"
    },
    "switch_fund_link": {
      "th": "เปลี่ยนกองทุน",
      "en": "Change fund"
    },
    "switch_out_funds": {
      "th": "กองทุนสับเปลี่ยนออก",
      "en": "Switch Out"
    },
    "switch_out": {
      "th": "สับเปลี่ยนออก",
      "en": "Switch out"
    },
    "switch_in": {
      "th": "สับเปลี่ยนเข้า",
      "en": "Switch In"
    },
    "switch_in_funds": {
      "th": "กองทุนสับเปลี่ยนเข้า",
      "en": "Switch In"
    },
    "select_fund": {
      "th": "เลือกกองทุน",
      "en": "Select Fund"
    },
    "switchable_volume": {
      "th": "มูลค่าที่สับเปลี่ยนได้",
      "en": "Remaining Amount"
    },
    "please_enter_switching_value_more_than_minimal_switch_out_value": {
      "th": "โปรดระบุจำนวนสับเปลี่ยนที่ไม่น้อยกว่ามูลค่าขั้นต่ำของการสับเปลี่ยนออก",
      "en": "Please specify the amount not less than the minimum switching out."
    },
    "minimal_switch_out_value": {
      "th": "มูลค่าการสับเปลี่ยนออกขั้นต่ำ",
      "en": "Minimum Switching Out"
    },
    "please_enter_switching_value_more_than_minimal_switch_in_value": {
      "th": "โปรดระบุจำนวนสับเปลี่ยนที่ไม่น้อยกว่ามูลค่าขั้นต่ำของการสับเปลี่ยนเข้า",
      "en": "Please specify the amount not less than the minimum switching in."
    },
    "minimal_switch_in_value": {
      "th": "มูลค่าการสับเปลี่ยนเข้าขั้นต่ำ",
      "en": "Minimum Switching In"
    },
    "amount_switch_out": {
      "th": "จำนวนที่สับเปลี่ยนออก",
      "en": "Switching Out"
    },
    "amount_switch_in": {
      "th": "จำนวนที่สับเปลี่ยนเข้า",
      "en": "Switching In"
    },
    "switch_fund_confirm": {
      "th": "ยืนยันการสับเปลี่ยน",
      "en": "Confirm switching"
    },
    "please_enter_amount_that_not_greater_than_switchable_amount": {
      "en": "Please specify the amount not over remaining amount.",
      "th": "โปรดระบุจำนวนที่ไม่เกินมูลค่าที่สับเปลี่ยนได้",
    },
    "save_slip": {
      "th": "สลิปถูกบันทึกลงอัลบั้มภาพเรียบร้อย",
      "en": "Slip has been saved in your gallery."
    },
    "enter_current_pin": {
      "th": "ใส่ PIN ปัจจุบัน",
      "en": "Enter PIN"
    },
    "setup_new_pin": {
      "th": "ตั้ง PIN ใหม่",
      "en": "Create New PIN",
    },
    "confirm_new_pin": {
      "en": "Confirm New PIN",
      "th": "ยืนยัน PIN ใหม่",
    },
    "success_transaction": {
      "th": "ทำรายการสำเร็จ",
      "en": "Updated Successfully",
    },
    "successfully_changes": {
      "th": "ทำรายการสำเร็จ",
      "en": "Successfully changes",
    },
    "my_account": {
      "th": "บัญชีของฉัน",
      "en": "My Profile"
    },
    "setting_account": {
      "th": "ตั้งค่าข้อมูลส่วนตัว",
      "en": "Personal Information Settings"
    },
    "setting_manage_account": {
      "th": "จัดการข้อมูลส่วนตัว",
      "en": "Manage Personal Information"
    },
    "investment_information_fund": {
      "th": "ข้อมูลการลงทุน",
      "en": "Investment Information"
    },
    "investment_infomation": {
      "th": "ข้อมูลการลงทุน",
      "en": "My Investment Information"
    },
    "unit_holder_number_list": {
      "th": "รายการเลขที่ผู้ถือหน่วยลงทุน",
      "en": "Unitholder Information"
    },
    "saving_account": {
      "th": "บัญชีออมทรัพย์",
      "en": "Savings Account"
    },
    "setting_investment": {
      "th": "ตั้งค่าการลงทุน",
      "en": "Investment Settings"
    },
    "set_notification_profit_loss": {
      "th": "กำหนดการแจ้งเตือน กำไร/ขาดทุน",
      "en": "Set-up Gain/Loss Alert"
    },
    "gain_loss_alert": {
      "th": "กำหนดการแจ้งเตือน กำไร/ขาดทุน",
      "en": "Gain/Loss Alert"
    },
    "notification_profit_loss": {
      "th": "กำหนดการแจ้งเตือน กำไร/ขาดทุน",
      "en": "Gain/Loss Alerts"
    },
    "set_purchase_limit": {
      "en": "N/A",
      "th": "กำหนดวงเงินซื้อ",
    },
    "set_transfer_out_limits": {
      "th": "กำหนดวงเงินการโอนออก",
      "en": "Manage Transfer Limits",
    },
    "set_transfer_out_limit": {
      "th": "กำหนดวงเงินการโอนออก",
      "en": "Manage Transfer Limit",
    },
    "diy": {
      "th": "DIY",
      "en": "DIY"
    },
    "port_diy": {
      "th": "พอร์ต DIY",
      "en": "DIY Port"
    },
    "port_robo": {
      "th": "พอร์ต ROBO",
      "en": "ROBO Port"
    },
    "port_robo_advisor": {
      "th": "พอร์ต ROBO Advisor",
      "en": "Port"
    },
    "setting_usage": {
      "th": "ตั้งค่าการใช้งาน",
      "en": "Application Settings"
    },
    "setting_biometric_login": {
      "th": "Biometric Login",
      "en": "Biometric Login",
    },
    "language": {
      "th": "ภาษา",
      "en": "Language"
    },
    "how_to_use": {
      "th": "วิธีการใช้งาน",
      "en": "User Guide"
    },
    "term_and_condition": {
      "th": "ข้อกำหนดและเงื่อนไข",
      "en": "Terms and Conditions",
    },
    "thai_lang": {
      "th": "ภาษาไทย",
      "en": "ภาษาไทย"
    },
    "eng_lang": {
      "th": "English",
      "en": "English"
    },
    "version": {
      "th": "เวอร์ชั่น",
      "en": "version"
    },
    "patch_no": {
      "th": "Patch No.",
      "en": "Patch No."
    },
    "land_and_house_copy_right": {
      "en": "© Copyright 2022 Land and Houses Bank Public Company Limited. All rights reserved.",
      "th": "สงวนสิทธิ์ 2564 ธนาคารแลนด์ แอนด์ เฮ้าส์ จำกัด (มหาชน)",
    },
    "general_info": {
      "th": "ข้อมูลทั่วไป",
      "en": "General Information"
    },
    "verified": {
      "th": "ยืนยันแล้ว",
      "en": "Completed"
    },
    "not_verified": {
      "th": "ยังไม่ยืนยันตัวตน",
      "en": "Not completed"
    },
    "privacy": {
      "th": "ความเป็นส่วนตัว",
      "en": "Security and Privacy"
    },
    "change_PIN": {
      "th": "เปลี่ยน PIN",
      "en": "Change PIN"
    },
    "change_password": {
      "th": "เปลี่ยน Password",
      "en": "Change Password"
    },
    "change_mobile_number": {
      "th": "เปลี่ยนเบอร์มือถือ",
      "en": "Change Mobile Number"
    },
    "change_email": {
      "th": "เปลี่ยนอีเมล",
      "en": "Change E-mail Address"
    },
    "privacy_management": {
      "th": "การจัดการข้อมูลส่วนบุคคล",
      "en": "Data Privacy Management"
    },
    "right_of_personal_privacy": {
      "th": "สิทธิเจ้าของข้อมูลส่วนบุคคล",
      "en": "Data Subject Rights"
    },
    "privacy_manage": {
      "th": "จัดการข้อมูลส่วนบุคคล",
      "en": "Manage Data Privacy"
    },
    "right_infomation": {
      "th": "รายละเอียดของสิทธิ",
      "en": "Details of rights"
    },
    "enter_current_password": {
      "th": "ใส่ Password ปัจจุบัน",
      "en": "Enter Password"
    },
    "trading_next": {
      "th": "ถัดไป",
      "en": "Next",
    },
    "create_new_password": {
      "th": "ตั้ง Password ใหม่",
      "en": "Enter New Password",
    },
    "confirm_new_password": {
      "th": "ยืนยัน Password ใหม่",
      "en": "Confirm New Password",
    },
    "trading_password_properties_2_1": {
      "th": "ตัวพยัญชนะตัวใหญ่ เช่น A ถึง Z",
      "en": "at least one uppercase or capital letter (e.g. A to Z)",
    },
    "trading_password_properties_2_2": {
      "th": "ตัวพยัญชนะตัวเล็ก เช่น a ถึง z",
      "en": "at least one lowercase letter (e.g. a to z.)",
    },
    "trading_password_properties_2_3": {
      "th": "ตัวเลข เช่น 0 ถึง 9",
      "en": "at least one digit of number (e.g. 0 to 9)",
    },
    "trading_password_properties_2_4": {
      "th": "อักขระพิเศษ เช่น !, $, #, %",
      "en": "at least one special character (e.g. !, $, #, %, ect.) ",
    },
    "enter_new_email": {
      "th": "กรอกอีเมลใหม่",
      "en": "New E-mail Address",
    },
    "current_email": {
      "th": "อีเมลปัจจุบัน",
      "en": "Current E-mail Address",
    },
    "current_mobile_phone_number": {
      "th": "เบอร์มือถือปัจจุบัน",
      "en": "Current Mobile Number",
    },
    "new_mobile_phone_number": {
      "th": "เบอร์มือถือใหม่",
      "en": "New Mobile Number",
    },
    "position": {
      "th": "ตำแหน่งงาน",
      "en": "Job position",
    },
    "asset_value": {
      "th": "มูลค่าทรัพย์สิน",
      "en": "Asset Value",
    },
    "asset_value_placeholder": {
      "th": "ระบุมูลค่าทรัพย์สิน",
      "en": "Asset Value",
    },
    "sub_district_bangkok": {
      "th": "แขวง",
      "en": "sub district"
    },
    "district_bangkok": {
      "th": "เขต",
      "en": "district"
    },
    "sub_district_non_bangkok": {
      "th": "ตำบล",
      "en": "sub district"
    },
    "district_non_bangkok": {
      "th": "อำเภอ",
      "en": "district"
    },
    "investor_type_of_risk_1": {
      "th": "เสี่ยงต่ำ",
      "en": "Low",
    },
    "investor_type_of_risk_4": {
      "th": "เสี่ยงปานกลางค่อนข้างต่ำ",
      "en": "Moderate to Low",
    },
    "investor_type_of_risk_5": {
      "th": "เสี่ยงปานกลางค่อนข้างสูง",
      "en": "Moderate to High",
    },
    "investor_type_of_risk_7": {
      "th": "เสี่ยงสูง",
      "en": "High",
    },
    "investor_type_of_risk_9": {
      "th": "เสี่ยงสูงมาก",
      "en": "Very High",
    },
    "buy_list": {
      "th": "รายการซื้อ",
      "en": "Buy Orders",
    },
    "estimate_allot_date": {
      "th": "วันประมาณการวันจัดสรร",
      "en": "Estimated Allotment Date",
    },
    "estimate_date": {
      "th": "ประมาณการวันจัดสรร",
      "en": "Estimated Allotment Date",
    },
    "allot_date": {
      "th": "วันจัดสรร",
      "en": "Allotment Date",
    },
    "auto_adjust_port": {
      "th": "ปรับพอร์ตอัตโนมัติ",
      "en": "Auto Rebalancing"
    },
    "auto_balance_port": {
      "th": "การปรับสมดุลพอร์ต",
      "en": "Port Rebalancing"
    },
    "auto_balance_port_detail_1": {
      "th": "เมื่อระยะเวลาผ่านไป พอร์ตของคุณอาจจะมีสัดส่วนการลงทุนแตกต่างไปจากคำแนะนำที่เหมาะสมกับสถานการณ์",
      "en": "Over time, asset allocations can change as market performance alters the values of the assets."
    },
    "auto_balance_port_detail_2": {
      "th": "การ “ปรับสมดุลพอร์ต” เป็นการทำให้พอร์ตกลับมาอยู่ในสัดส่วนตามคำแนะนำ ซึ่งจะทำให้การลงทุนมีความเสี่ยงไม่สูงหรือต่ำจนเกินไป",
      "en": "ROBO Advisor will monitor your port and recommend rebalancing when neccessary. Rebalancing involves periodically buying or selling the assets in a portfolio to regain and maintain that original, desired level of asset allocation."
    },
    "auto_balance_port_detail_3": {
      "th": "การ “ปรับสมดุลพอร์ต” คือการขายสินทรัพย์ที่มีสัดส่วนมากเกินไปแล้วนำเงินไปซื้อสินทรัพย์ที่มีอยู่น้อยเกินไป ซึ่งธนาคารจะคอยติดตาม “ปรับสมดุลพอร์ต” ให้อัตโนมัติ เพื่อทำให้พอร์ตของคุณใกล้เคียงกับแผนการลงทุนที่คุณเลือกอย่างมีประสิทธิภาพมากที่สุด โดยที่การ “ปรับสมดุลพอร์ต” จะเกิดขึ้นเมื่อ",
      "en": "Rebalancing will be triggered automatically or notification will be sent your rebalancing decision depending on your preference when;"
    },
    "auto_balance_port_detail_4": {
      "th": "1. พอร์ตของคุณมีมูลค่าเท่ากับหรือสูงกว่า MIN_PORT_VALUE บาท และ",
      "en": "1. your port value is not less than {10,000} THB, and"
    },
    "auto_balance_port_detail_5": {
      "th": "2. พอร์ตของคุณมีสัดส่วนการลงทุนที่ต่างไปจากสัดส่วนที่แนะนำ มากเกินกว่าเกณฑ์ที่กำหนด และ",
      "en": "2. weight difference ece asset allocation in port has different to hit rebalance thresholds, and"
    },
    "auto_balance_port_detail_6": {
      "th": "3. ครบระยะเวลาที่กำหนด หลังจากเพิ่มเงินลงทุนครั้งแรกสำเร็จ หรือปรับสมดุลพอร์ตครั้งล่าสุด หรืออาจตามที่ธนาคารเห็นสมควร เพื่อให้ได้ผลตอบแทนใกล้เคียงพอร์ตการลงทุนที่แนะนำ",
      "en": "3. Reach the specified period after successfully adding the first investment or after last rebalancing or as the Bank deems appropriate in order to get the target return."
    },
    "auto_balance_port_verify_manually": {
      "th": "ต้องการให้แจ้งเตือนเพื่อยืนยันด้วยตนเอง",
      "en": "Notify me to confirm rebalancing"
    },
    "adding_investment_amount": {
      "th": "เพิ่มเงินลงทุน",
      "en": "Adding Investment Amount",
    },
    "increase_investment": {
      "th": "เพิ่มเงินลงทุน",
      "en": "Add Investment Amount",
    },
    "withdraw_investment": {
      "th": "ถอนเงินลงทุน",
      "en": "Investment Withdrawal",
    },
    "rebalance_port": {
      "th": "ปรับสัดส่วนพอร์ต",
      "en": "Rebalance",
    },
    "investment_success": {
      "th": "เพิ่มเงินลงทุนสำเร็จ",
      "en": "Successfully Adding Investment Amount.",
    },
    "want_more_investment": {
      "th": "ต้องการเงินลงทุนเพิ่ม suggestInvestment บาท เพื่อให้เป็นไปตามแผนของคุณ",
      "en": "Need an additional investment of suggestInvestment THB to meet your plan.",
    },
    "robo_risk_warning": {
      "th": "คำเตือน",
      "en": "Risk Acceptant",
    },
    "robo_warning": {
      "th": "คำเตือน",
      "en": "Waring",
    },
    "robo_buy_condition": {
      "th": "ข้าพเจ้าได้ศึกษาหนังสือชี้ชวน ความเสี่ยง และข้อมูลการเปรียบเทียบผลการดำเนินงานของกองทุนรวมที่ข้าพเจ้าจะทำรายการพร้อมทั้งได้อ่านข้อตกลงการใช้บริการเป็นที่เข้าใจแล้ว และยอมรับเงื่อนไขดังกล่าว",
      "en": "I have studied the fund porspectus, the associated risks, and the comparison of the performance of the fund in which I am investing and have fully read and understood the Terms and Conditions. I hereby accept such Terms and Conditions.",
    },
    "robo_sell_condition": {
      "th": "การถอนเงินลงทุน\nอาจทำให้คุณสูญเสียผลตอบแทนในอนาคตได้",
      "en": "Investment withdrawal can cause you to lose future returns.",
    },
    "fund_list": {
      "en": "N/A",
      "th": "รายการกองทุน",
    },
    "investment_plan_header": {
      "th": "แผนการลงทุน",
      "en": "Investment Plan",
    },
    "fund_list_summary": {
      "th": "สรุปรายการซื้อกองทุน",
      "en": "Adding Investment Amount Summary",
    },
    "fund_detail": {
      "th": "รายละเอียดกองทุน",
      "en": "Fund Details",
    },
    "balance_amount": {
      "th": "ยอดเงินคงเหลือในบัญชี",
      "en": "Available Balance"
    },
    "remain_amount": {
      "th": "ยอดเงินคงเหลือ",
      "en": "Available Balance",
    },
    "amount_money": {
      "th": "ยอดเงิน",
      "en": "Amount",
    },
    "amount_money_dca": {
      "th": "ยอดเงิน DCA ต่อครั้ง",
      "en": "DCA Amount per Time",
    },
    "sell_list": {
      "th": "รายการขาย",
      "en": "Sell Orders"
    },
    "robo_sell_receive_date": {
      "th": "วันที่ บลจ.ชำระเงินค่าขายคืน",
      "en": "Estimated Settlement Date",
    },
    "transaction_sell_practical_balance": {
      "en": "Withdrawal from Cash-in-Port ",
      "th": "รายการถอนเงินคงค้างในพอร์ต",
    },
    "receive_type": {
      "th": "ประเภทการรับเงิน",
      "en": "Receiving Type",
    },
    "receive_via_cheque": {
      "th": "รับเงินผ่านเช็ค",
      "en": "Cheque",
    },
    "receive_date_information": {
      "th": "วันที่คาดว่าจะได้รับเงิน เป็นเพียงการประมาณการเท่านั้น ทั้งนี้อาจมีการเปลี่ยนแปลงได้ ขึ้นอยู่กับ บลจ. ดำเนินการ",
      "en": "The Estimated Receiving Date may be changed depending on the operation of the AMCs.",
    },
    "system_sell_unit": {
      "th": "กรณีที่ระบบต้องการขายเป็นจำนวนหน่วย จำนวนเงินที่ได้รับจริงอาจไม่ตรงกับจำนวนเงินที่ต้องการถอน",
      "en": "In case the system has to sell the fund in units, the actual amount received may be different than the specified withdrawal amount.",
    },
    "withdraw_investment_success": {
      "th": "ถอนเงินลงทุนสำเร็จ",
      "en": "Successfully Investment Withdrawal",
    },
    "current_port_value": {
      "th": "มูลค่าพอร์ตรวมเงินคงค้างในพอร์ต",
      "en": "Total Port Value (Including cash)",
    },
    "enter_withdraw_amount": {
      "th": "ระบุจำนวนการถอน",
      "en": "Specify amount",
    },
    "specify": {
      "en": "Specify",
      "th": "ระบุ"
    },
    "one_piece": {
      "th": "ก้อนเดียว",
      "en": "Lump Sum"
    },
    "by_piece": {
      "th": "ทีละกอง",
      "en": "Fund by Fund",
    },
    "robo_withdraw_description_1": {
      "th": "หลังการถอนเงินลงทุน หากเงินลงทุนเหลือน้อยกว่า {x} บาท ธนาคารจะถอนเงินลงทุนทั้งหมดในพอร์ตลงทุนของคุณ",
      "en": "After the investment withdrawal, if the port has a value less than {x} THB, the system will  force selling all outstanding units.",
    },
    "robo_withdraw_description_2": {
      "th": "จำนวนเงินที่ลูกค้าได้รับจริงอาจแตกต่างจากจำนวนที่ลูกค้าระบุเนื่องจาก",
      "en": "The amount you will receive may differ from the amount you have specified because;",
    },
    "robo_withdraw_sub_description_1": {
      "th": "มูลค่าพอร์ตปัจจุบัน ประมาณการจาก NAV ก่อนหน้า ในกรณี NAV เปลี่ยน คุณอาจจะมีจำนวนหน่วยไม่เพียงพอ ทำให้ไม่ได้รับเงินเท่ากับที่ระบุไว้ในวันทำรายการ",
      "en": "The current port value is estimated based on the current NAV. In case NAV changes, there may not be enough units to sell for the withdrawal amout you have specify.",
    },
    "robo_withdraw_sub_description_2": {
      "th": "เงื่อนไขเกี่ยวกับการขายคืนหน่วยลงทุนของแต่ละกองทุนรวมตามหนังสือชี้ชวน อาจจะกำหนดให้ลูกค้าต้องทำการขายคืนหน่วยลงทุนทั้งหมดที่เหลืออยู่ ดังนั้นจำนวนเงินที่ลูกค้าได้รับจริง จึงอาจแตกต่างจากจำนวนที่ลูกค้าระบุ",
      "en": "The redemption conditions of each mutual fund according to the fund fact sheet may require to sell all remaining units.",
    },
    "portfolio_detail": {
      "th": "รายละเอียดพอร์ต",
      "en": "Port Information",
    },
    "portfolio_data": {
      "th": "ข้อมูลพอร์ต",
      "en": "Overview",
    },
    "portfolio_growth": {
      "th": "การเติบโตของพอร์ต",
      "en": "Tracking",
    },
    "transaction_unit_list": {
      "th": "รายการ",
      "en": "Transation",
    },
    "transactions_unit_list": {
      "th": "รายการ",
      "en": "Transations",
    },
    "transaction": {
      "th": "รายการธุรกรรม",
      "en": "Transaction History",
    },
    "plan_type": {
      "th": "ประเภทแผน",
      "en": "Plan Type",
    },
    "last_date_adjustment_port": {
      "th": "วันที่ปรับพอร์ตล่าสุด",
      "en": "Last Rebalance Date",
    },
    "all_investment_details": {
      "th": "รายละเอียดการลงทุนทั้งหมด",
      "en": "Port Details",
    },
    "recommended_proportion": {
      "th": "สัดส่วนแนะนำ",
      "en": "Recommended Allocation",
    },
    "more_invest": {
      "th": "ลงทุนเพิ่ม",
      "en": "Add Investment Amount"
    },
    "total_investment_value": {
      "th": "มูลค่าการลงทุนรวม",
      "en": "Total Market Value",
    },
    "value": {
      "th": "มูลค่า",
      "en": "Amount",
    },
    "value_total": {
      "th": "มูลค่า",
      "en": "Total",
    },
    "value_market": {
      "th": "มูลค่า",
      "en": "Market Value",
    },
    "current": {
      "th": "ปัจจุบัน",
      "en": "Current",
    },
    "robo_portfolio_cr_account_info_1": {
      "en": "There may be cash balance in the following cases;",
      "th": "อาจมีเงินสดค้างอยู่เพื่อรอดำเนินการในกรณี",
    },
    "robo_portfolio_cr_account_info_2": {
      "th": "• ระบบกำลังทำการปรับสมดุลพอร์ต หรือ",
      "en": "• During port rebalancing, or",

    },
    "robo_portfolio_cr_account_info_3": {
      "th": "• อยู่ระหว่างการดำเนินการคำสั่งถอนเงินลงทุน",
      "en": "• During investment withdrawal.",
    },
    "investment_value": {
      "th": "มูลค่าการลงทุน",
      "en": "Market Value",
    },
    "fund_name": {
      "th": "ชื่อกอง",
      "en": "Fund Name",
    },
    "fund_name_full": {
      "th": "ชื่อกองทุน",
      "en": "Fund Name",
    },
    "amc_code": {
      "th": "บลจ.",
      "en": "AMC",
    },
    "at_date": {
      "th": "ณ วันที่",
      "en": "On",
    },
    "date": {
      "th": "วันที่",
      "en": "\b",
    },
    "close_port_date": {
      "en": "Port Closing Date",
      "th": "วันที่ปิดพอร์ต",
    },
    "status": {
      "en": "N/A",
      "th": "สถานะ",
    },
    "sort_by": {
      "th": "เรียงลำดับตาม",
      "en": "Sort by",
    },
    "sort_by_date": {
      "th": "เรียงจากวันที่",
      "en": "Transaction Date",
    },
    "sort_by_return": {
      "th": "เรียงจากผลตอบแทนสูงสุด",
      "en": "High Return to Low",
    },
    "sort_by_mns_rating": {
      "th": "เรียงตามการจัดอันดับ Morningstar Rating สูงสุด",
      "en": "Morningstar rating",
    },
    "holding_detail": {
      "th": "สัดส่วนการลงทุน",
      "en": "Holding Detail",
    },
    "investment_proportion": {
      "th": "สัดส่วนการลงทุน",
      "en": "Asset Allocation",
    },
    "allocation": {
      "th": "สัดส่วนการลงทุน",
      "en": "Allocation",
    },
    "withdraw_proportion": {
      "th": "สัดส่วนการถอนเงินลงทุน",
      "en": "Allocation",
    },
    "investment_objective": {
      "en": "Investment Objective",
      "th": "วัตถุประสงค์การลงทุน",
    },
    "upload_id_card_failed": {
      "en": "Upload failed.\nPlease try again.",
      "th": "อัพโหลดภาพถ่ายบัตรประชาชนไม่สำเร็จ\nโปรดยืนยันข้อมูลอีกครั้ง",
    },
    "upload_book_bank_failed": {
      "en": "Upload failed.\nPlease try again.",
      "th": "อัพโหลดหนัาบัญชีไม่สำเร็จ\nโปรดยืนยันข้อมูลอีกครั้ง",
    },
    "unit_time": {
      "th": "น.",
      "en": "\b",
    },
    "regis_by_lh_bank_m_choice": {
      "en": "Sign up with LH Bank M Choice",
      "th": "ลงทะเบียนด้วย LH Bank M Choice",
    },
    "tips": {
      "en": "Tips!",
      "th": "Tips!",
    },
    "regis_by_lh_bank_m_choice_info_1": {
      "en": "You can register with \nLH Bank M Choice.",
      "th": "คุณสามารถลงทะเบียนด้วย LH Bank\nM Choice ได้เลย",
    },
    "m_choice_new_register": {
      "en": "Sign Up",
      "th": "ลงทะเบียนใหม่",
    },
    "subscription_dca_description": {
      "th": "หากไม่สามารถทำรายการในวันที่เลือกได้ ระบบจะทำรายการในวันทำการถัดไป",
      "en": "If the selected date is a fund holiday, the DCA order will be processed on the next business day.",
    },
    "transaction_date_type": {
      "th": "รูปแบบวันที่ทำรายการ",
      "en": "Schedule Type",
    },
    "select_transaction_date": {
      "th": "เลือกวันที่ทำรายการ",
      "en": "Start Date",
    },
    "no_end_date": {
      "th": "ไม่มีวันที่สิ้นสุด",
      "en": "Never-ending",
    },
    "no_end_month": {
      "th": "ไม่มีวันที่สิ้นสุด",
      "en": "Never-ending",
    },
    "enter_date": {
      "th": "ระบุวัน",
      "en": "Enter Date",
    },
    "specify_period": {
      "th": "ระบุวัน",
      "en": "Specify Period",
    },
    "enter_start_date_end_date": {
      "th": "ระบุวันเริ่มต้น-สิ้นสุด",
      "en": "Choose From-To Date"
    },
    "select_end_date": {
      "th": "เลือกวันที่สิ้นสุด",
      "en": "Select End Date",
    },
    "last_work_day_of_month": {
      "th": "วันทำการสุดท้ายของเดือน",
      "en": "Last business day of the month",
    },
    "every_last_work_day_of_month": {
      "en": "Every last business day of the month",
      "th": "ทุกวันทำการสุดท้ายของเดือน"
    },
    "dca_exit_without_save_dialog": {
      "th": "คุณกำลังออกจากขั้นตอนการตั้งรายการแบบประจำ (DCA) โดยยังไม่ได้บันทึกการเปลี่ยนแปลง",
      "en": "Do you want to leave this screen without saving?",
    },
    "warning_buy_robo": {
      "th": "คุณกำลังทำรายการที่อาจส่งผลระทบต่อพอร์ต ต้องการจะยืนยันการทำรายการหรือไม่",
      "en": "Do you want to proceed next step?"
    },
    "you_want_to_cancel_transaction": { // temporary wording
      "en": "Do you want to cancel the transaction?",
      "th": "คุณต้องการยกเลิกการทำรายการ ใช่หรือไม่?"
    },
    "you_want_to_cancel_retry_transaction": { // temporary wording
      "en": "Do you want to cancel the retry transaction?",
      "th": "คุณต้องการยกเลิกการลองอีกครั้ง ใช่หรือไม่"
    },
    "exceed_cutoff": {
      "th": "ระบบจะดำเนินการตัดเงินจากบัญชี เพื่อซื้อกองทุน ในเวลา 07:00 น. ของวันที่มีผลคุณสามารถยกเลิกรายการได้ก่อนระบบดำเนินการ",
      "en": "Your account will be debited at 07:00 on the effective date. You can cancel your order before that time.",
    },
    "investment_goal": {
      "th": "เป้าหมายการลงทุน",
      "en": "Investment Goal",
    },
    "success": {
      "en": "N/A",
      "th": "ความสำเร็จ",
    },
    "plan_create_date": {
      "th": "วันที่สร้างแผน",
      "en": "Start",
    },
    "end": {
      "th": "สิ้นสุด",
      "en": "Finish",
    },
    "invalid_username_password": {
      "en": "N/A",
      "th": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
    },
    "forget_pin": {
      "th": "ลืม PIN",
      "en": "Forgot PIN",
    },
    "please_be_careful": {
      "th": "โปรดระวัง",
      "en": "WARNING",
    },
    "seven_eleven_verify_info_1": {
      "th": "\"การให้ข้อมูลบัตรประชาชนหรือข้อมูลส่วนตัวกับบุคคลอื่นเพื่อเปิดบัญชีหรือเพื่อใช้บัญชีนั้นไปในทางไม่ถูกต้องหรือกระทำการทุจริตต่างๆ",
      "en": "\"If you provide your ID card or personal information to another person to open an account or to misuse that account or commit any fraud,",
    },
    "seven_eleven_verify_info_2": {
      "th": "คุณอาจเข้าข่ายเป็นผู้สนับสนุนในการกระทำผิด\"",
      "en": "you may be prosecuted as a criminal for fraud if you knowingly\"",
    },
    "not_registed_please_continue": {
      "en": "You have not completed a mutual fund account opening. \nPlease proceed to open the account.",
      "th": "คุณยังเปิดบัญชีไม่สำเร็จ\nโปรดดำเนินการต่อ",
    },
    "contract_call_center": {
      "th": "โปรดติดต่อ Call Center 1327",
      "en": "Please contact Call Center 1327.",
    },
    "wrong_pin": {
      "th": "PIN ไม่ถูกต้อง",
      "en": " Invalid PIN.",
    },
    "robo_invalid_pin": {
      "th": "PIN ไม่ถูกต้อง\nลองใหม่ได้อีก {x} ครั้ง",
      "en": "Invalid PIN.\nPlease try again {x} more time.",
    },
    "enter_pin_again": {
      "th": "ลองใหม่ได้อีก",
      "en": "Please try again",
    },
    "pin_time": {
      "th": "ครั้ง",
      "en": "more time.",
    },
    "lock_pin": {
      "th": "คุณใส่ PIN ผิดเกินจำนวนครั้งที่กำหนด",
      "en": "You have entered invalid PIN exceeding the limit.",
    },
    "wrong_username_password": {
      "en": "Invalid Username or Password",
      "th": "Username หรือ Password\nไม่ถูกต้อง",
    },
    "temp_password_expired": {
      "en": "Your temporary password has expired. Please contact Call Center 1327.",
      "th": "Password ชั่วคราวของคุณหมดอายุ โปรดติดต่อ Call Center 1327 เพื่อขอ Password ชั่วคราวอีกครั้ง",
    },
    "lock_username": {
      "th": "ขออภัย\nคุณกรอก Username หรือ Password\nไม่ถูกต้องครบจำนวนครั้งที่กำหนด\nโปรดติดต่อ Call Center 1327",
      "en": "Sorry\n too many failed sign-in attempts. Please contact Call Center 1327.",
    },
    "internal_error": {
      "en": "Unable to process at this time. Please try again",
      "th": "ไม่สามารถทำรายการได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง",
    },
    "network_client_block": {
      "th": "ไม่สามารถทำรายการได้ขณะนี้ เนื่องจากเครือข่ายอินเทอร์เน็ตที่คุณใช้งานไม่สามารถเชื่อมต่อกับระบบได้",
      "en": "Can not connect to Profita because your internet network is not supported.",
    },
    "graphQL_validation_failed": {
      "en": "GraphQL Validation Failed",
      "th": "GraphQL Validation Failed",
    },
    "incorrect_otp": {
      "th": "รหัส OTP ไม่ถูกต้อง โปรดลองใหม่อีกครั้ง\nคงเหลือ",
      "en": "Invalid OTP. Please check and try again.\nRemain",
    },
    "otp_time": {
      "th": "ครั้ง",
      "en": "times",
    },
    "otp_lock": {
      "th": "ไม่สามารถดำเนินการได้ในขณะนี้ คุณขอรหัส OTP เกินจำนวน",
      "en": "Unable to process at this time. You have requested OTP more than",
    },
    "otp_try_again": {
      "th": "โปรดลองใหม่อีกครั้งหลังจาก",
      "en": "Please try again after",
    },
    "minute": {
      "th": "นาที",
      "en": "minutes",
    },
    "in": {
      "th": "ใน",
      "en": "in",
    },
    "otp_expire": {
      "th": "รหัส OTP นี้หมดอายุการใช้งานแล้ว\nโปรดกด ส่งรหัส OTP อีกครั้ง\nเพื่อทำการขอรหัส OTP ใหม่",
      "en": "This OTP has expired.\n Please press \"Resend OTP again?\"\n to resend OTP.",
    },
    "portolio_overview": {
      "th": "ภาพรวมพอร์ตลงทุน",
      "en": "Overview",
    },
    "value_of_portfolio_not_include_today_transaction": {
      "th": "มูลค่าพอร์ตโฟลิโอไม่รวมรายการซื้อ ขาย สับเปลี่ยน ในวันนี้",
      "en": "Port value excluding Buy/Sell/Switch transactions today.",
    },
    "show_all_plan": {
      "th": "ดูแผนทั้งหมด",
      "en": "All Ports",
    },
    "port_value_calculate_from": {
      "th": "มูลค่าพอร์ตคำนวณจาก….",
      "en": "To calculate portfolio by…",
    },
    "go_to_saving_account_page": {
      "th": "ไปที่หน้าบัญชีออมทรัพย์",
      "en": "See All",
    },
    "search_history": {
      "th": "ค้นหาล่าสุด",
      "en": "Recent searches",
    },
    "search_result": {
      "th": "ผลการค้นหา",
      "en": "Search results",
    },
    "wrong_biometric": {
      "th": "คุณเข้าใช้งานด้วย Biometic Login ไม่สำเร็จ",
      "en": "Login with Biometric is unsuccessful.",
    },
    "login_pin": {
      "th": "เข้าสู่ระบบด้วย PIN",
      "en": "Login by PIN",
    },
    "total": {
      "th": "ทั้งหมด",
      "en": "Total",
    },
    "tax_saving": {
      "th": "Tax Saving",
      "en": "Tax Saving",
    },
    "non_tax_saving": {
      "th": "Non-Tax Saving",
      "en": "Non-Tax Saving",
    },
    "market_value": {
      "th": "มูลค่าตลาด",
      "en": "Market Value",
    },
    "profit": {
      "th": "กำไร",
      "en": "Gain",
    },
    "loss": {
      "th": "ขาดทุน",
      "en": "Loss",
    },
    "transaction_history": {
      "th": "ประวัติการทำรายการ",
      "en": "Transaction History",
    },
    "investment_history": {
      "th": "ประวัติการลงทุน",
      "en": "Investment History",
    },
    "user_block_by_not_active": {
      "th": "ขออภัย\nบัญชีผู้ใช้งานของคุณถูกระงับชั่วคราว\nเนื่องจากคุณไม่ได้เข้าใช้งานเกิน",
      "en": "Sorry\nyour username is inactive because you have not logged in winthin",
    },
    "user_block_by_officer": {
      "th": "ขออภัย\nบัญชีผู้ใช้งานของคุณถูกระงับชั่วคราว",
      "en": "Sorry\nyour username is temporarily bloked. ",
    },
    "user_not_active_day": {
      "th": "วัน",
      "en": "days. ",
    },
    "please_specify_school_name": {
      "th": "โปรดระบุสถานศึกษา",
      "en": "Please specify academic institution",
    },
    "education_level": {
      "en": "Education",
      "th": "ระดับการศึกษา",
    },
    "education_level_placeholder": {
      "en": "Education",
      "th": "ระบุระดับการศึกษา",
    },
    "all_amc": {
      "th": "ทุก บลจ.",
      "en": "All AMCs",
    },
    "not_specify": {
      "th": "ไม่ระบุ",
      "en": "Not specific",
    },
    "nav_change": {
      "th": "NAV เปลี่ยนแปลง",
      "en": "Historical NAV",
    },
    "aum_change": {
      "th": "มูลค่าทรัพย์สินสุทธิ",
      "en": "Net Asset Value",
    },
    "select_account_page_info_1": {
      "th": "หากชื่อบัญชีที่คุณเลือกไม่ตรงกับชื่อปัจจุบันของคุณโปรดติดต่อสาขาพร้อมหลักฐานการเปลี่ยนแปลงข้อมูลเพื่อเปลี่ยนแปลงชื่อบัญชีให้เป็นปัจจุบันก่อนกดปุ่ม \"ยืนยันข้อมูล\"",
      "en": "In case you have changed your name but the account name has not been updated, please visit any of LH Bank's branches to update the account name before completing this step.",
    },
    "select_account_page_info_2": {
      "th": "บัญชีที่คุณเลือกจะถูกระบุเป็นบัญชีสำหรับรับเงินค่าขายคืนในแบบฟอร์มเปิดบัญชี FundConnext",
      "en": "Your chosen account will be identified as a Redemption Account on the FundConnext Account opening form.",
    },
    "amc_list": {
      "th": "บลจ.",
      "en": "AMC.",
    },
    "unitholder_detail": {
      "th": "ข้อมูลผู้ถือหน่วยลงทุน",
      "en": "Unitholder Information",
    },
    "average_cost": {
      "th": "ต้นทุนเฉลี่ย",
      "en": "Average Cost",
    },
    "cost_value": {
      "th": "มูลค่าต้นทุน",
      "en": "Cost Amount",
    },
    "present_value": {
      "th": "มูลค่าปัจจุบัน",
      "en": "Market Value",
    },
    "calculate_from_cost": {
      "th": "คำนวณจากต้นทุนเฉลี่ย",
      "en": "Calculated from Average Cost.",
    },
    "outstanding_balance": {
      "th": "มูลค่าที่ถือครอง",
      "en": "Outstanding Balance",
    },
    "yearly_classification": {
      "th": "จำแนกข้อมูลแบบรายปี",
      "en": "Purchase History",
    },
    "issue_date_invalid": {
      "en": "Incorrect Issue Date",
      "th": "วันที่ออกบัตรไม่ถูกต้อง",
    },
    "expire_date_invalid": {
      "en": "Incorrect Expiry Date",
      "th": "วันที่บัตรหมดอายุไม่ถูกต้อง",
    },
    "change_mobile_info": {
      "th": "ธนาคารพบว่า ปัจจุบันคุณไม่ได้ใช้เบอร์มือถือที่ลงทะเบียนไว้กับธนาคารแล้ว โปรดเปลี่ยนเบอร์มือถือใหม่",
      "en": "The Mobile Number you are using is not the same with the one you have registered. Please change the Mobile Number.",
    },
    "change_mail_info": {
      "th": "ธนาคารพบว่า ปัจจุบันคุณไม่ได้ใช้อีเมลที่ลงทะเบียนไว้กับธนาคารแล้ว โปรดเปลี่ยนอีเมลใหม่",
      "en": "The E-mail Address you are using is not the same with the one you have registered. Please change the E-mail Address.",
    },
    "confirm_transaction_as400": {
      "th": "ยืนยันการทำรายการ",
      "en": "confirm the transaction"
    },
    "confirm_email_as400": {
      "th": "ยืนยันการทำรายการ",
      "en": "Change E-mail Address"
    },
    "confirm_otp_email_change_mobile_as400": {
      "th": "ยืนยันการทำรายการ",
      "en": "Confirm Change Mobile Number"
    },
    "setting_enter_password": {
      "th": "ระบุ Password",
      "en": "enter password",
    },
    "setting_enter_password_again": {
      "th": "ระบุ Password อีกครั้ง",
      "en": "Reconfirm Password",
    },
    "manage_account": {
      "th": "จัดการข้อมูลส่วนตัว",
      "en": "Manage My Personal Information",
    },
    "buy_year": {
      "th": "ปีที่ซื้อ",
      "en": "Purchase Year",
    },
    "year_buy": {
      "th": "ปีที่ซื้อ",
      "en": "Year",
    },
    "investment_amount": {
      "th": "จำนวนเงินลงทุน",
      "en": "Cost Amount",
    },
    "money_must_greater_than_0": {
      "th": "จำนวนเงินต้องมากกว่า 0 บาท",
      "en": "Amount must greater than 0",
    },
    "more_detail": {
      "th": "เพิ่มเติม",
      "en": "See more",
    },
    "annual_return_with_dividend": {
      "th": "ผลตอบแทนแบบรวมปันผลรายปี",
      "en": "Annual Returns (Dividend-adjusted)",
    },
    "dividend_history_header": {
      "th": "ประวัติจ่ายเงินปันผล",
      "en": "Dividend Payment History",
    },
    "dividend_history": {
      "th": "ประวัติจ่ายเงินปันผล",
      "en": "Historical Dividends",
    },
    "all_dividend_history": {
      "th": "ประวัติจ่ายเงินปันผล",
      "en": "Dividend History",
    },
    "return_rate": {
      "th": "ผลตอบแทน (%)",
      "en": "Return (%)",
    },
    "baht_per_unit": {
      "th": "บาท/หน่วย",
      "en": "THB/Unit",
    },
    "last_5_times": {
      "th": "5 ครั้งล่าสุด",
      "en": "Last 5 payments",
    },
    "last_5_years": {
      "th": "5 ปีล่าสุด",
      "en": "Last 5 years",
    },
    "5_years": {
      "th": "5 ปี",
      "en": "5 Years"
    },
    "10_years": {
      "th": "10 ปี",
      "en": "10 Years"
    },
    "lastest": {
      "th": "ล่าสุด",
      "en": "Latest",
    },
    "anuual_return": {
      "th": "ผลตอบแทนรายปี",
      "en": "Annual Return",
    },
    "all_anuual_return": {
      "th": "ผลตอบแทนรายปี",
      "en": "Total Annual Return",
    },
    "risk_and_return": {
      "th": "ผลตอบแทนและความเสี่ยง",
      "en": "Investment Risk and Return",
    },
    "annualized": {
      "th": "annualized",
      "en": "annualized",
    },
    "buy_date": {
      "th": "วันที่ซื้อ",
      "en": "Purchase Date",
    },
    "transaction_buy_date": {
      "th": "วันที่ซื้อ",
      "en": "Transaction Date",
    },
    "debit_date": {
      "th": "วันที่ตัดเงิน",
      "en": "Debiting Account Date",
    },
    "remaining_unit": {
      "th": "หน่วยคงเหลือ",
      "en": "Outstanding Units",
    },
    "suit_next": {
      "th": "ถัดไป",
      "en": "Next",
    },
    "from_beginning": {
      "th": "ตั้งแต่เริ่มต้น",
      "en": "From The Beginning",
    },
    "from_beginning_all": {
      "th": "ตั้งแต่เริ่มต้น",
      "en": "All",
    },
    "one_day": {
      "th": "1 วัน",
      "en": "1 day",
    },
    "one_week": {
      "th": "1 สัปดาห์",
      "en": "1 week",
    },
    "one_month": {
      "th": "1 เดือน",
      "en": "1 month",
    },
    "head_total_return": {
      "th": "Total Return",
      "en": "Total Return",
    },
    "return": {
      "th": "Return",
      "en": "Return",
    },
    "sd": {
      "th": "SD",
      "en": "SD",
    },
    "head_max_drawdown": {
      "th": "Max\nDrawdown",
      "en": "Max\nDrawdown",
    },
    "head_sharpe_ratio": {
      "th": "Sharpe\nRatio",
      "en": "Sharpe\nRatio",
    },
    "head_maximum_drawdown": {
      "th": "Maximum\nDrawdown",
      "en": "Maximum\nDrawdown",
    },
    "head_sd": {
      "th": "Standard\nDeviation",
      "en": "Standard\nDeviation",
    },
    "detail_sharpe_ratio": {
      "th": "ค่ายิ่งมากยิ่งดี",
      "en": "The higher the better",
    },
    "detail_max_drawdown": {
      "th": "ค่าติดลบน้อยยิ่งดี หากกองทุนมีผลตอบแทนใกล้เคียงกัน นักลงทุนควรเลือกค่าที่ติดลบต่ำกว่า",
      "en": "The less negative, the better. With similar returns, investors should choose the funds with lower negative values.",
    },
    "detail_sd": {
      "th": "ค่ายิ่งน้อยแสดงถึงความผันผวนที่ต่ำกว่า ใช้ในการเปรียบเทียบกองทุนที่ลงทุนในสินทรัพย์เดียวกัน ค่า SD ที่สูง อาจจะทำให้นักลงทุนได้ผลตอบแทนที่สูงขึ้นและขาดทุนมากขึ้นเมื่อเทียบกับกองทุนที่มีค่า SD ต่ำกว่า",
      "en": "A measure to show how much the returns over a particular time frame are likely to deviate from its average annual returns. A greater standard deviation indicates greater volatility i.e. returns may fluctuate more either on the higher or lower side of the average.",
    },
    "remark_sharpe_ratio": {
      "th": "หมายเหตุ : คำนวณจากข้อมูลวันทำการสุดท้ายของเดือน",
      "en": "Remark: Calculated on a month-end basis.",
    },
    "remark_max_drawdown": {
      "th": "หมายเหตุ : คำนวณจากข้อมูลวันทำการสุดท้ายของเดือน",
      "en": "Remark: Calculated on a month-end basis.",
    },
    "remark_sd": {
      "th": "หมายเหตุ : ช่วงเวลาตั้งแต่ 3 ปีขึ้นไป จะคำนวณค่า SD จากข้อมูลวันทำการสุดท้ายของเดือน แต่หากน้อยกว่า 3 ปี จะคำนวณจากข้อมูลรายวัน",
      "en": "Remark: For the periods from 3 years and up, the SD is calculated on a month-end basis. For the periods less than 3 years, it is calculated on a month-end basis.",
    },
    "remark_not_include_saving_cash_contract": {
      "th": "หมายเหตุ : ไม่รวมสินทรัพย์ในรูปแบบของบัญชีเงินฝาก เงินสด และสัญญาซื้อขาย",
      "en": "Remark : Excluding of savings, cash, and derivatives",
    },
    "from_date": {
      "th": "ตั้งแต่วันที่",
      "en": "From",
    },
    "to_date": {
      "th": "ถึงวันที่",
      "en": "To",
    },
    "search": {
      "th": "ค้นหา",
      "en": "Search",
    },
    "clear": {
      "th": "ล้าง",
      "en": "Clear",
    },
    "m_choice": {
      "th": "M Choice",
      "en": "M Choice",
    },
    "profita": {
      "th": "Profita",
      "en": "Profita",
    },
    "tooltip_total_return": {
      "th": "Total Return คือ ผลตอบแทนรวมปันผล",
      "en": "A Dividend-Adjusted Return",
    },
    "tooltip_sharpe_ratio": {
      "th": "Sharpe Ratio คือ ผลตอบแทนเมื่อเทียบกับความเสี่ยงจากการลงทุน",
      "en": "Sharpe Ratio is a way to measure the performance of an investment by taking risk into account, i.e. potential risk-adjusted returns.",
    },
    "tooltip_max_drawdown": {
      "th": "Maximum Drawdown คือ ความเสี่ยงหรือโอกาสในการขาดทุนสูงจากการลงทุน",
      "en": "A Maximum Drawdown measures the maximum fall in the value of the fund, as given by the difference between the value of the lowest trough and that of the highest peak before the trough.",
    },
    "tooltip_sd": {
      "th": "Standard Deviation คือ ค่าความผันผวนของผลการดำเนินงานของกองทุนรวม เมื่อเทียบกับผลตอบแทนเฉลี่ย",
      "en": "Standard Deviation can show the volatility of a mutual fund's performance compared to its average return.",
    },
    "tooltip_total_return_compare": {
      "th": "ผลตอบแทนรวมปันผล",
      "en": "A Dividend-Adjusted Return",
    },
    "tooltip_sharpe_ratio_compare": {
      "th": "ค่ายิ่งมากยิ่งดี",
      "en": "The higher the value, the better.",
    },
    "tooltip_max_drawdown_compare": {
      "th": "ค่าติดลบน้อยยิ่งดี หากกองทุนมีผลตอบแทนใกล้เคียงกัน นักลงทุนควรเลือกค่าที่ติดลบต่ำกว่า",
      "en": "The less negative, the better. With similar returns, investors should choose the funds with lower negative values.",
    },
    "tooltip_sd_compare": {
      "th": "ค่ายิ่งน้อยยิ่งดี หากกองทุนมีผลตอบแทนใกล้เคียงกัน นักลงทุนควรเลือกค่า SD ที่มีค่าต่ำกว่า",
      "en": "The lower the value , the better. If funds have similar return, investor should choose the fund with lower SD value.",
    },
    "waiting_for_account_opening": { // NotPass4 header
      "en": "Waiting for approval to open FundConnext account",
      "th": "รอผลการเปิดบัญชีกองทุน",
    },
    "waiting_for_account_opening_info": { // NotPass4
      "en": "LH Bank has received your information.",
      "th": "ธนาคารแลนด์ แอนด์ เฮ้าส์ ได้รับข้อมูล\nการเปิดบัญชีกองทุนของคุณแล้ว",
    },
    "please_waiting_for_account_opening": {
      "en": "Please wait for approval.",
      "th": "โปรดรอผลการเปิดบัญชีกองทุน",
    },
    "open_account_ready": {
      "en": "Ready !!!",
      "th": "พร้อมแล้ว !!!",
    },
    "please_specify_income_source_deposit": {
      "en": "Please specify source of funds",
      "th": "โปรดระบุแหล่งทีมาของเงินฝาก",
    },
    "please_specify_objective_account_opening": {
      "en": "Select purpose of account",
      "th": "โปรดระบุวัตถุประสงค์ในการเปิดบัญชี"
    },
    "please_specify_sub_district": {
      "en": "Please specify the sub-district",
      "th": "กรุณาระบุแขวง/ตำบล",
    },
    "please_specify_district": {
      "en": "Please specify the district",
      "th": "กรุณาระบุเขต/อำเภอ",
    },
    "please_specify_province": {
      "en": "Please specify the province",
      "th": "กรุณาระบุจังหวัด",
    },
    "please_specify_postal_number": {
      "en": "Please specify the postal code",
      "th": "กรุณาระบุรหัสไปรษณีย์",
    },
    "please_specify_road": {
      "en": "Please specify the road",
      "th": "กรุณาระบุถนน",
    },
    "please_specify_soi": {
      "en": "Please specify soi",
      "th": "กรุณาระบุซอย",
    },
    "please_specify_address_number": {
      "en": "Please specify address No.",
      "th": "กรุณาระบุบ้านเลขที่",
    },
    "please_specify_moo": {
      "en": "Please specify moo",
      "th": "กรุณาระบุหมู่",
    },
    "please_specify_room": {
      "en": "Please specify room No.",
      "th": "กรุณาระบุห้อง",
    },
    "please_specify_building": {
      "en": "Please specify mooban/building",
      "th": "กรุณาระบุอาคาร",
    },
    "please_specify_floor": {
      "en": "Please specify floor",
      "th": "กรุณาระบุชั้น",
    },
    "search_sub_district": {
      "en": "Seach your sub-district",
      "th": "กรุณาค้นหาตำบลที่คุณต้องการ",
    },
    "confirm_cancel_order": {
      "th": "ยืนยันยกเลิกรายการ",
      "en": "Cancel the transaction?",
    },
    "cancel_order_success": {
      "th": "ยกเลิกรายการสำเร็จ",
      "en": "Successful Cancellation",
    },
    "robo_cancel_order_success": {
      "th": "ยกเลิกรายการสำเร็จ",
      "en": "Successfully canceling the order.",
    },
    "cancel_dca_order_success": {
      "th": "ยกเลิกรายการแบบประจำ (DCA) สำเร็จ",
      "en": "Successful Cancellation (DCA)",
    },
    "robo_cancel_dca_order_success": {
      "th": "ยกเลิกรายการแบบประจำ (DCA) สำเร็จ",
      "en": "Successfully canceling the DCA order.",
    },
    "sorry_cancel_order_failed": {
      "th": "ขออภัย ยกเลิกรายการไม่สำเร็จ",
      "en": "Unsuccessful Cancellation",
    },
    "robo_sorry_cancel_order_failed": {
      "th": "ขออภัย ยกเลิกรายการไม่สำเร็จ",
      "en": "Sorry, the order cannot be canceled.",
    },
    "show_fund_detail": {
      "th": "ดูรายละเอียดกองทุน",
      "en": "View Fund Details",
    },
    "data_not_found": {
      "th": "ไม่พบข้อมูล",
      "en": "Data not found",
    },
    "risk_level_detail_1": {
      "th": "1 - กองทุนรวมตลาดเงินที่ลงทุนในประเทศ",
      "en": "1 - Local Money Market Fund",
    },
    "risk_level_detail_2": {
      "th": "2 - กองทุนรวมตลาดเงิน",
      "en": "2 - Money Market Fund",
    },
    "risk_level_detail_3": {
      "th": "3 - กองทุนรวมพันธบัตรรัฐบาล",
      "en": "3 - Government Bond Fund",
    },
    "risk_level_detail_4": {
      "th": "4 - กองทุนรวมตราสารหนี้",
      "en": "4 - Fixed Income Fund",
    },
    "risk_level_detail_5": {
      "th": "5 - กองทุนรวมผสม",
      "en": "5 - Mixed Fund",
    },
    "risk_level_detail_6": {
      "th": "6 - กองทุนรวมตราสารทุน",
      "en": "6 - Equity Fund",
    },
    "risk_level_detail_7": {
      "th": "7 - กองทุนรวมหมวดอุตสาหกรรม",
      "en": "7 - Sector Fund",
    },
    "risk_level_detail_8": {
      "th": "8 - กองทุนที่มีการลงทุนในทรัพย์สินทางเลือก",
      "en": "8 - Alternative Investment Fund",
    },
    "risk_level_detail_8+": {
      "th": "8+ - กองทุนที่มีการลงทุนในทรัพย์สินทางเลือก",
      "en": "8+ - Alternative Investment Fund",
    },
    "index_fund_type": {
      "th": "กลยุทธ์การลงทุน",
      "en": "Investment Strategy",
    },
    "index_fund_true": {
      "th": "Passive",
      "en": "Passive",
    },
    "index_fund_false": {
      "th": "Active",
      "en": "Active",
    },
    "active": {
      "th": "Active",
      "en": "Active",
    },
    "expired": {
      "th": "Expired",
      "en": "Expired",
    },
    "canceled": {
      "th": "Cancelled",
      "en": "Cancelled",
    },
    "isFif": {
      "th": "นโยบายการลงทุนในต่างประเทศ",
      "en": "Foreign Investment",
    },
    "foreign_investment_policy": {
      "th": "นโยบายลงทุนในต่างประเทศ",
      "en": "Foreign Investment Policy",
    },
    "isFif_true": {
      "th": "มีการลงทุน",
      "en": "Yes",
    },
    "isFif_false": {
      "th": "ไม่ลงทุน",
      "en": "No",
    },
    "master_feeder": {
      "th": "กองทุน Master Fund",
      "en": "Master Fund",
    },
    "have": {
      "en": "N/A",
      "th": "มี",
    },
    "not_have": {
      "en": "N/A",
      "th": "ไม่มี",
    },
    "exchange_risk_spectrum": {
      "th": "นโยบายป้องกันความเสี่ยงอัตราแลกเปลี่ยน",
      "en": "Foreign Exchange Hedging Policy",
    },
    "spectrum_NOTHING": {
      "th": "ไม่มี",
      "en": "No FX Risk Hedge",
    },
    "spectrum_BLANK": {
      "th": "-",
      "en": "-",
    },
    "spectrum_ALL": {
      "th": "ทั้งหมด",
      "en": "Full FX Risk Hedge",
    },
    "spectrum_DISCRETION": {
      "th": "ขึ้นอยู่กับดุลยพินิจของผู้จัดการกองทุน",
      "en": "Fund Manager's Discretion",
    },
    "spectrum_PARTIAL": {
      "th": "บางส่วน",
      "en": "Partial FX Risk Hedge",
    },
    "dividend_policy": {
      "th": "นโยบายการจ่ายปันผล",
      "en": "Dividend Policy",
    },
    "lastest_dividend": {
      "th": "นโยบายจ่ายปันผลล่าสุด",
      "en": "Latest Dividend Payment",
    },
    "dividend_true": {
      "th": "จ่าย",
      "en": "Pay",
    },
    "dividend_false": {
      "th": "ไม่จ่าย",
      "en": "Not Pay",
    },
    "fund_registration_date": {
      "th": "วันที่จดทะเบียนกองทุน",
      "en": "Registration Date",
    },
    "edit_open_account": {
      "th": "แก้ไขข้อมูลการเปิดบัญชี",
    },
    "continue_step": {
      "en": "N/A",
      "th": "ขั้นตอนที่ต้องดำเนินต่อ",
    },
    "sorry_cannot_fund": {
      "en": "Sorry, your FundConnext Account cannot be opened.",
      "th": "ขออภัย คุณไม่สามารถเปิดบัญชีกองทุนได้เนื่องจาก",
    },
    "id_card_invalid": {
      "en": "Please take a picture of your ID card again.",
      "th": "รูปบัตรประชาชนไม่ชัดเจนโปรดถ่ายรูปใหม่อีกครั้ง",
    },
    "saving_account_name": {
      "en": "Your savings account name",
      "th": "ชื่อบัญชีออมทรัพย์",
    },
    "reject_account_number_info": {
      "en": "does not match your current name. \nPlease contact the branch to change the account name.",
      "th": "ไม่ตรงกับชื่อปัจจุบันของคุณ\nโปรดติดต่อสาขาพร้อมหลักฐานการเปลี่ยนแปลงข้อมูล เพื่อเปลี่ยนแปลงชื่อบัญชีให้เป็นปัจจุบัน",
    },
    "id_card_address_invalid": {
      "en": "The entered ID card address does not match your ID Card.",
      "th": "คุณกรอกที่อยู่ตามบัตรประชาชนไม่ตรงกับหน้าบัตรประชาชนของคุณ",
    },
    "id_card_address_invalid_note": {
      "en": "Note: Please fill in the address exactly as  address on your ID card.",
      "th": "หมายเหตุ: โปรดกรอกที่อยู่ให้ตรงตามหน้าบัตรประชาชน",
    },
    "open_account_out_of_service": {
      "en": "Sorry, the system cannot open an account at this time. The application form will be saved for you to resume account opening again from",
      "th": "ขออภัย ขณะนี้อยู่นอกเวลาการให้บริการเปิดบัญชีออนไลน์ โปรดดำเนินการใหม่อีกครั้งตั้งแต่เวลา",
    },
    "open_robo_account_out_of_service": {
      "en": "Sorry, the system cannot open a port at this time. Your investment plan will be saved for you to resume for port opening from",
      "th": "ขออภัย ขณะนี้อยู่นอกเวลาการให้บริการ สร้างแผนการลงทุนใหม่ โปรดดำเนินการ ต่อจากหน้ารวมแผนการลงทุน ตั้งแต่เวลา",
    },
    "fee_cap": {
      "en": "Maximum",
      "th": "ไม่เกิน",
    },
    "fee": {
      "en": "Actual",
      "th": "เก็บจริง",
    },
    "transfer_fee": {
      "en": "Fee",
      "th": "ค่าธรรมเนียม",
    },
    "trading_fee": {
      "en": "Fees",
      "th": "ค่าธรรมเนียมซื้อขาย",
    },
    "trading_fee_detail": {
      "en": "% of trading value",
      "th": "% ของมูลค่าซื้อขาย",
    },
    "subscription_fee": {
      "en": "Front-end Fee",
      "th": "ค่าธรรมเนียมเมื่อซื้อ",
    },
    "redemption_fee": {
      "en": "Back-end Fee",
      "th": "ค่าธรรมเนียมเมื่อขาย",
    },
    "trading_fee_remark": {
      "en": "Fees are subject to change according to the terms and conditions of the AMC.",
      "th": "ค่าธรรมเนียมการซื้อขาย อาจมีการเปลี่ยนแปลงไปตามเงื่อนไขและข้อกำหนดของ บลจ.",
    },
    "fund_fee": {
      "en": "Fees",
      "th": "ค่าธรรมเนียมกองทุน",
    },
    "fund_fee_head": {
      "en": "Total Expense Ratio",
      "th": "ค่าใช้จ่ายกองทุนรวม",
    },
    "fund_fee_detail": {
      "en": "% p.a. of NAV",
      "th": "% ของมูลค่าหน่วยลงทุนทั้งหมด ต่อปี",
    },
    "fund_processing_fee": {
      "en": "Management Fee",
      "th": "ค่าธรรมเนียมการจัดการ",
    },
    "fee_ratio": {
      "en": "Net Expense Ratio",
      "th": "อัตราส่วนค่าใช้จ่ายรวม",
    },
    "fund_fee_remark": {
      "en": "Fees are subject to change according to the terms and conditions of the AMC.",
      "th": "ค่าธรรมเนียมกองทุน อาจมีการเปลี่ยนแปลงไปตามเงื่อนไขและข้อกำหนดของ บลจ.",
    },
    "minimum_investment": {
      "en": "Minimum Trade",
      "th": "มูลค่าซื้อขายขั้นต่ำ",
    },
    "minimum_initial_invest": {
      "en": "First Minimum Buy (THB)",
      "th": "มูลค่าขั้นต่ำของการซื้อครั้งแรก (บาท)",
    },
    "minimum_next_invest": {
      "en": "Next Minimum Buy  (THB)",
      "th": "มูลค่าขั้นต่ำของการซื้อครั้งต่อไป (บาท)",
    },
    "minimum_redeem": {
      "en": "Minimum Sell (THB)",
      "th": "มูลค่าขายขั้นต่ำ (บาท)",
    },
    "trading_time": {
      "en": "Trading Time",
      "th": "เวลาซื้อขาย",
    },
    "subscription_cutoff_time": {
      "en": "Buy Cut-off time",
      "th": "เวลาปิดรับคำสั่งซื้อ",
    },
    "redemption_cutoff_time": {
      "en": "Sell Cut-off time",
      "th": "เวลาปิดรับคำสั่งขาย",
    },
    "sell_settlement_date": {
      "en": "Sell Settlement Date",
      "th": "วันรับเงินค่าขายคืน",
    },
    "day_after_seetlement": {
      "th": "วันทำการหลังวันทำรายการขาย",
      "en": "\b"
    },
    "term_and_condition_header_info_1": {
      "en": "Land and Houses Bank Public Company Limited (“LH Bank”) is determined to provide products and/or services that meet your specific needs. The Bank hereby requires your consent for the collection, use and/or disclosure of your Personal Data Protections Act B.E. 2562 (A.D. 2019).",
      "th": "ธนาคารแลนด์ แอนด์ เฮ้าส์ จำกัด (มหาชน) (“ธนาคาร”) มีความมุ่งมั่นที่จะมอบผลิตภัณฑ์ และ/หรือ บริการที่ตรงตามความต้องการของคุณ ธนาคารจึงขอความยินยอมจากคุณในการเก็บรวบรวม ใช้ และ/หรือ เปิดเผยข้อมูลส่วนบุคคลของคุณตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562",
    },
    "term_and_condition_header_info_2": {
      "en": "At any time, you are entitled to decline to consent to LH Bank’s collection, use and/or disclosure of your Personal Data for the purposes below. Your declination shall not affect your use of LH Bank’s products and/or services.",
      "th": "โดยคุณมีสิทธิที่จะเลือกให้ หรือไม่ให้ความยินยอมฯ เพื่อวัตถุประสงค์ตามที่ระบุไว้ด้านล่างนี้เมื่อใดก็ได้ ทั้งนี้ การไม่ให้ความยินยอมดังกล่าวจะไม่กระทบต่อการใช้ผลิตภัณฑ์ และ/หรือ บริการของธนาคาร",
    },
    "edit_account_opening_information": {
      "en": "Please edit account opening information.",
      "th": "โปรดแก้ไขข้อมูลการเปิดบัญชี",
    },
    "school_name": {
      "en": "Academic Institution",
      "th": "สถานศึกษา"
    },
    "time": {
      "en": "\b",
      "th": " น."
    },
    "to": {
      "en": "to",
      "th": "ถึง"
    },
    "funds_compare": {
      "th": "เปรียบเทียบกองทุน",
      "en": "Fund Comparison",
    },
    "confirm_compare": {
      "th": "ยืนยันเปรียบเทียบ",
      "en": "Confirm to Comparison",
    },
    "selected_fund": {
      "th": "กองทุนที่เลือก",
      "en": "Selected Fund",
    },
    "selected_funds": {
      "th": "กองทุนที่เลือก",
      "en": "Selected Funds",
    },
    "maximum_compare": {
      "th": "สูงสุด 15 รายการ",
      "en": "Maximum 15 Funds",
    },
    "compare_return_percentage_chart": {
      "th": "กราฟผลตอบแทนย้อนหลังแบบรวมปันผลรายปี",
      "en": "Annual Dividend-Adjusted Return Chart",
    },
    "top_five": {
      "th": "สูงสุด 5 อันดับ",
      "en": "Top 5",
    },
    "term_and_condition_footer_info_1": {
      "en": "I have read and acknowledged LH Bank’s Privacy Notice and I hereby acknowledge that I am entitled to withdraw the consent to the collection, use and/or disclosure of my Personal data for the purposes mentioned herein at any time by notifying LH Bank of such withdrawal of consent in a written form.",
      "th": "ข้าพเจ้าได้อ่าน และรับทราบประกาศความเป็นส่วนตัวของธนาคารแล้ว และข้าพเจ้ารับทราบว่า ข้าพเจ้ามีสิทธิถอนความยินยอมในการเก็บรวบรวม ใช้ และ/หรือ เปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าเพื่อวัตถุประสงค์ตามที่ระบุไว้ในหนังสือฉบับนี้ได้ ตลอดเวลาโดยแจ้งให้กับธนาคารทราบเป็นลายลักษณ์อักษรถึงการถอนความยินยอมเช่นว่านั้น",
    },
    "setting_limit_noti": {
      "en": "You are about to exit the limit change process without saving the changes.",
      "th": "คุณกำลังจะออกจากขั้นตอนการเปลี่ยนแปลงวงเงิน โดยที่ยังไม่ได้บันทึกการเปลี่ยนแปลง",
    },
    "robo_setting_limit_noti": {
      "en": "Do you want to leave this screen without saving?",
      "th": "คุณกำลังจะออกจกขั้นตอนการกำหนดการแจ้งเตือน กำไร/ขาดทุน โดยที่ยังไม่ได้บันทึกการเปลี่ยนแปลง",
    },
    "setting_limit_transfer_noti": {
      "en": "You are about to exit the limit change process without saving the changes.",
      "th": "คุณกำลังจะออกจากขั้นตอนการเปลี่ยนแปลงวงเงิน โดยที่ยังไม่ได้บันทึกการเปลี่ยนแปลง",
    },
    "setting_profit": {
      "en": "Gain (%)",
      "th": "กำไร (%)"
    },
    "setting_loss": {
      "en": "Loss (%)",
      "th": "ขาดทุน (%)"
    },
    "setting_profit_loss_noti": {
      "en": "You will get notification when the gain or loss has hit threshold you set.",
      "th": "ระบบจะแจ้งเตือนเมื่อ กำไร หรือ ขาดทุน มีการเปลี่ยนแปลงถึงค่าที่คุณกำหนด"
    },
    "per_day": {
      "en": "Per Day",
      "th": "ต่อวัน"
    },
    "no_more_than": {
      "en": "Maximun Setup Limit",
      "th": "สูงสุดไม่เกิน"
    },
    "please_specify_amount_not_exceed_maximum": {
      "en": "Please specify not greater than the maximun limit.",
      "th": "โปรดระบุจำนวนเงินไม่เกินวงเงินสูงสุด"
    },
    "setting_purchase_limit_header": {
      "th": "กำหนดวงเงินซื้อกองทุน",
      "en": "Buying Limit"
    },
    "setting_purchase_limit_per_day": {
      "th": "วงเงินซื้อกองทุนต่อวัน",
      "en": "Buying Limit Per Day",
    },
    "per_item": {
      "en": "Limit Per Transaction",
      "th": "ต่อรายการ",
    },
    "per_day/account": {
      "en": "Limit Per Day/Account",
      "th": "ต่อวัน/บัญชี",
    },
    "transfer_own_account": {
      "en": "Transfer to My LHB Account",
      "th": "โอนเงินบัญชีตัวเอง ภายใน LH Bank",
    },
    "transfer_other_account": {
      "en": "Transfer to Other LHB Account",
      "th": "โอนเงินบัญชีบุคคลอื่น ภายใน LH Bank",
    },
    "transfer_other_bank": {
      "en": "Transfer to Other Bank",
      "th": "โอนเงินต่างธนาคาร",
    },
    "transfer_promtpay": {
      "en": "Transfer to PromtPay",
      "th": "โอนเงินพร้อมเพย์",
    },
    "transfer_confirm": {
      "en": "Review & Confirm",
      "th": "ยืนยันการโอนเงิน",
    },
    "from_account": {
      "en": "From",
      "th": "จากบัญชี",
    },
    "from_bank_account": {
      "en": "From Account",
      "th": "จากบัญชีธนาคาร",
    },
    "from_bank_account_no": {
      "en": "From Account No.",
      "th": "จากบัญชีธนาคาร",
    },
    "money_transfer_success": {
      "en": "Transfer Success",
      "th": "ทำรายการโอนเงินสำเร็จ",
    },
    "receiver_can_scan_qr_to_check_verify_transfer_status": {
      "en": "Receiver can scan QR to verify the transaction's status.",
      "th": "ผู้รับเงินสามารถสแกนด้วยคิวอาร์โค้ดเพื่อตรวจสอบสถานะการโอน",
    },
    "no_limit": {
      "en": "No Limit",
      "th": "ไม่จำกัด",
    },
    "graph": {
      "th": "กราฟ",
      "en": "Graph"
    },
    "compare_warning": {
      "th": "คุณกำลังเปรียบเทียบกองทุนต่างประเภท",
      "en": "You are comparing different types of asset class."
    },
    "fund_no": {
      "th": "กองทุนที่",
      "en": "Fund"
    },
    "account": {
      "en": "Account",
      "th": "บัญชี"
    },
    "transfer_out_limit_per_day": {
      "en": "Limit Per Day/Account",
      "th": "วงเงินต่อวัน/บัญชี"
    },
    "compare_list_empty": {
      "en": "Please select more fund for comparing",
      "th": "กรุณาเลือกกองทุนเปรียบเทียบอย่างน้อย 2 กองทุน"
    },
    "million_baht": {
      "en": "Million (THB)",
      "th": "ลบ."
    },
    "best": {
      "en": "Best",
      "th": "ดีที่สุด"
    },
    "minimum_initial_amount": {
      "en": "First Minimum Buy (THB)",
      "th": "ขั้นต่ำซื้อครั้งแรก"
    },
    "minimum_invest_amount": {
      "en": "Next Minimum Buy  (THB)",
      "th": "ขั้นต่ำซื้อครั้งถัดไป"
    },
    "as_of_date": {
      "en": "Info. as of",
      "th": "ข้อมูล ณ วันที่"
    },
    "compare_over_limit": {
      "en": "Maximum Comparison is 15 funds.",
      "th": "เปรียบเทียบกองทุนได้สูงสุดครั้งละไม่เกิน 15 กอง"
    },
    "work_day": {
      "en": "business days.",
      "th": "วันทำการ"
    },
    "contact_bank": {
      "en": "Contact Us",
      "th": "ติดต่อธนาคาร"
    },
    "setting_lh_bank": {
      "en": "Land and Houses Bank Public Company Limited Head Office",
      "th": "ธนาคารแลนด์ แอนด์ เฮ้าส์ จำกัด (มหาชน) สำนักงานใหญ่"
    },
    "setting_lh_bank_address": {
      "en": "1 Q.House Lumpini Building, South Sathon Rd., Thungmahamek, Sathon, Bangkok 10120",
      "th": "เลขที่ 1 อาคารคิวเฮ้าส์ ลุมพินี ถนนสาทรใต้ แขวงทุ่งมหาเมฆ เขตสาทร กรุงเทพฯ 10120"
    },
    "telephone": {
      "en": "Telephone",
      "th": "โทรศัพท์"
    },
    "lh_call_center_number": {
      "en": "1327",
      "th": "1327"
    },
    "lh_telephone_number": {
      "en": "+66 2677 7111",
      "th": "+66 2677 7111"
    },
    "calcenter_mail": {
      "en": "callcenter@lhbank.co.th",
      "th": "callcenter@lhbank.co.th"
    },
    "website": {
      "en": "Website",
      "th": "เว็บไซต์"
    },
    "website_name": {
      "en": "https://www.lhbank.co.th",
      "th": "https://www.lhbank.co.th"
    },
    "follew_us": {
      "en": "Follow Us",
      "th": "ติดตามเรา"
    },
    "privacy_management_header": {
      "th": "จัดการข้อมูลส่วนบุคคล",
      "en": "Manage Data Privacy"
    },
    "noti_GENERAL": {
      "en": "News",
      "th": "ข้อมูลทั่วไป",
    },
    "noti_SYSTEM": {
      "en": "Alerts",
      "th": "แจ้งเตือนจากระบบ",
    },
    "redeem_unsupport": {
      "th": "ยังไม่รองรับการขายกองทุนประเภทนี้ผ่าน Profita โปรดติดต่อสาขา",
      "en": "This fund is not redeemable via Profita, please visit LH Bank branches."
    },
    "setting_privacy_noti": {
      "th": "คุณกำลังจะออกจากขั้นตอนจัดการข้อมูลส่วนบุคคล โดยที่ยังไม่ได้บันทึกการเปลี่ยนแปลง",
      "en": "Do you want to leave this screen without saving?"
    },
    "pre_delete_noti": {
      "en": "Do you want to delete all messages ?",
      "th": "ยืนยันลบข้อความทั้งสิ้น",
    },
    "post_delete_noti": {
      "th": "รายการ",
      "en": "Accounts"
    },
    "account_list": {
      "th": "รายการ",
      "en": "Account"
    },
    "unit_holder_all": {
      "th": "ทั้งหมด",
      "en": "All"
    },
    "noti_delete_confirm": {
      "en": "Do you want to continue ?",
      "th": "คุณต้องการที่จะทำรายการนี้ต่อหรือไม่",
    },
    "morningstar": {
      "th": "Morningstar",
      "en": "Morningstar"
    },
    "right_of_personal_privacy_header": {
      "th": "สิทธิของเจ้าของข้อมูลส่วนบุคคล",
      "en": "Data Subject Rights"
    },
    "connot_read_noti": {
      "en": "The message can not be opened.",
      "th": "ไม่สามารถเปิดข้อความแจ้งเตือนได้",
    },
    "connot_delete_noti": {
      "en": "The message can not be deleted.",
      "th": "ไม่สามารถลบข้อความแจ้งเตือนได้",
    },
    "history": {
      "th": "ประวัติ",
      "en": "History"
    },
    "transfer_money": {
      "th": "โอนเงิน",
      "en": "Transfer"
    },
    "saving_info": {
      "th": "หากต้องการดูรายการเดินบัญชี หรือทำธุรกรรมอื่นๆ\nกรุณาดาวน์โหลด",
      "en": "For more transaction information and bank statement,\nplease download M Choice."
    },
    "available_balance": {
      "en": "Available Balance",
      "th": "ยอดเงินคงเหลือที่ใช้ได้"
    },
    "current_balance": {
      "en": "Current Balance",
      "th": "ยอดเงินคงเหลือปัจจุบัน"
    },
    "current_account_type": {
      "en": "Current",
      "th": "กระแสรายวัน"
    },
    "saving_account_type": {
      "th": "ออมทรัพย์",
      "en": "Saving",
    },
    "tax_free_account_type": {
      "th": "ปลอดภาษี",
      "en": "Tax Free",
    },
    "fixed_free_account_type": {
      "th": "ฝากประจำ",
      "en": "Fixed Deposit",
    },
    "transfer_account": {
      "en": "From",
      "th": "บัญชีโอนออก"
    },
    "bank": {
      "en": "BANK",
      "th": "BANK"
    },
    "transfer_to": {
      "en": "To",
      "th": "ไปยัง"
    },
    "own_account": {
      "en": "My Account",
      "th": "บัญชีตนเอง",
    },
    "own_accounts": {
      "en": "My Accounts",
      "th": "บัญชีตนเอง",
    },
    "other_account": {
      "en": "Bank",
      "th": "ธนาคาร",
    },
    "promtpay": {
      "en": "PromptPay",
      "th": "พร้อมเพย์",
    },
    "limit_available_balance": {
      "en": "Remaining limit today",
      "th": "วงเงินคงเหลือที่ทำรายการได้วันนี้"
    },
    "memo": {
      "en": "Memo",
      "th": "บันทึกช่วยจํา"
    },
    "memo_placeholder": {
      "en": "Enter memo",
      "th": "ระบุบันทึกช่วยจํา"
    },
    "select_bank": {
      "en": "Select Bank",
      "th": "เลือกธนาคาร"
    },
    "promptpay": {
      "en": "promptpay",
      "th": "พร้อมเพย์"
    },
    "promptpay_number": {
      "en": "PromptPay ID",
      "th": "หมายเลขพร้อมเพย์ผู้รับเงิน"
    },
    "promptpay_placeholder": {
      "en": "Mobile Number/Citizen ID/Tax ID",
      "th": "เบอร์มือถือ/เลขบัตรประชาชน/เลขผู้เสียภาษี"
    },
    "null_id_or_password": {
      "en": "Please enter Username and Password.",
      "th": "โปรดกรอก Username และ Password ของคุณให้ครบ"
    },
    "confirm_forget_pin": {
      "en": "Forget pin confirm?",
      "th": "คุณลืม PIN ใช่หรือไม่?"
    },
    "amount_balance_notification": {
      "en": "Sorry, the ending balance (after the transaction) cannot be less than the required minimum balance of this account (MINIMUM_BALANCE Baht). Please re-enter the amount.",
      "th": "ขออภัย จำนวนเงินคงเหลือในบัญชีหลังจากทำธุรกรรม ต้องไม่น้อยกว่าจำนวนเงินขั้นต่ำที่ต้องคงค้างสำหรับบัญชีนี้ (MINIMUM_BALANCE บาท)",
    },
    "remaining_amount_notification_1": {
      "en": "Sorry, The transaction amount exceeds your transaction limit",
      "th": "ขออภัย คุณใส่จำนวนเงินเกินวงเงินที่ทำได้ต่อรายการ"
    },
    "remaining_amount_notification_2": {
      "en": "You can change transaction limits at My Account > Manage Transfer Limit > Per Transaction.",
      "th": "คุณสามารถเปลี่ยนวงเงินได้ที่ เมนูบัญชีของฉัน > บัญชีออมทรัพย์ > กำหนดวงเงินการโอนออก > ต่อรายการ"
    },
    "duplicate_transfer_notification": {
      "en": "You have just made this transaction. Would you like to proceed ?",
      "th": "คุณได้มีการทำรายการซ้ำก่อนหน้านี้ โปรดตรวจสอบรายละเอียดในประวัติการทำรายการ",
    },
    "your_account_status_is_invalid_please_contact_branch": {
      "en": "Your account status is unable to support this transaction.\nPlease contact LH Bank branch.",
      "th": "สถานะบัญชีของคุณไม่สามารถทำรายการได้\nโปรดติดต่อสาขา",
    },
    "transfer_error_3006": {
      "en": "Sorry, receiving account information is invalid, please check and try again.",
      "th": "ขออภัย ข้อมูลบัญชีรับเงินไม่ถูกต้อง กรุณาตรวจสอบและลองใหม่อีกครั้ง",
    },
    "transfer_error_3007": {
      "en": "Sorry, receiving account information is invalid, please check and try again.",
      "th": "ไม่พบบัญชีผู้รับเงิน กรุณาตรวจสอบเลขที่บัญชี",
    },
    "transfer_error_3008": {
      "en": "Sorry,  account information is invalid, please check and try again later.",
      "th": "ขออภัย ข้อมูลบัญชีไม่ถูกต้อง โปรดตรวจสอบ และลองใหม่อีกครั้งในภายหลัง",
    },
    "transfer_error_3009": {
      "en": "Sorry, unable to process the transaction at this time or account information is invalid. Please try again later.",
      "th": "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้ หรือข้อมูลบัญชีไม่ถูกต้อง กรุณาลองใหม่อีกครั้งในภายหลัง",
    },
    "transfer_error_3010": {
      "en": "Sorry, you can deposit to tax free account only 1 time/month",
      "th": "ขออภัย ท่านสามารถฝากเงินเข้าบัญชีปลอดภาษีได้เพียงเดือนละ 1 ครั้ง",
    },
    "transfer_error_3011": {
      "en": "Sorry,receiver account is not active,please check again.",
      "th": "ขออภัย บัญชีรับเงินมีสถานะไม่  Active กรุณาตรวจสอบอีกครั้ง",
    },
    "transfer_error_3012": {
      "en": "Sorry, your transaction is being processed. Please check the result at menu History or Statement.",
      "th": "ขออภัย รายการของท่านอยู่ระหว่างดำเนินการ กรุณาตรวจสอบผลการทำรายการอีกครั้งที่เมนูประวัติหรือรายการเดินบัญชี",
    },
    "transfer_error_3013": {
      "en": "Sorry, receiving account information is invalid, please check and try again.",
      "th": "ขออภัย ข้อมูลบัญชีรับเงินไม่ถูกต้อง กรุณาตรวจสอบและลองใหม่อีกครั้ง",
    },
    "transfer_error_3014": {
      "en": "Sorry, receiving account information is invalid, please check and try again.",
      "th": "ไม่พบบัญชีผู้รับเงิน กรุณาตรวจสอบเลขที่บัญชี",
    },
    "transfer_error_3015": {
      "en": "Sorry, unable to process the transaction at this time or account information is invalid. Please try again later.",
      "th": "ขออภัย ระบบไม่สามารถทำรายการได้ในขณะนี้ หรือข้อมูลบัญชีไม่ถูกต้อง กรุณาลองใหม่อีกครั้งในภายหลัง",
    },
    "transfer_error_3016": {
      "en": "Sorry, your transaction is being processed. Please check the result at menu History or Statement.",
      "th": "ขออภัย รายการของท่านอยู่ระหว่างดำเนินการ กรุณาตรวจสอบผลการทำรายการอีกครั้งที่เมนูประวัติหรือรายการเดินบัญชี",
    },
    "transfer_error_3017": {
      "en": "Frequency is does not match. (TaxFree)",
      "th": "บัญชีมีการขาดฝากมากกว่า 2 งวดขึ้นไป ไม่สามารถฝากเงินต่อได้ โปรดติดต่อสาขาเพื่อดำเนินการปิดบัญชี",
    },
    "sorry": {
      "en": "Sorry",
      "th": "ขออภัย"
    },
    "bank_not_found_notification": {
      "en": "Invalid account number",
      "th": "เลขที่บัญชีปลายทางไม่ถูกต้อง"
    },
    "account_name_destination": {
      "en": "Enter Account No.",
      "th": "ระบุเลขที่บัญชีรับโอน"
    },
    "not_have_activity": {
      "en": "Inactivity for long time, Please login again (E001)",
      "th": "คุณไม่ได้มีการทำรายการในเวลาที่กำหนด โปรดเข้าสู่ระบบอีกครั้ง (E001)"
    },
    "e_wallet": {
      "en": "e-Wallet",
      "th": "e-Wallet"
    },
    "connect_timeout": {
      "en": "The request timed out.",
      "th": "ไม่พบสัญญาณตอบรับจากระบบ"
    },
    "device_id_not_match": {
      "en": "Another device has attempted to login to your account.",
      "th": "ตรวจพบการเข้าใช้ ID จากอุปกรณ์อื่น"
    },
    // "error_invalid_version": {
    //   "en": "Please update Profita app and experience a better service",
    //   "th": "โปรดอัปเดตแอปพลิเคชัน Profita เพื่อประสิทธิภาพการใช้งานที่ดียิ่งขึ้น"
    // },
    "error_lifetime_token_invalid": {
      "en": "Invalid Token. Please Sign-In again.",
      "th": "Token Invalid กรุณา Sign-In เข้าระบบอีกครั้ง"
    },
    "error_session_lost": {
      "en": "Your session has expired. Please Sign-In again.",
      "th": "Session Lost กรุณา Login ใหม่"
    },
    "error_invalid_patch": {
      "en": "To update the application's information, please close the application and login again.  ",
      "th": "ข้อมูล Patch ไม่ตรงกับระบบ กรุณาเข้า App ใหม่อีกครั้ง"
    },
    "error_fund_not_found": {
      "en": "Fund information is not available.",
      "th": "ไม่สามารถดูข้อมูลของกองทุนประเภทนี้ได้ โปรดติดต่อสาขาหากต้องการข้อมูลเพิ่มเติม"
    },
    "error_please_update_m_choice": {
      "en": "Please update your LH Bank M Choice to the latest version before registering Profita.",
      "th": "โปรดอัปเดต LH Bank M Choice ของคุณ\nให้เป็น Version 1.15.2 ขึ้นไป\nก่อนลงทะเบียน Profita"
    },
    "updated": {
      "en": "Updated",
      "th": "อัปเดตแล้ว"
    },
    "not_update_yet": {
      "en": "Not yet",
      "th": "ยังไม่ได้อัปเดต"
    },
    "you_dont_have_account_to_make_transaction": {
      "en": "No available savings account.",
      "th": "คุณไม่มีบัญชีที่สามารถทำรายการได้"
    },
    "share_link_des": {
      "en": "Interesting Fund",
      "th": "พบกับกองทุนน่าสนใจ"
    },
    "share_link_title": {
      "en": "Profita",
      "th": "Profita"
    },
    "recommended_by_lh": {
      "en": "(Recommend by LH Bank Advisory Team)",
      "th": "(Recommend by LH Bank Advisory Team)",
    },
    "download_file": {
      "en": "Download file",
      "th": "ดาวน์โหลดไฟล์"
    },
    "id_card_information_not_match_with_image": {
      "en": "The entered ID card address does not match your ID Card.",
      "th": "คุณกรอกข้อมูลบัตรประชาชน ไม่ตรงกับหน้าบัตรฯ ของคุณ"
    },
    "id_card_infomation_editing_page_header": {
      "en": "Edit ID card information.",
      "th": "แก้ไขข้อมูลตามบัตรประชาชน"
    },
    "please_enter_information_match_with_id_card": {
      "en": "Please enter the information according to your ID card.",
      "th": "โปรดกรอกข้อมูลให้ตรงกับหน้าบัตร"
    },
    "see_all": {
      "en": "See more",
      "th": "ดูทั้งหมด"
    },

    // NDID Start
    "verify_by_ndid": {
      "en": "Identity Verification through NDID",
      "th": "ยืนยันตัวตนด้วยระบบ NDID"
    },
    "ndid_name": {
      "en": "Identity verification through the \nNational Digital ID (NDID) platform",
      "th": "ระบบการพิสูจน์และยืนยันตัวตนทางดิจิทัล\n(National Digital ID : NDID)"
    },
    "i_read_and_understand_all_condition": {
      "en": "I have read and understood the above terms.",
      "th": "ข้าพเจ้าได้อ่านและทําความเข้าใจในข้อความทั้งหมด"
    },
    "ndid_acceptance_description": {
      "en": "The system will proceed to connect with other organizations to verify your identity.",
      "th": "ระบบจะดําเนินการเชื่อมต่อข้อมูลจากองค์กรอื่น เพื่อใช้ในการยืนยันตัวตนของคุณ",
    },
    "list_idp_header": {
      "en": "Please select the Identity Provider (IdP) for identity verification.",
      "th": "เลือกผู้ให้บริการยืนยันตัวตน (IdP)"
    },
    "list_idp_description": {
      "en": "Please select the Identity Provider (IdP) in which you have your identity verified with facial recognition and have their mobile application.",
      "th": "โปรดเลือกผู้ให้บริการยืนยันตัวตน (IdP) ที่คุณเคยยืนยันตัวตนพร้อมบันทึกภาพใบหน้าไว้แล้วและมีโมบายแอปพลิเคชัน ของผู้ให้บริการยืนยันตัวตนดังกล่าว"
    },
    "list_not_register_idp_description": {
      "en": "Please choose an Identity Provider to register NDID Service (you should already have mobile app with that Identity Provider)",
      "th": "โปรดเลือกผู้ให้บริการยืนยันตัวตน (IdP) ที่คุณเคยยืนยันตัวตนพร้อมบันทึกภาพใบหน้าไว้แล้วและมีโมบายแอปพลิเคชัน ของผู้ให้บริการยืนยันตัวตนดังกล่าว"
    },
    "registered_bank": {
      "en": "Identity Providers (IdPs) that you have registered the NDID service",
      "th": "ผู้ให้บริการยืนยันตัวตน (IdP) ที่เคยลงทะเบียนไว้"
    },
    "not_registered_bank": {
      "en": "Other Identity Providers (IdPs) that support registering the NDID service on-the-fly",
      "th": "ผู้ให้บริการยืนยันตัวตน (IdP) อื่นที่รับลงทะเบียน NDID"
    },
    "ndid_next": {
      "en": "Next",
      "th": "ถัดไป"
    },
    "you_are_verifying_your_identity": {
      "en": "You have sent a request for identity verification.",
      "th": "คุณกำลังยืนยันตัวตน"
    },
    "ndid_verification_description": {
      "en": "For the use of LH Bank's purposes and agree to send corresponding information from",
      "th": "เพื่อใช้ตามวัตถุประสงค์ของ LHBANK และประสงค์ให้ส่งข้อมูลจาก"
    },
    "please_go_verify_your_identity": {
      "en": "Please verify your Identity",
      "th": "โปรดยืนยันตัวตน"
    },
    "ndid_verification_description_2": {
      "en": "at the Mobile Application of  the Identity Provider (IdP) you have chosen",
      "th": "ที่โมบายแอปพลิเคชันของผู้ให้บริการที่คุณเลือก"
    },
    "ndid_verification_description_3": {
      "en": "and then come back to complete the registration process in Profita.",
      "th": "และกลับมาทำรายการต่อที่นี่"
    },
    "ndid_verification_description_4": {
      "en": "Please open this application again after completing identity verification.",
      "th": "โปรดเปิดแอปพลิเคชันอีกครั้ง หลังจากยืนยันตัวตนสำเร็จ"
    },
    "ndid_verify_request_failed_title": {
      "en": "is not available for identity verification at this time.",
      "th": "ไม่สามารถให้บริการยืนยันตัวตนได้ขณะนี้"
    },
    "ndid_register_request_failed_title": {
      "en": "NDID registering service is not available at this time.",
      "th": "ไม่สามารถให้บริการลงทะเบียน NDID ได้ในขณะนี"
    },
    "ndid_request_failed_description_1": {
      "en": "Please do the identity verification during",
      "th": "โปรดทํารายการระหว่าง\nช่วงเวลา"
    },
    "ndid_request_failed_description_2": {
      "en": "or choose other Indentity Providers (IdP).",
      "th": "หรือเลือกผู้ให้บริการอื่น"
    },
    "ndid_verify_cancel_header": {
      "en": "Do you want to \ncancel the transaction?",
      "th": "คุณต้องการยกเลิกรายการ\nใช่หรือไม่?"
    },
    "want": {
      "en": "Yes",
      "th": "ต้องการ"
    },
    "dont_want": {
      "en": "No",
      "th": "ไม่ต้องการ"
    },
    "ndid_verification_completed": {
      "en": "Identity Verification Status",
      "th": "สถานะการยืนยันตัวตน"
    },
    "ndid_verification_via_mobile_banking_app_of": {
      "en": "Identity Verification with {IDP_NAME}'s Mobile Application",
      "th": "การยืนยันตัวตนผ่าน โมบายแอปพลิเคชัน ของ{IDP_NAME}"
    },
    "ndid_remaining_count": {
      "en": "You can try again",
      "th": "คุณสามารถส่งคำขอได้อีก"
    },
    "selected_idp_time": {
      "en": "more time(s).",
      "th": "ครั้ง",
    },
    "registered_confirm_idp_dialog_1": {
      "th": "เพื่อส่งคำขอนี้ คุณต้องเคยลงทะเบียนเพื่อยืนยันตัวตน และมี Mobile Application กับ {IDP_NAME} แล้วเท่านั้น",
      "en": "For identity verification request, please ensure that you already have Mobile Application of {IDP_NAME}.",
    },
    "registered_confirm_idp_dialog_2": {
      "th": " แล้วเท่านั้น",
      "en": "N/A"
    },
    "not_registered_confirm_idp_dialog_1": {
      "th": "เพื่อส่งคำขอนี้ คุณต้องเคยผ่านกระบวนการยืนยันตัวและมี Mobile Application กับ {IDP_NAME} แล้ว",
      "en": "For identity verification request, please ensure that you already have Mobile Application of {IDP_NAME}.",
    },
    "not_registered_confirm_idp_dialog_2": {
      "th": " แล้ว",
      "en": "N/A"
    },
    "confirm_idp_dialog_1": {
      "th": "โปรดยืนยันการส่งคำขอการยืนยันตัวตน ไปยัง ",
      "en": "Please confirm a request for identity verification to ",
    },
    "unable_make_transaction_currently": {
      "th": "คุณไม่สามารถทำรายการได้ในขณะนี้",
      "en": "Unable to verify your identity at this time.",
    },
    "please_verify_identity_another_choice": {
      "th": "โปรดทำยืนยันตัวตนผ่านช่องทางอื่น",
      "en": "Please try again or choose another indentity verification service provider.",
    },
    "verification_method_header_ndid_error": {
      "th": "คุณยังไม่เคยยืนยันตัวตนพร้อมบันทึกภาพใบหน้าไว้กับผู้ให้บริการยืนยันตัวตน (IdP) ใด กรุณาเลือกการยืนยันตัวตน ที่ เคาเตอร์เซอร์วิส 7-Eleven",
      "en": "You do not have any identity verification with facial recognition with any Identity Provider (IdP) . Please select Counter Service 7-Eleven for identity verification.",
    },
    "verification_name_surname_mismatch_ndid_error": {
      "th": "ขออภัย ชื่อ-นามสกุล บนบัตรประชาชนและข้อมูลจากธนาคารปลายทางที่คุณเลือก ไม่ตรงกันโปรดยืนยันตัวตนด้วยวิธีการอื่น",
      "en": "The name and/or lastname retrieved from the Identity Provider (IdP) does not match the information you provided.",
    },
    "please_select_new_idp_ndid_error": {
      "th": "โปรดทำรายการใหม่\nหรือเลือกผู้ให้บริการยืนยันตัวตนรายอื่น",
      "en": "Please try again or choose another indentity verification service provider.",
    },
    "you_reject_your_idp_ndid_error": {
      "th": "คุณได้ปฏิเสธการยืนยันตัวตนของผู้ให้บริการยืนยันตัวตนที่คุณเลือก",
      "en": "You have rejected the identity verification request from Mobile Banking Application of the chosen service provider.",
    },
    "exceed_time_select_idp_ndid_error": {
      "th": "ระบบไม่ได้รับการยืนยันตัวตนของคุณภายในระยะเวลาที่กำหนด",
      "en": "You have not completed identity verification within a given time.",
    },
    "please_select_idp_ndid_error": {
      "th": "โปรดเลือกผู้ให้บริการยืนยันตัวตน (IdP) ใหม่อีกครั้ง",
      "en": "Please select the Identity Provider (IdP) again.",
    },
    "process_again_error": {
      "th": "ทำรายการใหม่",
      "en": "Try again",
    },
    "contact_method": {
      "th": "ช่องทางการติดต่อ",
      "en": "Contact Address",
    },
    "information_from_ndid": {
      "th": "ข้อมูลจากระบบ NDID",
      "en": "Data from National Digital ID (NDID)",
    },
    // NDID End

    "terminate_account_menu": {
      "th": "ยกเลิกบัญชีผู้ใช้งาน (Terminate Account)",
      "en": "Terminate Account",
    },
    "terminate_account": {
      "th": "ยกเลิกบัญชีผู้ใช้งาน",
      "en": "Terminate Account",
    },
    "terminate_account": {
      "th": "ยกเลิกบัญชีผู้ใช้งาน",
      "en": "Terminate Account",
    },
    "terminate_account_acceptance_term": {
      "th": "เงื่อนไขการยกเลิกบัญชีผู้ใช้งาน Profita",
      "en": "Profita User Account Termination Conditions",
    },
    "terminate_account_term_detail_intro": {
      "en": "After termination, the user will no longer be able to login to the application.",
      "th": "การยกเลิกบัญชีผู้ใช้งาน Profita จะมีผลทำให้ไม่สามารถใช้งานแอปพลิเคชันได้ทันทีหลังจากทำการยกเลิกบัญชีผู้ใช้งานเสร็จสิ้น",
    },
    "terminate_account_term_detail_1": {
      "en": "1. Affected services after termination",
      "th": "1. รายการที่ได้รับผลกระทบจากการยกเลิกบัญชี",
    },
    "terminate_account_term_sub_detail_1_1": {
      "en": "Username/Password and PIN cannot be used to access the application.",
      "th": "ไม่สามารถใช้ Username/Password และ PIN เข้าใช้งานแอปพลิเคชันได้อีก",
    },
    "terminate_account_term_sub_detail_1_2": {
      "en": "The DCA plan will be automatically cancelled.",
      "th": "รายการลงทุนแบบประจำ (DCA) ที่ตั้งไว้จะถูกยกเลิกโดยอัตโนมัติ",
    },
    "terminate_account_term_detail_2_1": {
      "en": "2. ",
      "th": "2. รายการ",
    },
    "terminate_account_term_detail_2_2": {
      "th": "ที่ไม่เกี่ยวข้อง",
      "en": "Unaffected"
    },
    "terminate_account_term_detail_2_3": {
      "th": "จากการยกเลิกบัญชี",
      "en": "services/accounts after termination"
    },
    "terminate_account_term_sub_detail_2_1": {
      "en": "FundConnext accounts.",
      "th": "บัญชีเพื่อซื้อขายกองทุนผ่าน FundConnext",
    },
    "terminate_account_term_sub_detail_2_2": {
      "en": "Digital savings account opened via Profita.",
      "th": "บัญชีออมทรัพย์ดิจิทัลที่เปิดผ่าน Profita",
    },
    "terminate_account_term_sub_detail_2_3": {
      "en": "The mutual fund trading transactions made through Profita prior to the termination.",
      "th": "รายการซื้อ ขาย สับเปลี่ยนกองทุนใดๆ ที่ทำผ่าน Profita ก่อนหน้าการยกเลิก",
    },
    "terminate_account_term_detail_tail": {
      "en": "The user has read, understood and accepted the termination consequences.",
      "th": "ผู้ใช้บริการได้อ่าน ทำความเข้าใจ และยอมรับถึงผลกระทบที่จะเกิดขึ้นจากการยกเลิกบัญชีผู้ใช้งาน Profita แล้ว",
    },
    "please_confirm_terminate_account": {
      "th": "โปรดทำการยืนยันเพื่อดำเนินการยกเลิกบัญชีผู้ใช้งานของคุณ",
      "en": "Please confirm to proceed with termination of your account.",
    },

    "fund_max_risk_level": {
      "th": "ระดับความเสี่ยงสูงสุดของกองทุนในแผนการลงทุน",
      "en": "Highest Fund Risk Level in Port",
    },
    "fund_max_risk_level_pie_chart": {
      "th": "ความเสี่ยงสูงสุด\nของกองทุนในแผน",
      "en": "Highest Fund Risk Level \nin Port",
    },
    "open_port_successful": {
      "th": "เปิดพอร์ตสำเร็จ",
      "en": "Open portfolio successful",
    },
    "robo_open_port_successful": {
      "th": "เปิดพอร์ตสำเร็จ",
      "en": "Port opened successfully",
    },
    "you_can_review_opened_port_at_robo_page": {
      "th": "คุณสามารถดูแผนการลงทุนที่เปิดไปแล้ว ได้ที่หน้าแผนการลงทุน ROBO",
      "en": "You able to see the opened port at ROBO Advisor screen. ",
    },
    "close_port_successful": {
      "th": "ปิดพอร์ตสำเร็จ",
      "en": "Close portfolio successful",
    },
    "close_port_successful_description": {
      "th": "คุณสามารถดูแผนการลงทุนที่ปิดไปแล้ว\nได้ที่หน้าแผนการลงทุน ROBO",
      "en": "You can still see the closed port \nat ROBO Advisor Menu.",
    },
    "close_investment_port_success": {
      "th": "ทำรายการปิดพอร์ตสำเร็จ",
      "en": "Successfully Closing Port",
    },
    "from": {
      "th": "จาก",
      "en": "From",
    },
    "to_receiving_account": {
      "th": "บัญชีรับเงิน",
      "en": "To",
    },
    "transfer_transaction_for_close_investment_plan": {
      "th": "รายการโอนเงินเพิ่มปิดแผนการลงทุน",
      "en": "Transfer Out for Closing Port",
    },
    "please_investment_in_old_paln": {
      "th": "โปรดลงทุนในแผนการลงทุนที่คุณสร้างไว้ก่อนหน้า ก่อนเพิ่มแผนการลงทุนใหม่",
      "en": "Please add the first investment in the port you already have before opening a new port.",
    },
    "estimate_rebalance_is_failed": {
      "th": "คุณไม่สามารดำเนินการได้เนื่องจากพอร์ตการลงทุนไม่เป็นไปตามเงื่อนไข",
      "en": "The system cannot rebalance ROBO port because the port status does not meet the conditions of rebalancing.",
    },
    "not_create_dca_yet": {
      "th": "ยังไม่มีการกำหนดแผนการลงทุน DCA",
      "en": "No DCA plan",
    },
    "watch_plan_detail": {
      "th": "ดูรายละเอียดแผน",
      "en": "See Plan Details",
    },
    "cash": {
      "th": "เงินสด",
      "en": "Cash",
    },
    "current_portion": {
      "th": "สัดส่วนปัจจุบัน",
      "en": "Current Allocation",
    },
    "recommend_portion": {
      "th": "สัดส่วนที่แนะนำ",
      "en": "Recommended Asset Allocation",
    },
    "recommend_allocation": {
      "th": "สัดส่วนที่แนะนำ",
      "en": "Recommended Allocation",
    },
    "waiting_for_first_invest": {
      "th": "รอเริ่มต้นการลงทุนครั้งแรก",
      "en": "Waiting for the first investment",
    },
    "go_to": {
      "th": "ไปยัง",
      "en": "GO",
    },
    "system_detected_practical_balance": {
      "th": "ระบบพบว่ามีเงินคงค้างอยู่ในพอร์ต",
      "en": "There is an outstanding cash in the port.",
    },
    "robo_buy_practical_balance_dialog_description": {
      "th": "ระบบจะนำไปรวมกับการเพิ่มเงินลงทุนครั้งนี้ รวมเป็นจํานวนเงิน",
      "en": "N/A",
    },
    "from_above_account": {
      "th": "จากบัญชีข้างต้น",
      "en": "Amount from the above account.",
    },
    "from_remain_money_in_port": {
      "th": "จากเงินคงค้างในพอร์ต",
      "en": "Amount of Cash in-port ",
    },
    "remain_money_in_port": {
      "th": "เงินคงค้างในพอร์ต",
      "en": "Amount of Cash in-port ",
    },
    "total_money_amount": {
      "th": "รวมเป็นจํานวนเงิน",
      "en": "Total Amount",
    },
    "robo_confirm_deduct_from_account_time_description": {
      "th": "ระบบจะดำเนินการตัดเงินจากบัญชี เพื่อซื้อกองทุน ในเวลา 11:00 น. ของวันที่มีผล คุณสามารถยกเลิกรายการได้ก่อนระบบดำเนินการ",
      "en": "Your account will be debited at {11 AM} on the effective date. You can cancel your order before that time.",
    },
    "robo_setting": {
      "th": "ตั้งค่าแผน",
      "en": "Port Setting",
    },
    "retirement_plan": {
      "th": "แผนเกษียณอายุ",
      "en": "Retirement Plan",
    },
    "regular_investment": {
      "th": "รายการลงทุนแบบประจำ",
      "en": "Set-up DCA",
    },
    "adjust_investment_plan": {
      "th": "ปรับแผนการลงทุน",
      "en": "Edit Investment Plan",
    },
    "fund_group_considering_investment": {
      "th": "กลุ่มกองทุนในการพิจารณาการลงทุน",
      "en": "Fund Universe",
    },
    "robo_setting_fund_universe_header": {
      "th": "ข้อกำหนดและเงื่อนไข",
      "en": "Fund Universe",
    },
    "close_investment_port": {
      "th": "ปิดพอร์ต",
      "en": "Close Port",
    },
    "please_confirm_for_close_investment_port": {
      "th": "โปรดยืนยันการปิดพอร์ต",
      "en": "Do you want to close this port?",
    },
    "auto_adjust_port_tooltip": {
      "th": "เมื่อระยะเวลาผ่านไป พอร์ตของคุณอาจจะมีสัดส่วนการลงทุนแตกต่างไปจากคำแนะนำที่เหมาะสมกับสถานการณ์\n\nการ “ปรับสมดุลพอร์ต” เป็นการทำให้พอร์ตกลับมาอยู่ในสัดส่วนตามคำแนะนำ ซึ่งจะทำให้การลงทุนมีความเสี่ยงไม่สูงหรือต่ำจนเกินไป\n\nการ “ปรับสมดุลพอร์ต” คือการขายสินทรัพย์ที่มีสัดส่วนมากเกินไปแล้วนำเงินไปซื้อสินทรัพย์ที่มีอยู่น้อยเกินไป ซึ่งธนาคารจะคอยติดตาม “ปรับสมดุลพอร์ต” ให้อัตโนมัติ เพื่อทำให้พอร์ตของคุณใกล้เคียงกับแผนการลงทุนที่คุณเลือกอย่างมีประสิทธิภาพมากที่สุด โดยที่การ “ปรับสมดุลพอร์ต” จะเกิดขึ้นเมื่อ\n\n1. พอร์ตของคุณมีมูลค่าเท่ากับหรือสูงกว่า MIN_PORT_VALUE บาท และ\n2. พอร์ตของคุณมีสัดส่วนการลงทุนที่ต่างไปจากสัดส่วนที่แนะนำ มากเกินกว่าเกณฑ์ที่กำหนด และ\n3. ครบระยะเวลาที่กำหนด หลังจากเพิ่มเงินลงทุนครั้งแรกสำเร็จ หรือปรับสมดุลพอร์ตครั้งล่าสุด หรืออาจตามที่ธนาคารเห็นสมควร เพื่อให้ได้ผลตอบแทนใกล้เคียงพอร์ตการลงทุนที่แนะนำ\n",
      "en": "Over time, asset allocations can change as market performance alters the values of the assets.\n\nROBO Advisor will monitor your port and recommend rebalancing when neccessary. Rebalancing involves periodically buying or selling the assets in a portfolio to regain and maintain that original, desired level of asset allocation.\n\nRebalancing will be triggered automatically or notification will be sent your rebalancing decision depending on your preference when;\n\n1. your port value is not less than MIN_PORT_VALUE THB, and\n2. weight difference ece asset allocation in port has different to hit rebalance thresholds, and\n2. Your port has a different asset allocation compared to the recommended one more than the specified threshold, and \n3. Reach the specified period after successfully adding the first investment or after last rebalancing or as the Bank deems appropriate in order to get the target return.",
    },
    "or_0_if_dont_want_to_dca": {
      "th": "หรือระบุ 0 หากไม่ประสงค์ลงทุนต่อเดือน",
      "en": "Specify \"0\" if you don't want to invest every month.",
    },
    "amount_dca_baht": {
      "th": "จำนวนเงิน DCA ต่อครั้ง (บาท)",
      "en": "DCA amount per time (THB)"
    },
    "deposit_transaction": {
      "th": "รายการเพิ่มเงินลงทุน",
      "en": "Add Investment Amount"
    },
    "deposit_dca_transaction": {
      "th": "รายการเพิ่มเงินลงทุน DCA",
      "en": "Add Investment Amount (DCA)"
    },
    "withdraw_transaction": {
      "en": "Investment Withdrawal",
      "th": "รายการถอนเงินลงทุน"
    },
    "cancel_date_time": {
      "en": "Cancellation Date/time ",
      "th": "เวลาที่ยกเลิกรายการ"
    },
    "cannot_enter_zero": {
      "en": "\"0\" is not allowed.",
      "th": "ไม่สามารถกรอก 0 ได้"
    },
    "default": {
      "th": "ค่าเริ่มต้น",
      "en": "Default",
    },
    "edit_port_name": {
      "th": "แก้ไขข้อมูลแผน",
      "en": "Edit Port Name",
    },
    "not_invest_yet": {
      "th": "ยังไม่มีการลงทุน",
      "en": "No investment yet",
    },
    "robo_sell_label_top_warning": {
      "th": "รายการขายหลังเวลาปิดทำการ",
      "en": "Order afte cut-off time",
    },
    "robo_sell_label_bottom_warning": {
      "th": "หรือวันหยุดกองทุน จะมีผลในวันทำการถัดไป",
      "en": "or on fund holiday will be effective on the next business day.",
    },
    "minimum_withdrawal": {
      "th": "จำนวนเงินขั้นต่ำในการถอน",
      "en": "Minimum Withdrawal",
    },
    "minimum_remaining": {
      "th": "มูลค่าคงเหลือขั้นต่ำของพอร์ต",
      "en": "Mimimum Remaining Port Value",
    },
    "please_specify_correct_minimum_remaining_1": {
      "th": "หลังการถอนเงินลงทุนมูลค่าคงเหลือของพอร์ตไม่ถึงขั้นต่ำที่กำหนด",
      "en": "After withdrawal, the port remaining value is less than the required minimum of",
    },
    "please_specify_correct_minimum_remaining_2": {
      "th": "บาท โปรดทำรายการถอนเงินลงทุนทั้งหมด",
      "en": "THB. Please select the option to withdraw \"All\" .",
    },
    "noted": {
      "th": "รับทราบ",
      "en": "Acknowledged",
    },
    "cannot_withdraw": {
      "th": "ยังไม่สามารถถอนเงินลงทุนได้",
      "en": "You cannot make a withdrawal at this time.",
    },
    "cannot_withdraw_detail": {
      "th": "พอร์ตของคุณอยู่ในระหว่างดำเนินการ\n โปรดทำรายการใหม่อีกครั้ง\n หลังรายการดังกล่าวดำเนินการเรียบร้อยแล้ว",
      "en": "There are inprogress orders, \nplease wait until the orders \nare completely alotted.",
    },
    "robo_display_status_DRAFT": {
      "th": "อยู่ระหว่างสร้างแผน",
      "en": "Port opening inprogress",
    },
    "robo_display_status_WAITING_CREATION": {
      "th": "รอสร้างแผนการลงทุน",
      "en": "Waiting to opening the port",
    },
    "robo_display_status_WAITING_FOR_INVEST": {
      "th": "รอเริ่มต้นลงทุน",
      "en": "Waiting for the first investment",
    },
    "robo_display_status_PRE_ACTIVE": {
      "th": "Active",
      "en": "Active",
    },
    "robo_display_status_ACTIVE": {
      "th": "Active",
      "en": "Active",
    },
    "robo_display_status_CLOSED": {
      "th": "Closed",
      "en": "Closed",
    },
    "robo_display_status_RECOMMENDATION": {
      "th": "แนะนำปรับสัดส่วนการลงทุน",
      "en": "Suggest rebalancing",
    },
    "robo_display_status_REBALANCING": {
      "th": "อยู่ระหว่างปรับสัดส่วนการลงทุน",
      "en": "Rebalancing inprogress",
    },
    "robo_display_status_SUSPEND": {
      "th": "Suspend",
      "en": "Suspend",
    },
    "save_setting": {
      "th": "บันทึกการตั้งค่า",
      "en": "Save changes"
    },
    "auto_rebalance_dialog_title": {
      "th": "โปรดยืนยันการปรับสมดุลพอร์ตอัตโนมัติ",
      "en": "Do you want to save changes?",
    },
    "confirm": {
      "th": "ยืนยัน",
      "en": "Confirm",
    },
    "unable_to_close_port": {
      "th": "ยังไม่สามารถปิดพอร์ตได้",
      "en": "The port cannot be closed.",
    },
    "port_inprogress_please_try_again_later": {
      "th": "พอร์ตของคุณอยู่ในระหว่างดำเนินการ\nโปรดทํารายการใหม่อีกครั้ง หลังรายการดังกล่าวดำเนินการเรียบร้อยแล้ว",
      "en": "There are inprogress orders, please wait until the orders are completely alotted.",
    },
    "your_have_dca_program_with_this_port": {
      "en": "You have DCA set-up\n with this port.",
      "th": "คุณยังมีรายการ DCA ที่ตั้งไว้\nกับพอร์ตนี้",
    },
    "closing_port_will_cancel_all_dca_program_automatically": {
      "th": "การปิดพอร์ตจะยกเลิกรายการ DCA\nที่ตั้งไว้ โดยอัตโนมัติ",
      "en": "Closing port will terminate DCA orders scheduled for this port.",
    },
    "your_port_have_remain_value_please_deposit_and_retry": {
      "th": "พอร์ตของคุณมีรายการคงค้างหรือมีมูลค่าการ ลงทุนคงค้างอยู่ในพอร์ต โปรดถอนเงินลงทุนให้ เสร็จสิ้นก่อนทํารายการอีกครั้ง",
      "en": "In order to close the port, the port value must be zero and there is no inprogress order.",
    },
    "out_of_business_time": {
      "th": "ขออภัย ขณะนี้อยู่นอกเวลาการให้บริการ\nโปรดดำเนินการใหม่อีกครั้ง\nตั้งแต่เวลา",
      "en": "Sorry, the port cannot be close at this time. Please try again during",
    },
    "port_value": {
      "en": "Port Value",
      "th": "มูลค่าพอร์ต"
    },
    "estimate_rebalance_success_date": {
      "en": "Expected Rebalance Complete Date",
      "th": "วันที่คาดว่าจะปรับพอร์ตสำเร็จ"
    },
    "rebalance_confirm_alert": {
      "en": "The buying amount of each fund It's just an estimate. You can check the actual amount again after successful allocation.",
      "th": "จํานวนเงินที่ซื้อกองทุนแต่ละกอง เป็นเพียงยอดประมาณการเท่านั้น คุณสามารถตรวจสอบยอดการซื้ออีกครั้ง หลังการได้รับการจัดสรรสำเร็จ"
    },
    "rebalance_order_success": {
      "en": "Rebalance order succeeded",
      "th": "คำสั่งรายการปรับพอร์ตสำเร็จ"
    },
    "recommend_to_increase_investment": {
      "en": "Recommend adding investment amount",
      "th": "แนะนำเพิ่มเงินลงทุนเพื่อให้เป็นไปตามแผน"
    },
    "rebalance_transaction": {
      "en": "Rebalancing",
      "th": "รายการปรับสมดุลพอร์ต"
    },
    "transaction_type": {
      "en": "Rebalance Type",
      "th": "ประเภทการทำรายการ"
    },
    "In_process_rebalancing_investment": {
      "en": "Rebalancing Inprogress",
      "th": "อยู่ระหว่างการปรับสัดส่วนการลงทุน"
    },
    "robo_non_thai_citizen_dialog": {
      "en": "ROBO Advisor service is still not available for non-Thai citizens.",
      "th": "บริการ ROBO Advisor ยังไม่รองรับการให้บริการสำหรับชาวต่างชาติ"
    },
    "saving_account_not_found_please_check_your_account_status": {
      "en": "No active savings account found. \nPlease check the status of your account.",
      "th": "ไม่พบบัญชีออมทรัพย์\nโปรดตรวจสอบสถานะบัญชีของคุณ"
    },
    "value_of_unit_due": {
      "en": "Maturity Amount",
      "th": "จำนวนหน่วยที่ครบกำหนด"
    },
    "calculate_redemption": {
      "en": "Calculator",
      "th": "คำนวนการขาย"
    },
    "closing_port_information": {
      "th": "รายละเอียดการปิดบัญชี",
      "en": "Closing Port Confirmation",
    },
    "closing_port_balance_information": {
      "th": "รายละเอียดยอดเงินในการปิดบัญชี",
      "en": "Closing Port Details",
    },
    "total_balance_in_closing_accout": {
      "th": "จำนวนเงินคงเหลือในบัญชี",
      "en": "Total Balance",
    },
    "remain_balance_in_account": {
      "th": "จำนวนเงินคงเหลือในบัญชี",
      "en": "Remaining Cash",
    },
    "remain_interest_in_account": {
      "th": "ดอกเบี้ยสะสมค้างรับ",
      "en": "Accrue Interest",
    },
    "withholding_tax": {
      "th": "ภาษีหัก ณ ที่จ่าย",
      "en": "Withholding Tax",
    },
    "remain_net_balance": {
      "th": "จำนวนเงินคงเหลือสุทธิ",
      "en": "Total Balance ",
    },
    "transfer_net_balance": {
      "th": "จำนวนเงินโอนสุทธิ",
      "en": "Net Transfer Out",
    },
    "total_sales_forecast": {
      "en": "N/A",
      "th": "ยอดรวมประมารการขาย"
    },
    "list_type": {
      "en": "Transations",
      "th": "ประเภทรายการ"
    },
    "confirm_cancel_deposit_dca_transaction": {
      "th": "ยืนยันยกเลิก \nรายการเพิ่มเงินลงทุน DCA?",
      "en": "Do you want to cancel the order?",
    },
    "confirm_cancel_deposit_transaction": {
      "th": "ยืนยันยกเลิก \nรายการเพิ่มเงินลงทุน?",
      "en": "Do you want to cancel the order?",
    },
    "confirm_cancel_withdraw_transaction": {
      "th": "ยืนยันยกเลิก \nรายการถอนเงินลงทุน?",
      "en": "Do you want to cancel the order?",
    },
    "old_investment_plan": {
      "th": "แผนการลงทุนเดิม",
      "en": "First Investment",
    },
    "new_investment_plan": {
      "th": "แผนการลงทุนใหม่",
      "en": "New Investment Plan",
    },
    "investment_period_remain": {
      "th": "ระยะเวลาการลงทุนที่เหลือ",
      "en": "Remaning Investment Period",
    },
    "current_port_value_forward": {
      "th": "มูลค่าพอร์ตปัจจุบันยกมา",
      "en": "Current Market Value",
    },
    "robo_sell_lump_sum_info_1": {
      "th": "รับเงินแบบก้อนเดียว",
      "en": "Receive a lump sum",
    },
    "robo_sell_lump_sum_info_2": {
      "th": "ธนาคารจะโอนเงินจากบัญชีพักเงินไปยังบัญชีที่ผู้ใช้บริการเลือกรับเงินจากการถอนเงินลงทุน เมื่อธนาคารได้รับเงินค่าขายคืนจากทุกกองทุนเรียบร้อยแล้ว",
      "en": "The Bank will transfer money from the investment account to the account that the user chooses to receive funds from the withdrawal of investments. When the Bank has already received the money from all funds. ",
    },
    "robo_sell_fun_by_fun_info_1": {
      "th": "รับเงินแบบทีละกอง",
      "en": "Receive money fund by fund",
    },
    "robo_sell_fun_by_fun_info_2": {
      "th": "ธนาคารจะโอนเงินจากบัญชีพักเงินไปยังบัญชีที่ผู้ใช้บริการเลือกรับเงินจากการถอนเงินลงทุน หลังเวลา 16:00 น.หรือตามเวลาที่เห็นควร ในวันเดียวกันกับวันที่ บลจ. ดำเนินการชำระเงินค่าขายคืนกองทุนนั้น ๆ มายังบัญชีพักเงิน",
      "en": "The Bank will transfer money from the investment account to the account that the user has chosen to receive money after 4 p.m. or at the time it deems appropriate on the same day that the asset management companies make payment for the redemption of funds to the investment account.",
    },
    "increase_initial_investment": {
      "th": "เพิ่มเงินลงทุนตั้งต้น",
      "en": "First Investment",
    },
    "current_port_value_text": {
      "th": "มูลค่าพอร์ตปัจจุบัน",
      "en": "Total Market Value"
    },
    "investment_per_month_new": {
      "th": "เงินลงทุนต่อเดือนใหม่",
      "en": "Monthly Investment",
    },
    "total_investment_new": {
      "th": "รวมเงินลงทุนทั้งหมดใหม่",
      "en": "Investment Cost"
    },
    "estimate_port_value_new": {
      "th": "ประมาณการมูลค่าพอร์ตใหม่",
      "en": "Estimated New Port Value",
    },
    "investment_growth_chart_new": {
      "th": "กราฟการเติบโตของเงินลงทุนใหม่",
      "en": "Forecasting New Port Performance"
    },
    "confirm_change_plan": {
      "en": "Confirm Rebalancing Port",
      "th": "ยืนยันปรับแผนการลงทุน",
    },
    "save_adjust_investment_plan_success": {
      "th": "บันทึกการเปลี่ยนแผน\nการลงทุนสำเร็จ",
      "en": "Successfully changing\ninvesment plan",
    },
    "system_save_adjust_investment_plan_success": {
      "th": "ระบบได้ทำการบันทึกการเปลี่ยนแผนการลงทุนให้คุณเรียบร้อยแล้ว",
      "en": "Succesful Updated",
    },
    "adjust_begin_investment_to": {
      "th": "ปรับเพิ่มเงินลงทุนตั้งต้นเป็น",
      "en": "Increase First Investment to"
    },
    "redeemable_unit": {
      "en": "Redeemable Unit",
      "th": "หน่วยที่ขายได้"
    },
    "value_baht": {
      "en": "Amount (THB)",
      "th": "มูลค่า (บาท)"
    },
    "please_enter_number_of_month": {
      "th": "โปรดระบุจำนวนเดือน",
      "en": "โปรดระบุจำนวนเดือน",
    },
    "cannot_sell_tax_saving_via_application": {
      "th": "ขออภัย ไม่รองรับการขายกองทุนผลประโยชน์ทางภาษีนี้ผ่านแอปพลิเคชัน",
      "en": "Sorry, the system cannot proceed a redemption order for this tax saving fund.",
    },
    "please_contact_bank_branch": {
      "th": "กรุณาติดต่อสาขาธนาคาร",
      "en": "Please visit any of LH Bank's branches.",
    },
    "thai_baht": {
      "th": "บาท",
      "en": "THB",
    },
    "idenifycation_card_expired_update_info": {
      "th": "บัตรประชาชนของคุณใกล้หมดอายุ หรือหมดอายุแล้ว โปรดดำเนินการต่อเพื่อปรับปรุงข้อมูลฯ",
      "en": "Your ID card has expired or nearly expired. Please continue to update the information."
    },
    "suit_expired_update_info": {
      "th": "แบบประเมินความเสี่ยงใกล้หมดอายุ\nหรือหมดอายุแล้ว",
      "en": "Your risk assessment has expired or nearly expired."
    },
    "update_info": {
      "en": "Update",
      "th": "ปรับปรุงข้อมูล"
    },
    "please_update_suit_test": {
      "en": "Review your risk assessment",
      "th": "โปรดทบทวนแบบประเมินความเสี่ยงฯ"
    },
    "please_update_id_card": {
      "en": "Update your ID Card information",
      "th": "โปรดอัปเดตข้อมูลบัตรประชาชน"
    },
    "bank_received_your_info": {
      "en": "LH Bank has received your information.",
      "th": "ธนาคารได้รับข้อมูล\nของคุณแล้ว"
    },
    "please_wait_results_verification": {
      "en": "Please wait for approval within 1-3 business days.",
      "th": "โปรดรอผลการตรวจสอบข้อมูล\nภายใน 1-3 วันทำการ"
    },
    "robo_close_port_cannot_close_dialog": {
      "th": "ขออภัย พอร์ตการลงทุนของคุณยังไม่สามารถปิดได้ในขณะนี้ โปรดทำรายการปิดพอร์ตอีกครั้งในวันถัดไป",
      "en": "Sorry, your port cannot be closed at this time. Please try again tomorrow.",
    },
    "promotion_reward": {
      "en": "Rewards",
      "th": "สะสมคะแนนแลกของรางวัล",
    },
    "redeem_reward": {
      "en": "Redeem",
      "th": "แลกของรางวัล",
    },
    "redeem_reward_header": {
      "en": "Redeem Reward Points",
      "th": "แลกของรางวัล",
    },
    "tab_in_process_of_participating": {
      "en": "Point Accumulating Period",
      "th": "อยู่ในระหว่างร่วมโปรโมชั่น",
    },
    "tab_in_redeem_period": {
      "en": "Redemption Period",
      "th": "อยู่ในระยะเวลาแลกรางวัล",
    },
    "tab_coming_soon": {
      "en": "Coming Soon",
      "th": "เร็วๆนี้",
    },
    "accumulated_since": {
      "en": "Accumulate points from",
      "th": "สะสมได้ตั้งแต่",
    },
    "reward_redemption_period": {
      "en": "Redemtion Period",
      "th": "ระยะเวลาแลกรางวัล",
    },
    "since": {
      "en": "Start from",
      "th": "ตั้งแต่",
    },
    "reward": {
      "en": "Reward",
      "th": "ของรางวัล",
    },
    "rewards": {
      "en": "Rewards",
      "th": "ของรางวัล",
    },
    "deadline": {
      "en": "Expiration Date",
      "th": "หมดเขต",
    },
    "redeem_promotion": {
      "en": "Redeem",
      "th": "แลก",
    },
    "point": {
      "en": "Points",
      "th": "คะแนน",
    },
    "your_point": {
      "en": "My Points",
      "th": "คะแนนของคุณ",
    },
    "promotion_total": {
      "en": "Total",
      "th": "จำนวน",
    },
    "redeem_history": {
      "en": "Redemption History",
      "th": "ประวัติการแลก",
    },
    "redeem_reward_history": {
      "en": "Redemption History",
      "th": "ประวัติการแลกของรางวัล",
    },
    "point_used": {
      "en": "Redeemed Points",
      "th": "คะแนนที่ใช้",
    },
    "reward_delivery_address": {
      "en": "Delivery Address",
      "th": "ที่อยู่ในการจัดส่งรางวัล",
    },
    "redeem_when": {
      "en": "Redemption on",
      "th": "แลกเมื่อ",
    },
    "redeemable_reward": {
      "en": "Rewards",
      "th": "ของรางวัลที่แลกได้",
    },
    "participating_fund": {
      "en": "Funds",
      "th": "กองทุนที่เข้าร่วม",
    },
    "promotion_no_found": {
      "en": "ไม่พบข้อมูลโปรโมชั่นในช่วงเวลานี้\nNo Promotion Found",
      "th": "ไม่พบข้อมูลโปรโมชั่นในช่วงเวลานี้\nNo Promotion Found",
    },
    "promotion_term": {
      "en": "Terms and Conditions",
      "th": "ข้อกำหนดฯ",
    },
    "promotion_period": {
      "en": "Point Accumulating Period",
      "th": "ระยะเวลาร่วมโปรโมชั่น",
    },
    "reward_detail": {
      "en": "Reward Details",
      "th": "รายละเอียดของรางวัล",
    },
    "redeem_term": {
      "en": "Terms and Conditions",
      "th": "ข้อกำหนดแลกของรางวัล",
    },
    "reward_limit": {
      "en": "Maximum Redemption",
      "th": "จำนวนของรางวัลแลกได้ไม่เกิน",
    },
    "remaining_reward": {
      "en": "Remaining",
      "th": "ของรางวัลคงเหลือ",
    },
    "reward_redeem_list": {
      "en": "Reward Redemption",
      "th": "รายการแลกของรางวัล",
    },
    "piece": {
      "en": "Item",
      "th": "ชิ้น",
    },
    "pieces": {
      "en": "Items",
      "th": "ชิ้น",
    },
    "piece_person": {
      "en": "Item/Person",
      "th": "ชิ้น/ท่าน",
    },
    "pieces_person": {
      "en": "Items/Person",
      "th": "ชิ้น/ท่าน",
    },
    "redeem_confirm": {
      "en": "Confirm",
      "th": "ยืนยันการแลกของรางวัล",
    },
    "redeem_point": {
      "en": "Redeemed Points",
      "th": "คะแนนที่ใช้แลก",
    },
    "cannot_redeem_reward": {
      "en": "ไม่สามารถแลกของรางวัลได้",
      "th": "ไม่สามารถแลกของรางวัลได้",
    },
    "redeem_summary": {
      "en": "Redemption Summary",
      "th": "สรุปการแลกของรางวัล",
    },
    "redeem_confirm": {
      "en": "Confirm",
      "th": "ยืนยันการแลกของรางวัล",
    },
    "remaining_point": {
      "en": "Remaining Points",
      "th": "คะแนนคงเหลือ",
    },
    "redeem_detail_summary": {
      "en": "Reward Redemption Information",
      "th": "สรุปข้อมูลการแลกของรางวัล",
    },
    "you_info": {
      "en": "My Contact",
      "th": "ข้อมูลของคุณ",
    },
    "first_name_last_name": {
      "en": "Name-Surname",
      "th": "ชื่อ-นามสกุล",
    },
    "phone_number": {
      "en": "Mobile Number",
      "th": "เบอร์โทรศัพท์",
    },
    "redeem_reward_successful_dialog": {
      "en": "Successful Redemption",
      "th": "แลกของรางวัลสำเร็จ",
    },
    "redeem_reward_failed_dialog": {
      "en": "Sorry, unsuccessful redemption. Please try again.",
      "th": "ขออภัย แลกของรางวัลไม่สำเร็จ\nกรุณาทำรายการใหม่อีกครั้ง",
    },
    "redeem_reward_limitabtion_exceeded": {
      "en": "You have reached your maximum redemption for this reward.",
      "th": "คุณแลกของรางวัลครบตามจำนวน ชิ้น/ท่าน แล้ว",
    },
    "redeem_reward_claim_phase_not_running": {
      "en": "Sorry, currenly it's not a redemption period.",
      "th": "ขณะนี้ยังไม่ถึงระยะเวลาในการแลกของรางวัล ติดตามสิทธินี้ในโอกาสหน้า",
    },
    "redeem_reward_insufficient_stock": {
      "en": "This reward was fully redeemed. Please stay tuned for next opportunity.",
      "th": "ขออภัย ไม่สามารถแลกของรางวัลได้เนื่องจากของรางวัลหมด",
    },
    "redeem_reward_insufficient_balance": {
      "en": "You do not have enough points to redeem this reward.",
      "th": "ขณะนี้ผู้ใช้สิทธิมีคะแนนไม่เพียงพอ โปรดลองอีกครั้งในโอกาสหน้า",
    },
    "redeem_reward_not_found": {
      "en": "Not Found",
      "th": "Not Found",
    },
    "notibar_id_card_amendment_waiting_for_approve": {
      "en": "ID Card information is waiting for approval.",
      "th": "ข้อมูลบัตรประชาชนอยู่ระหว่างตรวจสอบ",
    },
    "date_normal": {
      "th": "มีวันที่ เดือน และปีเกิด",
      "en": "Specify birthdate",
    },
    "no_date": {
      "th": "มีเฉพาะเดือนและปีเกิด",
      "en": "Specify only month and year.",
    },
    "no_date_and_month": {
      "th": "มีเฉพาะปีเกิด",
      "en": "Specify only year.",
    },
  }
}

module.exports = {
  patchLocal
}