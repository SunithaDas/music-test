import { notesToPlayInOrder } from "./music-to-play";

function playMusic() {
    const notes = notesToPlayInOrder;
     // TODO Play these notes one after the other at the pitch and rhythm given in each note
   for (i=0; i<notes.length; i++)
	{
	if(MusicalNote.pitch==A && MusicalNote.octave==4)
	{
		
		var x= document.getElementById("A4")
		x. play();
		
	}
	
	else if(MusicalNote.pitch==A && MusicalNote.octave==5)
	{ 
       
		var x= document.getElementById("A5")
		x. play();
	
	}
	else if(MusicalNote.pitch==B && MusicalNote.octave==4 && MusicalNote.accidental== Accidental.FLAT)
	{
		
		var x= document.getElementById("B4F")
		x. play();
	
	}
	else if(MusicalNote.pitch==B && MusicalNote.octave==5 && MusicalNote.accidental== Accidental.FLAT)
	{   
          
		var x= document.getElementById("B5F")
		x. play();
		
	}
	else if(MusicalNote.pitch==C && MusicalNote.octave==5)
	{   
		var x= document.getElementById("C5")
		x. play();
	}
	
	else if(MusicalNote.pitch==D && MusicalNote.octave==4)
	{  
		var x= document.getElementById("D4")
		x. play();
	
	}
	else if(MusicalNote.pitch==D && MusicalNote.octave==5 && MusicalNote.accidental== Accidental.SHARP )
	{  
		var x= document.getElementById("D5S")
		x. play();
	
	}
	
	else if(MusicalNote.pitch==D && MusicalNote.octave==5)
	{  
		var x= document.getElementById("D5")
		x. play();
	
	}
	else if(MusicalNote.pitch==F && MusicalNote.octave==4)
	{  
		var x= document.getElementById("F4")
		x. play();
	}
	if(MusicalNote.pitch==F && MusicalNote.octave==5 && MusicalNote.accidental== Accidental.SHARP )
	{   
		var x= document.getElementById("F5S")
		x. play();
	
	}
	else if(MusicalNote.pitch==F && MusicalNote.octave==5)
	{   
		var x= document.getElementById("F5")
		x. play();
	}
	else if(MusicalNote.pitch==G && MusicalNote.octave==4)
	{  
		var x= document.getElementById("G4")
		x. play();

	}
	else (MusicalNote.pitch==G && MusicalNote.octave==5)
	{   
		var x= document.getElementById("G5")
		x. play();

	}
}	
}
 

}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
