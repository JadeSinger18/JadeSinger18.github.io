const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const images = ["../Img/Reeses.jpg", "../Img/Monkey.jpg", "../Img/Turtle.jpg", "../Img/Moon.jpg", "../Img/Telescope.PNG", "../Img/Earth.jpg","../Img/Rose.jpeg", "../Img/Portrait.jpeg", "../Img/Penguin.jpg", "../Img/MoonLander.PNG", "../Img/Space.JPG", "../Img/Lamp.jpeg", "../Img/SpiderMan.jpeg"]

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
    'Earth.jpg' : 'Earth',
    'Rose.jpeg' : 'Rose'
}

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
