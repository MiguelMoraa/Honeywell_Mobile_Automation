import Actions from '../API/Actions'

class VIOSettingsScreen extends Actions {
    constructor() {
        super()
    }

    get lutHostField() { return '~LUTHostEntry' }
    get lutPortField() { return '~LUTPortEntry' }
    get odrHostField() { return '~ODRHostEntry' }
    get odrPortField() { return '~ODRPortEntry' }
    get errHostField() { return '~ErrorHostEntry' }
    get errPortField() { return '~ErrorPortEntry' }
    get backwardToggle() { return '(//*[@content-desc="ServerSettingsServerSecureConnectionsSwitch"])[1]' }
    get serverSecureToggle() { return '(//*[@content-desc="ServerSettingsServerSecureConnectionsSwitch"])[2]' }
    get lutHeader() { return '~LUTHostSectionLabel' }
    get odrHeader() { return '~ODRHostSectionLabel' }
    get errorHeader() { return '~ErrorHostSectionLabel' }

    async disableBackwardCompatibility() {
        await this.tapOnElement(this.backwardToggle)
    }

    async disableServerSecureConnector() {
        await this.tapOnElement(this.serverSecureToggle)
    }
    
    async fillVIOSettings(LUT_PORT, ODR_PORT, ERROR_PORT, HOST) {
        await this.fillLutHost(HOST)
        await this.fillLutPort(LUT_PORT)
        await this.fillOdrHost(HOST)
        await this.fillOdrPort(ODR_PORT)
        await this.fillErrorHost(HOST)
        await this.fillErrorPort(ERROR_PORT)
    }

    async fillLutHost(HOST) {
        await this.tapOnElement(this.lutHostField)
        await this.writeOnElement(this.lutHostField, HOST)
        await driver.hideKeyboard()
    }

    async fillLutPort(LUT_PORT) {
        await this.tapOnElement(this.lutPortField)
        await this.writeOnElement(this.lutPortField, LUT_PORT)
        await driver.hideKeyboard()
    }

    async fillOdrHost(HOST) {
        await this.swipeDownToElement(this.odrHostField)
        await this.tapOnElement(this.odrHostField)
        await this.writeOnElement(this.odrHostField, HOST)
        await driver.hideKeyboard()
    }

    async fillOdrPort(ODR_PORT) {
        await this.swipeDownToElement(this.odrPortField)
        await this.tapOnElement(this.odrPortField)
        await this.writeOnElement(this.odrPortField, ODR_PORT)
        await driver.hideKeyboard()
    }

    async fillErrorHost(HOST) {
        await this.swipeDownToElement(this.errHostField)
        await this.tapOnElement(this.errHostField)
        await this.writeOnElement(this.errHostField, HOST)
        await driver.hideKeyboard()
    }

    async fillErrorPort(ERROR_PORT) {
        await this.swipeDownToElement(this.errPortField)
        await this.tapOnElement(this.errPortField)
        await this.writeOnElement(this.errPortField, ERROR_PORT)
        await driver.hideKeyboard()
    }
}

export default new VIOSettingsScreen()
