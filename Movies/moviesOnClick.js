let counter = -1;

// function startOnClick() {
//     let main = document.querySelector('.main');
//     let nextButton = document.createAttribute('button');
//     nextButton.textContent = "Next";
//     main.appendChild(nextButton);

// }

function nextOnClick() {
    if (counter == movies.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    document.getElementById('para').textContent = movies[counter];
}

function previousOnClick() {

    if (counter <= 0) {
        counter = movies.length - 1;
    } else {
        counter--;
    }
    document.getElementById('para').textContent = movies[counter];
}