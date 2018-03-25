console.log("Teste");

$(".cadastro_input").hide();

function trataNome() {

	var nome = $("input[name=nome]").val();

	var letters = /^[A-Za-z ]+$/;

	if(nome.match(letters)){
		$("#nome_input").show();
		$("#error_name").hide();
		$("#sucess_name").show();
	}else{
		$("#nome_input").show();
		$("#error_name").show();
		$("#sucess_name").hide();
	}
}

$("input[name=nome]").blur(trataNome);

$("input[name=email]").blur(function(){
	var email = $("input[name=email]").val();
	var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

	if(email.match(regex)){
		$("#email_input").show();
		$("#error_mail").hide();
		$("#sucess_mail").show();
	}else{
		$("#email_input").show();
		$("#error_mail").show();
		$("#sucess_mail").hide();
	}
});

$("input[name=conf_senha]").blur(function(){
	var senha = $("input[name=senha]").val();
	var conf_senha = $("input[name=conf_senha]").val();

	if(senha != conf_senha){
		$("#senha_input").show();
		$("#error_senha").show();
		$("#sucess_senha").hide();
	}else{
		var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
		if(conf_senha.match(regex)){
			$("#senha_input").show();
			$("#error_senha").hide();
			$("#sucess_senha").show();
		}else{
			$("#senha_input").show();
			$("#error_senha").show();
			$("#sucess_senha").hide();
		}
	}
});