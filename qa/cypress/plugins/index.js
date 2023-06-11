// Usage example:
// cy.task('log', message) - Print log to console

/** @module Cypress Extended Functionality */

const fs = require("fs");
const path = require("path");

module.exports = (on, config) => {
    on("task", {
        log: (message) => {
            console.log(message)
            return null
        },
        cleanDir: (directory) => {
            return cleanDir(directory)
        },
        cleanResultsDir: () => {
            return cleanResultsDir(config)
        }
    });

    return config
};


/**
 * Cleans a directory
 * @function
 * @param {string} directory with special chars
 * @example
 * cleanDir("results/data") // deletes all files from results/data folder
 */
function cleanDir(directory) {
    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, files) => {
            if (err) return resolve(false)

            for (const file of files) {
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) resolve(false)
                })
            }
        })
        return resolve(true)
    })
}

/**
 * Cleans all results data
 * @function
 * @param {config} cypress configuration
 * @example
 * cleanResultsDir() // deletes all files from results/** folders
 */
function cleanResultsDir(config) {
    return new Promise((resolve, reject) => {
        cleanDir(config.env.outputDataFolder)
            .then((res) => {
                if (!res) {
                    resolve(false)
                } else {
                    cleanDir(config.env.junitFolder)
                }
            })
            .then((res) => {
                if (!res) {
                    resolve(false)
                } else {
                    cleanDir(config.env.mochawesomeFolder)
                }
            })
            .then((res) => {
                if (!res) {
                    resolve(false)
                } else {
                    cleanDir(config.env.screenshotsFolder)
                }
            })
            .then(() => resolve(true))
    })
}