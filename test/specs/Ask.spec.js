import HomeSceren from '../../Pages/HomeScreen'
import dotenv from 'dotenv'
import SettingsScreen from '../../Pages/SettingsScreen'
import VoiceAndAudioSettingsScreen from '../../Pages/VoiceAndAudioSettingsScreen'
import VIOSettingsScreen from '../../Pages/VIOSettingsScreen'
import LoginScreen from '../../Pages/LoginScreen'
import CorePage from '../../Pages/CorePage'
import { ASK_TEST } from '../../Data/Headers'
dotenv.config()

describe('Data Manipulation', () => {

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
    })

    it('VOSMB-2944 VIO - Ask Instruction - Ask', async () => {
        await expect($(CorePage.header)).toHaveText(ASK_TEST.YES)
        await CorePage.tapOnYesSignOff()
        await expect($(CorePage.header)).toHaveText(ASK_TEST.NO)
        await CorePage.tapOnNoSingOff()
        await expect($(CorePage.header)).toHaveText(ASK_TEST.YES_NOT_AVAILABLE)
        await CorePage.tapOnYesSignOff()
        await expect($(CorePage.header)).toHaveText(ASK_TEST.NO)
        await CorePage.tapOnNoSingOff()
        await expect($(CorePage.header)).toHaveText(ASK_TEST.NO)
        await CorePage.tapOnNoSingOff()
        await expect($(CorePage.header)).toHaveText(ASK_TEST.YES_NOT_AVAILABLE)
        await CorePage.tapOnNoSingOff()
        await expect($(CorePage.header)).toHaveText(ASK_TEST.CANCEL)
        await CorePage.tapOnYesSignOff()
        await expect($(CorePage.header)).toHaveText(ASK_TEST.CANCER_NO)
        await CorePage.tapOnNoSingOff()
        await expect($(CorePage.header)).toHaveText(ASK_TEST.ERROR)
        await CorePage.tapReady()
        await expect($(CorePage.header)).toHaveText(ASK_TEST.SPOKEN_YES)
        await CorePage.tapOnYesSignOff()
        await expect($(LoginScreen.loginButton)).toBeDisplayed()
    })

    after(async ()=> {
        await driver.removeApp(process.env.APPPACKAGE)
    })
})
