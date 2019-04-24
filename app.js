// Cache DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

// Add computer choice function
function getComputerChoice() {
       const choices = ['rock', 'paper', 'scissors'];
       const randomNumber = Math.floor(Math.random() * 3);
       return choices[randomNumber];
}

// Capitalize first letter
function titlize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add win, lose, draw functions
function win(user, computer) {
       const smallUserWord = "user".fontsize(3).sub();
       const smallCompWord = "comp".fontsize(3).sub();
       const userChoice_div = document.getElementById(user);
       userScore++;
       userScore_span.innerHTML = userScore;
       computerScore_span.innerHTML = computerScore;
       result_p.innerHTML = `${titlize(user)}${smallUserWord} beats ${computer}${smallCompWord}. You win! 🔥`;
       userChoice_div.classList.add('green-glow');
       setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, computer) {
       const smallUserWord = "user".fontsize(3).sub();
       const smallCompWord = "comp".fontsize(3).sub();
       const userChoice_div = document.getElementById(user);
       computerScore++;
       userScore_span.innerHTML = userScore;
       computerScore_span.innerHTML = computerScore;
       result_p.innerHTML = `${titlize(user)}${smallUserWord} loses to ${computer}${smallCompWord}. You lost... 💩`;
       userChoice_div.classList.add('red-glow');
       setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, computer) {
       const smallUserWord = "user".fontsize(3).sub();
       const smallCompWord = "comp".fontsize(3).sub();
       const userChoice_div = document.getElementById(user);
       result_p.innerHTML = `${titlize(user)}${smallUserWord} equals ${computer}${smallCompWord}. It's a draw. 🍎`;
       userChoice_div.classList.add('gray-glow');
       setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

// Add game function
function game(userChoice) {
       const computerChoice = getComputerChoice();

       // compare arguments
       switch (userChoice + computerChoice) {
              case "rockscissors":
              case "paperrock":
              case "scissorspaper":
                     win(userChoice, computerChoice);
                     break;
              case "rockpaper":
              case "paperscissors":
              case "scissorsrock":
                     lose(userChoice, computerChoice);
                     break;
              case "rockrock":
              case "paperpaper":
              case "scissorsscissors":
                     draw(userChoice, computerChoice);
                     break;
       }
}

// Add main function
function main() {
       // Add event listeners
       rock_div.addEventListener('click',() => game("rock"));

       paper_div.addEventListener('click',() => game("paper"));

       scissors_div.addEventListener('click',() => game("scissors"));
}

// Run main
main();
