const registerForm = document.getElementById("register-form");
const questionForm = document.getElementById("question-form");
registerForm.addEventListener("submit", function(){
    const  firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phonenumber").value;
    const email = document.getElementById("emailaddress").value;
    alert( "Chúc mừng "+firstname +" "+lastname+" đã đăng kí thành công với số điện thoại là "+phone+" và email là "+email);

});
questionForm.addEventListener("submit", function(){
    const  first_name = document.getElementById("first-name").value;
    const last_name = document.getElementById("last-name").value;
    const phone_ = document.getElementById("phone-number").value;
    const email_ = document.getElementById("email-address").value;
    const question = document.getElementById("your-question").value;
    alert( "Câu hỏi của bạn đã được gửi thành công");
    fetch("https://webhook.site/a906e474-6890-49b7-aaa5-c9b247ea1759?first-name="+first_name+"&last-name="+last_name+"&phone="+phone_+"&email-address="+email_+"&your-question="+question);
});

