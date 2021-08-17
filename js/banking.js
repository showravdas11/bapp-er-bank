// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositinput = document.getElementById('deposit-input');
    const newDepositText = depositinput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousText = depositTotal.innerText;
    const previousAmount = parseFloat(previousText)
    const newDepositTotal = previousAmount + newDepositAmount
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount

    balanceTotal.innerText = newBalanceTotal


    depositinput.value = '';
})

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw')
    const wihdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = wihdrawInput.value
    const newWithdrawAmount = parseFloat(withdrawAmountText)
    // console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    //update balance


    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    balanceTotal.innerText = newBalanceTotal;


    wihdrawInput.value = ''
})