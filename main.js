function addItem() {
    // Pega o valor do input
    var newItemText = document.getElementById("item").value;

    // Cria um novo elemento de lista
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newItemText));

    // Cria um botão de remover
    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("exclui"));
    removeButton.onclick = function () {
      removeItem(li);
    };
    li.appendChild(removeButton);

    // Adiciona o novo item à lista
    document.getElementById("itemList").appendChild(li);

    // Limpa o campo de entrada
    document.getElementById("item").value = "";
  }

  function removeItem(item) {
    // Remove o item da lista
    item.remove()
}