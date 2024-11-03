function convertTemperature() {
    const tempValue = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (isNaN(tempValue)) {
        document.getElementById("result").textContent = "Please enter a valid number";
        return;
    }

    switch (unit) {
        case "Celsius":
            result = `Fahrenheit: ${(tempValue * 9/5 + 32).toFixed(2)} °F, Kelvin: ${(tempValue + 273.15).toFixed(2)} K`;
            break;
        case "Fahrenheit":
            result = `Celsius: ${((tempValue - 32) * 5/9).toFixed(2)} °C, Kelvin: ${((tempValue - 32) * 5/9 + 273.15).toFixed(2)} K`;
            break;
        case "Kelvin":
            result = `Celsius: ${(tempValue - 273.15).toFixed(2)} °C, Fahrenheit: ${((tempValue - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
        default:
            result = "Please select a valid unit";
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}
