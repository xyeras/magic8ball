// This function returns a number from 0-19;
// (Math.random() * 20) returns any decimal number from 0-19
// Math.floor rounds down the number
function randNum() {
    return Math.floor(Math.random() * 20);
}

// This function will get the num from randNum()
// and return a message depending on which num
// There are 20 possible answers hence (0-19)
// Answers provided from wiki
// Wiki: https://en.wikipedia.org/wiki/Magic_8-Ball
function magicAnswer (num) {
    // 10 affirmative answers
    if (num == 0) {
        document.section.innerHTML = "It is certain.";
    }
    else if (num === 1) {
        document.section.innerHTML = "It is decidely so."
    }
    else if (num === 2) {
        document.section.innerHTML = "Without a doubt.";
    }
    else if (num === 3) {
        document.section.innerHTML = "Yes - definitely.";
    }
    else if (num === 4) {
        document.section.innerHTML = "You may rely on it.";
    }
    else if (num === 5) {
        document.section.innerHTML = "As I see it, yes.";
    }
    else if (num === 6) {
        document.section.innerHTML = "Most likely.";
    }
    else if (num === 7) {
        document.section.innerHTML = "Outlook good.";
    }
    else if (num === 8) {
        document.section.innerHTML = "Yes.";
    }
    else if (num === 9) {
        document.section.innerHTML = "Signs point to yes.";
    }

    // 5 non-committal answers
    else if (num === 10) {
        document.section.innerHTML = "Reply hazy, try again.";
    }
    else if (num === 11) {
        document.section.innerHTML = "Ask again later.";
    }
    else if (num === 12) {
        document.section.innerHTML = "Better not tell you now.";
    }
    else if (num === 13) {
        document.section.innerHTML = "Cannot predict now.";
    }
    else if (num === 14) {
        document.section.innerHTML = "Concentrate and ask again.";
    }

    // 5 negative answers
    else if (num === 15) {
        document.section.innerHTML = "Don't count on it.";
    }
    else if (num === 16) {
        document.section.innerHTML = "My reply is no.";
    }
    else if (num === 17) {
        document.section.innerHTML = "My sources say no.";
    }
    else if (num === 18) {
        document.section.innerHTML = "Outlook not so good.";
    }
    else if (num === 19) {
        document.section.innerHTML = "Very doubtful.";
    }
    // This is the check case just in case the randNum()
    // doesn't return any number from 0-19
    else {
        document.section.innerHTML = "Error: Number was not within range.";
    }
}

const answer = randNum();
magicAnswer(answer);