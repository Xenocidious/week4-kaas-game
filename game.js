alert('Jij en je bondgenoot Trafalgar komen 2 vijanden tegen, Doffy en Trebol. (Alles is hoofdlettergevoelig)')
var input = prompt('Val jij of valt Trafalgar Doffy aan?', '"ik" of "Traf"');

if (input == 'ik'){
    alert('Doffy ontweek je aanval, Trebol heeft ondertussen Trafalgar vermoord.')
    input = prompt('Val je Doffy of Trebol aan?', '"Doffy" of "Trebol"');
    if (input == 'Doffy'){
    	alert('Trebol vermoord je. (Game Over)')
    }
    else{
    	alert('Je vermoord Trebol')
    	input = prompt('Val je Doffy aan of ga je naar gear2? (gears zijn powerups)', '"Doffy" of "gear2"');
    	if (input == 'Doffy'){
    		alert('Doffy blokkeert je aanval en vermoord je. (Game Over)')
    	}
    	else{
    		alert('Je word sterker.')
    		input = prompt('Val je Doffy aan of ga je naar gear3?', '"Doffy" of "gear3"');
    		if (input == 'Doffy'){
    			alert('Doffy ontwijkt je aanval en vermoord je. (Game Over)')
    		} 
    		else{
    			alert('Je word weer sterker.')
    			input = prompt('Val je Doffy aan of ga je naar gear4?', '"Doffy" of "gear4"');
    			if (input == 'Doffy'){
    				alert('Doffy blokkeert je aanval en vermoord je. (Game Over)')
    			}
    			else{
    				alert('Je word nog sterker')
    				input = prompt('Val je Doffy aan of ga je naar gear5?', '"Doffy" of "gear5"');
    		    	if (input == 'gear5'){
                      	alert('Je ontploft. (Game Over)')
                    }
    				else{
    					input = prompt('Wil je hem slaan of schoppen?', '"slaan" of "schoppen"');
    					if (input == 'schoppen'){
                          	alert('Je wint!')
                        }
                        else{
                        	alert('Doffy ontweek je slag.')
				    	    input = prompt('Wil je slaan of schoppen?', '"slaan" of "schoppen"');
				    	    if (input == 'slaan'){
				    	        alert('Je wint!')
				    	    }
				    	    else{
				    	        alert('Je wint!')
				    	    }

                        }
    			    }
    			}
    		}	
    	}
    }
}
else{
	alert('Doffy vermoord Trafalgar, en jij vermoord terwijl Trebol.')
    input = prompt('Val je Doffy aan of ga je naar gear2? (gears zijn powerups)', '"Doffy" of "gear2"');
    if (input == 'Doffy'){
    		alert('Doffy blokkeert je aanval en vermoord je. (Game Over)')
    }
    else{
    	alert('Je word sterker.')
    	input = prompt('Val je Doffy aan of ga je naar gear3');
    	if (input == 'Doffy'){
    			alert('Doffy ontwijkt je aanval en vermoord je. (Game Over)')
    	} 
    	else{
    		alert('Je word weer sterker.')
    		input = prompt('Val je Doffy aan of ga je naar gear4?', '"Doffy" of "gear4"')
    		if (input == 'Doffy'){
    			alert('Doffy blokkeert je aanval en vermoord je. (Game Over)')
    		}
    		else{
    			alert('Je word nog sterker')
    			input = prompt('Val je Doffy aan of ga je naar gear5?', '"Doffy" of "gear5"')
    		    if (input == 'gear5'){
    		    	alert('Je ontploft. (Game Over)')
    		    }
    			else{
    				input = prompt('Wil je hem slaan of schoppen?', '"slaan" of "schoppen"')
    				if (input == 'schoppen'){
                      	alert('Je wint!')
                    }
                    else{
                      	alert('Doffy ontweek je slag.')
				        input = prompt('Wil je slaan of schoppen?', '"slaan" of "schoppen"')
				        if (input == 'slaan'){
				            alert('Je wint!')
				    	}
				        else{
				    	    alert('Je wint!')
				        }

                    }
                }
    	    }
        }	
    }
}