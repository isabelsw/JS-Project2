let degree = prompt("Enter the name of your degree: ");
let score = prompt("How many points did you score in the academic year 2023/24? ");

if (degree === "Physics" && score >= 200 && score <= 249) {
// If score is in the range of 200 to 249, then the discount is 25%.
    console.log("25%");
} else if (degree === "Physics" && score >= 250) {
// If score is above 250, then the discount is 50%.
    console.log("50%");
} else {
// If the score is below 200, then there is no discount.
    console.log("No discount");
}