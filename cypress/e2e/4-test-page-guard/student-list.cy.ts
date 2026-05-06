describe('List Page', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.setItem('token', 'fake-token');
    });

    cy.intercept('GET', '/api/students', [
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@test.com' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@test.com' }
    ]).as('getStudents');

    cy.visit('/list');
    cy.wait('@getStudents');
  });

  it('should display the title', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('h1').should('contain', 'La liste des étudiants');
  });

  it('should display the list of students', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('tbody tr').should('have.length', 2);
  });

  it('should display student data', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('tbody tr').first().should('contain', 'John');
    cy.get('tbody tr').first().should('contain', 'Doe');
  });

  it('should navigate to detail page', () => {
    
    // GIVEN
    cy.intercept('GET', '/api/students/1', { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@test.com' }).as('getStudent');
    
    // WHEN
    cy.get('tbody tr').first().contains('Détail').click();
    
    // THEN
    cy.url().should('include', '/detail/1');
  });

  it('should delete a student', () => {
    
    // GIVEN
    cy.intercept('DELETE', '/api/students/1', {}).as('deleteStudent');
    
    // WHEN
    cy.get('tbody tr').first().contains('Supprimer').click();
    cy.wait('@deleteStudent');
    
    // THEN
    cy.get('tbody tr').should('have.length', 1);
  });
});