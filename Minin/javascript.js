// ((true || false) || !false) ? console.log('true') : console.log('false');


// var personAge = 20
// var message
// if (personAge < 18){
//     message = 'young man'
// } else{
//     message = 'your age are good'
// }

// var message = personAge <h2 18 ? 'young man' : 'your age are good'
// console.log(message);



// var carName = 'ford'
// var carYear = 2011
// var personYear = 1991


// function calculateAge(year){
//     var currentYear = 2020
//     var result = currentYear - year
//     return result
// }


// function checkAnLogAge(year){
//     if (calculateAge(year)  < 10){
//         console.log('the age young');
//     }else {
//         console.log('the age longer');
//     }
// }

// checkAnLogAge(carYear)
// checkAnLogAge(personYear)



// var sayHelloTo = function (name){
//     console.log('Hello : ' + name);
// }

// sayHelloTo('Serg')


// DOM
// var div = document.getElementById('playground')
// var p = document.getElementsByClassName('text')
// var h1 = document.getElementsByTagName('h1')
// console.log(div);
// console.log(p);
// console.log(h1);


// var div = document.querySelector('#playground')
// var p = document.querySelectorAll('.text')
// var h1 = document.querySelector('h1')
// // var ul = document.querySelector('#playground ul')
// // var ul2 = document.querySelector('#playground > div > ul')
// var input = document.querySelector('input')
// div.innerHTML = '<h2 style="color: red;">from javascript</h2>'
// h1.textContent = 'changed from JS'
// console.log(h1.textContent);
// console.log(p);
// console.log(div.innerHTML);
// console.log(input.value);
// // console.log(ul);
// // console.log(ul2);

// var a = document.querySelector('a')
// var oldHref = a.getAttribute('href')

// a.setAttribute('href','https://ya.ru')
// a.textContent ='yandexx'


// var box1 = document.querySelector('#box1')
// var box2 = document.querySelector('#box2')

// box1.classList.add('red')
// box2.classList.remove('blue')
// var hasClass = box2.classList.contains('blue')
// console.log(hasClass);

// if (hasClass) {
//     box2.classList.remove('blue')
// }else{
//     box2.classList.add('blue')
// }

// var button = document.querySelector('button')
// var h1 = document.querySelector('h1')
// var input = document.querySelector('input')

// function buttonHandler() {
//     console.log('clicked!');
//     h1.textContent = input.value
// }


// h1.addEventListener('mouseenter', function() {
//     this.style.color = 'red'
//     this.style.backgroundColor = 'blue'
// })


// h1.addEventListener('mouseleave', function() {
//     this.style.color = 'blue'
//     this.style.backgroundColor = 'red'
    
// })

// button.addEventListener('click',buttonHandler)


// var divs = document.querySelectorAll('div')

// var link = document.querySelector('a')

// for(var i = 0; i < divs.length; i++){
//     divs[i].addEventListener('click', function(event){
//         event.stopPropagation()
//         console.log(this.getAttribute('id'));
//     })
// }

// link.addEventListener('click', handleLinkClick)

// function handleLinkClick () {
//     event.preventDefault()

//     var div = divs[0]
//     // if (div.style.display === 'none')  {
//     //     div.style.display = 'flex'
//     // } else {
//     //     div.style.display = 'none'
//     // }

//     div.style.display = div.style.display === 'none'
//     ? 'flex'
//     :'none'

//     console.log(div.style.display);
// }


// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function () {
//         event.target.style.color = 'blue'
//     })
// }


// document.getElementById('wrapper').addEventListener('click', function (event){
//     var tagName = event.target.tagName.toLowerCase()

//     if(tagName === 'p'){
//         event.target.style.color = 'red'
//     }

//     if (event.target.classList.contains('color')) {
//         event.target.style.color = 'blue'
//     }
// })


// document.querySelector('#alert').addEventListener('click', () => {
//     alert('you have successfully click the button')
// })

// document.querySelector('#confirm').addEventListener('click', () => {
//   var decision = confirm('are you sure do you want click the button')

//     if (decision === true) {
//         alert('hello me friend')
//     } else {
//         confirm('are you sure maybe you want try again ? ')
//     }
// })

// document.querySelector('#prompt').addEventListener('click', () => {
//    var age = prompt('Please enter your age ')

//    if (age => 18) {
//         alert('you can continue ')
//    } else {
//         alert('you still young')
//    }

    
// })


// let str = '1,2,3,4,5,6,7,8'

// let array = str.split(',')

// console.log(array.concat(['9']))
// // console.log(array.join(';'))
// // console.log(array.slice(1))
// // console.log(array.reverse())
// array.splice(1, 0)
// console.log(array);



// let objArr = [
//     {name: 'Max', age: 27, country: 'Israel'},
//     {name: 'Bob', age: 40, country: 'LA'},
//     {name: 'Muhamed', age: 18, country: 'Iraq'}
// ]

// let foundPerson = objArr.find((person) => {
//     return person.age >= 16
// })
// console.log(foundPerson);


// let odd =  [1,2,3,4,5,6,7,8,9].filter((i) => {
//     return i % 2 !== 0
// })

// let numArray = array.map((i) => {
//     return i * 2
// })

// console.log(odd);
// console.log(numArray);



// let person = {
//     firstName: 'Sergey',
//     lastName: 'Feigin',
//     yearOfBirth: 1991,
//     car: {
//         model: 'Skoda'
//     },
//     job: 'Fullstack',
//     status: 'married'
// }

// const str = JSON.stringify(person)
// const prs = JSON.parse(str)
// console.log(str);
// console.log(prs);



//localStorage

document.querySelector('button').addEventListener('click', (event) => {
    let value = document.querySelector('input').value

    let obj = {
        text : value
    }

    localStorage.setItem('headerText', JSON.stringify(obj))
})

document.addEventListener('DOMContentLoaded', () => {
    let obj = {}

    try {
        let obj = JSON.parse(localStorage.getItem('headerText'))
    } catch (e) {}

    

   

    if(obj && obj.text && text.trim()) {
        document.querySelector('h1').textContent = obj.text
    }

    
})