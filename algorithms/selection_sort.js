// Selection sort:

// Step 1. Find a smallestIdx of the smallestValue in the array
// Step 2. If the smallestIdx is not eq with currentIdx then swap them

// Time complexity is O(n2)

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var smallIdx = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[smallIdx] > arr[j]) {
        smallIdx = j
      }
    }

    if (arr[i] !== smallIdx) {
      let temp = arr[i];
      arr[i] = arr[smallIdx];
      arr[smallIdx] = temp
    }
  }
  return arr;
}

--------------------------------------------------------------------------------


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


