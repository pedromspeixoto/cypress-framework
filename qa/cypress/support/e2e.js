import './commands.js'
import 'cypress-plugin-api'

/**
 * Hook to run each time before all tests
 * @function
 */
beforeEach(() => {
    cy.task("log", `Running test: ${Cypress.currentTest.title}`)
})

/**
 * Hook to run each time before after tests
 * @function
 */
afterEach(() => {
    cy.task("log", `Finished test: ${Cypress.currentTest.title}`)
})