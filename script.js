var resultat1 = "<b>R é s u l t a t : </b>Pour les questions 1, 3, 5, 6, 8 et 10, comptez un point chaque fois que vous avez répondu « faux », zéro point si vous avez répondu « vrai ». Pour les questions 2, 4, 7 et 9, comptez un point chaque fois que vous avez répondu « vrai » et zéro point si vous avez répondu « faux ».<br><br>Plus votre score est faible, plus vous peinez à vous remettre d’une émotion négative. Tout score inférieur à trois points indique que vous possédez un faible niveau de résilience, et donc que vous êtes lent à récupérer après une épreuve. Si vous avez obtenu plus de sept points, en revanche, vous êtes rapide à récupérer et tout à fait résilient. <br><br>Si les questions couvrent une large gamme d’incidents, allant du plus futile (question 5) au plus grave (question 3), c’est parce que la récupération après les défis mineurs infligés pendant une expérience, comme une brûlure ou l’apparition d’une image dérangeante, est directement liée à la manière de réagir à l’adversité de la vie en général, et en particulier à la vitesse de récupération. La résilience face aux petites choses est donc un bon indicateur de ce qu’elle sera face aux grandes.";

var resultat2 = "<b>R é s u l t a t : </b>Pour les questions 1, 3, 6, 8 et 10, comptez un point chaque fois que vous avez répondu « vrai », zéro point si vous avez répondu « faux ». Pour les questions 2, 4, 5, 7 et 9, comptez un point chaque fois que vous avez répondu « faux », zéro point si vous avez répondu « vrai».<br><br>Plus votre score est élevé, plus vous avez une perspective positive (score supérieur à sept points: vous êtes un « positif »; score inférieur à trois points: vous êtes un « négatif »). Cette dimension concerne aussi bien votre attitude face à l’avenir que votre capacité à entretenir le sentiment positif inspiré par un événement passé. Et, comme pour la résilience, votre capacité de perspective sur les événements futiles permet de prédire ce qu’elle sera sur les événements importants.";

var resultat3 = "<b>R é s u l t a t : </b>Pour les questions 1, 2, 4, 7, 8 et 10, comptez un point à chaque fois que vous avez répondu « vrai », zéro point si vous avez répondu « faux ». Pour les questions 3, 5, 6 et 9, comptez un point à chaque fois que vous avez répondu « faux », zéro point si vous avez répondu « vrai ».<br><br>Plus votre score est élevé, plus vous identifiez facilement ce que ressentent les autres. Si vous avez obtenu huit points ou plus, vous êtes socialement intuitif. Un score faible (trois points ou moins) indique que vous êtes plutôt socialement perplexe.";

var resultat4 = "<b>R é s u l t a t : </b>Pour les questions 4, 5, 7, 8 et 10, comptez un point chaque fois que vous avez répondu « vrai », zéro point si vous avez répondu « faux ». Pour les questions 1, 2, 3, 6 et 9, comptez un point chaque fois que vous avez répondu « faux », zéro point si vous avez répondu « vrai ».<br><br>Plus votre score est élevé, plus vous êtes conscient de vos propres sensations et émotions (score supérieur ou égal à huit: vous êtes conscient de vous-même; score inférieur à trois points : vous êtes opaque à vous-même).<br><br>Vous pouvez aussi effectuer un exercice simple avec un partenaire pour évaluer cette dimension. Quatre fois de suite, demandez-lui de prendre votre pouls pendant trente secondes. En parallèle, concentrez-vous sur vos sensations corporelles internes, et efforcez-vous (sans toucher votre poignet ni aucune autre partie de votre corps) de sentir votre pulsation cardiaque et de compter les battements. Comparez vos résultats aux siens. Plus ils sont proches, plus votre conscience de vous-même est aiguisée!";

var resultat5 = "<b>R é s u l t a t : </b>Pour les questions 1, 5, 6, 8, 9 et 10, comptez un point chaque fois que vous avez répondu « vrai », zéro point si vous avez répondu « faux ». Pour les questions 2, 3, 4 et 7, comptez un point chaque fois que vous avez répondu « faux », zéro point si vous avez répondu « vrai ».<br><br>Plus votre score est élevé, plus vous réagissez de façon appropriée à l’environnement et à la situation. Si vous avez obtenu moins de trois points, vous vous situez parmi les personnes déconnectées du contexte, alors qu’un score supérieur ou égal à huit indique que vous lui êtes très connecté.";

var resultat6 = "<b>R é s u l t a t : </b>Pour les questions 1, 2, 3, 6, 7 et 10, comptez un point chaque fois que vous avez répondu « vrai », zéro point si vous avez répondu « faux ». Pour les questions 4, 5, 8 et 9, comptez un point chaque fois que vous avez répondu « faux », zéro point si vous avez répondu « vrai ».<br><br>Plus votre score est élevé, plus vous savez vous concentrer. Un score supérieur ou égal à huit indique que vous avez un bon niveau global d’attention; un score inférieur ou égal à trois signifie que vous avez tendance à être peu concentré.";

function valider(r) {
	
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
		
		switch (parseInt(r)) {
			case 1:
				document.getElementById("r1").innerHTML = resultat1;
				sessionStorage.setItem("resilience", valeur.toString());
				break;
			case 2:
				document.getElementById("r2").innerHTML = resultat2;
				sessionStorage.setItem("perspective", valeur.toString());
				break;
			case 3:
				document.getElementById("r3").innerHTML = resultat3;
				sessionStorage.setItem("intuition", valeur.toString());
				break;
			case 4:
				document.getElementById("r4").innerHTML = resultat4;
				sessionStorage.setItem("conscience", valeur.toString());
				break;
			case 5:
				document.getElementById("r5").innerHTML = resultat5;
				sessionStorage.setItem("sensibilite", valeur.toString());
				break;
			case 6:
				document.getElementById("r6").innerHTML = resultat6;
				sessionStorage.setItem("attention", valeur.toString());
		}
	}
	else {
		
		switch (parseInt(r)) {
			case 1: sessionStorage.removeItem("resilience"); break;
			case 2: sessionStorage.removeItem("perspective"); break;
			case 3: sessionStorage.removeItem("intuition"); break;
			case 4: sessionStorage.removeItem("conscience"); break;
			case 5: sessionStorage.removeItem("sensibilite"); break;
			case 6: sessionStorage.removeItem("attention");
		}
	}
}

function afficher() {
	
	if ("resilience" in sessionStorage) {
		document.getElementById("resilience").src = "img/" + sessionStorage.getItem("resilience") + ".png";
	}
	if ("perspective" in sessionStorage) {
		document.getElementById("perspective").src = "img/" + sessionStorage.getItem("perspective") + ".png";
	}
	if ("intuition" in sessionStorage) {
		document.getElementById("intuition").src = "img/" + sessionStorage.getItem("intuition") + ".png";
	}
	if ("conscience" in sessionStorage) {
		document.getElementById("conscience").src = "img/" + sessionStorage.getItem("conscience") + ".png";
	}
	if ("sensibilite" in sessionStorage) {
		document.getElementById("sensibilite").src = "img/" + sessionStorage.getItem("sensibilite") + ".png";
	}
	if ("attention" in sessionStorage) {
		document.getElementById("attention").src = "img/" + sessionStorage.getItem("attention") + ".png";
	}
}