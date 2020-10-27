describe('herokuapp link test', () => {
    it('opens a new tab when user clicks on Click Here link', () => {
        browser.url('https://the-internet.herokuapp.com/windows')
        browser.pause(3000)
        const link = $('=Click Here')
        link.click()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://the-internet.herokuapp.com/windows')
    })
})
