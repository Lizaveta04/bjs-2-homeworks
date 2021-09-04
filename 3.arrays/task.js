function compareArrays(arr1, arr2) {
  let result = true;

  if (arr1.every((item) => item) === arr2.every((item) => item)){
  	result;
  } else {
  	result = false;
  }

  return result;
}

function advancedFilter(arr) {
  
  let resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item*10);

  return resultArr; 
}
