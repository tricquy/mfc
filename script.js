var valide = false;

function valider() {
	
	var q1 = false;
	var q2 = false;
	var q3 = false;
	var q4 = false;
	var q5 = false;
	var q6 = false;
	var q7 = false;
	var q8 = false;
	var q9 = false;
	var q10 = false;
	
	if (document.getElementById('v1').checked || document.getElementById('f1').checked) {
		q1 = true;
    }
	if (document.getElementById('v2').checked || document.getElementById('f2').checked) {
		q2 = true;
    }
	if (document.getElementById('v3').checked || document.getElementById('f3').checked) {
		q3 = true;
    }
	if (document.getElementById('v4').checked || document.getElementById('f4').checked) {
		q4 = true;
    }
	if (document.getElementById('v5').checked || document.getElementById('f5').checked) {
		q5 = true;
    }
	if (document.getElementById('v6').checked || document.getElementById('f6').checked) {
		q6 = true;
    }
	if (document.getElementById('v7').checked || document.getElementById('f7').checked) {
		q7 = true;
    }
	if (document.getElementById('v8').checked || document.getElementById('f8').checked) {
		q8 = true;
    }
	if (document.getElementById('v9').checked || document.getElementById('f9').checked) {
		q9 = true;
    }
	if (document.getElementById('v10').checked || document.getElementById('f10').checked) {
		q10 = true;
    }
	
	if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {
		
		var valeur = 0;
		
		if (document.getElementById('v1').checked) {
  			valeur = valeur + parseInt(document.getElementById('v1').value);
		}
		if (document.getElementById('f1').checked) {
  			valeur = valeur + parseInt(document.getElementById('f1').value);
		}
		if (document.getElementById('v2').checked) {
  			valeur = valeur + parseInt(document.getElementById('v2').value);
		}
		if (document.getElementById('f2').checked) {
  			valeur = valeur + parseInt(document.getElementById('f2').value);
		}
		if (document.getElementById('v3').checked) {
  			valeur = valeur + parseInt(document.getElementById('v3').value);
		}
		if (document.getElementById('f3').checked) {
  			valeur = valeur + parseInt(document.getElementById('f3').value);
		}
		if (document.getElementById('v4').checked) {
  			valeur = valeur + parseInt(document.getElementById('v4').value);
		}
		if (document.getElementById('f4').checked) {
  			valeur = valeur + parseInt(document.getElementById('f4').value);
		}
		if (document.getElementById('v5').checked) {
  			valeur = valeur + parseInt(document.getElementById('v5').value);
		}
		if (document.getElementById('f5').checked) {
  			valeur = valeur + parseInt(document.getElementById('f5').value);
		}
		if (document.getElementById('v6').checked) {
  			valeur = valeur + parseInt(document.getElementById('v6').value);
		}
		if (document.getElementById('f6').checked) {
  			valeur = valeur + parseInt(document.getElementById('f6').value);
		}
		if (document.getElementById('v7').checked) {
  			valeur = valeur + parseInt(document.getElementById('v7').value);
		}
		if (document.getElementById('f7').checked) {
  			valeur = valeur + parseInt(document.getElementById('f7').value);
		}
		if (document.getElementById('v8').checked) {
  			valeur = valeur + parseInt(document.getElementById('v8').value);
		}
		if (document.getElementById('f8').checked) {
  			valeur = valeur + parseInt(document.getElementById('f8').value);
		}
		if (document.getElementById('v9').checked) {
  			valeur = valeur + parseInt(document.getElementById('v9').value);
		}
		if (document.getElementById('f9').checked) {
  			valeur = valeur + parseInt(document.getElementById('f9').value);
		}
		if (document.getElementById('v10').checked) {
  			valeur = valeur + parseInt(document.getElementById('v10').value);
		}
		if (document.getElementById('f10').checked) {
  			valeur = valeur + parseInt(document.getElementById('f10').value);
		}
		/*
		document.getElementById("r1").innerHTML = "<b>R &eacute; s u l t a t : </b>Pour les questions 1, 3, 5, 6, 8 et 10, comptez un point chaque fois que vous avez r&eacute;pondu &laquo; faux &raquo;, z&eacute;ro point si vous avez r&eacute;pondu &laquo; vrai &raquo;. Pour les questions 2, 4, 7 et 9, comptez un point chaque fois que vous avez r&eacute;pondu &laquo; vrai &raquo; et z&eacute;ro point si vous avez r&eacute;pondu &laquo; faux &raquo;.<br><br>Plus votre score est faible, plus vous peinez &agrave; vous remettre d&rsquo;une &eacute;motion n&eacute;gative. Tout score inf&eacute;rieur &agrave; trois points indique que vous poss&eacute;dez un faible niveau de r&eacute;silience, et donc que vous &ecirc;tes lent &agrave; r&eacute;cup&eacute;rer apr&egrave;s une &eacute;preuve. Si vous avez obtenu plus de sept points, en revanche, vous &ecirc;tes rapide &agrave; r&eacute;cup&eacute;rer et tout &agrave; fait r&eacute;silient. <br><br>Si les questions couvrent une large gamme d&rsquo;incidents, allant du plus futile (question 5) au plus grave (question 3), c&rsquo;est parce que la r&eacute;cup&eacute;ration apr&egrave;s les d&eacute;fis mineurs inflig&eacute;s pendant une exp&eacute;rience, comme une br&ucirc;lure ou l&rsquo;apparition d&rsquo;une image d&eacute;rangeante, est directement li&eacute;e &agrave; la mani&egrave;re de r&eacute;agir &agrave; l&rsquo;adversit&eacute; de la vie en g&eacute;n&eacute;ral, et en particulier &agrave; la vitesse de r&eacute;cup&eacute;ration. La r&eacute;silience face aux petites choses est donc un bon indicateur de ce qu&rsquo;elle sera face aux grandes.";
		*/
		valide = true;
	}
	else {
		document.getElementById("r1").innerHTML = "";
	}
}

function sauvegarder() {
	if (valide) {
		window.location.href = "https://www.hec.ca/";
	}
}