let botao = document.querySelector('.botao');
botao.addEventListener('click', buscarCPF);


function buscarCPF(){
    let cpfInput  = document.querySelector('#cpf');
    let cpf = cpfInput.value.replace('-','');
    console.log(cpf)


    let url = 'http://viacep.com.br/ws/'+cpf+'/json';
    
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET', url, true);
    // Cria um evento para receber o retorno.
    //onreadystatechange que é disparada sempre que nossa requisição sofre alguma alteração durante seu processamento:
    // O código 4 nos informa que a requisição foi finalizada, porém ainda não é suficiente, afinal, finalizada não significa que foi bem sucedida, portanto, é necessário verificar se ela foi realizada com sucesso também! Portanto, faremos uso do xhr.status pra isso:
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    xhr.onreadystatechange = function() { 
    if (xhr.readyState == 4) { 
    if (xhr.status = 200) 
    preencheCampos(JSON.parse(xhr.responseText));
    }} 
    xhr.send();
    
}
function preencheCampos(json) { 
    //   var rua = document.querySelector('input[name=endereco]').value = json.logradouro;

   var rua = json.logradouro;
    var bairro =  json.bairro; 
    var cidade = json.localidade; 
    var estado  = json.uf;

    spanNome = document.querySelector('.nomeSpan');
    spanBairro = document.querySelector('.bairroSpan');
    spanCidade = document.querySelector('.cidadeSpan');
    spanEstado = document.querySelector('.estadoSpan');

    spanNome.innerHTML = `🛣️ Rua: ${rua}.`;
    spanBairro.innerHTML = `🏘️ Bairro: ${bairro}.`;
    spanCidade.innerHTML = `🏙️ Cidade: ${cidade}.`;
    spanEstado.innerHTML = `🗺️ Estado: ${estado}.`;

 }
    
