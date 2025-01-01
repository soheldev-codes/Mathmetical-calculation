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


        const areaDisplay = document.getElementById('areaCalculationDisplay')
        const li = document.createElement('li')
        li.innerText = `${calculationList}. Triangle ${area} cm² `;


        areaDisplay.appendChild(li)



        console.log(area)

    }



}



function getInputValue(getId) {
    const inputField = document.getElementById(getId)
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText)
    inputField.value = " "
    return inputValue;

}