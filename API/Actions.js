export default class Actions {

    async findElement(selector) {
        const element = await $(selector)
        return element
    }

    async waitForElement(selector) {
        const element = await this.findElement(selector)
        return element.waitForDisplayed({ timeout: 5000 })
    }

    async elementDisplayed(selector) {
        const element = await $(selector)
        await this.waitForElement(selector)
        return element.isDisplayed()
    }

    async waitForElemetClickable(selector) {
        const element = await $(selector)
        await this.elementDisplayed(selector)
        return element.waitForClickable({ timeout: 5000 })
    }

    async tapOnElement(selector) {
        const element = await $(selector)
        await this.elementDisplayed(selector)
        await element.click()
    }

    async writeOnElement(selector, text) {
        const element = await $(selector)
        await this.elementDisplayed(selector)
        await element.clearValue(selector)
        await element.setValue(text)
    }

    async swipeDownToElementAndTap(selector) {
        await this.swipeDownToElement(selector)
        await this.tapOnElement(selector)
    }

    async getElementLocation(selector, axis) {
        const element = await $(selector)
        await this.elementDisplayed(selector)
        const location = await element.getLocation(axis)
        return location
    }

    async getElementText(selector) {
        const element = await $(selector)
        await this.elementDisplayed(selector)
        const text = await element.getText()
        return text
    }

    async swipeDownToElement(selector) {
        const xStart = 350
        const yStart = 1190
        const xEnd = 350
        const yEnd = 200
        await this.swipeToElement(selector, xStart, yStart, xEnd, yEnd)
    }

    async swipeToElement(selector, xStart, yStart, xEnd, yEnd) {
        const element = await $(selector)
        while (await element.isExisting() === false ) {
            await this.swipeScreen(xStart, yStart, xEnd, yEnd)
        }
    }

    async swipeScreen(xStart, yStart, xEnd, yEnd) {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: xStart,
                    y: yStart
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: xEnd,
                    y: yEnd
                }
            },
            { action: 'release'}
        ])
    }
}
