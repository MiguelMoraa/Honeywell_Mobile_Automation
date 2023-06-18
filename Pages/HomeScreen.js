import Actions from '../API/Actions'

class HomeScreen extends Actions {
    constructor() {
        super()
    }

    get licenseOk() { return '//*[@text="Application Licensed"]' }
    get bugerButton() { return '//android.widget.ImageButton[@content-desc="OK"]' }
    get settingsMenu() { return '//*[@text="Settings"]' }
    get readyButton() { return '~HomeButton' }

    async tapOnBurgerButton() {
        await this.tapOnElement(this.bugerButton) 
    }

    async tapOnSettings() {
        await this.tapOnElement(this.settingsMenu)
    }

    async tapOnReadyButton() {
        await this.tapOnElement(this.readyButton)
    }

}

export default new HomeScreen()
