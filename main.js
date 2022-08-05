localStorage.clear();

var editando = false;

function editar() {
  var gusto = document.getElementById("g").value;
  if(gusto===""){
    alert("Primero debe escribir su gusto.")
  }else{
    document.getElementById(
      "tablagustos"
    ).innerHTML += `<td>${gusto}</td><td>0</td><td><a onclick="hacerEditable(this)">Editar</a></td>`;
  }
}

function hacerEditable(fila) {
  if (editando === false) {
    var nodetr = fila.parentNode.parentNode;
    var nodestr = nodetr.getElementsByTagName("td");
    var confirm = document.getElementById("confirm");
    var gusto = nodestr[0].firstChild.nodeValue;
    var codigohtml =
      '<td><input type="text" id="tdgusto" name="gusto" class="input" value="' +
      gusto +
      '"></td>' +
      '<td><input type="text" name="porcentaje" id="tdporcentaje" class="input" value="' +
      "0" +
      '"></td>' +
      "En edición</td>";
    nodetr.innerHTML = codigohtml;

    confirm.innerHTML =
      "<p>Pulse Aceptar para guardar los cambios o Cancelar para anularlos<p>" +
      '<button type="submit" class="button is-success is-outlined" id="aceptar" onclick="guardar()">Aceptar</button>' +
      "<span> </span>" +
      '<button type="reset" class="button is-danger is-outlined" id="cancelar" onclick="location.reload()">Cancelar</button></div>';
  } else {
    alert("Solo se puede editar una línea. Recargue la página para poder editar otra.");
  }

  editando = true;
}

function guardar() {
  localStorage.setItem("nombre", document.getElementById("nombre").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("telefono", document.getElementById("telefono").value);
  localStorage.setItem("gusto", document.getElementById("tdgusto").value);
  localStorage.setItem(
    "porcentaje",
    document.getElementById("tdporcentaje").value
  );
}
