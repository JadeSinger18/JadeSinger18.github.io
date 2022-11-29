const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = "It was 64 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in awe for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx:, weighs 300 pounds and it was a cold day.";

const insertX = ["Newt", "Barry", "Sky"];
const insertY = ["Shake Shack", "Pizza Pie", "UMC"];
const insertZ = ["violently threw up the chicken nuggets", "melted into the cheese fries they were eating", "turned into a pizza"];


var newStory = storyText;


randomize.addEventListener('click', result);

function result() {
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    const stone = weight/14;
    const centigrade = (temperature-32) *5/9;
    newStory = newStory.replace("94 fahrenheit", Math.floor(centigrade) + " celsius");
    newStory = newStory.replace("300 pounds", Math.floor(stone) + " stone");

  }
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    story.textContent = newStory;
    story.style.visibility = 'visible';
}


 

