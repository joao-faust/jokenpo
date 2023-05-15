let computerScore = 0;
let userScore = 0;

const imgs = document.querySelectorAll("main img");
imgs.forEach(img => {
    img.addEventListener("click", e => {
        const target = e.target;

        const userPlay = parseInt(target.id.slice(-1));
        const userImg = document.createElement("img");
        userImg.src = target.src;

        const randomPlay = Math.ceil(Math.random() * 3);
        const randomImg = document.createElement("img");
        randomImg.src = document.querySelector(`#play${randomPlay}`).src;

        const result = document.querySelector("#result");
        result.innerHTML = "";
        result.appendChild(userImg);
        result.appendChild(randomImg);

        const winner = document.createElement("h2");
        if (userPlay === randomPlay) {
            winner.innerHTML = "Draw";
        }
        else if ((userPlay === 1 && randomPlay === 2) || (userPlay === 2 && randomPlay === 3) || 
        (userPlay === 3 && randomPlay === 1)) {
            computerScore += 1;
            winner.innerHTML = "The computer won";
        }
        else {
            userScore += 1;
            winner.innerHTML = "You won";
        }

        document.querySelector("#score").innerHTML = `${userScore} x ${computerScore}`;
        result.appendChild(winner)
    });
});
