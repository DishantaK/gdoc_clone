
var url = window.location.href;
var docId = url.split("/");
var docId = docId[4];
console.log(docId);

//Get Doc and open in editor
const getDoc = function () {
  $.ajax({ url: `/get/${docId}`, method: "GET" }).then(function (dbLoad) {
    console.log(dbLoad);
    const docItem = (
      `
      <header class="docHeader">
      <section class="docTitle">
      <a href="/"><img src="images/docs_48dp.png" placeholder="docs" /> </a>
       <input type="text" placeholder="Untitled document" name="Document Title" id="input-title" value="${dbLoad.docTitle}">
        <ul id="options">
        <li><button class="mainOption">File</button></li>
        <li><button class="mainOption">Edit</button></li>
        <li><button class="mainOption" id="saveNew">Save</button></li>
        <li><button class="mainOption" id="updateNew">Update</button></li>
        <li><p id="status" contenteditable="false"></p></li>
          </ul>
        </section>
        <section id="styleOpt">
        <span>
            <select id='thefonts' name=fontdown>
                <option value="K2D">Select Font</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier">Courier</option>
                <option value="Georgia">Georgia</option>
                <option value="Charmonman">Charmonman</option>
                <option value="Kodchasan">Kodchasan</option>
            </select>
        </span>
        <span>
            <select id='fontcolor' name=colordown>
                <option value="black">Select Font Color</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
            </select>
        </span>
        <span>
            <select id='fontsize' name=sizedown>
                <option value= 3>Select Font Size</option>
                <option value= 2>x.5</option>
                <option value= 4>x2</option>
                <option value= 5>x3</option>
                <option value= 6>x4</option>
                <option value= 7>x5</optoin>
                </select>
        </span>
        </section>
        </header>
        <main class="docSection">  
        <div id="measure"></div>
        <form>
        <div class="docArea" contenteditable="true" id ="bodyDoc" value="${dbLoad.docContent}"></div>
        <input type="hidden" id="input-content" />
        </form>
        </div>
        </main>
      `
    );
    $('#gdocEdit').html(docItem);
    $('#saveNew').on('click', createDoc);
    $('#updateNew').on('click', updateDoc);
  })
};

getDoc();
$(document).ready(function(){

//font family selection
const theFont = function(selFont){
    selection = window.getSelection();
    if (selection.rangeCount && selection.getRangeAt){
        range = selection.getRangeAt(0);
    }
    document.designMode = "on";
    if (range){
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand("fontName", false, selFont);
    document.designMode = "off";
}

//font color selection
const theColor = function(selColor){
    selection = window.getSelection();
    if (selection.rangeCount && selection.getRangeAt){
        range = selection.getRangeAt(0);
    }
    document.designMode = "on";
    if (range){
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand("ForeColor", false, selColor);
    document.designMode = "off";
}

//font size selection
const theSize = function(selSize){
    selection = window.getSelection();
    if (selection.rangeCount && selection.getRangeAt){
        range = selection.getRangeAt(0);
    }
    document.designMode = "on";
    if (range){
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand("fontSize", false, selSize);
    document.designMode = "off";
}


$('#gdocEdit').on("change",function(e){
    if(e.target.id === "fontcolor"){
        let selColor = $('#fontcolor').val();
        theColor(selColor);
    }else if(e.target.id === "fontsize"){
        let selSize = $('#fontsize').val();
        theSize(selSize);
    }else if(e.target.id === "thefonts"){
        let selFont =$('#thefonts').val();
        theFont(selFont);
    }
})

})
//Create Doc
const createDoc = function (event) {
    console.log('Create');
    event.preventDefault();
    let divBody = $('#input-content').map(function(){return $('#bodyDoc').html() }).get()
    let bodyStrng = divBody[0];
    console.log(bodyStrng);
    const newDocument = {
        docTitle: $('#input-title').val(),
        docContent: bodyStrng
    };
    $.ajax({ url: '/add', method: 'POST', data: newDocument }).then(function (res) {
        // loadDocs();
    });
  };

//Update Doc
const updateDoc = function () {
    
    const id = docId;
    let divBodyUpdt = $('#input-content').map(function(){return $('#bodyDoc').html() }).get()
    let bodyStrngUpdt = divBodyUpdt[0];
    var upDocument = {
        docId: id,
        docTitle: $('#input-title').val(),
        docContent: bodyStrngUpdt
    };
    console.log($('#input-content').val());
    $.ajax({ url: `/api/update/${id}`, method: 'PUT', data: upDocument }).then(function (res) {
        console.log(id);
        console.log(upDocument);
    });
};

// function used to autosave user input
timer = 0;
$("#gdocEdit").keypress(function () {
    $('#status').text('Saving...');

   
    if (timer) clearTimeout(timer);

    timer = setTimeout(function () {
       updateDoc()
        $('#status').text('All Changes Saved!');
    }, 2000);
});

function deleteSelec(event) {
    if (event.keyCode === 8) {
        document.execCommand("delete");
    }
  }