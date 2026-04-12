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
    // ===== INPUT VALUES =====
    let salary = Number(document.getElementById("salary").value) || 0;
    let interest = Number(document.getElementById("interest").value) || 0;
    let rental = Number(document.getElementById("rental").value) || 0;
    let otherIncome = Number(document.getElementById("otherIncome").value) || 0;

    let d80c = Number(document.getElementById("d80c").value) || 0;
    let d80d = Number(document.getElementById("d80d").value) || 0;
    let d80tta = Number(document.getElementById("d80tta").value) || 0;

    let hra = Number(document.getElementById("hra").value) || 0;
    let transport = Number(document.getElementById("transport").value) || 0;
    let medical = Number(document.getElementById("medical").value) || 0;

    let jobType = document.getElementById("jobType").value;
    let taxType = document.getElementById("taxType").value;


    // ===== TOTAL CALCULATIONS =====
    let totalIncome = salary + interest + rental + otherIncome;

    let totalDeduction =
        d80c + d80d + d80tta +
        hra + transport + medical;


    // ===== JOB BASED BENEFITS =====
    if(jobType === "government")
    {
        totalDeduction += 50000; // extra benefit
    }
    else
    {
        totalDeduction += 20000;
    }


    // ===== TAXABLE INCOME =====
    let taxableIncome = totalIncome - totalDeduction;

    if(taxableIncome < 0)
    {
        taxableIncome = 0;
    }


    // ===== CENTRAL TAX (NEW REGIME SIMPLIFIED) =====
    let tax = 0;

    if(taxableIncome <= 300000)
    {
        tax = 0;
    }
    else if(taxableIncome <= 600000)
    {
        tax = (taxableIncome - 300000) * 0.05;
    }
    else if(taxableIncome <= 900000)
    {
        tax = 15000 + (taxableIncome - 600000) * 0.10;
    }
    else
    {
        tax = 45000 + (taxableIncome - 900000) * 0.15;
    }


    // ===== STATE TAX (SIMULATION) =====
    let stateTax = 0;

    if(taxType === "both")
    {
        stateTax = tax * 0.05; // 5% extra
    }


    // ===== TOTAL TAX =====
    let totalTax = Math.round(tax + stateTax);


    // ===== UPDATE RESULT UI =====
    document.getElementById("r_income").innerText = "₹ " + totalIncome;
    document.getElementById("r_deduction").innerText = "₹ " + totalDeduction;
    document.getElementById("r_taxable").innerText = "₹ " + taxableIncome;
if(document.getElementById("r_central"))
{
    document.getElementById("r_central").innerText = "₹ " + tax;
}

if(document.getElementById("r_state"))
{
    document.getElementById("r_state").innerText = "₹ " + stateTax;
}

if(document.getElementById("r_total"))
{
    document.getElementById("r_total").innerText = "₹ " + totalTax;
}


    // ===== SAVE TO LOCAL STORAGE =====
    localStorage.setItem("salary", salary);
    localStorage.setItem("interest", interest);
    localStorage.setItem("rental", rental);
    localStorage.setItem("otherIncome", otherIncome);

    localStorage.setItem("d80c", d80c);
    localStorage.setItem("d80d", d80d);
    localStorage.setItem("d80tta", d80tta);

    localStorage.setItem("hra", hra);
    localStorage.setItem("transport", transport);
    localStorage.setItem("medical", medical);

    localStorage.setItem("jobType", jobType);
    localStorage.setItem("stateTax", stateTax);

    localStorage.setItem("totalIncome", totalIncome);
    localStorage.setItem("totalDeduction", totalDeduction);
    localStorage.setItem("taxableIncome", taxableIncome);
    localStorage.setItem("totalTax", totalTax);
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




function getAnswer()
{
    let question = document.getElementById("aiQuestion").value.toLowerCase();
    let answer = "";

    // ===== KEYWORD BASED AI =====

    if(question.includes("income tax"))
    {
        answer = "Income tax is a direct tax paid on income earned by individuals.";
    }

    else if(question.includes("80c"))
    {
        answer = "Section 80C allows deduction up to ₹1.5 lakh for investments like LIC, PPF, etc.";
    }

    else if(question.includes("hra"))
    {
        answer = "HRA is House Rent Allowance provided to employees for rent expenses.";
    }

    else if(question.includes("deduction"))
    {
        answer = "Deductions reduce your taxable income, helping you pay less tax.";
    }

    else if(question.includes("tax slab"))
    {
        answer = "Tax slabs are ranges of income taxed at different rates.";
    }

    else if(question.includes("government"))
    {
        answer = "Government employees may get additional benefits and allowances.";
    }

    else if(question.includes("state tax"))
    {
        answer = "In India, state tax is simulated here for analysis purposes.";
    }

    else
    {
        answer = "Sorry, I don't have exact answer. Please refer to tax laws section or try another question.";
    }

    document.getElementById("aiAnswer").innerHTML =
    "<p><b>Answer:</b> " + answer + "</p>";
}
