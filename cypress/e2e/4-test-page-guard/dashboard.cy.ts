describe('Dashboard Page', () => {
  beforeEach(() => {
    
    // GIVEN : mock du token JWT pour passer le authGuard
    cy.window().then((win) => {
      win.localStorage.setItem('token', 'fake-token');
    });
    cy.visit('/dashboard');
  });

  it('should display the title', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('h1').should('contain', 'Dashboard');
  });

  it('should have a voir tous button', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('button').first().should('contain', 'Voir tous');
  });

  it('should have a créer button', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('button').last().should('contain', 'Créer');
  });

  it('should navigate to list page', () => {
    
    // GIVEN
    cy.intercept('GET', '/api/students', []).as('getStudents');
    
    // WHEN
    cy.get('button').first().click();
    
    // THEN
    cy.url().should('include', '/list');
  });

  it('should navigate to create page', () => {
    // GIVEN 

    // WHEN
    cy.get('button').last().click();
    
    // THEN
    cy.url().should('include', '/create');
  });
});