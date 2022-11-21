var form = document.getElementById('addForm');
var item = document.getElementById('items');
var item1 = document.getElementById('items1');
var filter = document.getElementById('filter');

// add addEventListener
form.addEventListener('submit',addItem(item,item1));

// delete addEventListener
item.addEventListener('click',deleteItem);

// filter addEventListener
filter.addEventListener('keyup',filterItem);


// Add event
function addItem(e,e1){
  e.preventDefault();
  e1.preventDefault();

  // get input value
  var newitem = document.getElementById('item').value;
  var newitem1 = document.getElementById('item1').value;

  // create new Li element
  var li = document.createElement('li');
  li.className = 'list-group-item';
  // console.log(li);

  // bottom element
  var btn = document.createElement('button');
  btn.className = 'btn btn-danger btn-sm float-right delete';
  
  // add text with input li
  li.appendChild(document.createTextNode(newitem));
  li.appendChild(document.createTextNode(newitem1));
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

// filter item
function filterItem(e) {
  var text = e.target.value.toLowerCase();
  var items = item.getElementsByTagName('li');
  
  Array.from(items).forEach(function(e) {
    var itemName = e.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  });
}