var form = document.getElementsByTagName('form')[0];
user = new Object();

////////////////////////////////////////////////////
var username = document.getElementById("username");

username.addEventListener("input", function(event) {
    if (username.validity.patternMismatch) {
        username.setCustomValidity("Username must be longer than 3 characters, could contain latin letters, numbers, underscores and dashes");


    } else {
        username.setCustomValidity("");
        user.username = username.value;

    }
});
/////////////////////////////////////////
var usermail = document.getElementById("usermail");

usermail.addEventListener("input", function(event) {
    if (usermail.validity.typeMismatch) {
        usermail.setCustomValidity("Enter a valid email");

    } else {
        usermail.setCustomValidity("");
        user.email = usermail.value;
    }
});
/////////////////////////////////////////////
var userphone = document.getElementById("userphone");
userphone.onchange = function() {
    var output = userphone.value.split('(');
    output = output.shift() + (output.length ? '(' + output.join('') : '');
    output = output.split(')');
    output = output.shift() + (output.length ? ')' + output.join('') : '');
    userphone.value = output;
}

userphone.addEventListener("input", function(event) {
    if (userphone.validity.patternMismatch) {
        userphone.setCustomValidity("Phone number starts with plus followed by 5-12 digits and could contain dashes and one pair of parenthesis");


    } else {
        userphone.setCustomValidity("");
        user.telephone = userphone.value;
    }
});
////////////////////////////////////////////////
var userpassword = document.getElementById("userpassword");

userpassword.addEventListener("input", function(event) {
    if (userpassword.validity.patternMismatch) {
        userpassword.setCustomValidity("Your password must be longer than 6 characters, at least one capitalized, at least one digit");

    } else {
        userpassword.setCustomValidity("");
    }
});
///////////////////////////////////////////////////
var userpasswordcheck = document.getElementById("userpasswordcheck");

if (userpasswordcheck.value === userpassword.value) {
    userpasswordcheck.setCustomValidity("");
} else {
    userpasswordcheck.setCustomValidity("Please repeat your password");
}
/////////////////////////////////////////////////////


form.addEventListener("submit", function(event) {
    console.log('Submitted!');
    console.log(user);
    event.preventDefault();
}, false);