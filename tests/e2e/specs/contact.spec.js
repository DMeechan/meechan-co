describe('Contact page', () => {
    before(() => {
        cy.visit('/#contact');
    });

    it('contains title', () => {
        cy.contains('#contact h1', "Contact");
    });
});
