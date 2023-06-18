import Actions from '../API/Actions'

class SettingsScreen extends Actions {
    constructor() {
        super()
    }

    get voiceAndAudioSettingsMenu() { return '//*[@text="Voice & Audio Settings"]' }
    get vioSettingsMenu() { return '//*[@text="Voice Interface Objects Settings"]' }
    get backButton() { return 'android.widget.ImageButton' }
    get homeMenu() { return '//*[@text="Home"]' }

    async tapOnVoiceAndAudioMenu() {
        await this.tapOnElement(this.voiceAndAudioSettingsMenu)
    }

    async tapOnVIOSettings() {
        await this.tapOnElement(this.vioSettingsMenu)
    }

    async tapOnBAckButton() {
        await this.tapOnElement(this.backButton)
    }

    async tapOnHomeMenu() { 
        await this.tapOnElement(this.homeMenu)
    }
}

export default new SettingsScreen()
