import Actions from '../API/Actions'

class LoginScreen extends Actions {
    constructor() {
        super()
    }

    get userField() { return '~UserIDEntry' }
    get passwordField() { return '~PasswordEntry' }
    get loginButton() { return '~SignInViewButton' }
    get loadingSpinner() { return 'id=textViewStatus' }

    async loginUser(user, password) {
        await this.fillUserFiled(user)
        await this.fillPasswordField(password)
        await this.tapOnElement(this.loginButton)
    }

    async fillUserFiled(user) {
        await this.tapOnElement(this.userField)
        await this.writeOnElement(this.userField, user)
        await driver.hideKeyboard()
    }

    async fillPasswordField(password) {
        await this.tapOnElement(this.passwordField)
        await this.writeOnElement(this.passwordField, password)
        await driver.hideKeyboard()
    }

    async tapOnLogon() {
        await this.tapOnElement(this.loginButton)
    }

}

export default new LoginScreen()
