describe('Attributes page', () => {
  before(() => {
    cy.visit('/#attributes');
  });

  it('contains title', () => {
    cy.contains(
      '#attributes > .hero-body > .container > .title',
      "This is what I'm like"
    );
  });

  it('contains 4 correct attributes', () => {
    cy.contains('.column > span.subtitle', 'empathetic');
    cy.contains('.column > span.subtitle', 'enthusiastic');
    cy.contains('.column > span.subtitle', 'persevering');
    cy.contains('.column > span.subtitle', 'a team player');
  });
});
