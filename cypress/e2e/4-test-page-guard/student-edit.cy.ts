describe('Edit Student Page', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.setItem('token', 'fake-token');
    });

    cy.intercept('GET', '/api/students/1', {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com'
    }).as('getStudent');

    cy.visit('/edit/1');
    cy.wait('@getStudent');
  });

  it('should display the edit form', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('form').should('exist');
  });

  it('should prefill form with student data', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('input[formControlName="firstName"]').should('have.value', 'John');
    cy.get('input[formControlName="lastName"]').should('have.value', 'Doe');
    cy.get('input[formControlName="email"]').should('have.value', 'john@test.com');
  });

  it('should mock update and redirect to list', () => {
    
    // GIVEN
    cy.intercept('PUT', '/api/students/1', {}).as('updateStudent');
    cy.intercept('GET', '/api/students', []).as('getStudents');
    
    // WHEN
    cy.get('input[formControlName="firstName"]').clear().type('Jane');
    cy.get('button.btn-primary').click();
    cy.wait('@updateStudent');
    
    // THEN
    cy.url().should('include', '/list');
  });

  it('should show error when form is submitted empty', () => {
    // GIVEN 

    // WHEN
    cy.get('input[formControlName="firstName"]').clear();
    cy.get('input[formControlName="lastName"]').clear();
    cy.get('input[formControlName="email"]').clear();
    cy.get('button.btn-primary').click();
    
    // THEN
    cy.get('.invalid-feedback').should('exist');
  });
});