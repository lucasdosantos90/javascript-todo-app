const btnAddTipoTarefa=document.getElementById('btnAddTipoTarefa')
const pagina=document.getElementById('pagina')
let btnAdd=[...document.getElementsByClassName('btnAdd')]
let indice=0

btnAddTipoTarefa.addEventListener('click',()=>{
    if (document.getElementById('tipo-tarefa').value == ''){
        alert('Você precisa dar um nome para a tarefa!')
        document.getElementById('tipo-tarefa').focus()
    } else {
        let nomeTipoTarefa=document.getElementById('tipo-tarefa').value
        const tituloTarefa=document.createElement('h2')
        tituloTarefa.setAttribute('class','tipo-de-tarefa')

        const excluirTarefa=document.createElement('div')
        excluirTarefa.setAttribute('class','btnExcTarefa')
        excluirTarefa.innerHTML = 'x'   
    
        const tipoTarefa=document.createElement('div')
        tipoTarefa.setAttribute('class','blocos-tarefa')
        tituloTarefa.innerHTML = nomeTipoTarefa
        tipoTarefa.appendChild(tituloTarefa)
        
        const divInput=document.createElement('div')
        divInput.setAttribute('class','add')
        divInput.setAttribute('id','tarefa'+indice)
        indice+=1
        
        const inputAddTarefa=document.createElement('input')
        inputAddTarefa.setAttribute('type','text')
        inputAddTarefa.setAttribute('class','textoTarefa')
        
        const btnAdd=document.createElement('div')
        btnAdd.innerHTML = '+'
        btnAdd.setAttribute('class','btnAdd')
        
        tituloTarefa.appendChild(excluirTarefa) 
        divInput.appendChild(inputAddTarefa)
        divInput.appendChild(btnAdd)
        tipoTarefa.appendChild(divInput)
        
        pagina.appendChild(tipoTarefa)
        document.getElementById('tipo-tarefa').value = ''

        excluirTarefa.addEventListener('click',()=>{
            tipoTarefa.remove()
        })
        
    
        btnAdd.addEventListener('click',(e)=>{
            const inputTextTarefa=[...document.getElementsByClassName('textoTarefa')]
            inputTextTarefa.map(()=>{
                console.log(e.target.previousSibling.value)
            })    
            if (e.target.previousSibling.value == ''){
                alert('Escreva uma tarefa para adicionar a lista!')
                e.target.previousSibling.focus()
            } else {
                
                const addTarefa=document.createElement('div')
                addTarefa.setAttribute('class','tarefas')
                addTarefa.innerHTML = e.target.previousSibling.value
                tipoTarefa.appendChild(addTarefa)
                
                const btnDel=document.createElement('div')
                btnDel.setAttribute('class','btnDel')
                btnDel.innerHTML = 'x'
                const btnExc=document.createElement('div')
                btnExc.setAttribute('class','btnExc')
                btnExc.innerHTML = '-'
                const btnConf=document.createElement('div')
                btnConf.setAttribute('class','btnConf')
                btnConf.innerHTML = '✔'

                btnExc.addEventListener('click',()=>{
                    addTarefa.setAttribute('style','text-decoration: line-through;background-color: #cc3b3b9a;')
                })
                btnConf.addEventListener('click',()=>{
                    addTarefa.setAttribute('style','text-decoration: none; background-color: #5dcc3b7d;')
                })
                btnDel.addEventListener('click',()=>{
                    addTarefa.remove()
                })

                addTarefa.appendChild(btnDel)
                addTarefa.appendChild(btnExc)
                addTarefa.appendChild(btnConf)

                e.target.previousSibling.value = ''
                e.target.previousSibling.focus()
            }   
        })
    }

})


