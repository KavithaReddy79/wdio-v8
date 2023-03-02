describe('My Login application', () => {
    it('should login with valid credentials', async () => {

    await browser.url('https://webdriver.io')

    const apiLink = await browser.$('=API')
    await apiLink.click()

    await browser.saveScreenshot('./screenshot.png')
    await browser.deleteSession()
})
})