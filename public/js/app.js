const loadDocs = function () {
    $.getJSON('/api/applist')
        .then(function (data) {
            const docItem = data.map((element) =>
                `
                <a class="open-doc-btn" id='${element._id}' href="/doc/${element._id}">
                    <div class="docPrev">
                        <div class="scale-down">
                            ${element.docContent}
                        </div>
                    </div>    
                    <div class="captionLabel">
                        <h2>${element.docTitle}</h2>  
                        <div class="labelGroup">
                            <i class="fas fa-sticky-note"></i>
                            <h4 id="date"></h4>
                            <script>
                                var d = new Date();
                                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                document.getElementById("date").innerHTML = months[d.getMonth()] + '  ' + d.getDate() + ',  ' + d.getFullYear();
                            </script>
                            <i class="fas fa-times " id='${element._id}'></i>
                        </div>
                       
                    </div> 
                </a>
                `
            )
            $('#gdoclist').html(docItem);
            $('.fa-times').on('click', deleteDoc);
        })
};

const deleteDoc = function (event) {
    event.preventDefault();
    const id = event.target.id;
    $.ajax({ url: `/delete/${id}`, method: "DELETE" }).then(function () {
        loadDocs();
    });
}

loadDocs();

