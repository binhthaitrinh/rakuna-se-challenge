// Complete the Don't Panic code challenge in Javascript

var inputs = readline().split(' ');
const nbFloors = parseInt(inputs[0]); // number of floors
const width = parseInt(inputs[1]); // width of the area
const nbRounds = parseInt(inputs[2]); // maximum number of rounds
const exitFloor = parseInt(inputs[3]); // floor on which the exit is found
const exitPos = parseInt(inputs[4]); // position of the exit on its floor
const nbTotalClones = parseInt(inputs[5]); // number of generated clones
const nbAdditionalElevators = parseInt(inputs[6]); // ignore (always zero)
const nbElevators = parseInt(inputs[7]); // number of elevators
const floorGoal = {}; // store the goal (elevator) position of each floor
for (let i = 0; i < nbElevators; i++) {
  var inputs = readline().split(' ');
  const elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
  const elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor
  floorGoal[elevatorFloor] = elevatorPos;
}

// game loop
while (true) {
  var inputs = readline().split(' ');
  const cloneFloor = parseInt(inputs[0]); // floor of the leading clone
  const clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
  const direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT

  if (clonePos >= width - 1 || clonePos <= 0) {
    console.log('BLOCK');
  } else if (
    (clonePos > floorGoal[cloneFloor] ||
      (cloneFloor === exitFloor && clonePos > exitPos)) &&
    direction === 'RIGHT'
  ) {
    console.log('BLOCK');
  } else if (
    (clonePos < floorGoal[cloneFloor] ||
      (cloneFloor === exitFloor && clonePos < exitPos)) &&
    direction === 'LEFT'
  ) {
    console.log('BLOCK');
  } else {
    console.log('WAIT');
  }
}
