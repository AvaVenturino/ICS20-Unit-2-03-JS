// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users address and shows it back to user.
 */

function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-name").value
  const streetName = parseInt(document.getElementById("street-number").value)

     // output
  document.getElementById("address").innerHTML =
    "Your address is: " + street-Number + ", street-Name "."
}
