function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  return array
}

function getIdxOfSmallest(array, startIndex) {
  let smallestValue = array[startIndex];
  let smallest = startIndex;
  for (let i = startIndex + 1; i < array.length; i++) {
    if (smallestValue > array[i]) {
      smallestValue = array[i]
      smallest = i
    }
  }
  return smallest;
}

function selectionSort(array) {
  /*
    Step 1: find the smallest idx of the subarray
    Step 2: swap smallestIdx with the last idx of the arr
  */
  let copyArr = [...array];
  for (let i = 0; i < copyArr.length; i++) {
    let smallestIdx = getIdxOfSmallest(copyArr, i);
    if (copyArr[i] > copyArr[smallestIdx]) {
      swap(copyArr, i, smallestIdx)
    }
  }
  return copyArr
}


// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     // Set default active minimum to current index.
//     let min = i;
//     // Loop to array from the current value.
//     for (let j = i + 1; j < array.length; j++) {
//       // If you find an item smaller than the current active minimum,
//       // make the new item the new active minimum.
//       if (array[j] < array[min]) {
//         min = j;
//       }
//       // Keep on looping until you've looped over all the items in the array
//       // in order to find values smaller than the current active minimum.
//     }
//     // If the current index isn't equal to the active minimum value's index anymore
//     // swap these two elements.
//     if (i !== min) {
//       [array[i], array[min]] = [array[min], array[i]];
//     }
//   }
//   return array;
// }
