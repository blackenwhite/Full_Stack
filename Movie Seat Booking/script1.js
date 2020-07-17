const count=document.getElementById('count'); // count for count
const total = document.getElementById('total'); // total for total
const s=document.querySelectorAll('.row .seat:not(.occupied)'); //s for seats
const c=document.querySelector('.container'); // c for container
const ms= document.getElementById('movie'); // ms for ms or selected movie

populate(); // populate for populateUI
let tP = +ms.value; // tp for ticketPrice

function populate(){
	const ss=JSON.parse(localStorage.getItem('selectedSeats')); // ss for selected seats
	if(ss!==null && ss.length>0){
		s.forEach((seat,index)=>{
			if(ss.indexOf(index)>-1){
				seat.classList.add('selected');
			}
	});
	}
	const smi=localStorage.getItem('selectedMovieIndex'); // smi for selectedMovieIdex
	if(smi!==null){
		ms.selectedIndex=smi;
	}

} 


ms.addEventListener('change', e => {
  tP = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSc();
});




function setMovieData(mI, mP) {  
  localStorage.setItem('selectedMovieIndex', mI);
  localStorage.setItem('selectedMoviePrice', mP);
}

function updateSc(){
	
	
	

	const ss = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...ss].map(seat => [...s].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const st = ss.length;

  count.innerText = st;
  total.innerText = st * tP;
  
  setMovieData(ms.selectedIndex, ms.value);
}

c.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSc();
  }
});

updateSc();

