jQuery Keyboard Code
===================

Este plugin executa funções customizáveis após um sequência de teclas (pré-definidas) serem prescionadas dentro de um intervalo de tempo ajustado.

Um exemplo de uso deste plugin é adcionar o Konami Code ao seu site, este plugin não tem o nome de "jQuery Konami Code" pois outros "códigos secretos também podem ser criados".

## Exemplos
**Básico**
```javascript
	$(window).keyboardCode(function(){
		alert("Konami Code Digitado!");
	});
```
**Avançado**
```javascript
	$(window).keyboardCode(
	{
		maxTime:5000,
		callback:function(){ alert("Konami Code Digitado!"); }
	});
```
**Criando outros códigos**
```javascript
	$(window).keyboardCode(
	{
		code:"49,50,51",
		callback:function(){ alert("Meu código!"); }
	});
```

## Lista de opções do plugin
```javascript
	$(window).keyboardCode({
		// Combinação de teclas que geram um código. Por padrão é utilizada a sequência do Konami Code
		code:"38,38,40,40,37,39,37,39,66,65",
		// Tempo máximo para se prescionar a próxima tecla do código (em milesegundos)
		maxTime:1000,
		// Função que será executada após o código ser digitado
		callback:function(){alert("Código secreto ativado");}
	});
```