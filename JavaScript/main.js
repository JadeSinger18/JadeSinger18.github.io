const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

/* Declaring the array of image filenames */
const images = ["../Img/Reeses.jpg", "../Img/Monkey.jpg", "../Img/Turtle.jpg", "../Img/Moon.jpg", "../Img/Penguin.jpg", "../Img/Space.JPG", "../Img/SpiderMan.jpeg", "../Img/Portrait.jpeg", "../Img/Lamp.jpeg", "../Img/MoonLander.PNG", "../Img/Telescope.PNG"]

/* Declaring the alternative text for each image file */

const alts = {
    'Reeses.jpg' : 'Reeses',
    'Monkey.jpg' : 'Monkey',
    'Turtle.jpg' : 'Turtle',
    'Moon.jpg' : 'Moon',
    'Penguin.jpg' : 'Penguin',
    'Space.JPG' : 'Space',
    'SpiderMan.jpeg' : 'SpiderMan',
    'Portrait.jpeg' : 'Portrait',
    'Lamp.jpeg' : 'Lamp',
    'MoonLander.PNG' : 'MoonLander',
    'Telescope.PNG' : 'Telescope',
    }

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }