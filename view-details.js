window.onload = function()
{
    function setValue(id)
    {
        let value = localStorage.getItem(id);

        if(value === null || value === "")
        value = 0;

        document.getElementById(id).innerHTML =
        "\u20B9 " + value;
    }

    setValue("salary");
    setValue("interest");
    setValue("rental");
    setValue("otherIncome");

    setValue("d80c");
    setValue("d80d");
    setValue("d80tta");

    setValue("hra");
    setValue("transport");
    setValue("medical");

    setValue("totalIncome");
    setValue("totalDeduction");
    setValue("taxableIncome");
    setValue("totalTax");

        setValue("stateTax");

         document.getElementById("jobType").innerHTML =
    localStorage.getItem("jobType") || "N/A";
};
