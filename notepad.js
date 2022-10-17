const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver");

describe('ColorNote', () => {

//Autograntpermissions and SKIP button
    it('notes.test', async () => {
        await browser.pause(6000);
        const skipbtn = await $("//*[@text='SKIP']");
        await expect(skipbtn).toBeDisplayed();
        await skipbtn.click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });


    it('Add Note', async () => {
// Adding the "NOTE" and "SAVING"
        await ($('//*[@text="Add note"]')).click();
        await $('//*[@text="Text"]').click();
        await browser.pause(6000);
        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']").setValue("welcome to the notepad");
        await browser.back();
        await browser.back();
        await browser.back();
        await browser.pause(8000);

// Validation of the "NOTE" 


await expect($("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']")).toBeDisplayed();
    await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']").click();
    
    await browser.pause(5000);
    await expect ($("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/view_note']")).toHaveText("welcome to the notepad");
    await browser.pause(3000);
       await browser.back();
      
        const savedtext = await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/title']");
        await expect(savedtext).toBeExisting();
        await savedtext.click();

        await $('~More').click();
    });


    it('Delete Note', async () => {
 // Deleting the "NOTE"

        await browser.pause(6000);
        await ($('//*[@text="Delete"]')).click();
        await browser.pause(6000);

        await ($('//*[@text="OK"]')).click();
        await browser.pause(5000);
    });


});
