function validar(){
 
 var nome = form1.nome.value;
 var email = form1.email.value;
 var cidade = form1.cidade.value;
 
 if(nome==""){
  alert("Preencha o campo Nome");
  form1.nome.focus;
  return false;
 }
 
 if(email==""){
  alert("Preencha o campo E-Mail");
  form1.email.focus;
  return false;
 }
 
 if (cidade=="Selecione a Cidade"){
  alert("Escolha para qual cidade você quer viajar");
  form1.cidade.focus;
  return false;
 }
}
