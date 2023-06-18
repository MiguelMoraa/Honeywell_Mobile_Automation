import Actions from '../API/Actions'

class VoiceAndAudioSettingsScreen extends Actions {
    constructor() {
        super()
    }

    get voiceRecognitionEnable() { return '//*[@content-desc="VoiceAndAudioSettingsVoiceRecognitionSwitch"]' }

    async disableVoiceRecognition() {
        await this.tapOnElement(this.voiceRecognitionEnable)
    }

}

export default new VoiceAndAudioSettingsScreen()