/////////// Sual 1

// function sirala(arr, actEl) {
//   let tempArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== actEl) {
//       tempArr.push(arr[i]);
//     }
//   }

//   while (tempArr.length < arr.length) {
//     tempArr.push(actEl);
//   }

//   return tempArr;
// }

// const massiv = [2, 1, 2, 2, 2, 3, 4, 2];
// const hereketEtdirilecekElement = 2;
// const result = sirala(massiv, hereketEtdirilecekElement);
// console.log(result);

// output example - [1, 3, 4, 2, 2, 2, 2, 2] // 1, 3 və 4 rəqəmləri fərqli sıralana bilər

/////////// Sual 2 --- Sorts

// // Bubble Sort

// O(n^2) time complexity

// function bubbleSort(arr) {
//   let swapped;

//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temporaryValue = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temporaryValue;
//         swapped = true;
//       }
//     }
//   } while (swapped);

//   return arr;
// }

// const array = [4, 0, 11, 1, 71, -33, 5, 61, 73];
// const result = bubbleSort(array);

// console.log(result);

// // Quick Sort

// divide and conquer && pivot

// Best / Avg case -> O(n log n)
// Wors case -> O(n^2)

// function quickSort(arr) {
//   if (arr.length < 1) {
//     return arr;
//   }

//   let pivot = arr[arr.length - 1];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }

// const array = [4, 0, 11, 1, 71, -33, 5, 61, 73, 45, 3, 5, 32];
// const result = quickSort(array);

// console.log(result);

// // Selection Sort

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     let temporaryValue = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temporaryValue;
//   }

//   return arr;
// }

// const array = [4, 0, 11, 1, 71, -33, 5, 61, 73, 45, 3, 5, 32];
// const result = selectionSort(array);

// console.log(result);
