describe('Mission page', () => {
    before(() => {
        cy.visit('/#mission');
    });

    it('contains title', () => {
        cy.contains('h1', "My mission...");
    });

    it('contains some text', () => {
        cy.get('#mission > .hero-body > .container > .subtitle');
    });
});
