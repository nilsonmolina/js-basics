describe('My First Test', () => {
  beforeEach(function () {
    cy.fixture('user').as('user')

    cy.visitIndex().then(function (win) {
      let start = win.App.start

      this.win = win
      this.ipc = win.App.ipc
      this.version = '1.0.0'

      cy.stub(this.ipc, 'getOptions').resolves({ version: this.version })
      cy.stub(this.ipc, 'updaterCheck').resolves(false)
      cy.stub(this.ipc, 'getProjects').resolves([])
      cy.stub(this.ipc, 'getProjectStatuses').resolves([])
      cy.stub(this.ipc, 'externalOpen')

      start()
    })
  })

  it('shows jumbotron', () => {
    cy.get('jumbotron').should('be.visible')
  })

  // it('user can type in name', () => {
  //   // cy.visit('https://nilsonmolina.com');
  //   cy.electronVisitUrl('./main.js', 'http://localhost:4600');
  // });
})
