
let operation = ""
let memory = ""

const setOperation = (value) => {
    operation += value
}
const clearOperation = () =>{
    operation = ""
}

const plusOperation = () =>{
    operation += "+"
}

const minusOperation = () =>{
    operation += "-"
}
const divisionOperation = () =>{
    operation += "/"
}

const multiplicationOperation = () =>{
    operation += "*"
}

const changeSignalOperation = () =>{
    operation += "* (-1)"
}

const setComma = () =>{
    operation += ","
}
const calculate = () => {
    //alert(operation)
    alert(eval(operation))
}
const memoryRead = () => {
    alert(memory)
}

const memoryClear = () => {
    memory = ""
}

const memorySave = () => {
    memory = eval(operation)
}

const memoryAdd = () =>{

}
const memoryRemove = () =>{

}
