const question = document.querySelector("#pytanieMiejsce")
const answerss = [...document.querySelectorAll(".odpowiedz")]
const button = document.querySelector("#fiftififti")
const licznik = document.querySelector("#licznik")
const stopTime = document.querySelector("#stopTime")
const questionPeople = document.querySelector("#questionPeople")
const questionPrecent = document.querySelector("#questionPrecent")
const poziomy = [...document.querySelectorAll(".poziomy")]
const odp = [...document.querySelectorAll(".odp")]
const precentOdp = [...document.querySelectorAll(".precentOdp")]
const element = document.querySelector("#ekranStart");
const guzik = document.querySelector("#guzik")
const columns = [...document.querySelectorAll(".columns")]
const koniec = document.querySelector("#koniec")


const pytania = [
    "Kto jest mistrzem tego samego oręża, w jakim specjalizowała się mitologiczna Artemida?",
    `Komiksowym "dzieckiem" rysownika Boba Kane'a jest:`,
    "Likier maraskino produkuje się z maraski, czyli odmiany:"
]
const odpowiedzi = [
    [
    "A: Zorro",
    "B: Legolas",
    "C: Don Kichot",
    "D: Longinus Podbipięta"
    ],
    [
    "A: Superman",
    "B: Batman", 
    "C: Spider-Man",
    "D: Captain America"
    ],
    [
    "A: wiśni",
    "B: jabłoni",
    "C: figi",
    "D: gruszy"
    ]
]
const dobreOdpowiedzi = [
    "B: Legolas",
    "B: Batman",
    "A: wiśni"
]
const zdobytePieniadze = [
    "500zł", "1000zł", "2000zł", "5000zł",
    "10 000zł", "20 000zł", "40 000zł",
    "75 000zł", "125 000zł", "250 000zł",
    "250 000zł", "500 000zł", "1000 000!!!"
]
// klasa do pytan
class QandA {
    constructor(question, answers, goodAnswers){
        this.question = question;
        this.answers = answers;
        this.goodAnswer = goodAnswers
    }
}

// obiekty pytan
const q1 = new QandA("Kto jest mistrzem tego samego oręża, w jakim specjalizowała się mitologiczna Artemida?",
[   "A: Zorro",
    "B: Legolas",
    "C: Don Kichot",
    "D: Longinus Podbipięta"],
"B: Legolas"
)

const q2 = new QandA(`Komiksowym "dzieckiem" rysownika Boba Kane'a jest:`,[
    "A: Superman",
    "B: Batman", 
    "C: Spider-Man",
    "D: Captain America"],
"B: Batman"    
)

const q3 = new QandA("Likier maraskino produkuje się z maraski, czyli odmiany:", [
    "A: wiśni",
    "B: jabłoni",
    "C: figi",
    "D: gruszy"],
"A: wiśni"    
)

// tablica ktora wszystko trzyma
const upo = [
    [q1.question, q1.answers, q1.goodAnswer],
    [q2.question, q2.answers,
    q2.goodAnswer],
    [q3.question, q3.answers,
    q3.goodAnswer]
]

//zmienne
let wynik = 0;
let bug = wynik;
let lol = "";
let punkty = 0;
let blokada = 0;
let blokada1 = 0;
let blokada2 = 0;
let time = 59;
let timer = ""
let round = 12;


const poczatek = () =>{
//przeskakiwanie poziomow
round--
poziomy[round].id = "x1"

//losowanie

if(upo.length != 0){
function rp(){
    wynik = Math.floor(Math.random() * upo.length)
}
rp()

//podstawienie pytania

question.innerHTML = upo[wynik][0]
//podstawienie odpowiedzi
/* WAZNE
for(i=0; i<answerss.length; i++){
    answerss[i].innerHTML = upo[wynik][1][i]
}
*/

licznik.innerHTML = 60
for(i=0; i<answerss.length; i++){
    answerss[i].innerHTML = ""
}



//pojawianie sie odpowiedzi po czasie
setTimeout(()=>{
setTimeout(()=>{
    answerss[0].innerHTML = upo[wynik][1][0]
    setTimeout(()=>{
        answerss[1].innerHTML = upo[wynik][1][1]
        setTimeout(()=>{
            answerss[2].innerHTML = upo[wynik][1][2]
            setTimeout(()=>{
                answerss[3].innerHTML = upo[wynik][1][3]
                licznik.innerHTML = 60

    time = 59
    timer = 
    setInterval(function(){
    licznik.innerHTML = time;
    time--
    if(time === -2){
        ekrKoniec()
    }
    },1000)

            },1250)
        },1250)
    },1250)
},1250)
}, 1000)



answerss.forEach(p => {
    p.classList.remove("good", "bad")
    p.id = ""
})
}else{
    ekrKoniecWygrana()
}
//pytanie do pub usunniecie
odp[0].style.height = `0`
odp[1].style.height = `0`
odp[2].style.height = `0`
odp[3].style.height = `0`

precentOdp[0].style.opacity = "0"
precentOdp[1].style.opacity = "0"
precentOdp[2].style.opacity = "0"
precentOdp[3].style.opacity = "0"
}

// funkcja odp za kolorwanie
const f = (event) => {
    if(lol.innerHTML == upo[wynik][2]){
        lol.classList.add("good");
      /*  round--
        poziomy[round].id = "x1" */
        setTimeout(()=>{
        lol.classList.add("good");
        },1000)
        punkty++
    }else{
        lol.classList.add("bad")
        answerss.forEach( xd => {
            if(xd.innerHTML == upo[wynik][2]){
                xd.classList.add("good")
            }
        })
       // wynik = 0;
       setTimeout(()=>{ekrKoniecPrzegrana()}, 2000)
    }
    setTimeout(()=>{poczatek()}, 2000)

    upo.splice(wynik, 1)

}


//dodaje co runde mozliwosc wybrania odpowiedzi

let b = () =>{
    answerss.forEach(b => {
        b.addEventListener("click", x)
        b.style.cursor = "pointer"
    })

    //dodanie kol ratunkowych po czasie
    if(blokada1 === 0){
    stopT()
    }
    if(blokada === 0){
    fifti()
    }
    if(blokada2 === 0){
    questionPeopleTime()
    }
}


//usuwa co runde mozliwosc wybrania odpowiedzi

const t = () =>{
    answerss.forEach(t => {
        t.removeEventListener("click", x)
        t.style.cursor = "default"

        questionPeople.removeEventListener("click", clickqPrecent)
        questionPeople.style.cursor = "default"

        stopTime.removeEventListener("click", stTime)
        stopTime.style.cursor = "default"

        button.removeEventListener("click", fiPrint)
        button.style.cursor = "default"
    })
    }
  
 //łączy przyciski miedzy rundami

const x = (event) => {
    event.target.id = "wait"
    lol = event.target;
    setTimeout(f, 1500)//1500
    
    t()
    
    setTimeout(b, 10000)//3500

    clearInterval(timer)
}

//pierwsza mozliwosc klikania



//funkcja losujaca 50/50

const fiPrint = () =>{
   
     ran1 = Math.floor(Math.random()*answerss.length)

    ran2 = Math.floor(Math.random()*answerss.length)

    let q = upo[wynik][1].indexOf(upo[wynik][2])


    while(ran1 === ran2 || ran1 === q || ran2 === q){
        ran1 = Math.floor(Math.random()*answerss.length)
    
        ran2 = Math.floor(Math.random()*answerss.length)
    
    }

    answerss[ran1].innerHTML = ""
    answerss[ran2].innerHTML = ""

    blokada++
    

    if( blokada === 1){
        blockFifti()
    }   
    event.target.id = "block"
    button.style.cursor = "default"
}


    
// daje klik do 50/50
function fifti(){
    button.addEventListener("click", fiPrint)  
    button.style.cursor = "pointer"
}

//blokada 50/50
blockFifti = () =>{
    button.removeEventListener("click", fiPrint)
}

// licznik
timer = 
setInterval(function(){
    licznik.innerHTML = time;
    time--
    if(time === -2){
        alert("koniec czasu")
        clearInterval(timer)
        licznik.innerHTML = 0
    }
},1000)

//kolo ratunkowe stop time

function stTime(){clearInterval(timer)
    
    blokada1++;
    if(blokada1 === 1){
        stopTime.removeEventListener("click", stTime)
        event.target.id = "block2"
    }
    stopTime.style.cursor = "default"
 }
const stopT = () => {
    stopTime.addEventListener("click", stTime)
    stopTime.style.cursor = "pointer"
}

//do usuniecia
clearInterval(timer)

//dodaje kolo ratunkowe question


const logikaQPrecent = () => {
    
    let g = upo[wynik][1].indexOf(upo[wynik][2])

    
    
    odp1 = Math.floor(Math.random()*5)+70
    o1 = 100-odp1

    /*
    document.querySelector("#test").style.height = `${odp1}px`
    */
    

    odp2 = Math.floor(Math.random()*o1)+0
    o2 = o1-odp2

    odp3 = Math.floor(Math.random()*o2)+0
    o3 = o2-odp3

    odp4 = o2 - odp3

    
    precentOdp[0].style.opacity = "1"
    precentOdp[1].style.opacity = "1"
    precentOdp[2].style.opacity = "1"
    precentOdp[3].style.opacity = "1"


    if(g===0){
        
        precentOdp[0].innerHTML = `A: ${odp1}%`;
        precentOdp[1].innerHTML = `B: ${odp2}%`;
        precentOdp[2].innerHTML = `C: ${odp3}%`;
        precentOdp[3].innerHTML = `D: ${odp4}%`;
        
        
        odp[0].style.height = `${odp1}%`
        odp[1].style.height = `${odp2}%`
        odp[2].style.height = `${odp3}%`
        odp[3].style.height = `${odp4}%`
    }else if(g===1){
        
        precentOdp[0].innerHTML = `A: ${odp2}%`
        precentOdp[1].innerHTML = `B: ${odp1}%`;
        precentOdp[2].innerHTML = `C: ${odp3}%`;
        precentOdp[3].innerHTML = `D: ${odp4}%`;
        
        odp[0].style.height = `${odp2}%`
        odp[1].style.height = `${odp1}%`
        odp[2].style.height = `${odp3}%`
        odp[3].style.height = `${odp4}%`
    }else if(g===2){
        precentOdp[0].innerHTML = `A: ${odp3}%`
        precentOdp[1].innerHTML = `B: ${odp2}%`;
        precentOdp[2].innerHTML = `C: ${odp1}%`;
        precentOdp[3].innerHTML = `D: ${odp4}%`;

        odp[0].style.height = `${odp3}%`
        odp[1].style.height = `${odp2}%`
        odp[2].style.height = `${odp1}%`
        odp[3].style.height = `${odp4}%`
    }else{
        precentOdp[0].innerHTML = `A: ${odp3}%`
        precentOdp[1].innerHTML = `B: ${odp2}%`;
        precentOdp[2].innerHTML = `C: ${odp4}%`;
        precentOdp[3].innerHTML = `D: ${odp1}%`;

        odp[0].style.height = `${odp3}%`
        odp[1].style.height = `${odp2}%`
        odp[2].style.height = `${odp4}%`
        odp[3].style.height = `${odp1}%`
    }
   
     
   
    blokada2++
    console.log(blokada2)
    if(blokada2 === 1){
        questionPeople.removeEventListener("click", clickqPrecent)
        questionPeople.id = "block3"
        questionPeople.style.cursor = "default"
    }
    
}

const clickqPrecent = () => {
    logikaQPrecent()
}

function questionPeopleTime(){
questionPeople.addEventListener("click", clickqPrecent)
questionPeople.style.cursor = "pointer"
}
//ekran startowy


function ekrStart(){
    
    element.parentNode.removeChild(element);

for(i=0; i<columns.length; i++){
    columns[i].style.visibility = "visible";
    }
    
    poczatek()
}

function fi(){
    answerss.forEach( tile => {
        tile.addEventListener("click", x)
        tile.style.cursor = "pointer"
    })
    }
    
    

function guzikStart(){
    guzik.style.cursor = "pointer"
guzik.addEventListener("click", ekrStart)
setTimeout(stopT, 7500)
setTimeout(fifti, 7500)
setTimeout(questionPeopleTime, 7500)
setTimeout(fi, 7500)
}




//opcje ekranu startowego
const dol = document.querySelector("#dol")
const wstep = document.querySelector("#wstep")
dol.addEventListener("mouseenter", ()=>{
    wstep.style.transform = "scaleX(0)"
    //wstep.style.visibility = "visible"
    wstep1.style.transform = "scaleX(0)"
    setTimeout(guzikStart, 3000)
})

//ekran koncowy



function ekrKoniec(){
    
    for(i=0; i<columns.length; i++){
        columns[i].parentNode.removeChild(columns[i])
    }
    
    koniec.style.visibility = "visible";

    koniec.innerHTML = `Przykro mi , koniec czasu, jednak udało ci sie wygrac ${zdobytePieniadze[punkty]}`
}

function ekrKoniecPrzegrana(){
    
    for(i=0; i<columns.length; i++){
        columns[i].parentNode.removeChild(columns[i])
    }
    
    koniec.style.visibility = "visible";

    koniec.innerHTML = `Niestety jest to błędna odpowiedz ale udało ci sie wygrac ${zdobytePieniadze[punkty]}`
}

function ekrKoniecWygrana(){
    
    for(i=0; i<columns.length; i++){
        columns[i].parentNode.removeChild(columns[i])
    }
    
    koniec.style.visibility = "visible";

    koniec.innerHTML = `Gratulacje wygrałeś grę i udało ci sie wygrac ${zdobytePieniadze[punkty]}`
}

//funkcje
//poczatek()







