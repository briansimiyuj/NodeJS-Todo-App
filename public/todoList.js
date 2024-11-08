document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form"),
          listItems = document.querySelectorAll("li")

    form.addEventListener("submit", async(e) =>{
    
        e.preventDefault()

        const input = form.querySelector("input"),
              todo = { item: input.value }

              
        try{

           const response = await fetch("/todo", {

                method: "POST",                
                headers:{

                    "Content-Type": "application/json"

                },
                body: JSON.stringify(todo),
                cache: "no-store"

            })  
              
    
            if(response.ok){

                window.location.reload()
                
            }else{

                console.log('POST request failed')

            }
                
        }catch(error){

            console.error('Error: ' + error)

        }
        
        input.value = ""
    
        
    })
    
    listItems.forEach(item =>{
    
        item.addEventListener("click", async() =>{

            const itemText = item.textContent,

            response = await fetch(`/todo/${itemText}`, {

                method: "DELETE"

            })

            if(response.ok){
            
                window.location.reload()
                
            }

        })      
    
    })

})