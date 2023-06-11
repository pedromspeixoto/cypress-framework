import { faker } from "@faker-js/faker";
import { Post } from "../../support/models/posts/post.js";
import { RESPONSE_CODES } from "../../support/types/http.js";

const apiUrl = Cypress.config('apiBaseUrl')

describe('API | Posts', () => {
  it('API-POSTS-0001 - Create a new post with fixed content', () => {
    // generate random post
    const content = faker.lorem.paragraph()
    const post = new Post(content)

    // test post api
    cy.createPostV1(apiUrl, post).as('request')

    // validate response
    cy.get('@request').then((response) => {
        expect(response.status).to.eq(RESPONSE_CODES.CREATED)
        expect(response.body.data).to.have.property('post_id')
        expect(response.body.data).to.have.property('content', content)
    })
  })
})