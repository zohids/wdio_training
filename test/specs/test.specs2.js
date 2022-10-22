describe("Practical task2", () => {
    it("Open pastebin", async () => {
        await browser.url("https://pastebin.com")
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!")
    })

    it("Inserting text", async () => {
        await $("textarea#postform-text").setValue('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force')
        
    })

    // it("Syntax", async () => {
    //     await $('#postform-format').click()
    //     await $('#postform-format').selectByAttribute('value', '8')
    // })

    // it("Expiration", async () => {
    //     await $('#postform-expiration').click()
    //     await $('//select[@id="postform-expiration"]').selectByAttribute('value', '10M')
       
    // })

    it('Setting title', async () => {
        await $('#postform-name').setValue("how to gain dominance among developers")
    })

    it("Saving", async () => {
        await $('.btn.-big').click()
        
        
    })

    it('Page title', async () => {
        const title = await browser.getTitle()
        
        expect(title).toEqual('how to gain dominance among developers - Pastebin.com')
       
    }, 5000)

    it('Is bash', async () => {
        const bash = await $("//a[href='/archive/bash']")
        console.log(bash.isDisplayed());
    })

})