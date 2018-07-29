describe('Who page', () => {
    before(() => {
        cy.visit('/#who');
    });

    it('contains title', () => {
        cy.contains('h1.title', "Who am I?");
    });

    it('contains description', () => {
        cy.contains('h2.subtitle > .hue', 'a software developer');
        cy.contains('h2.subtitle > .hue', 'an avid experimenter');
        cy.contains('h2.subtitle > .hue', 'an entrepreneur');
        cy.contains('h2.subtitle > .has-text-white', 'who is...');
    });
});
