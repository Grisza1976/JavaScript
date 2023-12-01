/*const stala = "Kacper";
console.log(stala);
stala = "Kopytko";
console.log(stala);*/

/*function funkcja(){
    let zmienna = "Miszok"
    console.log(zmienna)
}
funkcja()
console.log(zmienna)
var zmienna*/

/*a = 2
b = 4
c = "3"
d = c+b
e = d[1]*1
console.log(e)
console.log(typeof(e))*/

/*zmienna = document.getElementById("pole")
zmienna_body = document.body
console.log(zmienna_body)
console.log(zmienna.defaultValue)
zmienna_body.innerHTML += "<p>kopytko</p>"*/

/*zmienna = document.body
const ile_inputów = 7
nazwy = ['imie','nazwisko','mail','rozmiar_buta','lvl_w_lolu','ranga','klasa']
for(let i = 0;i<ile_inputów;i++){
    zmienna.innerHTML +="<input type='text'><br>"
}

zmienna.innerHTML +="<input type='button' onclick=na_wyslij() value='Wyślij'>"
zmienna.innerHTML +="<div id=wypluwacz></div>"
function na_wyslij(){
    for(let i = 0;i<nazwy.length;i++){
        zmienna.name = nazwy[i]
    }
    imie = document.getElementsByName('imie').value

    wypluwacz = document.getElementById('wypluwacz')
    wypluwacz.innerHTML = imie
    console.log(typeof(imie))
    
}
imie = document.getElementsByName('imie').value
console.log(imie.name)*/

wys = 15
g = "*"
document.body.style="text-align:center"
for(i=0;i<wys;i++){
    
    if(i==0){
        ga = g
    }
    else{
        ga +=g +g
    }
    if(i==6){ ga[i] = "o"}

    
}
document.body.innerHTML += ga + "<br>"
