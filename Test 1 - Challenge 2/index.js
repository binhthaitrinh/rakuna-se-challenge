// Refactor the code from Challenge 1

var inputs = readline().split(' ');
const [
  nbFloors, // number of floors
  width, // width of the area
  nbRounds, // maximum number of rounds
  exitFloor, // floor on which the exit is found
  exitPos, // position of the exit on its floor
  nbTotalClones, // number of generated clones
  nbAdditionalElevators, // ignore (always zero)
  nbElevators, // number of elevators
] = inputs.map((i) => parseInt(i));

const floorGoal = {}; // store the goal (elevator) position of each floor
for (let i = 0; i < nbElevators; i++) {
  var inputs = readline().split(' ');
  const [elevatorFloor, elevatorPos] = inputs.map((ele) => parseInt(ele)); // floor and position of elevator on that floor
  floorGoal[elevatorFloor] = elevatorPos;
}

// game loop
while (true) {
  var inputs = readline().split(' ');
  const cloneFloor = parseInt(inputs[0]); // floor of the leading clone
  const clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
  const direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT

  // store current goal (elevator or exit) position of current floor
  const currentGoal =
    cloneFloor === exitFloor ? exitPos : floorGoal[cloneFloor];

  // Act based on inline evaluation
  console.log(
    clonePos <= 0 || // when reach start
    clonePos >= width - 1 || // when reach end
    (clonePos > currentGoal && direction === 'RIGHT') || // when going opposite direction of goal
      (clonePos < currentGoal && direction === 'LEFT') // when going opposite direction of goal
      ? 'BLOCK'
      : 'WAIT'
  );
}
