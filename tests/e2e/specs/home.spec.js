describe('Home page', () => {
    before(() => {
        cy.visit('/#home');
    });

    it('contains welcome text', () => {
        cy.contains('h1', "Hi, I'm");
        cy.contains('#firstname', 'Daniel');
        cy.contains('#surname', 'Meechan');
    });

    it('contains scroll down indicator', () => {
        cy.contains('p', 'scroll down to learn more');
    });
});
