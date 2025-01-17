# Unexpected NaN values in addition function
This repository demonstrates a common JavaScript bug involving the handling of NaN (Not a Number) values. The `foo` function aims to add two numbers, but it fails to correctly handle cases where one or both inputs are NaN. 

## Bug Description
The `bug.js` file contains a function that adds two numbers. It correctly handles null values but does not explicitly check for NaN. As a result, if either `a` or `b` is NaN, the function will return NaN.  This behavior may not be what's expected in all situations.

## Solution
The `bugSolution.js` file demonstrates how to fix this issue by explicitly checking for NaN using `isNaN()` before performing the addition.  This ensures that the function behaves as expected, even when dealing with NaN input values.  The solution handles NaN values by returning a more informative value or throwing an error, as appropriate for the application context.
