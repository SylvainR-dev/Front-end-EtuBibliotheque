describe('Create Student Page', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.setItem('token', 'fake-token');
    });
    cy.visit('/create');
  });

  it('should display the create form', () => {
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
    cy.get('input[formControlName="email"]').should('exist');
  });

  it('should mock create and redirect to list', () => {
    
    // GIVEN
    cy.intercept('POST', '/api/students', {}).as('createStudent');
    cy.intercept('GET', '/api/students', []).as('getStudents');
    
    // WHEN
    cy.get('input[formControlName="firstName"]').type('John');
    cy.get('input[formControlName="lastName"]').type('Doe');
    cy.get('input[formControlName="email"]').type('john@test.com');
    cy.get('button.btn-primary').click();
    cy.wait('@createStudent');
    
    // THEN
    cy.url().should('include', '/list');
  });

  it('should show error when form is submitted empty', () => {
    // GIVEN 

    // WHEN
    cy.get('button.btn-primary').click();
    
    // THEN
    cy.get('.invalid-feedback').should('exist');
  });
});