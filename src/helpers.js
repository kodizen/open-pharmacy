export function isValidPostcode(postcode) {
  const govRegExp = new RegExp(
    "^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$"
  );
  return govRegExp.test(postcode);
}

export function getOutwardPostcode(postcode) {
  return postcode.split(" ")[0];
}
