var product_id = 0;
var array_productos = [];

class Product {
    constructor(nombre) {
        this.id = ++product_id;
        this.nombre = nombre;
    }
}

function print_products () {
    var lista = document.getElementById('tabla_productos');
    for (var i = 0; i <array_productos.length; i++) {
        //Create elements
        var new_row_element = document.createElement('tr');
        var new_td_element_id = document.createElement('td');
        var new_td_element_nombre = document.createElement('td');
        
        //Assign contents
        new_td_element_id.textContent = array_productos[i].id;
        new_td_element_nombre.textContent = array_productos[i].nombre;
        
        //append children
        new_row_element.appendChild(new_td_element_id);
        new_row_element.appendChild(new_td_element_nombre);
    }
    lista.appendChild(new_row_element);
}

function add_product() {
    var nombre = document.getElementById('nombre').value;
    var new_product = new Product(nombre);
    array_productos.push(new_product);

    print_products();
}

function add_product_old() {
    var id = document.getElementById('id').value;
    var nombre = document.getElementById('nombre').value;

    var lista = document.getElementById('tabla_productos');
    
    //Create elements
    var new_row_element = document.createElement('tr');
    var new_td_element_id = document.createElement('td');
    var new_td_element_nombre = document.createElement('td');
    
    //Assign contents
    new_td_element_id.textContent = id;
    new_td_element_nombre.textContent = nombre;
    
    //append children
    new_row_element.appendChild(new_td_element_id);
    new_row_element.appendChild(new_td_element_nombre);
    
    lista.appendChild(new_row_element);
}

document.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.id === 'btn') {
        add_product();
    }
})