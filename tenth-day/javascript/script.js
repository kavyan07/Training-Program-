document.getElementById('bt').addEventListener('click', function() {
   const name= document.getElementById('name').value;
   const list= document.getElementById('list');
   

   const li= document.createElement('li');
   li.innerText= name;
   list.appendChild(li);
   document.getElementById('name').value= '';

})
document.getElementById('rm').addEventListener('click', function() {
   const list= document.getElementById('list');
   list.removeChild(list.lastElementChild);         });