import Actions from '../API/Actions'

class CorePage extends Actions {
    constructor() {
        super()
    }

    get header() { return '~HeaderLabel' }
    get inputField() { return '~DataEntry' }
    get readyButton() { return '~GetDigitViewButton' }
    get ready() { return '~ReadyViewLoginButton' }
    get yesButton() { return '~GuidedWorkViewAffirmativeButton' }
    get noButton() { return '~GuidedWorkViewNegativeButton' }
    get threeDots() { return '~More options' }
    get signOffOption() { return '//*[@text="Sign off"]' }
    get yesSignOff() { return '~BooleanViewAffirmativeLoginButton' }
    get noSignOff() { return '~BooleanViewNegativeLoginButton' }
    get processDataSpinner() { return '//*[@text="processing data..."]' }

    async writeNumber(number) {
        await this.writeOnElement(this.inputField, number)
    }

    async tapOnReady() {
        await this.tapOnElement(this.readyButton)
    }

    async tapReady() {
        await this.tapOnElement(this.ready)
    }

    async tapOnYes() {
        await this.tapOnElement(this.yesButton)
    }
    async tapOnNo() {
        await this.tapOnElement(this.noButton)
    }

    async tapOnNo() {
        await this.tapOnElement()
    }

    async tapOnThreeDots() {
        await this.tapOnElement(this.threeDots)
    }

    async tapOnSingOff() {
        await this.tapOnElement(this.signOffOption)
    }

    async tapOnYesSignOff() {
        await this.tapOnElement(this.yesSignOff)
    }

    async tapOnNoSingOff() {
        await this.tapOnElement(this.noSignOff)
    }

}

export default new CorePage()
