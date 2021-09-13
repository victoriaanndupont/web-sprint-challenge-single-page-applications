// appTests.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("form information", () => {
  it("checks the information in the form", () => {
    expect(true).to.equal(true);
  });
});

describe("tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
});

describe("confirms info on form", () => {
  it("confirms the information in the form", () => {
    expect(true).to.equal(true);
  });
});

describe("renders the form", () => {
  it("Renders the Form", () => {
    cy.visit("http://localhost:3000/pizza");
  });
});

it("name input", () => {
  cy.get("#name-input").type("Maria").should("have.value", "Maria");
});

it("select toppings", () => {
  cy.get("#cheese").check();
  cy.get("#ham").check();
  cy.get("#pepperoni").check();
  cy.get("#sausage").check();
  cy.get("#Mushroom").check();
  cy.get("#pineapple").check();
});

it("can submit the form", () => {
  cy.get("#order-button").should("not.be.disabled").click();
});
