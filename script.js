const baseURL = 'https://api.nasa.gov/planetary/apod';
const key = 't2XQ6qT7CadYmq6PLWDM1k7Vik6MJA51p32wYnUd';

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');

const divex = document.querySelector('.content');

fetch(`${baseURL}?api_key=${key}`)
    .then(response => response.json())
    .then(json => displayImage(json));

function displayImage(data) {
    console.log(data);

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = data.hdurl;

    let title = document.createElement('h2');
    title.className = 'card-title';
    title.innerText = data.title;

    let date = document.createElement('p');
    date.className = 'card-text';
    date.innerText = data.date;

    card.insertBefore(img, cardBody);
    card.appendChild(title);
    card.appendChild(date);

    let explanation = document.createElement('p');
    explanation.innerText = data.explanation;

    divex.appendChild(explanation);

}



