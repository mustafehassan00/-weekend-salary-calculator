function addNewEmployee(event){
    event.prevent()
//Text Input
    let firstNametext= document.getElementById("firstNameInput").value
    let lastNametext= document.getElementById("lastNameInput").value
    let idNumbertext= document.getElementById("idNumberInput").value
    let jobTitletext= document.getElementById("jobTitleInput").value
    let annualSalarytext= document.getElementById("annualSalaryInput").value
    let tableBody = document.getElementById('tableBody')
//Table Data
    tableBody.innerHTML += `<tr>
  <td id="tableFirst">${firstNametext}</td>
  <td id="tableLast"> ${lastNametext}</td>
  <td id="tableID">${idNumbertext}</td>
  <td id="tableJob"> ${jobTitletext}</td>
  <td id="tableAnnual">${annualSalarytext}</td>
</tr>`

    console.log('firstName test',firstNametext)
    console.log('lastName test',lastNametext)
    console.log('idNumber test',idNumbertext)
    console.log('jobTitle test',jobTitletext)
    console.log('annualSalary test',annualSalarytext)
}

