// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kg = 2.204 pound

const inputEl = document.getElementById("input_el")

const convertBtn = document.getElementById("btn")

const errorMsg = document.getElementById("error_message")

const lengthInfo = document.getElementById("length_info")
const volumeInfo = document.getElementById("volume_info")
const massInfo = document.getElementById("mass_info")

function convertInput(input)
{
    errorMsg.textContent = ""
    let data = Number(input.value)

    if(!Number.isNaN(data))
    {
        return data
    }
    else
    {
        errorMsg.textContent = "Not a valid input! please try again"
        input.value = ""
    }

}

convertBtn.addEventListener("click",function(){
    let data = convertInput(inputEl)
    if(data)
    {
        lengthInfo.textContent = `${data} meters = ${(data*3.281).toFixed(3)} feet | ${data} feet = ${(data/3.281).toFixed(3)} meters`

        volumeInfo.textContent = `${data} liters = ${(data*0.264).toFixed(3)} gallons | ${data} gallons = ${(data/0.264).toFixed(3)} liters`

        massInfo.textContent = `${data} kilograms = ${(data*2.204).toFixed(3)} pounds | ${data} pounds = ${(data/2.204).toFixed(3)} kilograms`
    }
})