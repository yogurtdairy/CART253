/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let birdsData = undefined;
let governmentsData = undefined;
let langData = undefined;
let lang = "fr";

// Starts with the instruction
let birdGovernment = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */
async function preload() {
    birdsData = await loadJSON("assets/data/common.json");
    governmentsData = await loadJSON("assets/data/governmentForms.json");

}

/**
 * Create the canvas
*/
async function setup() {
    createCanvas(600, 400);

    await preload();
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(birdGovernment, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

    const bird = random(birdsData.animals);
    // Pick a sport
    const government = random(governmentsData.governmentForms);
    birdGovernment = bird + " " + government;
    birdGovernment = birdGovernment.replace(" ", "\n");

}
