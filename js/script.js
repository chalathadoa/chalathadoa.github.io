function validateForm(){
    const name = document.forms['myform']['name'].value;
    const email = document.forms['myform']['email'].value;
    const product = document.forms['myform']['product'].value;

    if(name == "" || email == "" || product == ""){
        alert("Please fill out all fields!");
        return false;
    }
    var modalMsg = "Dear " + name + ",\n\nThank you for choosing " + product + ". Our team will be in touch with you within 24 hours.\n\nBest regards,\nThe Catventure Co. Team";
    alert(modalMsg);
    return false;
}
