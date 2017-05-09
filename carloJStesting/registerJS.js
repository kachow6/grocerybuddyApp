		
function testPasswordValid(id) {
	var userPassword = document.getElementById(id).value;
		
	return (userPassword.length > 0);
}

function warnPasswordInvalid(id) {
	if(!testPasswordValid(id))
		document.getElementById('passworderror').innerHTML="<br>Please provide a password";
}

function testConfirmPasswordValid(id, acceptBlank) {
	var valid = false;
	var userpassword = document.getElementById(id+'_0').value;
	var userpasswordconf = document.getElementById(id+'_1').value;
	if(acceptBlank && userpasswordconf.length==0)
		valid = true;
		
	if (userpassword == userpasswordconf)
		valid = true;
					
	return valid;
}

function warnConfirmPasswordInvalid(id, acceptBlank) {
	if(!testConfirmPasswordValid(id, acceptBlank)) {
		document.getElementById('confirmpassworderror').innerHTML="<br>Your password must match the one above";
		document.getElementById(id+'_1').value = "";
	}
}
			