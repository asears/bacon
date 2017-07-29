  // Fulfill action logic
  exports.rockPaperScissors = function responseHandler (assistant) {
    var rnd = Math.random();
    if(rnd>=0.75)
      assistant.tell('Rock');
    else if (rnd>= 0.5 && rnd <0.75)
      assistant.tell('Paper');
    else
      assistant.tell('Scissors');
  }