describe("animation", () => {

    it("verify the animation", async () => {
     
        // Select Animation
        const options = await $('~Animation');
        await options.click();

        //  Slect Events
        const optionsbar = await $('~Events');
        await expect(optionsbar).toBeExisting();
        await optionsbar.click();

        // Select Play
        const actionbarmechs = await $('~Play');
        await expect(actionbarmechs).toBeDisplayed();
        await actionbarmechs.click();
        
        await browser.pause(6000)

    })
})
