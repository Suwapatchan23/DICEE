const reload = window.performance.getEntriesByType("navigation");

if (reload[0].type === "reload") {
    // get elements section
    const diceeHeadingEl = document.querySelector(".refresh-me");
    const p1Dice = document.querySelector(".p1-dice");
    const p2Dice = document.querySelector(".p2-dice");
    // random dices section
    const randomP1 = Math.floor(Math.random() * 6) + 1;
    const randomP2 = Math.floor(Math.random() * 6) + 1;

    // create var for image source corresponding the random results.
    let randomImageSource1 =
        "./Dicee Challenge - Starting Files/images/dice" + randomP1 + ".png";
    let randomImageSource2 =
        "./Dicee Challenge - Starting Files/images/dice" + randomP2 + ".png";
    // render result section.
    p1Dice.setAttribute("src", randomImageSource1);
    p2Dice.setAttribute("src", randomImageSource2);

    // decide who win the game.
    if (randomP1 > randomP2) {
        diceeHeadingEl.textContent = "🚩Player 1 Wins";
    } else if (randomP1 < randomP2) {
        diceeHeadingEl.textContent = "Player 2 Wins🚩";
    } else {
        diceeHeadingEl.textContent = "Draw!";
    }
}
