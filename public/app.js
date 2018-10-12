// function used to autosave user input
autoSave = (function(){

    
    timer = null;
    // function to get user input from the text area
	function userInput(){
        element = document.getElementsByTagName("textarea")

		if (element.length <= 0)
			return null;

        return element[0];
        
	}
    
    // function to save user input from the text area
	function save(){
		doc = userInput(); 
                if (doc) {
            localStorage.setItem("autoSave" + document.location, doc.value )
                }
	}

    // function to restore user input from the text area on reload
	function restore(){
		 saved = localStorage.getItem("autoSave" + document.location)
		 doc = userInput();
		if (saved && doc){
            doc.value = saved; 
		}
    }

	return { 
        // function to start autosave timer
        start: function(){
            
			doc = userInput(); 

		 
            if (doc.value.length <= 0)
				restore();
                
			if (timer != null){
				clearInterval(timer);
                timer = null;
			}
            timer = setInterval(save, 1000)
        },
        
        // function to stop autosave timer
		stop: function(){
        
			if (timer){ 
				clearInterval(timer);
				timer = null;
            }
		}
	}
}())


$(document).ready(function(){
    autoSave.start();
})

// function to delete saved user input 
function deleteSelec(event) {
    if (event.keyCode === 8) {
      document.execCommand("delete");
    }
  }  
  


