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
