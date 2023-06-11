/** @module Generic functions */

import { Post } from "./models/posts/post.js"
import "./apis/post.js"

/**
 * Create a new post
 * @function
 * @param {string} url - base url of the backend server
 * @param {string} content - post content
 * @returns {object} post - post response object
 * @example
 * // call the command in cypress
 * cy.addNewPostWithContent(url, content)
 */
function addNewPostWithContent(url, content) {

    // define post object
    const post = new Post(content)

    // create post
    cy.createPostV1(url, post).then((res) => {
        expect(res.status).to.eq(200)
        cy.wrap(res).as('postResponse')
    })

    cy.get('@postResponse').then((res) => {
        // return the post object
        return {
            post_id: res.body.post_id,
            content: res.body.content
        }
    })

}
Cypress.Commands.add("addNewPostWithContent", addNewPostWithContent);

/**
 * Create a new post with random content
 * @function
 * @param {string} url - base url of the backend server
 * @returns {object} post - post response object
 * @example
 * // call the command in cypress
 * cy.addNewPostWithRandomContent(url)
 */
function addNewPostWithRandomContent(url) {

    // define post object
    const post = new Post.Random()

    // create post
    cy.createPostV1(url, post).then((res) => {
        expect(res.status).to.eq(200)
        cy.wrap(res).as('postResponse')
    })

    cy.get('@postResponse').then((res) => {
        // return the post object
        return {
            post_id: res.body.post_id,
            content: res.body.content
        }
    })

}
Cypress.Commands.add("addNewPostWithRandomContent", addNewPostWithRandomContent);