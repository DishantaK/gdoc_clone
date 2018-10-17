var url = window.location.href;
var docId = url.split("/");
var docId = docId[4];
console.log(docId);

const getDoc = function () {
  
  $.ajax({ url: `/get/${docId}`, method: "GET" }).then(function (dbLoad) {
    console.log(dbLoad);

    const docItem = (
      `
        <header class="docHeader">
        <section class="docTitle">
         <img src="images/docs_48dp.png" placeholder="docs" />

         <input type="text" placeholder="Untitled document" name="Document Title" id="input-title" value="${dbLoad.docTitle}">
         
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

        <input type="textarea" placeholder="Document Content" name="Document Content" id="input-content" value="${dbLoad.docContent}" />
        
        </div>
        </main>
      `
    );
    $('#gdocEdit').html(docItem);
  })
};

const createDoc = function (event) {
  event.preventDefault();
  const newDocument = {
      docTitle: $('#input-title').val(),
      docContent: $('#input-content').val()
  };
  $.ajax({ url: '/add', method: 'POST', data: newDocument }).then(function (res) {
      loadDocs();
  });
};

getDoc();

// Listener submit button
$('form').on('submit', createDoc);
