/// <reference types="@cypress/fiddle" />

const test = {
  html: `
    <p class="text-lg"></p>
    <script>
      setTimeout(() => {
        const url = 'http://example/student/details.php?viewDetails=project&stdCount=1&sectionID=1&openHash=5fc8329a76e73&ajaxCall=true';
        window.fetch(url, { method: 'POST'});
      }, 1000);
    </script>
  `,
  test: `
  cy.intercept({
    method: 'POST',
    url: '/student/details.php',
    query: {
      viewDetails: 'project',   // whatever query parts you care about
      stdCount: '1',
      sectionID: '1'
    }
  }, {})                 // Added an empty stub here, as my url does not actually exist
  .as('getStudentTabDetails');
  cy.wait('@getStudentTabDetails')
  `
}

it('', () => {
  cy.runExample(test)
});
