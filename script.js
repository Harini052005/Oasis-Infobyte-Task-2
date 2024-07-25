
function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('inputTemperature').value);
    const unitInput = document.getElementById('inputUnit').value;
    let result;

    if (unitInput === 'celsius') {
        const fahrenheit = (tempInput * 9/5) + 32;
        const kelvin = tempInput + 273.15;
        result = `${tempInput}° Celsius is equal to ${fahrenheit.toFixed(2)}° Fahrenheit and ${kelvin.toFixed(2)} Kelvin.`;
    } else if (unitInput === 'fahrenheit') {
        const celsius = (tempInput - 32) * 5/9;
        const kelvin = (tempInput - 32) * 5/9 + 273.15;
        result = `${tempInput}° Fahrenheit is equal to ${celsius.toFixed(2)}° Celsius and ${kelvin.toFixed(2)} Kelvin.`;
    } else if (unitInput === 'kelvin') {
        const celsius = tempInput - 273.15;
        const fahrenheit = (tempInput - 273.15) * 9/5 + 32;
        result = `${tempInput} Kelvin is equal to ${celsius.toFixed(2)}° Celsius and ${fahrenheit.toFixed(2)}° Fahrenheit.`;
    }

    document.getElementById('result').innerText = result;
}
