describe('Timeline page', () => {
    before(() => {
        cy.visit('/#timeline');
    });

    it('contains title', () => {
        cy.contains('#timeline h1', "Timeline");
    });
});
