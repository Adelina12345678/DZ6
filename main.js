const input = document.querySelector('input');
const button = document.querySelector('button');

const todolist = document.querySelector('.todoLIst')

const todo = []

function text (){
     const inputText = input.value

    if(inputText.trim().length > 0){
        const reverse = inputText.split('').reverse().join('')
        todo.push(reverse)

        input.value = ''


    }
    todo.forEach(  (item)=> {
        const p = document.createElement('p')
        p.innerHTML = item
        todolist.append(p)

    })
}
button.onclick = () => text()

