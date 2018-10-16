const openDoc = function (event) {
  event.preventDefault();
  const docId = $(this).attr('id');
  $.ajax({ url: `/get/${docId}`, method: "GET" }).then(function (dbResponse) {
    console.log('doc id', dbResponse);
    const selectedDoc = (
      `
        <div class="modal-fullpage">

        <header class="docHeader">
        <section class="docTitle">
         <img src="images/docs_48dp.png" placeholder="docs" />

         <input type="text" placeholder="Untitled document" name="Document Title" id="input-title" value="${dbResponse.docTitle}">
         
          <ul id="options">
             <li><button class="mainOption">File</button></li>
             <li><button class="mainOption">Edit</button></li>
             <button type="submit" id="add-button"><i class="fas fa-share"></i></button>
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
        <div class="docArea">

        <input type="textarea" placeholder="Document Content" name="Document Content" id="input-content" value="${dbResponse.docContent}" />
        
        </div>
        </main>
        </div>
        `
    )
    $('#gdocEdit').html(selectedDoc);
  })
    $('select[name="fontdown"]').change(theFont);
    $('select[name="colordown"]').change(theColor);
    $('select[name="sizedown"]').change(theSize);
};



//font family selection
const theFont = function(){
  let selFont = $('#thefonts').val();
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
const theColor = function(){
  let selColor = $('#fontcolor').val();
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
const theSize = function(){
  let selSize = $('#fontsize').val();
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

