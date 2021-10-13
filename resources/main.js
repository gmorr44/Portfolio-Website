 /*The constant variables are used to access each section of the website*/
const section1 = document.getElementById("pimg22");
const section2 = document.getElementById("pimg33");
const section3 = document.getElementById("lastsection");
const down = document.getElementById("downarrow").innerHTML;
/* The following scroll event determines when to display the page navigation arrows*/
window.addEventListener("scroll",function(){

    let top1 = section1.getBoundingClientRect().top;
    let top2 = section2.getBoundingClientRect().top;

    if(top1 <= 0){
        document.getElementById("uparrowcontainer").innerHTML = 
        "<a href = '#pimg11'><svg id='uparrow' xmlns='http://www.w3.org/2000/svg' width='3em' height='3em' viewBox='0 0 16 16'><g ><path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z'/></g></svg></a>"
    }
    if(top1 > 0){
        document.getElementById("uparrowcontainer").innerHTML = null;
    }
    if(top2 < 0){
        document.getElementById("downarrow").innerHTML = null;
    }
    if(top2 > 0){
        document.getElementById("downarrow").innerHTML = down;
    }
})

//The following block defines the arrow down scrolling to the next section

document.getElementById("downarrow").addEventListener("click", function(){
    
    let top1 = section1.getBoundingClientRect().top;
    let top2 = section2.getBoundingClientRect().top;
    let top3 = section3.getBoundingClientRect().top;

    if(top1 > 1 && top1 < top2 && top1 < top3 ){
        section1.scrollIntoView();
    }
    else if(top2 > 1 && top2 < top3 ){
        section2.scrollIntoView();
    }
    else if(top3 > 1 && top2 < 1 ){
        section3.scrollIntoView();
    }
})

//Contact me form submission 
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "NO LONGER IN USE -- FIX ME",
authDomain: "NO LONGER IN USE -- FIX ME",
projectId: "NO LONGER IN USE -- FIX ME",
storageBucket: "NO LONGER IN USE -- FIX ME",
messagingSenderId: "NO LONGER IN USE -- FIX ME",
appId: "NO LONGER IN USE -- FIX ME"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Reference the messages in firebase
var messagesRef = firebase.database().ref('messages');

var originalhtml = document.getElementById("confirmation").innerHTML;
var originalcss = document.getElementById("confirmation").style;
document.getElementById("contact-form").addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getInputVal('nameInput');
    var email = getInputVal('emailInput');
    var message = getInputVal('messageInput');
    var time = new Date().toLocaleString();

    
    if(name == "" || email == "" || message ==""){
        window.alert("Please Complete All Fields Before Sending Message")
    }
    else{
        confirmation();
        document.getElementById("contact-form").reset()
        setTimeout(function(){
            document.getElementById("confirmation").innerHTML = originalhtml;
            document.getElementById("confirmation").style = originalcss;
        },4000);
        saveMessage(name, email, message, time);
    }
}

//Function that retrieves the correct element values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Confirmation that the message was recieved succesfully.
function confirmation(){
    document.getElementById("confirmation").innerHTML = "Thank you! Your message was sent."
    document.getElementById("confirmation").style.fontSize = '1.2em';
    document.getElementById("confirmation").style.backgroundColor = "#39c694";
    document.getElementById("confirmation").style.borderRadius = "6px" ;
    document.getElementById("confirmation").style.color ="black";
    document.getElementById("confirmation").style.textTransform = "none";
    document.getElementById("confirmation").style.margin = "0em";
}
//Pushes new message as an object into the database.
function saveMessage(name, email, message,time){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message,
        time: time
    });
}