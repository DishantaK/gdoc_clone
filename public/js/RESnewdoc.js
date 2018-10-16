let newDoc = function () {
  $('body').replaceWith(
    `
        <header id="docHeader">
        <section id="docTitle">
         <img src="images/docs_48dp.png" placeholder="docs" />
         <input type="text" placeholder="Untitled document" />
         <ul id="options">
             <li><button class="mainOption">File</button></li>
             <li><button class="mainOption">Edit</button></li>
             <li><button class="mainOption">View</button></li>
             <li><button class="mainOption">Insert</button></li>
             <li><button class="mainOption">Format</button></li>
             <li><button class="mainOption">Tools</button></li>
             <li><button class="mainOption">Table</button></li>
             <li><button class="mainOption">Add-Ons</button></li>
             <li><button class="mainOption">Help</button></li>
           </ul>
        </section>
        <section id="styleOpt">
          <span></span>
          <span></span>
          <span></span>
        </section>
   </header>
    <main id="docSection">  
        <div id="measure"></div>
        <div id="docArea"></div>
     </main>
     
     `
  );
}

$('#newPlus').on('click', newDoc);


// CJ FUNCTION

let loadGDoc = function () {

  var url = window.location.search;
  var authorId;

  if (url.indexOf("?doc_id=") !== -1) {
    authorId = url.split("=")[1];
    getPosts(authorId);
  }
  // If there's no authorId we just get all posts as usual
  else {
    console.log('Did not get the thing');
    // getPosts();
  }

  // This function grabs posts from the database and updates the view
  function getPosts(author) {
    authorId = author || "";
    if (authorId) {
      authorId = "/?doc_id=" + authorId;
    }
    $.get("/api/applist" + authorId, function(data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty(author);
      }
      else {
        // initializeRows();
        console.log('Did not get the other thing');
      }
    });
  }

}


const openGDoc = function (event) {
  event.preventDefault();
  const docId = $(this).attr('id');
  $.ajax({ url: `/get/${docId}`, method: "GET" }).then(function (dbResponse) {
      console.log('doc id', dbResponse);
      const selectedDoc = (
          `
          <div class="modal-fullpage">
              <div class="title-header">
              <input type="text" placeholder="Untitled document" name="Document Title" id="input-title" value="${dbResponse.docTitle}">
              </div>
              <div class="page">
              <input type="textarea" placeholder="Document Content" name="Document Content" id="input-content" value="${dbResponse.docContent}" />
              <button type="submit" id="add-button"><i class="fas fa-share"></i></button>
              </div>
          </div>
          `
      )
      $('#gdocEdit').html(selectedDoc);
      $('.open-doc-btn').on('click', openGDoc);
  })
}


// $('#loadDoc').on('click', openGDoc);