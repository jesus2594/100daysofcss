let active = 0;
let btn = Array.from(document.getElementsByClassName('button'));
let card = document.getElementsByClassName('card');

btn.forEach(element => {
    element.addEventListener('click', function(){
        card[active].classList.remove('active');
        card[active].classList.add('inactive');
        active++;
        if(active == 3){
            active = 0;
        }
        card[active].classList.add('active');
        card[active].classList.remove('inactive')
    });
});