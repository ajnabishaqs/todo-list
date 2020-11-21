//declarations
let add = document.querySelector('.add-todos').firstElementChild.firstElementChild;
let search = document.querySelector('.searchbar');
let ul = document.querySelector('.todo-list')







//add new todos
add.parentElement.addEventListener('submit', e => {
    e.preventDefault()
    if (add.value.length > 0){
        ul.innerHTML += `<li class="container"><span>${add.value}</span><img class="bin" src="./img/bin.svg" alt="delete"></li>`
    }else{
        alert('Cannot add empty todo')
    }
    
    add.parentElement.reset()
});






//search todos
search.addEventListener('keyup', () => {
    let term = search.firstElementChild.value;
    Array.from(ul.children)
        .filter( todo => !todo.textContent.includes(term))
            .forEach( li => li.classList.add('filtered'));

    Array.from(ul.children)
        .filter( todo => todo.textContent.includes(term))
            .forEach( li => li.classList.remove('filtered'))        
    
})




//delete todos
ul.addEventListener('click', e2 => {
    if ( e2.target.classList.contains('bin')){
        e2.target.parentElement.remove()
    }
})