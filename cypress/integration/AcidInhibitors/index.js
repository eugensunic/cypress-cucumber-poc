import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I go to {string}', (link) => {
    cy.visit(link);
})

When('I see title posts {string}', (title) => {
    cy.get('body').should('contain', title);
});

Then('I see text {string}', (text) => {
    cy.get('body').should('contain', text);
});

Then('I see link by the name {string}', (link) => {
    console.log(cy.get('.url_value'));
    cy.get('.url_value').first().should('have.text', link);
});