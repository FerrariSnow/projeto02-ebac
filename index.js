const form = document.querySelector("#form-cadastro");
const inputNomeContato = document.querySelector("#nome");
const inputTelefoneContato = document.querySelector("#telefone");
let linhas = "";

function adicionaLinha(inputNomeContato, inputTelefoneContato) {
  let linha = "<tr>";
  linha += `<td>${inputNomeContato.value}</td>`;
  linha += `<td>${inputTelefoneContato.value}</td>`;
  linha += "<tr>";

  linhas += linha;
}

function atualizaTabela(linhas) {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  inputNomeContato.value = "";
  inputTelefoneContato.value = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (inputTelefoneContato.value.length < 11) {
    alert(
      "Número de telefone inválido, insira 11 digitos (2 do DDD, e 9 do número em si)."
    );
    inputTelefoneContato.focus();
    return;
  } else if (inputTelefoneContato.value.length > 11) {
    alert("Número de telefone inválido, você inseriu mais de 11 digitos.");
    inputTelefoneContato.focus();
    return;
  }

  adicionaLinha(inputNomeContato, inputTelefoneContato);
  atualizaTabela(linhas);

  // alert(`${inputNomeContato}, ${inputTelefoneContato}`);
});

$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000", { placeholder: "(xx) xxxxx-xxxx" });
});
