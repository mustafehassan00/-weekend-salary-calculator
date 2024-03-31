//test if js pops up
console.log('JS');
function addNewEmployee(event){
    event.preventDefault()
//Text Input
    let firstNametext= document.getElementById("firstName").value
    let lastNametext= document.getElementById("lastName").value
    let idNumbertext= document.getElementById("idNumber").value
    let jobTitletext= document.getElementById("jobTitle").value
    let annualSalarytext= document.getElementById("annualSalary").value
    let tableBody = document.getElementById('tableBody')
//Table Data
    tableBody.innerHTML += `<tr>
  <td id="tableFirst">${firstNametext}</td>
  <td id="tableLast"> ${lastNametext}</td>
  <td id="tableID">${idNumbertext}</td>
  <td id="tableJob"> ${jobTitletext}</td>
  <td id="tableAnnual">${annualSalarytext}</td>
</tr>`

//test to see if the code is working
    console.log('firstName test',firstNametext)
    console.log('lastName test',lastNametext)
    console.log('idNumber test',idNumbertext)
    console.log('jobTitle test',jobTitletext)
    console.log('annualSalary test',annualSalarytext)
}

