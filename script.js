function add_product() {
    var id = document.getElementById('id').value;
    var nombre = document.getElementById('nombre').value;

    var lista = document.getElementById('tabla_productos');
    //<p id="1234">zapato para caballos</p>
    // var new_paragraph = '<p id="' + id + '">' + nombre + '</p>'; 
    //<tr><td>1234</td><td>Zapatos caballero</td></tr>
    // var new_paragraph = `<p id="${id}">${nombre}</p>`;
    var new_row = `<tr><td>${id}</td><td>${nombre}</td></tr>`;
    var new_row_element = document.createElement('tr');
    var new_td_element_id = document.createElement('td');
    var new_td_element_nombre = document.createElement('td');
    new_td_element_id.textContent = id;
    new_row_element.appendChild(new_td_element_id);
    new_td_element_nombre.textContent = nombre;
    new_row_element.appendChild(new_td_element_nombre);
    
    lista.appendChild(new_row_element);
}

document.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.id === 'btn') {
        add_product();
    }
})