function iniciar(){

var numero = document.querySelector('input#itxnum').value
var area = document.querySelector('select#area')

    if (numero == 0){
        window.alert (`Todo número mutiplicado por ZERO é igual a ZERO!`)
    } else{
        var calc = 0
        var res_calc = ''

        area.innerHTML = ''        
        
        for (var cont = 1; cont <= 10; cont++){
            calc = numero * cont

            var opt = document.createElement('option')
            opt.text = `${numero}x${cont} = ${calc}`
            opt.value = `tab${cont}`
            area.appendChild(opt) 
        }
    }
   
}