describe('Skills page', () => {
    before(() => {
        cy.visit('/#skills');
    });

    it('contains title', () => {
        cy.contains('#skills h1.title', "And what I'm good at");
    });

    it('contains all 8 skills', () => {
        cy.get('#skills .devicon-javascript-plain.colored')
            .should('have.prop', 'title')
            .and('equal', 'JavaScript');

        cy.get('#skills .devicon-nodejs-plain-wordmark.colored')
            .should('have.prop', 'title')
            .and('equal', 'Node.js');

        cy.get('#skills .devicon-meteor-plain-wordmark.colored')
            .should('have.prop', 'title')
            .and('equal', 'Meteor.js');

        cy.get('#skills .devicon-vuejs-plain-wordmark.colored')
            .should('have.prop', 'title')
            .and('equal', 'Vue.js');

        cy.get('#skills .devicon-git-plain-wordmark.colored')
            .should('have.prop', 'title')
            .and('equal', 'Git');

        cy.get('#skills .devicon-amazonwebservices-plain-wordmark.colored')
            .should('have.prop', 'title')
            .and('equal', 'Infrastructure Automation');

        cy.get('#skills .devicon-mocha-plain.colored')
            .should('have.prop', 'title')
            .and('equal', 'Automated Testing');
            
        cy.get('#skills .devicon-python-plain-wordmark.colored')
            .should('have.prop', 'title')
            .and('equal', 'Artificial Intelligence');
        
    })
});
