describe('Home page', () => {
    before(() => {
        cy.visit('/#home');
    });

    it('contains welcome text', () => {
        cy.contains('#home h1', "Hi, I'm");
        cy.contains('#home #firstname', 'Daniel');
        cy.contains('#home #surname', 'Meechan');
    });

    it('contains scroll down indicator', () => {
        cy.contains('#home p', 'scroll down to learn more');
    });
});
