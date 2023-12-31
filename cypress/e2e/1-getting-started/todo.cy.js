/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('textinput', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost/boulderRatten/seleniumandcypresstest/dist/index.html')
  })

  it('can input numbers', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.numberIn').should('have.length', 2)

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('.numberIn').first().type("45");
    cy.wait(10);
    cy.get('.numberIn').first().should('have.value', '45');
    cy.get('.numberIn').last().type("100");
    cy.wait(10);
    cy.get('.numberIn').last().should('have.value', '100');
  })

  it('can not input other', () => {
    cy.get('.numberIn').should('have.length', 2)
    cy.get('.numberIn').first().type("ABC");
    cy.wait(10);
    cy.get('.numberIn').first().should('have.value', '');
    cy.get('.numberIn').last().type("#");
    cy.wait(10);
    cy.get('.numberIn').last().should('have.value', '');
    cy.get('.numberIn').last().type("(");
    cy.wait(10);
    cy.get('.numberIn').last().should('have.value', '');
  })

  it('normal cases', () => {
    cy.get('.numberIn').should('have.length', 2)
    cy.get('.numberIn').first().type("45");
    cy.get('.numberIn').last().type("100");
    cy.get('#addButton').click()
    cy.wait(10);
    cy.get('.numberOut').first().should('have.value', '145');
  })
  it('negative cases', () => {
    cy.get('.numberIn').should('have.length', 2)
    cy.get('.numberIn').first().type("-45");
    cy.get('.numberIn').last().type("-100");
    cy.get('#addButton').click()
    cy.wait(10);
    cy.get('.numberOut').first().should('have.value', '-145');
  })
  it('edge cases', () => {
    cy.get('.numberIn').should('have.length', 2)
    cy.get('.numberIn').first().type("1");
    cy.get('.numberIn').last().type("0.000000000000000000001");
    cy.get('#addButton').click()
    cy.wait(10);
    cy.get('.numberOut').first().should('have.value', '1.000000000000000000001');
  })

  it('smiley', () => {

    cy.get('#addButton').click()
    cy.wait(10);
    cy.get('.smiley').first().should('be.visible');
  })

  it('js', () => {
    //Method 2: Cypress way of executing javascript click using window object
cy.window().then((win) => {
  win.eval('alert("hello")');
 });
  })
/*
  context('with a checked task', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })

    it('can filter for uncompleted tasks', () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      cy.contains('Active').click()

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
      cy.contains('Pay electric bill').should('not.exist')
    })

    it('can filter for completed tasks', () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
    })

    it('can delete all completed tasks', () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      cy.contains('Clear completed').click()

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')

      // Finally, make sure that the clear button no longer exists.
      cy.contains('Clear completed').should('not.exist')
    })
    
  })
  */
})
