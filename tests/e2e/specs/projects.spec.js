describe('Projects page', () => {
    before(() => {
        cy.visit('/#projects');
    });

    it('contains title', () => {
        cy.contains('h1', "Projects");
    });
});
