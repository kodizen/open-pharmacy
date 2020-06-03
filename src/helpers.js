export function isValidPostCode(postcode) {
  const govRegExp = new RegExp(
    "^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$"
  );
  return govRegExp.test(postcode);
}

export function getOutwardPostCode(postcode) {
  return postcode.split(" ")[0];
}

export function getPostCodeArray(data) {
  console.log("getPostCodeArray -> data", data);
  const error = "Sorry, that's an invalid array";

  // Is it an array?
  if (!Array.isArray(data)) {
    return error;
  }
  // Does it contain anything?
  if (data.length === 0) {
    return error;
  }

  // Does it contain our property (postcode)?
  if (!data.some((obj) => obj["postcode"])) {
    return error;
  }

  let arr = [];
  data.forEach((element) => {
    arr.push(element.postcode);
  });
  return arr;
}

export function getOutwardPostCodes(data) {
  let arr = [];
  data.forEach((element) => {
    arr.push(getOutwardPostCode(element));
  });
  return arr;
}

export function removeDuplicates(data) {
  // Needs tests to check for invalid arrays etc.
  let unique_array = Array.from(new Set(data));
  return unique_array;
}
export function getTotalCount(data) {
  // Kinda pointless this one...
  return removeDuplicates(data).length;
}
export function getPostCodeCount(data, postcode) {
  let count = 0;
  for (let index = 0; index < data.length; index++) {
    if (data[index] === postcode) {
      count++;
    }
  }
  return count;
}

export function getPostCodePercentage(data, postcode) {
  return Math.floor((getPostCodeCount(data, postcode) / data.length) * 100);
}

export function getFormattedData(data) {
  // Get a list of just the outward postcodes
  let outwardPostcodes = getOutwardPostCodes(data);

  // Get a list of outward postcodes, with duplicates removed - to loop over
  let dataWithNoDuplicates = removeDuplicates(outwardPostcodes);

  // Set up an array to be returned
  let returnedArray = [];

  // For each of our outward postcodes ...
  dataWithNoDuplicates.forEach((postcode) => {
    // Get the postcode count
    const count = getPostCodeCount(outwardPostcodes, postcode);

    //Get the postcode percentage
    const percentage = getPostCodePercentage(outwardPostcodes, postcode);

    // return it
    returnedArray.push({
      postcode,
      count,
      percentage,
    });
  });
  return returnedArray;
}
