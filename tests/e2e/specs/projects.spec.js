describe('Projects page', () => {
    before(() => {
        cy.visit('/#projects');
    });

    it('contains title', () => {
        cy.contains('#projects h1', "Projects");
    });
});
