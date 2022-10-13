onst customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//console.log("test message");

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


const newStory = storyText;


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
    newstory = newStory.replace("94 fahrenheit", Math.floor(centigrade) + " celsius");
    newstory = newStory.replace("300 pounds", Math.floor(stone) + " stone");

  }
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    story.textContent = newStory;
    story.style.visibility = 'visible';
}


 

