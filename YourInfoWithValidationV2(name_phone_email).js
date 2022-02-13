do {
    var fname = prompt("what is your first name?");
}
while (isFinite(fname))
do {
    var phon = prompt("local phone number?");
}
while (phon.length != 8)

do {
    var phone = prompt("what is your phone number?");
}
while (mobile_number.length != 11 && _number.startsWith("011" || "010" || "012"))

do {
    var email = prompt("please inter your email");
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flage = re.test(email);
} while (flage == false);


document.write("<p>welcome dear:" + fname + " your email " + email + "</p>");
document.write("<p>your phone number:" + phone + "/" + phon + "</p>");