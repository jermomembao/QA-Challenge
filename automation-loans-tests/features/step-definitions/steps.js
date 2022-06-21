const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the amortiser application$/, async () => {
    await browser.url(`http://localhost:3000/`);
});

When(/^I enter values (.*) (.*) (.*)$/, async (loanAmount, loanTerm, interestRate) => {
    await $('#username').setValue(loanAmount);
    await $('#password').setValue(loanTerm);
    await $('#password').setValue(interestRate);
    await $('button[type="submit"]').click();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});

