describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display the login form', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('form').should('exist');
  });

  it('should display login and password inputs', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('input[formControlName="login"]').should('exist');
    cy.get('input[formControlName="password"]').should('exist');
  });

  it('should mock login and redirect to dashboard', () => {
    
    // GIVEN
    cy.intercept('POST', '/api/login', 'fake-token').as('login');
    
    // WHEN
    cy.get('input[formControlName="login"]').type('johndoe');
    cy.get('input[formControlName="password"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.wait('@login');
    
    // THEN
    cy.url().should('include', '/dashboard');
  });

  it('should show error when form is submitted empty', () => {
    // GIVEN 

    // WHEN
    cy.get('button[type="submit"]').click();
    
    // THEN
    cy.get('.invalid-feedback').should('exist');
  });
});