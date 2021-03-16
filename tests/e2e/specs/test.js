// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it("should be able to be cleared", () => {
    cy.get("#clear").click();
    cy.get(".display").should("contain", "0")
  })

  it("should be able to add 2 numbers", () => {
    cy.get("#number1").click();
    cy.get("#operator_add").click();
    cy.get("#number4").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("contain", "5")
  })

  it("should be able to subtract 2 numbers", () => {
    cy.get("#number7").click();
    cy.get("#operator_subtract").click();
    cy.get("#number4").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("contain", "3")
  })

  it("should be able to multiply 2 numbers", () => {
    cy.get("#number3").click();
    cy.get("#operator_multiply").click();
    cy.get("#number5").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("contain", "15")
  })

  it("should be able to divide 2 numbers", () => {
    cy.get("#number2").click();
    cy.get("#number1").click();
    cy.get("#operator_divide").click();
    cy.get("#number7").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("contain", "3")
  })

  it("should be able to output negative numbers", () => {
    cy.get("#number4").click();
    cy.get("#operator_subtract").click();
    cy.get("#number7").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("contain", "-3")
  })

  it("should be able to output decimal numbers", () => {
    cy.get("#number9").click();
    cy.get("#operator_divide").click();
    cy.get("#number5").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("contain", "1.8")
  })

  it("should be able to output very large numbers", () => {
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#operator_multiply").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("contain", "999999998000000000")
  })

  it("should display error message when dividing by zero", () => {
    cy.get("#number2").click();
    cy.get("#operator_divide").click();
    cy.get("#number0").click();
    cy.get("#operator_equals").click();
    cy.get(".display").should("contain", "Cannot divide by zero")
  })
})
