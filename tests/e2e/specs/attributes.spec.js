describe('Attributes page', () => {
    before(() => {
        cy.visit('/#attributes');
    });

    it('contains 4 correct attributes', () => {
        cy.contains(':nth-child(1) > .has-text-right', 'empathetic');
        cy.contains(':nth-child(2) > .has-text-right', 'enthusiastic');
        cy.contains(':nth-child(3) > .has-text-right', 'persevering');
        cy.contains(':nth-child(4) > .has-text-right', 'a team player');
    });
});
