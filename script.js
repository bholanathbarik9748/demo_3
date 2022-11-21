var form = document.getElementById('addForm');
var item = document.getElementById('items');

// add addEventListener
form.addEventListener('submit',addItem);

// delete addEventListener
item.addEventListener('click',deleteItem);


// Add event
function addItem(e){
  e.preventDefault();

  // get input value
  var newitem = document.getElementById('item').value;

  // create new Li element
  var li = document.createElement('li');
  li.className = 'list-group-item';
  // console.log(li);

  // bottom element
  var btn = document.createElement('button');
  btn.className = 'btn btn-danger btn-sm float-right delete';
  
  // add text with input li
  li.appendChild(document.createTextNode(newitem));
  btn.appendChild(document.createTextNode('X'));

  li.appendChild(btn);
  item.appendChild(li);
} 

// delete event
function deleteItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm("Are you Sure ?")){
      var li = e.target.parentElement;
      item.removeChild(li);
    }
  }
}