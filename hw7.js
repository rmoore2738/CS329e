var usernameStatus = false
var passwordStatus = false


function register(user,pass,repeat) {

   console.log("Checking username conditions")
   if (checkLength(user) == true && checkChar(user) == true && userConditions(user) == true) {
   	  usernameStatus = true
   	  console.log("Username conditions met")
   }

   else {
   	  console.log("Username conditions not met")
   }


   //PASSWORD CHECK
   console.log("Checking password conditions")
   if (checkLength(pass) == true && checkChar(pass) == true && Check_password(pass) ==  true && match(pass, repeat) == true){
       passwordStatus = true
       console.log("Password conditions met")
   }
   else {
   	   console.log("Password conditions not met")
   }

   if (usernameStatus == true && passwordStatus == true) {
       alert("User validated")
   }

   else {
   	   alert("Invalid username or password")
   }


}


/* check length of input */
function checkLength(input) {

    if (input.length < 6 || input.length > 10) {
		console.log("Invalid length")
		return false
	}

	else {
		console.log("valid length")
	 	return true
	}

}



/* checks for invalid characters */
function checkChar(input) {

	var charCheckStatus = true
	console.log("checking chars...")

		var b;
	    for (b = 0; b < input.length; b++) {

			if (input.charCodeAt(b) >= 0 && input.charCodeAt(b) <= 48) {
				charCheckStatus = false
			}

			else if (input.charCodeAt(b) >= 58 && input.charCodeAt(b) <= 64) {
				charCheckStatus = false
			}

			else if (input.charCodeAt(b) >= 91 && input.charCodeAt(b) <= 95) {
				charCheckStatus = false
			}

			else if (input.charCodeAt(b) >= 123) {
				charCheckStatus = false
			}

		}
	return charCheckStatus
}

function Check_password(pass) {

	var uppercase = false
	var lowercase = false
	var digit = false
	var conditions = false
	var upper;
    for (upper = 0; upper < pass.length; upper++) {
    	if (pass.charCodeAt(upper) >= 65 && pass.charCodeAt(upper) <= 90){
    		uppercase = true
    		console.log("Password contains at least one uppercase letter")
    		break
    	}
    	else {
    		continue
    	}
    }
	var lower;
	for (lower = 0; lower < pass.length; lower++) {
	    	if (pass.charCodeAt(lower) >= 97 && pass.charCodeAt(lower) <= 122){
	    		lowercase = true
	    		console.log("Password contains at least one lowercase letter")
	    		break
	    	}
	    	else {
	    		continue
	    	}
	}
	var digit;
	for (digit = 0; digit < pass.length; digit++) {
	    	if (pass.charCodeAt(digit) >= 48 && pass.charCodeAt(digit) <= 57){
	    		digit = true
	    		console.log("Password contains at least one digit")
	    		break
	    	}
	    	else {
	    		continue
	    	}
	}
	if (uppercase == true && lowercase == true && digit == true) {
		check = true
	}
	return pass_check
}
function match(input1, input2) {
	if (input1 == input2) {
		return true
	}
	else {
		console.log("inputs do not match")
		return false
	}
}
function check_username(user) {
   if (user.charCodeAt(0) >= 48 && user.charCodeAt(0) <= 57) {
       console.log("First character of username is a digit")
       return false
   }
   else {
       console.log("First character of username is not a digit")
       return true
   }

}
