function task21_1() {
    var name = prompt("Input first name")
    var lastName = prompt("input last name")
    var fullName = name + lastName
    alert("Hi " + fullName);
}
function task21_2() {
    var name = prompt("Input your favourite mobile name")
    var nameChars = name.length;
    document.write(name + "<br>" + "Length of String is: " + nameChars)
}
function task21_3() {
    var a = "Pakistani"
    var b = a.indexOf("n")
    document.write("index of n is " + b)
}
function task21_4() {
    var text = "Hello World"
    var b = text.lastIndexOf("l")
    document.write("String: Hello World" + "<br>" + "index of 'l' is " + b)
}
function task21_5() {
    var a = "Pakistani"
    var b = a.charAt("3")
    document.write("character at 3rd index is " + b)
}
function task21_6() {
    var name = prompt("Input first name")
    var lastName = prompt("input last name")
    var fullName = name.concat(lastName);
    alert("Hi " + fullName);
}
function task21_7() {
    var city = "Hyderabad"
    var rep = city.replace("Hyder", "Islam");
    document.write(rep)
}
function task21_8() {
    var message = "Ali and Sami are best friends.They play cricket and football together"
    document.write(message + "<br>")
    var rep = message.replace(/and/g, "&");
    document.write(rep)
}
function task21_9() {
    var str = "472"
    document.write("value: " + str + "<br>" + "Type: " + "String" + "<br>")
    var num = Number("472")
    document.write("value: " + num + "<br>" + "Type: " + "Number")
}
function task21_10() {
    var input = prompt("Input anything")
    var convert = input.toUpperCase();
    alert(convert);
}
function task21_11() {
    var input = prompt("Input anything")
    var firstchar = input.slice(0, 1);
    var otherchar = input.slice(1);
    firstchar = firstchar.toUpperCase()
    otherchar = otherchar.toLowerCase()
    var input = firstchar + otherchar;
    alert(input);
}
function task21_12() {
    var num = 35.36
    var str = num.toString()
    document.write("NUmber: " + str + "<br>")
    var round = Math.round(num)
    document.write("Result: " + round)
}
function task21_13() {
    var input = prompt("insert name")

}
function task21_14() {
    var search = prompt("What do you want to order")
    search = search.toLowerCase()
    var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
    var id = arr.indexOf("cake", "apple pie", "cookie", "chips", "patties")
    for (var i = 0; i < arr.length; i++)
        break;
    if (arr === search) {
        alert(search + " is available " + "at index " + id + " in our bakery");
    }
    else { alert(search + " is not available") }
}

function task21_15() {
    var pwd = prompt("Insert a password")
    var letters = /[0-9a-zA-Z]/

    if (pwd.value != "" && pwd.value == pwd.value) {
        if (pwd.length < 6) {
            alert("Error: Password must contain at least six characters!");
        }
    }
    else if (pwd.match(letters)) {
        alert("accepted");
    }
}
function task21_16() {
    var university = "University of Karachi";
    var spl = university.split([])
    document.write(spl)
}
function task21_17() {
    var input = "Pakistan"
    var display = input.slice(-1);
    document.write("Input is " + input + " last character : " + display)
}
function task21_18() {
    var text = "The quick brown fox jumps over the lazy dog"
    document.write(text + "<br>")
    var find = "the";
    var doc = text.split(find).length - 0;
    document.write("Occurence of The is: " + doc)
}
function task26_1() {
    var value = +prompt("input positive integer")
    if (value > -1) {
        document.write("number " + value + "<br>");
        var round = Math.round(value)
        document.write("round off: " + round + "<br>");
        var flor = Math.floor(round)
        document.write("floor value : " + flor + "<br>");
        var c = Math.ceil(value)
        document.write("Ceil value : " + c);
    }
    else { alert("Insert a positive number") }

}
function task26_2() {
    var value = +prompt("input negative integer")
    if (value < 1) {
        document.write("number " + value + "<br>");
        var round = Math.round(value)
        document.write("round off: " + round + "<br>");
        var flor = Math.floor(round)
        document.write("floor value : " + flor + "<br>");
        var c = Math.ceil(value)
        document.write("Ceil value : " + c);
    }
    else { alert("Insert a negative number") }
}
function task26_3() {
    var num = -53
    document.write("Value: " + num + " <br>" + "absolute value " + Math.abs(-53))
}
function task26_4() {
    var dice = Math.ceil(Math.random() * 6)
    alert(" Random value of dice is " + dice)
}

function task26_5() {
    var head = prompt("enter head")
    var tail = prompt("enter tail")
    var toss = Math.random() * 2
    var floor = Math.floor(toss)
    console.log(floor)
    if (floor === 1) { alert("Head " + head + " win the toss") }
    else { alert("Tails " + tail + " wins") }
}
function task26_6() {
    var num = Math.ceil(Math.random() * 100)
    alert(" Random number between 1-100 is " + num)
}

function task26_7() {
    var userinput = prompt("enter your weight in kgs")
    var num = parseInt(userinput)
    document.write(" The weight of user is " + num + "Kgs")

}
function task26_8() {
    var userinput = prompt("enter a number b/w 1-10")
    var num = Math.ceil(Math.random() * 10)
    if (userinput === num) {
        alert("Congratulations! You pick the same number as " + num)
    }
    else {
        alert(" Try Again " + "number is " + num)
    }
}
function task31_1() {
    var a = new Date();
    document.write(a)
}
function task31_2() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var a = new Date();
    var b = month[a.getMonth()];
    document.write(b)
}
function task31_3() {
    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var a = new Date();
    var theDay = a.getDay();
    var nameOfToday = day[theDay];
    document.write("Today is " + nameOfToday)
}
function task31_4() {
    var day = ["Funday", "Mon", "Tue", "Wed", "Thu", "Fri", "Funday"];
    var a = new Date();
    var theDay = a.getDay();
    var nameOfToday = day[theDay];
    document.write("Its " + nameOfToday)
}
function task31_5() {
    var a = new Date();
    var b = a.getDate();
    document.write(b)
    if (b < 16) {
        alert("First fifteen days of the month")
    }
    else {
        alert("Last days of the month")
    }
}
function task31_6() {
    var today = new Date();
    var doomsday = new Date("July 4, 2011");
    var msToday = today.getTime();
    var msDoomsday = doomsday.getTime();
    var msDiff = msToday - msDoomsday;
    var dDiff = msDiff / (1000 * 60 * 60 * 24 * 30 * 12);
    dDiff = Math.floor(dDiff);
   var msDiff= new Date("July 4, 2011").getTime() -new Date().getTime();
    document.write("Current Date" + today + "<br>"+ "Elapsed miliseconds since July 4,2011 "+ msDiff )
}
function task31_7() {;
    var today = new Date();
    var currentHrs = today.getHours();
    
if (currentHrs === 0-11 ){
    alert (currentHrs + " Its AM")
}
else { alert (currentHrs +" Its PM")}
}
function task31_8() {;
    var laterdate = new Date("December 31, 2020");
    document.write(" Later Date: "+ laterdate)
}
function task31_9() {;
    var today=new Date();
    var past = new Date("April 25, 2020");
    var msToday = today.getTime();
   var mspast = past.getTime();
    var diff=  msToday -mspast
    var dDiff = diff / (1000 * 60 * 60 * 24);
    dDiff = Math.floor(dDiff);
    document.write(dDiff + " days have passed since 1st Ramadan of 2020")
}
function task31_10() {;
    var today=new Date();
    var past = new Date("Jannuary 1, 2020");
    var msToday = today.getTime();
   var mspast = past.getTime();
    var diff=  msToday -mspast
    var dDiff = diff / (1000 * 60 );
    dDiff = Math.floor(dDiff);
    document.write(today + "<br>"+ dDiff + " seconnds had passed since  begining of 2020")
}
function task31_11() {;
    var today=new Date();
    var hrs= today.getHours();

    document.write("Current date: " + today+ "<br>")
}
function task31_12() {;
    var today=new Date();
    var hrs= today.getHours();
    alert ("Current date: " + today+ "<br>")
}
function task31_13() {;
    var user=prompt ("whats your age?")
    var today=new Date();
    var year= today.getFullYear();
    var diff=  year - user ;
    document.write( "Your age is " + user + "<br>"+ "Your Birth year is " +  diff)
}
function task31_14() {;
    var name=("Customer Name: ABC")
    var today=new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var mm= month[today.getMonth()];
    var unit= 410;
    var charge=16;
    var amount= unit * charge
    var late= 350
    var gross= amount +  late
    document.write("<h1> K-Electric Bill </h1>" + "<br>"+ name + "<br>"+"Month :"+ mm + "<br>" + " Number of units:  " + unit +"<br>"+ "Charges per unit" + charge + "<br>"+ "Net Amount Payable (within Due Date)" 
    + amount + "<br>" + "Late Payment Surcharge:  " + late + "<br>"+ "Gross Amount Payable (after Due Date) "+ gross ) 
}

function task34_1(){
    var today= new Date();
    alert (today)
}
// function task34_2(){
// function greeting(greet){
//     alert(greet)
// }
// greeting ("hiii");}

// var first= prompt ("Enter your first name")
//     var second= prompt("Enter your last name")
//     function greetuser(greeting){
//     var full= first + second; 
//     var greeting= ("Hi! "+ full )
//     {alert (greeting)}}

