/// <reference types = "Cypress" />

describe("Home de www.freerangetesters.com", () => {
  beforeEach(() => {
    cy.visit("https://www.freerangetesters.com/");
  });

  it("ahould have a title", () => {
    cy.title().should("include", "Free Range Testers");
  });
});
