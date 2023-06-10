function clicked() {
    let bill_amount = document.getElementById("billAmount")
    let percentage_bill = document.getElementById("percentageTip")
    if (bill_amount.value === "" || percentage_bill.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input"
        document.getElementById("errorMessage").style.color = "Red"
    } else {
        let calculatedTip = (parseInt(percentage_bill.value) / 100) * parseInt(bill_amount.value)
        let total_amount = parseInt(calculatedTip) + parseInt(bill_amount.value)
        document.getElementById("tipAmount").value = calculatedTip
        document.getElementById("totalAmount").value = total_amount
        document.getElementById("errorMessage").textContent = ''
    }
}