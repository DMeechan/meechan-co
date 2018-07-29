describe('Skills page', () => {
    before(() => {
        cy.visit('/#skills');
    });

    it('contains title', () => {
        cy.contains('h1.title', "And what I'm good at");
    });

    it('contains all 8 skills', () => {
        cy.contains('Node.js');
        cy.contains('Meteor.js');
        cy.contains('JavaScript');
        cy.contains('Vue.js');
        cy.contains('Git');
        cy.contains('Infrastructure Automation');
        cy.contains('Automated Testing');
        cy.contains('Artificial Intelligence');
    })
});
