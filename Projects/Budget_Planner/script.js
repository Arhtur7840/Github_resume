/* let TI = document.getElementById("totalIncome").value;
let HE = document.getElementById("housingExpenses").value;
let LE = document.getElementById("livingExpenses").value;
let OE = document.getElementById("otherExpenses").value;
let TE = document.getElementById("totalExpenses").value;
let RB = document.getElementById("remainingBudget").value;
let YI = document.getElementById("yearlyIncome").value;
let YE = document.getElementById("yearlyExpenses").value;
let YS = document.getElementById("yearlySavings").value; */

/* function addSalary()
{
   console.log(MS);
};
function addRent()
{
    console.log(R);
};
function addUtilities()
{
    console.log(U);
};
function addGroceries()
{
    console.log(G);
};
function addTransport()
{
    console.log(T);
};
function addEntertainment()
{
    console.log(E);
};
function addMisc()
{
    console.log(M);
}; */
function setSavingsGoal()
{
    let MS = parseInt(document.getElementById("salaryInput").value);
    let R = parseInt(document.getElementById("rentInput").value);
    let U = parseInt(document.getElementById("utilitiesInput").value);
    let G = parseInt(document.getElementById("groceriesInput").value);
    let T = parseInt(document.getElementById("transportInput").value);
    let E = parseInt(document.getElementById("entertainmentInput").value);
    let M = parseInt(document.getElementById("miscInput").value);
    let SG = parseInt(document.getElementById("savingsInput").value);
    let SP = MS + SG;
    let TI = MS - R - U - G - T - E - M;
    let YI = MS * 12;
    let HE = R + U;
    let LE = G + T;
    let OE = E + M;
    let TME = R + U + G + T + E + M;
    let RB =  MS - R - U - G - T - E - M;

    document.getElementById("totalIncome").innerHTML = `<span>${TI}</span>`;
    document.getElementById("housingExpenses").innerHTML = `<span>${HE}</span>`;
    document.getElementById("livingExpenses").innerHTML = `<span>${LE}</span>`;
    document.getElementById("otherExpenses").innerHTML = `<span>${OE}</span>`;
    document.getElementById("totalExpenses").innerHTML = `<span>${TME}</span>`;
    document.getElementById("remainingBudget").innerHTML = `<span>${RB}</span>`;

    let YE = TME * 12;
    document.getElementById("yearlyIncome").innerHTML = `<span>${YI}</span>`;
    document.getElementById("yearlyExpenses").innerHTML = `<span>${YE}</span>`;

        if(SG > 0)
        {
            let TIP = TI + SG;
            let RB =  MS - R - U - G - T - E - M + SG;
            document.getElementById("savingsGoal").innerHTML = `<span>${SG}</span>`;
            document.getElementById("actualSavings").innerHTML = `<span>${SP}</span>`;
            document.getElementById("totalIncome").innerHTML = `<span>${TIP}</span>`;
            document.getElementById("remainingBudget").innerHTML = `<span>${RB}</span>`;
    
            let YI = MS * 12 + SG * 12;
            let YS = SG * 12;
            document.getElementById("yearlyIncome").innerHTML = `<span>${YI}</span>`;
            document.getElementById("yearlySavings").innerHTML = `<span>${YS}</span>`;
        }
        else
        {
            let YI = MS * 12;
            document.getElementById("yearlyIncome").innerHTML = `<span>${YI}</span>`;
            document.getElementById("savingsGoal").innerHTML = `<span>0</span>`;
            document.getElementById("actualSavings").innerHTML = `<span>0</span>`;
            document.getElementById("totalIncome").innerHTML = `<span>${TI}</span>`;
            document.getElementById("remainingBudget").innerHTML = `<span>${RB}</span>`;
            document.getElementById("yearlySavings").innerHTML = `<span>0</span>`;
        }
};