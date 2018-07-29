describe('Skills page', () => {
    before(() => {
        cy.visit('/#skills');
    });

    it('contains title', () => {
        cy.contains('h1.title', "My skills");
    });
});
