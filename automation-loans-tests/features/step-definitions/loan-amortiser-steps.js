const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the amortiser application$/, async () => {
    await browser.url(`http://localhost:3000/`);
    await expect($('#loanAmount')).toBeExisting();
    await expect($('#loanTerm')).toBeExisting();
    await expect($('#intereslRate')).toBeExisting();

});

When(/^I enter values (.*) (.*) (.*)$/, async (loanAmount, loanTerm, interestRate) => {
    await $('#loanAmount').setValue(loanAmount);
    await $('#loanTerm').setValue(loanTerm);
    await $('#intereslRate').setValue(interestRate);
    await $('button=Calculate').click();
});

Then(/^I should see loan calculations for the period specified$/, async () => {
    await expect($('Monthly Repayment Amount')).toBeExisting();
    await expect($('Total Interest Repayable')).toBeExisting();
    await expect($('Total Amount Repayable')).toBeExisting();


