import HomeSceren from '../../Pages/HomeScreen'
import dotenv from 'dotenv'
import SettingsScreen from '../../Pages/SettingsScreen'
import VoiceAndAudioSettingsScreen from '../../Pages/VoiceAndAudioSettingsScreen'
import VIOSettingsScreen from '../../Pages/VIOSettingsScreen'
import LoginScreen from '../../Pages/LoginScreen'
import CorePage from '../../Pages/CorePage'
import { MULTIPLY_TEST } from '../../Data/Headers'
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

    it('VOSMB-2935 VIO - Multiply Test', async () => {
        for (let i = 0; i < MULTIPLY_TEST.length; i++) {
            await expect($(CorePage.header)).toHaveText(MULTIPLY_TEST[i])
            await CorePage.tapReady()
        }
    })

    after(async ()=> {
        await driver.removeApp(process.env.APPPACKAGE)
    })
})
