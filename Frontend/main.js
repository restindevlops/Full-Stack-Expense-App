var form=document.getElementById('my-form');

form.addEventListener('submit',setToBackend);

function setToBackend(e){
    e.preventDefault();

    const amount=e.target.amount.value;
    const desc=e.target.desc.value;
    const categ=e.target.categ.value;

    const obj={
        amount,
        desc,
        categ
    }

    axios.post("http://localhost:3000/expense/add-expense",obj)
    .then((response)=>{
        // console.log(response)
        const data=response.data.newExpenseDetail
       
        showUserOnScreen(data)
        
    })
    .catch((err)=>{
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(err);
    })
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:3000/expense/get-expenses")
    .then((response)=>{
        for (var i=0;i<response.data.allExpenses.length;i++){
            showUserOnScreen(response.data.allExpenses[i])
        }
    })
    .catch((err)=>{
        console.log(err);
    })
})

function showUserOnScreen(obj){

    const parentElem=document.getElementById('items');
    const childElem=document.createElement('li');
    childElem.textContent= ' '+'Amount :' +obj.amount+' | '+'Description :' +obj.description+' | '+'Category :' +obj.category;


    const deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='DELETE';
    deleteButton.style.backgroundColor='#eb4343';
    deleteButton.style.padding= '2px 2px';
    deleteButton.style.color= 'white';
    deleteButton.style.borderRadius= '5px';
    deleteButton.style.width='20%';

    deleteButton.onclick=()=>{

        parentElem.removeChild(childElem);
        axios.delete(`http://localhost:3000/expense/delete-expense/${obj.id}`)
    .then((response)=>{
        
    })
    .catch((err)=>{
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(err);
    })

    }


    const editButton=document.createElement('input');
    editButton.type='button';
    editButton.value='EDIT';
    editButton.style.backgroundColor='light gray';
    editButton.style.padding= '2px 2px';
    editButton.style.color= 'black';
    editButton.style.margin= '0 10px';
    editButton.style.borderRadius= '5px';
    editButton.style.width='15%';
    
    editButton.onclick=()=>{
        
        parentElem.removeChild(childElem);
        document.getElementById('amount').value=obj.amount
        document.getElementById('desc').value=obj.description
        document.getElementById('categ').value=obj.category;


        axios.delete(`http://localhost:3000/expense/edit-expense/${obj.id}`)
    .then((response)=>{
        
    })
    .catch((err)=>{
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(err);
    })

    
}
   
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);

}

