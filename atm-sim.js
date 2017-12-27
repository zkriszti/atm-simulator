'use strict';
let noteTitle = document.querySelectorAll('.note-title');
let titles = [100,50,20,10];
let machine = document.getElementById('machine');
let piecesEl = document.querySelectorAll('.pieces');
let piecesNr = [0,0,0,0];
let rowSumEl = document.querySelectorAll('.rowSum');
let rowSum = [0,0,0,0];
let i;
let totalEl = document.getElementById('total');
let totalSum = 0;

//create the initial DOM
for (i = 0; i < titles.length; i++) {	
	noteTitle[i].innerHTML = titles[i] + " EUR";
	piecesEl[i].innerHTML = piecesNr[i];
	rowSumEl[i].innerHTML = titles[i] * piecesNr[i];
	}

document.getElementById("machine").addEventListener("click",function(e) {
	// e.target is the clicked element
  if (e.target && (e.target.matches(".add") || e.target.matches(".decr"))) {
		
    let rowID = e.target.dataset.rowIndex;
		
		if(e.target.matches(".add")){
			piecesNr[rowID-1]++; 
			totalSum = totalSum + titles[rowID-1];
		}
		else if(e.target.matches(".decr") && piecesNr[rowID-1]>0)
		{
			piecesNr[rowID-1]--; totalSum = totalSum - titles[rowID-1];
		}
		
		piecesEl[rowID-1].innerHTML = piecesNr[rowID-1] + " x " + titles[rowID-1] + " =";
		
		rowSum = titles[rowID-1] * piecesNr[rowID-1];
		rowSumEl[rowID-1].innerHTML = rowSum;
				
		totalEl.innerHTML = totalSum;
				
		}
});