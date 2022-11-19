function __insertText__(){                                      // --- Armazenamento do valor que será digitado pelo user --------
 
  let nome = document.getElementById("__userInput__").value;    // --- Permita que seja criado um novo nome ---------------------
  let linhaLista = document.createElement('li');                // --- Permita que seja adicionado na lista ---------------------
  linhaLista.innerText = nome;                                  // --- Define o nome criado na lista ----------------------------
  
let lista = document.getElementById("__showText__");            // --- Permita que a lista mostre o texto -----------------------

  lista.appendChild(linhaLista);                                // --- Adiciona o nome da lista ---------------------------------
}


