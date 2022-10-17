
describe("app", () => {

    it("verify the app", async () => {

       // Select App
        const options = await $('~App');
        await options.click();

       // Select Action bar
        const optionsbar = await $('~Action Bar');
        await expect(optionsbar).toBeExisting();
        await optionsbar.click();

      // Select Action bar Mechanics
        const actionbarmechs = await $('~Action Bar Mechanics');
        await expect(actionbarmechs).toBeExisting();
        await actionbarmechs.click();


    })
})

