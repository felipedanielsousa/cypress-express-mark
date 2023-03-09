/// <reference types="cypress" />

describe('tarefas', ()=>{

    it('Deve cadastrar uma nova tarefa', ()=>{
<<<<<<< HEAD

        const taskName = 'Ler um livro de node.js'

        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: {name: taskName}
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type(taskName)

        ////button[contains(text(), "Create")]
        cy.contains('button', 'Create').click()
        
=======
        
        const taskName = 'Ler um livro de node.js'
        
        cy.removeTaskByName(taskName)
        cy.createTask(taskName)
        
>>>>>>> 0f9e1d9a863aaa6c9702b629ab07c08e7eb5350d
        cy.contains('main div p',taskName)
            .should('be.visible')
    }) 

<<<<<<< HEAD
    it('Não permitir devoluções duplicadas', () =>{
=======
    it('Não deve permitir tarefa duplicada', () =>{
>>>>>>> 0f9e1d9a863aaa6c9702b629ab07c08e7eb5350d
        
        const task = {
            name: 'Estudar Javascript',
            is_done: false
        }
        
<<<<<<< HEAD
        cy.request({
            url:'http://localhost:3333/helper/tasks',
            method:'DELETE',
            body: {name: task.name}
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.request({
            url:'http://localhost:3333/tasks',
            method:'POST',
            body: task
        }).then(response => {
            expect(response.status).to.eq(201)
        })

        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type(task.name)

        ////button[contains(text(), "Create")]
        cy.contains('button', 'Create').click()
=======
        cy.removeTaskByName(task.name)
        cy.postTask(task)
        cy.createTask(task.name)
>>>>>>> 0f9e1d9a863aaa6c9702b629ab07c08e7eb5350d

        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!')
    })
<<<<<<< HEAD
})
=======

    it('Campo obrigatório', () => {
        cy.createTask()
        cy.isRequired('This is a required field')
    })
})

>>>>>>> 0f9e1d9a863aaa6c9702b629ab07c08e7eb5350d
