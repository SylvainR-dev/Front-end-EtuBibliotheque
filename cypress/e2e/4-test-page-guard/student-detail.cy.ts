describe('Detail Student Page', () => {
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

    cy.visit('/detail/1');
    cy.wait('@getStudent');
  });

  it('should display the title', () => {
    // GIVEN 
    // WHEN

    // THEN
    cy.get('h1').should('contain', 'Détail de l\'étudiant');
  });

  it('should display student data', () => {
    // GIVEN 
    // WHEN
    
    // THEN
    cy.get('p').should('contain', 'John');
    cy.get('p').should('contain', 'Doe');
    cy.get('p').should('contain', 'john@test.com');
  });
});