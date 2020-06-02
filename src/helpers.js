export function getOutwardPostcode(postcode) {
  const returnedPostcode = postcode.split(" ")[0];
  return returnedPostcode;
}
