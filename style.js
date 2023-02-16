function yoz(){
    var inp1 = document.getElementById('inp1').value;
    var inp2 = document.getElementById('inp2').value;
    var h1 = document.getElementById('h1');
    var email = window.localStorage.getItem('Email');
    var pass = window.localStorage.getItem('Password');

    if(inp1 == email && inp2 == pass){
        window.open('index1.html', "_self");
    }
    else{
        h1.innerText = "Email yoki parol xato!";
        h1.style.color = "crimson";
        h1.style.fontSize = "12pt";
    }


    window.localStorage.setItem("Email", inp1)
    window.localStorage.setItem("Password", inp2)

   
    
}
function yoz2(){
    var inp3 = document.getElementById('inp3').value;
    var inp4 = document.getElementById('inp4').value;
    var inp5 = document.getElementById('inp5').value;
    var inp6 = document.getElementById('inp6').value;
    var inp7 = document.getElementById('inp7').value;

    window.localStorage.setItem("Ism", inp3)
    window.localStorage.setItem("Familya", inp4)
    window.localStorage.setItem("Email", inp5)
    window.localStorage.setItem("Login", inp6)
    window.localStorage.setItem("Parol", inp7)

}