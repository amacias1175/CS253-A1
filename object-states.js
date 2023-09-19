/**
    (replace this with your function comment which describes 
    what your function does, what the arguments are, and what 
    the output should be.)
*/
function findVotes(states, locs) {
    const votes_array = [];
    var result_array = [];
    var state = "";
    var zip = "";
    var votes = 0;
    
    for (i = 0; i < locs.length; i++) {
    	var position = locs[i].split("-");
      state = position[0];
      zip = position[1];
      votes = states[state][zip];
      
      result_array.push(locs[i], votes);
      votes_array.push(result_array);
      result_array = [];
     
    }
   	return votes_array;
   
   
}

  
const election = {
    'ca': {94301: 3456, 94303: 255},
    'tx': {77494: 400, 75034: 9863},
    
}

console.log(findVotes(election, ['ca-94303', 'tx-77494', 'ca-94301', 'tx-75034']));