const _upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const _lower = _upper.toLowerCase()
const _number = '1234567890'
const _characters = '({[¿¡@/ñ!?]})'

const validateChebox =()=>{


    const inputs = form.querySelectorAll( '.input__1w23A' )

    document.getElementById( 'span__ub0arBjM96' ).textContent = form.input__KWEKx4JbxA.value
    sessionStorage.setItem( 'nLength', form.input__KWEKx4JbxA.value )

    for ( let index = 0; index < inputs.length; index++ ) { 
        if( inputs[ index ].checked ) break
        if( index === inputs.length - 1  ) return
    }
    
    const [ _base ] = [ ...Array(1).keys() ].map( ()=> {
        const _base = []
        
        if( inputs[ 0 ].checked ) _base.push( _upper )
        if( inputs[ 1 ].checked ) _base.push( _lower )
        if( inputs[ 2 ].checked ) _base.push( _number )
        if( inputs[ 3 ].checked ) _base.push( _characters )

        return _base.join('') 
    } )
 
    const salida = [ ...Array(Number( form.input__KWEKx4JbxA.value )).keys() ].map( ()=> _base[ Math.floor( Math.random()*_base.length ) ] ).join('')
    form.input__mY266Uc61X.value = salida
};  

const form = document.getElementById( 'form__T5keb0QfKx' )

form.addEventListener( 'input', ( e )=>{
    const _class = e.target.className 
    validateChebox()
    if( _class === 'input__1w23A' ) return 
 
} )

form.addEventListener( 'submit', (e)=> e.preventDefault() )
form.button__cfq7i80HEW.addEventListener( 'click', validateChebox)
form.button__460ynXN4sM.addEventListener( 'click', ()=> ( form.input__mY266Uc61X.select(), document.execCommand('copy') ))
 


if( !sessionStorage.getItem( 'nLength' ) ) sessionStorage.setItem( 'nLength', 15 )
form.input__KWEKx4JbxA.value = sessionStorage.getItem( 'nLength' )

validateChebox()


/*const validar_generador =()=>{
    if  ((!formulario.letra_i.checked) && (!formulario.letra_ii.checked) &&
        (!formulario.numero.checked) && (!formulario.caracter.checked)){ return }
    else{ 
        if(formulario.ipt_lenght.value < 4){ formulario.ipt_lenght.value = 4 }
        else if(formulario.ipt_lenght.value > 40){ formulario.ipt_lenght.value = 40 }
        generador_aleatorio();    
    }
}*/