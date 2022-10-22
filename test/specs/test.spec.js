describe("Test suite", () => {

    it("First test", async () => {
        await browser.url("https://pastebin.com")
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!")
    })

    it("Second test", async () => {
        await $("textarea#postform-text").setValue("Hello from WebDriver")
        
    })

    it("Third", async () => {
        await $('#postform-expiration').click()
        await $('//select[@id="postform-expiration"]').selectByAttribute('value', '10M')
       
    })
    it("Fourth test", async () => {
        await $('#postform-name').setValue('helloweb')
    })
    it("Fifth", async () => {
        await $('//button[text()="Create New Paste"]').click()
    })
})

