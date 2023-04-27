(function(){
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let equal = document.querySelector('.buttons_equalsTo')
    let clear = document.querySelector('.buttons_cancel')
    // let divide = document.querySelector('.btn buttons_row1')
const cancel = document.querySelector(".CE")
    buttons.forEach(function(button){

        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value+= value;
        })
    });
    equal.addEventListener('click', function(e){
        if(screen.value==='' ){
            screen.value='';
        }
        else{
            let answer = eval(screen.value);
            screen.value= answer; 
        }
        if (answer.value.length >="8") {
           answer='above limits'
            
        }
    });
    clear.addEventListener('click', function(e){
      screen.value =''
    });
    // divide.addEventListener('click',function(e){
    //     if (screen.value+= value) {
    //         value +='/'
            
    //     } else {
            
    //     }
    // })

    cancel.addEventListener('click', (e)=>{
       screen.value = screen.value.substring(0, screen.value.length -=1)
      
    })

})();