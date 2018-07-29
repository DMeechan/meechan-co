describe('Contact page', () => {
    before(() => {
        cy.visit('/#contact');
    });

    it('contains title', () => {
        cy.contains('h1', "Contact");
    });
});
