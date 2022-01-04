'use strict'

const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

let todoData = []

if (localStorage.getItem('key')) {
    todoData = JSON.parse(localStorage.getItem('key'))
    render()
}

function render () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''

    todoData.forEach(function (item, index) {

        const li = document.createElement('li')
        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text +
        '<div class="todo-buttons">' + 
        '<button class="todo-remove"></button>' + 
        '<button class="todo-complete"></button>' + 
        '</div>'

        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            localStorage.setItem('key', JSON.stringify(todoData))
            render()
        })
        li.querySelector('.todo-remove').addEventListener('click', function () {
            todoData.splice(index, 1)
            localStorage.setItem('key', JSON.stringify(todoData))
            if (todoData.length === 0) {
                localStorage.removeItem('key')
            }
            render()
        })
    })
}

todoControl.addEventListener('submit', function (event) {
    event.preventDefault()

    if (headerInput.value.trim() !== '') {
        const newToDo = {
            text: headerInput.value,
            completed: false
        }
        todoData.push(newToDo)
        localStorage.setItem('key', JSON.stringify(todoData))
        render()
        headerInput.value = ''
    } else {
        headerInput.value = ''
    }
})