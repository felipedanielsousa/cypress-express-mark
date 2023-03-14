/// <reference types="cypress" />

describe('tarefas', ()=>{

    let testData;

    before(()=>{
        cy.fixture('tasks').then(t => {
            testData = t
        })
    })


    context('cadastro', () => {
        it('Deve cadastrar uma nova tarefa', ()=>{

            const taskName = 'Ler um livro de node.js'
    
            cy.removeTaskByName(taskName)
            cy.createTask(taskName)
            
            cy.contains('main div p',taskName)
                .should('be.visible')
        }) 
    
        it('Não deve permitir tarefa duplicada', () =>{
            
            const task = testData.dup
            
            cy.removeTaskByName(task.name)
            cy.postTask(task)
            cy.createTask(task.name)
    
            cy.get('.swal2-html-container')
                .should('be.visible')
                .should('have.text', 'Task already exists!')
        })
    
        it('Campo obrigatório', () => {
            cy.createTask()
            cy.isRequired('This is a required field')
        })
    })

    context('atualizações', ()=> {
        it('deve concluir uma tarefa', () => {
            
            const task = testData.dup

            

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')
            //(//p[contains(text(), "Pagar contas de consumo")]/..//button)[1]
            cy.contains('p', task.name)
                .parent()
                //* funciona como um contains, pega uma parte do class que nao vai mudar e combina com p
                .find('button[class*=ItemToggle]') 
                .click()

            cy.contains('p', task.name)
                .should('have.css','text-decoration-line','line-through')

        })
    })

    context('exclusão', ()=> {
        it('deve remover uma tarefa', () => {
            
            const task = {
                name: 'Estudar Javascript',
                is_done: false
            }

            cy.removeTaskByName(task.name)
            cy.postTask(task)

            cy.visit('/')
            //(//p[contains(text(), "Pagar contas de consumo")]/..//button)[1]
            cy.contains('p', task.name)
                .parent()
                //* funciona como um contains, pega uma parte do class que nao vai mudar e combina com p
                .find('button[class*=ItemDeleteButton]') 
                .click()

            cy.contains('p', task.name)
                .should('not.exist')

        })
    })


})

