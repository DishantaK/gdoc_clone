// function used to autosave user input
autoSave = (function () {

    timer = null;

    // function to get user input from the text area
    function userInput() {
        element = document.getElementsByTagName("textarea")

        if (element.length <= 0)
            return null;

        return element[0];


    }

    // function to save user input from the text area
    function save() {
        doc = userInput();
        if (doc) {
            localStorage.setItem("autoSave" + document.location, doc.value)
        }
        $('#status').text('All Changes Saved!');
    }

    // function to restore user input from the text area on reload
    function restore() {
        saved = localStorage.getItem("autoSave" + document.location)
        doc = userInput();
        if (saved && doc) {
            doc.value = saved;
        }
    }

    return {
        // function to start autosave timer
        start: function () {
            doc = userInput();
            restore();
            $('#textarea').keypress(function () {
                timer = null;
                $('#status').text('Saving...');
            });

            timer = setInterval(save, 2000);

        }
    }
}())

// Starting the autosave function
$(document).ready(function () {
    autoSave.start()
})


// function to delete saved user input 
function deleteSelec(event) {
    if (event.keyCode === 8) {
        document.execCommand("delete");
    }
}



