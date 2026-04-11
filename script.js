function openTab(tabId)
{

document
.querySelectorAll(".tab-content")
.forEach(tab =>
tab.classList.remove("active"));

document
.getElementById(tabId)
.classList.add("active");

}


function showSection(sectionId)
{

document
.querySelectorAll(".section")
.forEach(sec =>
sec.classList.remove("active"));

document
.getElementById(sectionId)
.classList.add("active");

}

function openTab(tabId)
{

document.querySelectorAll(".tab-content")
.forEach(tab =>
tab.classList.remove("active"));

document.getElementById(tabId)
.classList.add("active");

document.querySelectorAll(".tab-btn")
.forEach(btn =>
btn.classList.remove("active"));

event.target.classList.add("active");

}

function calculateTax()
{

// GET VALUES
let salary =
Number(document.getElementById("salary").value) || 0;

let interest =
Number(document.getElementById("interest").value) || 0;

let rental =
Number(document.getElementById("rental").value) || 0;

let otherIncome =
Number(document.getElementById("otherIncome").value) || 0;


// ALLOWANCES
let hra =
Number(document.getElementById("hra").value) || 0;

let transport =
Number(document.getElementById("transport").value) || 0;

let medical =
Number(document.getElementById("medical").value) || 0;


// DEDUCTIONS
let d80c =
Number(document.getElementById("d80c").value) || 0;

let d80d =
Number(document.getElementById("d80d").value) || 0;

let d80tta =
Number(document.getElementById("d80tta").value) || 0;


// CALCULATIONS
let totalIncome =
salary + interest + rental + otherIncome;

let totalDeduction =
d80c + d80d + d80tta + hra + transport + medical;

let taxableIncome =
totalIncome - totalDeduction;

if(taxableIncome < 0)
taxableIncome = 0;


// NEW REGIME TAX CALCULATION
let tax = 0;

if(taxableIncome <= 300000)
tax = 0;

else if(taxableIncome <= 600000)
tax = (taxableIncome - 300000) * 0.05;

else if(taxableIncome <= 900000)
tax = 15000 + (taxableIncome - 600000) * 0.10;

else if(taxableIncome <= 1200000)
tax = 45000 + (taxableIncome - 900000) * 0.15;

else if(taxableIncome <= 1500000)
tax = 90000 + (taxableIncome - 1200000) * 0.20;

else
tax = 150000 + (taxableIncome - 1500000) * 0.30;


// ADD 4% CESS
let cess = tax * 0.04;

let totalTax = Math.round(tax + cess);


// DISPLAY RESULTS
document.getElementById("results").innerHTML =

"<p>Total Income: ₹ " + totalIncome + "</p>" +

"<p>Total Deduction: ₹ " + totalDeduction + "</p>" +

"<p>Taxable Income: ₹ " + taxableIncome + "</p>" +

"<p><b>Total Tax: ₹ " + totalTax + "</b></p>";


// SAVE DATA (IMPORTANT FOR VIEW DETAILS)
localStorage.setItem("salary", salary);
localStorage.setItem("interest", interest);
localStorage.setItem("rental", rental);
localStorage.setItem("otherIncome", otherIncome);

localStorage.setItem("hra", hra);
localStorage.setItem("transport", transport);
localStorage.setItem("medical", medical);

localStorage.setItem("d80c", d80c);
localStorage.setItem("d80d", d80d);
localStorage.setItem("d80tta", d80tta);

localStorage.setItem("totalIncome", totalIncome);
localStorage.setItem("totalDeduction", totalDeduction);
localStorage.setItem("taxableIncome", taxableIncome);
localStorage.setItem("totalTax", totalTax);


// OPTIONAL: SUCCESS MESSAGE
console.log("Tax Calculated Successfully");

}

function saveAndGo()
{
    // GET VALUES
    let salary =
    document.getElementById("salary").value || 0;

    let interest =
    document.getElementById("interest").value || 0;

    let rental =
    document.getElementById("rental").value || 0;

    let otherIncome =
    document.getElementById("otherIncome").value || 0;

    let hra =
    document.getElementById("hra").value || 0;

    let transport =
    document.getElementById("transport").value || 0;

    let medical =
    document.getElementById("medical").value || 0;

    let d80c =
    document.getElementById("d80c").value || 0;

    let d80d =
    document.getElementById("d80d").value || 0;

    let d80tta =
    document.getElementById("d80tta").value || 0;


    // CALCULATE AGAIN (important)
    let totalIncome =
    Number(salary) + Number(interest) +
    Number(rental) + Number(otherIncome);

    let totalDeduction =
    Number(d80c) + Number(d80d) +
    Number(d80tta) + Number(hra) +
    Number(transport) + Number(medical);

    let taxableIncome =
    totalIncome - totalDeduction;

    if(taxableIncome < 0)
    taxableIncome = 0;

    let tax = 0;

    if(taxableIncome <= 300000)
    tax = 0;

    else if(taxableIncome <= 600000)
    tax = (taxableIncome - 300000) * 0.05;

    else if(taxableIncome <= 900000)
    tax = 15000 + (taxableIncome - 600000) * 0.10;

    else
    tax = 45000 + (taxableIncome - 900000) * 0.15;

    let totalTax = tax;


    // SAVE EVERYTHING
    localStorage.setItem("salary", salary);
    localStorage.setItem("interest", interest);
    localStorage.setItem("rental", rental);
    localStorage.setItem("otherIncome", otherIncome);

    localStorage.setItem("hra", hra);
    localStorage.setItem("transport", transport);
    localStorage.setItem("medical", medical);

    localStorage.setItem("d80c", d80c);
    localStorage.setItem("d80d", d80d);
    localStorage.setItem("d80tta", d80tta);

    localStorage.setItem("totalIncome", totalIncome);
    localStorage.setItem("totalDeduction", totalDeduction);
    localStorage.setItem("taxableIncome", taxableIncome);
    localStorage.setItem("totalTax", totalTax);


    // GO TO PAGE
    window.location.href = "view-details.html";
}

function viewDetails()
{

alert(

"Income: "+
document.getElementById("salary").value

);




}