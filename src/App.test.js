import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import {getOutwardPostcode} from './helpers.js'


test("renders a histogram", () => {
 
});

test("it groups postcodes without duplicates", () => {
  // Given a dataset
  const date = [
    {
      postcode: "ME12 1UP",
    },
    {
      postcode: "ME12 1UP",
    },
    {
     
      postcode: "ME12 1UP",
    },
    {
      postcode: "ME12 1UP",
    },
    {
      postcode: "ME14 1EW",
    }
  ];



  // We get an array of postcodes grouped, without duplicates
});

test("it gets the outward code of a postcode", () => {
  // Given a postcode
  const postcode = 'M4 1AB'
  const returnedValue = getOutwardPostcode(postcode);
  // We get just the outward portion of the postcode
  expect(returnedValue).toEqual('M4')
});

test("it handles postcodes without spaces", () => {
  // Given a postcode without spaces
  // We are returned the correct outward code e.g M4A23 would return M4, M414FG would return M41
});

test("it handles incorrect postcodes", () => {
  // Given a postcode that is incorrectly formatted e.g using numbers, or the wrong number of characters
  // We are returned an error / a null object
});

test("it includes total count of postcodes", () => {
  // Given a list of postcodes
  // We are returned an array of postcode objects, with the total count of postcodes as a root property
});

test("it produces a list of postcodes with the  percentage of total amount", () => {
  // Given an array of postcodes with counts
  // We are returned an array of postcode objects, with the percentage of total postcode
});

test("it produces a list of top 5 postcodes", () => {
  // Given a an array of postcodes with counts
  // We get the top 5 postcodes
});

test("it includes the datestamp if one is provided", () => {
  // Given a datestamp in the object
  // We are returned the same datestamp
});

test("it includes todays date as a datestamp if one is not provided", () => {
  // Given no datestamp in the object
  // We are returned todays datestamp
});
