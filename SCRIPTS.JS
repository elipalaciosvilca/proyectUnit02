function encriptar(){
passSitema ="14352deyly<3"
msgError = "Error en la contraseña, vuelve a intentarlo";
var mensaje = document.getElementById("msg").value;
var password = document.getElementById("pass").value;
alert(mensaje+"+"+password)

if(passSistema ==password){
  alert("Contraseña correcta");
document.getElementById("error").innerHTML ="";
  var encryted = btoa(mensaje)
document.getElementById("demo1").innerHTML ="";encryted
  alert(encryted);



}else{

alert("error");
document,getElementById("error").innerHTML =msgError;


}

}





function desencriptar(){
