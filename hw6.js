function calculate(){
	var P = document.getElementById("P").value;
	var n = document.getElementById("n").value;
	var r = document.getElementById("r").value;
	parseFloat(r)
	parseFloat(n)
	parseFloat(P)
	values = [P,n,r]
	for (i = 0; i < 3; i ++){
		if (based(values[i]) === 0) {
			alert("Error: Non-numeric value")
			return
		}
		if (based(values[i]) === 1) {
			alert("Error: Negative number")
			return
		}
	}
	Math.round(n)
	r = r / 1200
	var monthly =  P * r / (1 - ( 1 / ((1 + r) ** n )))
	document.getElementById("R").value = Math.round(monthly * 100) / 100;
	var sum = monthly * n
	document.getElementById("s").value = Math.round(sum * 100) / 100;
	var total = sum - P
	document.getElementById("t").value = Math.round(total * 100) / 100;
}
function based(val){
	if (isNaN(val) === true){
		return 0
	} else if (val < 0) {
		return 1 
	} else {
		return 2
	}
}
