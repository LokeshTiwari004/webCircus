const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const result = document.getElementById('result');

function battle(choice) {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerChoiceDisplay.innerHTML = 'Rock';
            switch (choice){
                case 0:
                    yourChoiceDisplay.innerHTML = 'Rock';
                    result.innerHTML = 'draw';
                    break;
                case 1:
                    yourChoiceDisplay.innerHTML = 'Paper';
                    result.innerHTML = 'win';
                    break;
                case 2:
                    yourChoiceDisplay.innerHTML = 'Scissors';
                    result.innerHTML = 'lose';
                    break;
                }
        break;
        case 1:
            computerChoiceDisplay.innerHTML = 'Paper';
            switch (choice){
                case 0:
                    yourChoiceDisplay.innerHTML = 'Rock';
                    result.innerHTML = 'lose';
                    break;
                case 1:
                    yourChoiceDisplay.innerHTML = 'Paper';
                    result.innerHTML = 'draw';
                    break;
                case 2:
                    yourChoiceDisplay.innerHTML = 'Scissors';
                    result.innerHTML = 'win';
                    break;
            }
        break;
        case 2:
            computerChoiceDisplay.innerHTML = 'Scissors';
            switch (choice){
                case 0:
                    yourChoiceDisplay.innerHTML = 'Rock';
                    result.innerHTML = 'win';
                    break;
                case 1:
                    yourChoiceDisplay.innerHTML = 'Paper';
                    result.innerHTML = 'lose';
                    break;
                case 2:
                    yourChoiceDisplay.innerHTML = 'Scissors';
                    result.innerHTML = 'draw';
                    break;
            }
        break;
    }
}


document.querySelectorAll('button').forEach(choice => choice.addEventListener('click',
    function(e) {
        console.log(e);
        switch (e.target.id) {
            case 'rock':
                battle(0);
                break;
            case 'paper':
                battle(1);
                break;
            case 'scissors':
                battle(2);
                break;
        }
    }
));
