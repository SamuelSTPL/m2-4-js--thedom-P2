// Preset values
const FROGS = 3;
let track = document.getElementById("track");
// console.log(track);

//Creating the OL childs (LI)
for (let i = 0; i < FROGS; i++) {
  let li = document.createElement("li");
  li.id = `Lane-${i + 1}`;
  let span = document.createElement("span");
  span.textContent = `${i + 1}`;
  li.appendChild(span);
  track.appendChild(li);
}

//Create and add to the racers array
let racers = [];
for (let i = 0; i < FROGS; i++) {
  racers.push(frogstable[i]);
  frogstable[i].progress = 0;
  frogstable[i].lane = `lane-${i + 1}`;
}
// console.log(racers);

//Assign each line to a racers

racers.forEach(function (frog, number) {
  let frogSpan = document.createElement("span");
  let frogName = document.createElement("span");
  frogSpan.style.backgroundColor = frog.color;
  frogSpan.innerText = frog.number;
  frogName.innerText = frog.name;
  frogName.className = "frog-name";
  frogSpan.className = "frog";
  frogSpan.id = `frog-${frog.name}`;

  document.getElementById(`Lane-${number + 1}`).appendChild(frogSpan);
  document.getElementById(`Lane-${number + 1}`).appendChild(frogName);
});

//Create hop/ movement

function racingFrog(racer) {
  let racerName = document.getElementById(`frog-${racer.name}`);
  let hop = setInterval(function () {
    if (racer.progress < 100) {
      const trackWidth = track.offsetWidth;
      hopLength = Math.floor(Math.random() * 100) / (trackWidth / 100);
      // console.log(trackWidth);
      racer.progress += hopLength;
      racerName.style.left = `${racer.progress}%`;
    } else {
      racerName.style.left = "100%";
    }
  }, Math.floor(Math.random() * 2000));
  console.log(racerName);

  console.log("racingFrog()", racer);
}

racers.forEach(function (frog) {
  racingFrog(frog);
});
