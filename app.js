function getInputValue(getId) {
    const inputField = document.getElementById(getId)
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText)
    inputField.value = " "
    return inputValue;

}


function displayShow(calculateName, areaValue) {
    const areaDisplay = document.getElementById('areaCalculationDisplay')
    const li = document.createElement('li')
    li.innerText = `${calculationList}. ${calculateName} ${areaValue} cm² `;
    areaDisplay.appendChild(li)

}


let calculationList = 0;


function triangleCalculateGetValue() {

    const base = getInputValue('triangleBase')

    const height = getInputValue('triangleHeight')

    if (isNaN(base) || isNaN(height)) {
        alert("Chack Value Field")
        return
    } else {
        const area = 0.5 * base * height;

        calculationList++


        // const areaDisplay = document.getElementById('areaCalculationDisplay')
        // const li = document.createElement('li')
        // li.innerText = `${calculationList}.  ${area} cm² `;
        // areaDisplay.appendChild(li)

        // Area Calculation Show
        displayShow("Triangle", area)

    }
}

function rectangleCalculateGetValue() {
    const width = getInputValue('reactangaleWidth')

    const length = getInputValue('reactangaleLength')

    if (isNaN(width) || isNaN(length)) {
        alert("Chack Value Field")
        return
    } else {
        const area = width * length;

        calculationList++

        // Area Calculation Show
        displayShow("Rectangle", area)

    }

}


