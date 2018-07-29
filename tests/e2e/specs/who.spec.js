describe('Who page', () => {
    before(() => {
        cy.visit('/#who');
    });

    it('contains title', () => {
        cy.contains('#who h1.title', "Who am I?");
    });

    it('contains description', () => {
        cy.contains('#who h2.subtitle > .hue', 'a software developer');
        cy.contains('#who h2.subtitle > .hue', 'an avid experimenter');
        cy.contains('#who h2.subtitle > .hue', 'an entrepreneur');
    });
});
