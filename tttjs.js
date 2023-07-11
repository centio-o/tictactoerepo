const yourId = "yourIdValue"; // Replace with your actual ID value

// Create a game
const createGameUrl = `http://localhost:8080/tictactoe/tictactoeserver/createGame?key=${yourId}`;

fetch(createGameUrl)
  .then(response => {
    // Handle the response
    if (response.ok) {
      console.log("Game created successfully");
    } else {
      console.error("Failed to create the game");
    }
  })
  .catch(error => {
    // Handle any errors
    console.error("An error occurred while creating the game:", error);
  });

// Make a move
const playerTile = "X"; // Replace with the actual player tile (X or O)
const yPos = 1; // Replace with the actual y position
const xPos = 2; // Replace with the actual x position

const moveUrl = `http://localhost:8080/tictactoe/tictactoeserver/move?key=${yourId}&tile=${playerTile}&y=${yPos}&x=${xPos}`;

fetch(moveUrl)
  .then(response => {
    // Handle the response
    if (response.ok) {
      console.log("Move made successfully");
    } else {
      console.error("Failed to make the move");
    }
  })
  .catch(error => {
    // Handle any errors
    console.error("An error occurred while making the move:", error);
  });

// Reset the game
const resetUrl = `http://localhost:8080/tictactoe/tictactoeserver/reset?key=${yourId}`;

fetch(resetUrl)
  .then(response => {
    // Handle the response
    if (response.ok) {
      console.log("Game reset successfully");
    } else {
      console.error("Failed to reset the game");
    }
  })
  .catch(error => {
    // Handle any errors
    console.error("An error occurred while resetting the game:", error);
  });

// Check the game status
const checkUrl = `http://localhost:8080/tictactoe/tictactoeserver/check?key=${yourId}`;

fetch(checkUrl)
  .then(response => {
    // Handle the response
    if (response.ok) {
      console.log("Game status checked successfully");
    } else {
      console.error("Failed to check the game status");
    }
  })
  .catch(error => {
    // Handle any errors
    console.error("An error occurred while checking the game status:", error);
  });

// Get the game board
const boardUrl = `http://localhost:8080/tictactoe/tictactoeserver/board?key=${yourId}`;

fetch(boardUrl)
  .then(response => {
    // Handle the response
    if (response.ok) {
      console.log("Game board fetched successfully");
      return response.json();
    } else {
      console.error("Failed to fetch the game board");
    }
  })
  .then(boardData => {
    // Handle the board data
    console.log("Board data:", boardData);
  })
  .catch(error => {
    // Handle any errors
    console.error("An error occurred while fetching the game board:", error);
  });
