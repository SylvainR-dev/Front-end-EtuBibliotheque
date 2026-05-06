describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the title', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('h1').should('contain', 'EtuBibliotheque');
  });

  it('should have a register button', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('button').first().should('contain', 'Créer compte');
  });

  it('should have a login button', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('button').last().should('contain', 'Connexion');
  });

  it('should navigate to register page', () => {
    // GIVEN 

    // WHEN

    cy.get('button').first().click();
    
    // THEN
    cy.url().should('include', '/register');
  });

  it('should navigate to login page', () => {
    // GIVEN 

    // WHEN

    cy.get('button').last().click();
    
    // THEN
    cy.url().should('include', '/login');
  });
});