const bars = document.querySelectorAll('nav ul a li');

bars.forEach((bar, index)=>{
    bar.addEventListener('click', ()=>{
        bars.forEach(bar=>{
            bar.classList.remove('active')
        })
        bar.classList.add('active');
    })
})


///////////////////// i think this script is for responsivene on devices///////////////////////////
let navbar = document.querySelector('nav');
let menuLiks = document.getElementById('menu-links');

function toogleMenu(){
    menuLiks.classList.toggle('show-menu');
}

////////////////////////////// SVG ANIMATION SCRPIT//////////////////////////////////////////////

let svg = document.querySelector("svg");
let path = svg.querySelector("path");
const pathLength = path.getTotalLength();

gsap.set(path, {
    strokeDasharray: pathLength
});

gsap.fromTo(
    path,
    {
        strokeDashoffset: pathLength,
    },{
        strokeDashoffset: 0,
        duration: 10,
        ease: "none",
        scrollTrigger:{
            trigger: ".svg-container",
            start: "top top",
            scrub: 1,
        }
    }
);

///////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////

// ARROW FUNCTION 
// const ARROW = document.querySelector(".addToWrapper");
//     ARROW.addEventListener("click", () =>{
//         addToList.classList.toggle("openAddToList");
//     })



///////////////////////////////////////////////////////////////////////////////



/////////////////////////////  JAVA SCRIPT PRACTICE ///////////////////////////////////////////

// WORKING WITH DATA TYPES IN JAVA SCRIPT
    // ---------NUMBERS
    // ---------STRING
    // ---------BOOLEAN
    // ---------OBJECTS
    // ---------ARRAY
    // ---------UNDEFINED
    // ---------NULL
    // ---------SYMBOL

// WORKING WITH VARIABLES IN JAVA SCRIPT


// WORKING WITH OPERATORS IN JAVA SCRIPT 
    // ------ EQUALS               ===
    // ------ HIGHER THAN           >
    // ------ LESS THAN             <
    // ------ NOT EQUALS           !==
    // ------ AND OPERATOR          &&
    // ------ OR OPERATOR           ||


// WORKING WITH CONDITIONS IN JAVA SCRIPT 
    // ------ IF STATEMENT
    // ------ IF ELSE STATEMENT
    // ------ ELSE STATEMENT
    // ------ ELSE IF STATEMENT

// WORKING WITH LOOPS IN JAVA SCRIPT 
    // ------ FOR LOOP 
    // ------ DO WHILE LOOP 
    // ------ WHILE LOOP


// WORKING WITH ARRAYS IN JAVA SCRIPT 
    // ------ ONE DIMENSIONAL ARRAY 
    // ------ TWO DIMENSIONAL ARRAY
    // ------ THREE DIMENSIONAL ARRAY



// WORKING WITH FUNCTIONS IN JAVA SCRIPT 
    // ------- 
    // -------ARROW FUNCTION
 


// WORKING WITH OBJECTS IN JAVA SCRIPT 
    // ------- 
    // -------


// WORKING WITH USE-CASES IN JAVA SCRIPT
    // ------- 
    // -------




///////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLES IN JS

    //CHRACTER EXAMPLE
        // a character is just one letter or number 
            // ----- //---var a = "a" 

    //STRING EXAMPLE
        // a string is a combination of multiple characters 
            // ----- //---var a = "cse21-092" 

    //OBJECT EXAMPLE
        // an object is written using curley braces 
        // the three types of object 
        //(one dimentinal object, Two D objects, Three D Object)
            // ----- //---var a = {{"cse21-092"},{74362467}, {true}}

    //ARRAY EXAMPLE
        // an array is written using square brackect 
            // ----- //---var a = [
                        //          "cse21-092", "012"
                        //      ]

    //VARIABLE CAN BE CHANGED
    //LET CAN BE CHANGED
    //CONST CAN NOT BE CHANGED

