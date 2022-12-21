
//select el 
//const myInput = document.getElementById('exampleInputEmail1');
// returns the HTML element

//const myInput = document.getElementsByClassName('form-control')
//returns HTML Collection - array like

//const myInput = document.getElementsByTagName('input')
//myInput[1].remove() //HTML Collection is live ==> we see directly the change applicated to the el
//console.log(myInput); 
//returns HTML COllection - attay-like

//const myInput = document.querySelector('input')
//return a first el in the doc
 
//const myInput = document.querySelectorAll('input')
//myInput[1].remove() // NodeList is a static ==> the el was deleted from the DOM but still persist int the nodeList
//console.log(myInput);

//add or change a class
//1
/* const text = document.querySelector('h1')
text.className = 'myText'
text.className = 'myText1' */

//2

//text.setAttribute('class','myText2')
// ils écrasent la classe précédente et la remplace par une nouvelle

//3 
//text.classList.add('text3') //ajout d'une autre classe sans écraser l'autre classe

/* text.addEventListener('click', function(){
    text.style.color = 'red'
} ) */
//console.log(text);
//select the btn
myBtn = document.getElementById('myBtn');
// add an eventlistener of type click

myBtn.addEventListener('click',function(){
    //create elements
    let text = document.createElement('h3');
    let myInput = document.querySelector('input') 
    text.innerHTML = myInput.value

    let DeleteBtn = document.createElement('button')
    DeleteBtn.className='deleteBtn'
    DeleteBtn.innerHTML = 'Delete'
    DeleteBtn.className= 'btn btn-danger'
    

    let DoneBtn = document.createElement('button')
    DoneBtn.className='doneBtn'
    DoneBtn.innerHTML = 'Done'
    DoneBtn.className='btn btn-secondary'

    let line = document.createElement('hr')

    let row = document.createElement('div')
     row.appendChild(text)
     row.appendChild(DeleteBtn)
     row.appendChild(DoneBtn)
     row.appendChild(line)

    // relier row with the  div container
    let container = document.getElementsByClassName('container')
    container[0].appendChild(row)

    myInput.value = '';

    //delete a todo
    DeleteBtn.addEventListener('click', function(){
        row.remove()
    })

    DoneBtn.addEventListener('click', function(){
        //1 method 1 for toggle of text 
        /* if(text.style.textDecoration == ''){
            text.style.textDecoration = 'line-through'
        }
        else {
            text.style.textDecoration = ''
        } */

        //2
        text.classList.toggle('lined')
        // toggle the content of btn : DOne/UnDone

        //1
        if(DoneBtn.innerHTML == 'Done'){
            DoneBtn.innerHTML= 'UnDone'
        }
        else {
            DoneBtn.innerHTML = 'Done'
        }
        
    })
})








