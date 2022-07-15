const findTwoSum = (numsArray, target) => {
    // hashmap to hold the values and their index
    const numbersMap = {}; 
    for (let i = 0; i < numsArray.length; i++ ) {
        // check if the current value is in the map
        const currentMapValue = numbersMap[numsArray[i]]; 
        if (currentMapValue !== undefined) {
            // if it is, return the two values
            return [numsArray[currentMapValue], numsArray[i]]; 
        } else {
            // if it is not, add the value to the map with the index as the value
            const numToFind = target - numsArray[i];
            numbersMap[numToFind] = i;
        }
    }
    return [];
}


const result1 = findTwoSum([2, 7, 11, 15], 9);
console.log(result1) // [2, 7]