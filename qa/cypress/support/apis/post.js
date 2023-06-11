/** @module API Calls - Posts */

/**
 * Create a new post
 * @function
 * @param {string} url - base url of the backend server
 * @param {object} post - post object
 * @returns {JSON} JSON response with the created user data.
 * @example
 * // call the command in cypress
 * createPostV1(url, adminToken, userEmail, userPassword, firstName, lastName)
 */
function createPostV1(url, post) {
    cy.api({
        method: "POST",
        url: `${url}/v1/posts`,
        failOnStatusCode: false,
        body: post,
    }).then((response) => {
        return response;
    });
}
Cypress.Commands.add("createPostV1", createPostV1);