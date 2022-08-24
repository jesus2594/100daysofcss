let i=1;
let timer=document.querySelector('.here');
let control=document.querySelector('.control');
var c=control.textContent;
let temp=false;
var intervalId = null;

function counterToggle(){
		if(temp){
		clearInterval(intervalId);
	  control.textContent= c;
		temp=false;
	}
	else{
		temp=true;
		go();
	}
}

let go = function(){ 
    intervalId = setInterval(()=>{
	control.textContent= 'II';
	if(i<10) str='000'+i;
	else if(i<100) str='00'+i;
	else if(i<1000) str='0'+i;
	else str=i+'';
	timer.textContent= str;
	i++;
}, 1000);
}; 
counterToggle();