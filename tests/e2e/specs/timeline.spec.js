describe('Timeline page', () => {
    before(() => {
        cy.visit('/#timeline');
    });

    it('contains title', () => {
        cy.contains('h1', "Timeline");
    });
});
