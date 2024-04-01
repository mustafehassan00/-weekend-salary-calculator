//test if js pops up
console.log('JS');

let totalMonthlyCost=0;
function addNewEmployee(event){
    event.preventDefault()
//Text Input
    let firstNametext= document.getElementById("firstName").value
    let lastNametext= document.getElementById("lastName").value
    let idNumbertext= document.getElementById("idNumber").value
    let jobTitletext= document.getElementById("jobTitle").value
    let annualSalarytext= document.getElementById("annualSalary").value
    let tableBody = document.getElementById('tableBody')
    let annualSalary = parseFloat(document.getElementById("annualSalary").value);

//Table Data
    tableBody.innerHTML += `<tr>
  <td id="tableFirst">${firstNametext}</td>
  <td id="tableLast"> ${lastNametext}</td>
  <td id="tableID">${idNumbertext}</td>
  <td id="tableJob"> ${jobTitletext}</td>
  <td id="tableAnnual">${annualSalarytext}</td>
  <td><button onclick="deleteEmployee(event)">␡</button</td>
</tr>`
totalMonthlyCost += annualSalary / 12;
    updateTotalMonthlyCost();
    console.log('firstName',firstNametext)
    console.log('lastName',lastNametext)
    console.log('idNumber',idNumbertext)
    console.log('jobTitle ',jobTitletext)
    console.log('annualSalary',annualSalarytext)
}
function deleteEmployee(event){
    console.log('Deleting',event.target)
    const toDelete=event.target
    toDelete.parentElement.parentElement.remove()
    let row = event.target.closest('tr');
    let annualSalary = parseFloat(row.querySelector('#tableAnnual').textContent);
    totalMonthlyCost -= annualSalary / 12;
    row.remove();
    updateTotalMonthlyCost()
}
function updateTotalMonthlyCost() {
    let totalMonthlyCostElement = document.getElementById("totalMonthlyCost");
    totalMonthlyCostElement.textContent = "Total Monthly Cost: $" + totalMonthlyCost.toFixed(2);
    let footer = document.getElementById("footer");

    if (totalMonthlyCost > 20000) {
        totalMonthlyCostElement.style.color = "red";
    } else {
        totalMonthlyCostElement.style.color = ""; 
    }
}