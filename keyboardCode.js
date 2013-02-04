/**
* Keyboard Code
* @author Carlos Vinicius
* @version 1.0
* @license MIT
*/
(function($,undefined){
    $.fn.keyboardCode=function(opts)
	{
        var log,$this,extTitle,options,defaults;

		$this=$(this);
		if($this.length<1)return $this;

		extTitle="Keyboard Code";
		log=function(msg,type){
			if(typeof console=="object")
				console.log("["+extTitle+" - "+(type||"Erro")+"] "+msg);
		};
		
		defaults=
		{
			// Combinação de teclas que geram um código. Por padrão é utilizada a sequência do Konami Code
			code:"38,38,40,40,37,39,37,39,66,65",
			// Tempo máximo para se prescionar a próxima tecla do código (em milesegundos)
			maxTime:1000,
			// Função que será executada após o código ser digitado
			callback:function(){alert("Código secreto ativado");}
		};
		
		// Verificando se o parametro passado é um objeto ou uma função
		if(typeof opts === "function")
			options=$.extend({}, defaults, {callback:opts});
		else
			options=$.extend({}, defaults, opts);
			
		$this.each(function(){
			var $t,tempKeys=[],tOut;
			
			$t=$(this);
			
			$t.bind("keyup",function(e){
				tempKeys.push(e.keyCode);
			
				if(tempKeys.join(",").indexOf(options.code)>-1)
				{
					clearTimeout(tOut);
					tempKeys=[];
					options.callback();
				}
				else
				{
					clearTimeout(tOut);
					tOut=setTimeout(function(){
						tempKeys=[];
					},options.maxTime);
				}
			});
			
		});
    };
})(jQuery);