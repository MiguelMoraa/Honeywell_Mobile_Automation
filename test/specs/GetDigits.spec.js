import HomeSceren from '../../Pages/HomeScreen'
import dotenv from 'dotenv'
import SettingsScreen from '../../Pages/SettingsScreen'
import VoiceAndAudioSettingsScreen from '../../Pages/VoiceAndAudioSettingsScreen'
import VIOSettingsScreen from '../../Pages/VIOSettingsScreen'
import LoginScreen from '../../Pages/LoginScreen'
import CorePage from '../../Pages/CorePage'
import { GET_DIGITS } from '../../Data/Headers'
dotenv.config()

describe('Get Digits', () => {

    before(async () => {
        await driver.pushFile('/storage/emulated/0/Android/data/com.honeywell.VIO/files/Configuration/Microservices.config', process.env.LICENSE)
        await expect($(HomeSceren.bugerButton)).toBeDisplayed()
        await expect($(HomeSceren.licenseOk)).toBeDisplayed()
        await HomeSceren.tapOnBurgerButton()
        await HomeSceren.tapOnSettings()
        await SettingsScreen.tapOnVoiceAndAudioMenu()
        await VoiceAndAudioSettingsScreen.disableVoiceRecognition()
        await driver.back()
        await SettingsScreen.tapOnVIOSettings()
        await VIOSettingsScreen.disableBackwardCompatibility()
        await VIOSettingsScreen.disableServerSecureConnector()
        await VIOSettingsScreen.fillVIOSettings(process.env.LUT, process.env.ODR, process.env.ERROR, process.env.HOST)
        await SettingsScreen.tapOnBAckButton()
        await HomeSceren.tapOnBurgerButton()
        await SettingsScreen.tapOnHomeMenu()
        await HomeSceren.tapOnReadyButton()
    })

    beforeEach(async () => {
        await LoginScreen.loginUser(process.env.USER, process.env.PASSWORD)
        await expect($(LoginScreen.loadingSpinner)).toBeDisplayed()
        await expect($(CorePage.header)).toHaveText(GET_DIGITS.Only144)
    })

    it('VOSMB-2952 VIO - Get Digits Test', async () => {
        await CorePage.writeNumber(144)
        await CorePage.tapOnReady()
        await CorePage.tapOnYes()
        await expect($(CorePage.header)).toHaveText(GET_DIGITS.RangeNumber)
        await CorePage.writeNumber(150)
        await CorePage.tapOnReady()
        await CorePage.tapOnYes()
        await expect($(CorePage.header)).toHaveText(GET_DIGITS.TwoDigitsNumber)
        await CorePage.writeNumber(12)
        await CorePage.tapOnReady()
        await CorePage.tapOnYes()
        await expect($(CorePage.header)).toHaveText(GET_DIGITS.Only144Off)
        await CorePage.writeNumber(144)
        await CorePage.tapOnReady()
        await expect($(CorePage.header)).toHaveText(GET_DIGITS.RangeNumberOff)
        await CorePage.writeNumber(150)
        await CorePage.tapOnReady()
        await expect($(CorePage.header)).toHaveText(GET_DIGITS.TwoDigitsNumberOff)
        await CorePage.writeNumber(12)
        await CorePage.tapOnReady()
        await expect($(CorePage.header)).toHaveText(GET_DIGITS.ScanOnly144)
        await CorePage.writeNumber(144)
        await CorePage.tapOnReady()
        await CorePage.tapOnYes()
        await expect($(CorePage.header)).toHaveText(GET_DIGITS.ScanRangeNumber)
        await CorePage.writeNumber(150)
        await CorePage.tapOnReady()
        await CorePage.tapOnYes()
        await expect($(CorePage.header)).toHaveText(GET_DIGITS.ScanTwoDigitsNumber)
        await CorePage.writeNumber(12)
        await CorePage.tapOnReady()
        await CorePage.tapOnYes()
        await expect($(LoginScreen.userField)).toBeDisplayed()
    })

    after(async ()=> {
        await driver.removeApp(process.env.APPPACKAGE)
    })
})
