function triangleCalculateGetValue() {

    const base = getInputValue('triangleBase')

    const height = getInputValue('triangleHeight')

    const area = 0.5 * base * height;



    console.log(area)

}



function getInputValue(getId) {
    const inputField = document.getElementById(getId)
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText)
    return inputValue;

}