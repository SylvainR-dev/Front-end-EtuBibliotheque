describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should display the register form', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('form').should('exist');
  });

  it('should display all inputs', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('input[formControlName="firstName"]').should('exist');
    cy.get('input[formControlName="lastName"]').should('exist');
    cy.get('input[formControlName="login"]').should('exist');
    cy.get('input[formControlName="password"]').should('exist');
  });

  it('should mock register and redirect to login', () => {
    
    // GIVEN
    cy.intercept('POST', '/api/register', {}).as('register');
   
    // WHEN
    cy.get('input[formControlName="firstName"]').type('John');
    cy.get('input[formControlName="lastName"]').type('Doe');
    cy.get('input[formControlName="login"]').type('johndoe');
    cy.get('input[formControlName="password"]').type('123456');
    cy.get('button.btn-primary').click();
    cy.wait('@register');
    
    // THEN
    cy.url().should('include', '/login');
  });

  it('should show error when form is submitted empty', () => {
    // GIVEN 

    // WHEN
    cy.get('button.btn-primary').click();
    
    // THEN
    cy.get('.invalid-feedback').should('exist');
  });
});