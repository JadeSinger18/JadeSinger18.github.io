const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["../img/Sunset1.JPG", "../img/Sunset2.JPG", "../img/Sunset3.JPG", "../img/Rainbow.JPG", "../img/Lake.JPG"]

/* Declaring the alternative text for each image file */

const alts = {
    'Sunset1.JPG' : 'Sunset with dark mountains',
    'Sunset2.JPG' : 'Sunset with a tree',
    'Sunset3.JPG' : 'Sunset with lots of orange and yellow and lake',
    'Rainbow.JPG' : 'A double rainbow',
    'Lake.JPG' : 'Lake and sunset'
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

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });