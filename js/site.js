//Display message to the user
function getValues(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //Validate Input
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        let numArray = generateNumbers(startValue, endValue);
        displayNumbers(numArray);
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Only integers are allowed for Hundo'
        });
    }
}

//Input: Integer, Integer
//Return: Array of numbers
//Creates an array of integers from sVal to eVal
function generateNumbers(sVal, eVal){
    let numArray = [];
    for (let i = sVal; i <= eVal; i++){
        numArray.push(i);
    }

    return numArray;
}

//Requirements: An array of integers
//Return: none
//Populates a table with rows counting up from 0 to 100
function displayNumbers(numArray){
    let templateRows = "";
    let className = "";
    for (let i = 0; i < numArray.length; i++){

        if (numArray[i] % 2 == 0){
            className = "even";
        } else {
            className = "odd";
        }

        let row = `<tr><td class="${className}">${numArray[i]}</td></tr>`;
        templateRows += row;
    }

    document.getElementById("results").innerHTML = templateRows;
}