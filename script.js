let form = document.querySelector("form");
console.log(form)


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");
    console.log(height, weight, result)

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerText = "Please enter a valid height";
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
            result.innerText = "Please enter a valid weight";
        }
    else {
        const bmi= (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML= `<span>${bmi}</span>`;
    }
})