let score = JSON.parse(localStorage.getItem("score"));

            if (score === null) {
            score = {
                wins: 0,
                losses: 0,
                tie: 0,
            };
            }

            updateScoreElement();


            let computerMove = "";
            let result = "";
            

            function pickComputerMove() {
            const randomNumber = Math.random();
            let move="";

            if (randomNumber > 0 && randomNumber < 1 / 3) {
                computerMove = "rock";
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = "paper";
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = "scissors";
            }
            move=computerMove;
            return move;
            }
            let isAutoPlaying=false;
            let intervalId;
           

            function autoPlay(){
                if(!isAutoPlaying){    
                    intervalId=setInterval(()=>{
                        const playerMove=pickComputerMove();
                        //const computerMove=pickComputerMove();
                        playGame(playerMove,computerMove);
                    },1500);
                isAutoPlaying=true;
                }else{
                    clearInterval(intervalId);
                    isAutoPlaying=false;
                }
            }

             document.querySelector('.js-rock-button').addEventListener('click',()=>{
                playGame('rock');
             })

             document.body.addEventListener('keydown',(event)=>{
                if(event.key==='r'){
                    playGame('rock');
                }else if(event.key==='p'){
                    playGame('paper');
                }else if(event.key==='s'){
                    playGame('scissors');
                }
                
             });

            function playGame(playerMove) {
            if (playerMove === "scissors") {
                if (computerMove === "rock") {
                result = "YOU LOSE";
                } else if (computerMove === "paper") {
                result = "YOU WIN";
                } else if (computerMove === "scissors") {
                result = "THERE IS A TIE";
                }
            } else if (playerMove === "paper") {
                if (computerMove === "rock") {
                result = "YOU WIN";
                } else if (computerMove === "paper") {
                result = "THERE IS A TIE";
                } else if (computerMove === "scissors") {
                result = "YOU LOSE";
                }
            } else if (playerMove === "rock") {
                if (computerMove ==="rock") {
                result = "THERE IS A TIE";
                } else if (computerMove === "paper") {
                result = "YOU LOSE";
                } else if (computerMove === "scissors") {
                result = "YOU WIN";
                }
            }
            
            if (result === "YOU WIN") {
                score.wins += 1;
            } else if (result === "YOU LOSE") {
                score.losses += 1;
            } else if (result === "THERE IS A TIE") {
                score.tie += 1;
            }
            //convert js obj into JSON string
            localStorage.setItem("score", JSON.stringify(score));

            updateScoreElement();

            document.querySelector(".js-result").innerHTML = `${result}`;

            document.querySelector(
                ".js-moves"
            ).innerHTML = `You
                <img src="./IMAGES/${playerMove}-emoji.png" class="move-icon">
                <img src="./IMAGES/${computerMove}-emoji.png" class="move-icon">
                Computer`;
            }

            function updateScoreElement() {
            document.querySelector(
                ".js-score"
            ).innerHTML = `Wins:${score.wins}, Losses:${score.losses}, tie:${score.tie}`;
            }

          