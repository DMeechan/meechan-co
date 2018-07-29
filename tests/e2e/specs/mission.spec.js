describe('Mission page', () => {
    before(() => {
        cy.visit('/#mission');
    });

    it('contains title', () => {
        cy.contains('#mission h1', "My mission");
    });

    it('contains some text', () => {
        throw new Error('test not passing');
        const selector = '#mission h2#mission-statement';
        const text = 'To improve quality of life and accelerate learning worldwide by innovating at the cross-section between technologies';
        cy.contains(selector, text);
    });
});
