function handleSubmit() {

    var useremail = document.getElementById("user-email").value;
    var usermob = document.getElementById("user-mob").value;
    
    localStorage.setItem("user-email", useremail);
    localStorage.setItem("user-mob", usermob);
    return true;
}

var surveyemail = localStorage.getItem("user-email");
var surveymob = localStorage.getItem("user-mob");
console.log(surveyemail);
console.log(surveymob);

document.getElementById("survey-email").innerHTML = `<h3>${surveyemail}<h3>`
document.getElementById("survey-mob").innerHTML = `<h5>${surveymob}</h5>`