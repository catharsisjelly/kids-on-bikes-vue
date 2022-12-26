// https://docs.cypress.io/api/introduction/api.html

describe('Basic homepage test', () => {
    it('visits the app root url', () => {
        cy.visit('/')
        cy.contains('h1', 'Paranoia Helper')
    })
})
