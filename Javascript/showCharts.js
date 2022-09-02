// Reference the buttons using variables.
let btnNineteen = document.getElementById("btn1");
let btnTwenty = document.getElementById("btn2");
let btnBoth = document.getElementById("btn3");
let imgChart = document.getElementById("img");
let figCap = document.getElementById("chart-cap");

// Adding the logic.
// When the button is clicked then the figure and figure caption should   change.
// Using "addEventListener" helps seperate the Javascript from the HTML by attaching an event to the DOM.

btnNineteen.addEventListener("click", function () {
	imgChart.src = "/Images/pets2019.jpg";
	figCap.innerHTML = "Fig 2. Visualisation of pet trends in 2019.";
});

btnTwenty.addEventListener("click", function () {
	imgChart.src = "/Images/pets2021.jpg";
	figCap.innerHTML = "Fig 3. Visualisation of pet trends in 2021.";
});

btnBoth.addEventListener("click", function () {
	imgChart.src = "/Images/pets2019vs2021.jpg";
	figCap.innerHTML =
		"Fig 4. Visualisation of comparison of pet trends in 2019 and 2021.";
});
