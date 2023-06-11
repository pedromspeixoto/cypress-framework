import { CONTENT } from '../../support/selectors/home/home.js'

describe('UI | Home', () => {
    it('UI-HOME-0001 - Visit home page and see logo image', () => {
        cy.visit("/")
        cy.get(CONTENT.HOME_LOGO).should('exist').should('be.visible')
  })
})