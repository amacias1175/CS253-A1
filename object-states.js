/**
    the findvotes function takes an object named states and an array named locs. This function will iterate over the locs array and 
    split each index to obtain the state and the zip vote and declare them to a variable. From this, we get the votes by indexing
    the states object from the state as the first index and the zip as the second index to get the votes integer and then we
    declare that number to a variable. We push the votes and the locs array index into an array. Using that array, we push that array 
    and the votes number into another array. Finally we reset the votes_array to prevent a circular array object. In the end,
    we get an array with arrays that constain the state, zip code, and the vote count. 
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

//test cases from below this comment
const election = {
    'ca': {94301: 3456, 94303: 255},
    'tx': {77494: 400, 75034: 9863},
    
}

console.log(findVotes(election, ['ca-94303', 'tx-77494', 'ca-94301', 'tx-75034']));