import { faker } from "@faker-js/faker";
import { randomCountry } from "../../utils/helpers";

/**
 * Class used to create a new post model
 * @class
 * @constructor
 * @public
 */
export class Post {
    constructor(content){
        this.content = content
    }

    // generate a random post leveraging faker
    static Random(){
        return new Post(
            faker.lorem.paragraph()
        )
    }

    // generate a random post leveraging utils/helpers.js
    static RandomCountryPost(){
        const country = randomCountry()
        return new Post(
            `This is a post from ${country}`
        )
    }
}