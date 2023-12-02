
/*------------------------ */
// var element=document.getElementById("demo");
// console.log(element);
// var elements=document.getElementsByClassName("hero");
// console.log(elements);//html collection
// var inp=document.getElementsByName("gender");
// console.log(inp);//node list
// var tit=document.getElementsByTagName("h2");
// console.log(tit);
// var lin= document.links;
// console.log(lin); //html collection
// var elements=document.querySelectorAll("#demo");
// console.log(elements);
// var element=document.querySelector(".hero");
// console.log(element);
/*-------------------------------- */
// var element=document.querySelector("button");

// element.addEventListener("click",function(){
//     sayHello("sara")
// });
// element.addEventListener("dblclick",function(){
//     console.log("sara")
// })
/*------------------------------ */
var quotes=[
    `“Be yourself; everyone else is already taken.”
    ― Oscar Wilde`,
   `“So many books, so little time.”
   ― Frank Zappa`,
    `“You only live once, but if you do it right, once is enough.”
    ― Mae West`,
    `“Be the change that you wish to see in the world.”
    ― Mahatma Gandhi`,
    `“If you tell the truth, you don't have to remember anything.”
    ― Mark Twain`,
    `“To live is the rarest thing in the world. Most people exist, that is all.”
    ― Oscar Wilde`,
    `“Live as if you were to die tomorrow. Learn as if you were to live forever.”
    ― Mahatma Gandhi`,
    `“Without music, life would be a mistake.”
    ― Friedrich Nietzsche, Twilight of the Idols`,
    `“It is better to be hated for what you are than to be loved for what you are not.”
    ― Andre Gide, Autumn Leaves`
];
function generateRandomQuote(){
    var randomIndex=Math.floor(Math.random()*quotes.length);
    var randomQuote=quotes[randomIndex];
    // console.log(randomQuote);
    document.getElementById("quote").innerHTML=randomQuote;

};
var Btn=document.getElementById("quoteBtn");
Btn.addEventListener("click",generateRandomQuote);



