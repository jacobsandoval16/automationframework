describe('lambdatest page', () => {
    it('directs you to Log in page when user clicks on Log in link', () => {
        browser.url('https://www.lambdatest.com')
        browser.pause(3000)
        const link = $('=Log in')
        link.click()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://accounts.lambdatest.com/login')
    })
})
