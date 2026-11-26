function add_product() {
    var id = document.getElementById('id').value;
    var nombre = document.getElementById('nombre').value;

    var lista = document.getElementById('tabla_productos');
    //<p id="1234">zapato para caballos</p>
    // var new_paragraph = '<p id="' + id + '">' + nombre + '</p>'; 
    //<tr><td>1234</td><td>Zapatos caballero</td></tr>
    // var new_paragraph = `<p id="${id}">${nombre}</p>`;
    var new_row = `<tr><td>${id}</td><td>${nombre}</td></tr>`;
    lista.innerHTML += new_row;
}

document.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.id === 'btn') {
        add_product();
    }
})