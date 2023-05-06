let player = 1
let start_const = false

let reset_btn = window.document.getElementById('reset_btn')
let start_btn = window.document.getElementById('start_btn')

function mark(code) {
	if(start_const) {

		let icon = window.document.querySelector(`div.i${code}`)
		
		if (String(icon.classList).indexOf('circle') != -1 || String(icon.classList).indexOf('x') != -1 ) {
			return false
		}
		else {
			if(player === 1){
			
				icon.classList.add('circle')
				win()
				player = 2	
			}
			else if (player === 2){
				icon.classList.add('x')
				win()
				player = 1
			}
		}
		
	}
	else{
		return false
	}
}


function win(){
	
	let board = window.document.querySelector('div#board')
	let winner_box = window.document.querySelector('div#winner_title')
	let winner_title = window.document.createElement('h1')
	winner_title.setAttribute('id','winner')
	if(winTest()){
		
		const_start = false
		setTimeout(()=>{
			board.classList.add('d-none')
			winner_box.classList.remove('d-none')
			switch(winTest()) {
				case 1: 
					winner_title.innerHTML = 'Vermelho venceu!'
					winner_title.style.color = 'red'
					break
				case 2:
					winner_title.innerHTML = 'Verde venceu!'
					winner_title.style.color = 'green'
					break
				case 3:
					winner_title.innerHTML = 'Empate'
					winner_title.style.color = 'black'
					break
				default:
					break
			}
			document.querySelector('div#winner_title').appendChild(winner_title)
			reset_btn.classList.remove('d-none')

		}
			,200)
		
	}
}

function winTest() {
	
	let caixa0 = window.document.getElementsByClassName('i0')[0]
	let caixa1 = window.document.getElementsByClassName('i1')[0]
	let caixa2 = window.document.getElementsByClassName('i2')[0]

	let caixa3 = window.document.getElementsByClassName('i3')[0]
	let caixa4 = window.document.getElementsByClassName('i4')[0]
	let caixa5 = window.document.getElementsByClassName('i5')[0]

	let caixa6 = window.document.getElementsByClassName('i6')[0]
	let caixa7 = window.document.getElementsByClassName('i7')[0]
	let caixa8 = window.document.getElementsByClassName('i8')[0]

	if((String(caixa0.classList).indexOf('x') != -1 && String(caixa1.classList).indexOf('x') != -1 && String(caixa2.classList).indexOf('x') != -1 ) || 
		(String(caixa3.classList).indexOf('x') != -1 && String(caixa4.classList).indexOf('x') != -1 && String(caixa5.classList).indexOf('x') != -1 ) ||
		(String(caixa6.classList).indexOf('x') != -1 && String(caixa7.classList).indexOf('x') != -1 && String(caixa8.classList).indexOf('x') != -1 ) ||
		(String(caixa0.classList).indexOf('x') != -1 && String(caixa3.classList).indexOf('x') != -1 && String(caixa6.classList).indexOf('x') != -1 ) ||
		(String(caixa1.classList).indexOf('x') != -1 && String(caixa4.classList).indexOf('x') != -1 && String(caixa7.classList).indexOf('x') != -1 ) ||
		(String(caixa2.classList).indexOf('x') != -1 && String(caixa5.classList).indexOf('x') != -1 && String(caixa8.classList).indexOf('x') != -1 ) ||
		(String(caixa0.classList).indexOf('x') != -1 && String(caixa4.classList).indexOf('x') != -1 && String(caixa8.classList).indexOf('x') != -1 ) ||
		(String(caixa2.classList).indexOf('x') != -1 && String(caixa4.classList).indexOf('x') != -1 && String(caixa6.classList).indexOf('x') != -1 )){
			
			return 1;
		}

	else if((String(caixa0.classList).indexOf('circle') != -1 && String(caixa1.classList).indexOf('circle') != -1 && String(caixa2.classList).indexOf('x') != -1 ) || 
		(String(caixa3.classList).indexOf('circle') != -1 && String(caixa4.classList).indexOf('circle') != -1 && String(caixa5.classList).indexOf('circle') != -1 ) ||
		(String(caixa6.classList).indexOf('circle') != -1 && String(caixa7.classList).indexOf('circle') != -1 && String(caixa8.classList).indexOf('circle') != -1 ) ||
		(String(caixa0.classList).indexOf('circle') != -1 && String(caixa3.classList).indexOf('circle') != -1 && String(caixa6.classList).indexOf('circle') != -1 ) ||
		(String(caixa1.classList).indexOf('circle') != -1 && String(caixa4.classList).indexOf('circle') != -1 && String(caixa7.classList).indexOf('circle') != -1 ) ||
		(String(caixa2.classList).indexOf('circle') != -1 && String(caixa5.classList).indexOf('circle') != -1 && String(caixa8.classList).indexOf('circle') != -1 ) ||
		(String(caixa0.classList).indexOf('circle') != -1 && String(caixa4.classList).indexOf('circle') != -1 && String(caixa8.classList).indexOf('circle') != -1 ) ||
		(String(caixa2.classList).indexOf('circle') != -1 && String(caixa4.classList).indexOf('circle') != -1 && String(caixa6.classList).indexOf('circle') != -1 )){

			return 2;
		}

	else if((String(caixa0.classList).indexOf('circle') != -1 || String(caixa0.classList).indexOf('x') != -1) &&
			(String(caixa1.classList).indexOf('circle') != -1 || String(caixa1.classList).indexOf('x') != -1) &&
			(String(caixa2.classList).indexOf('circle') != -1 || String(caixa2.classList).indexOf('x') != -1)&&
			(String(caixa3.classList).indexOf('circle') != -1 || String(caixa3.classList).indexOf('x') != -1)&&
			(String(caixa4.classList).indexOf('circle') != -1 || String(caixa4.classList).indexOf('x') != -1)&&
			(String(caixa5.classList).indexOf('circle') != -1 || String(caixa5.classList).indexOf('x') != -1) &&
			(String(caixa6.classList).indexOf('circle') != -1 || String(caixa6.classList).indexOf('x') != -1)&&
			(String(caixa7.classList).indexOf('circle') != -1 || String(caixa7.classList).indexOf('x') != -1)&&
			(String(caixa8.classList).indexOf('circle') != -1 || String(caixa8.classList).indexOf('x') != -1)){
			
			return 3;
		}
	
	return 0;
}



function start() {
	start_btn.classList.add('d-none')
	start_const = true
	
}



function reset(){
	let board = window.document.querySelector('div#board')
	let winner_box = window.document.querySelector('div#winner_title')
	let winner_title = window.document.getElementById("winner")

	reset_btn.classList.add('d-none')
	start_btn.classList.remove('d-none')
	winner_box.classList.add('d-none')
	board.classList.remove('d-none')

	start_const = false
	player = 1
	if(winner_title) {
		winner_title.remove()
	}
	for (let i = 0; i < 9; i++) {
		let box = window.document.getElementsByClassName(`i${i}`)[0]
		box.classList.remove('x')
		box.classList.remove('circle')
	}
}



