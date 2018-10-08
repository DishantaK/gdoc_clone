const loadDocs = function () {
    $.getJSON('/api/applist')
        .then(function (data) {
        const gdoc = data.map((element) =>
        `
        <li>${element.item}</li>
        <li>${element.content}</li>
        <i class="fas fa-times" id='${element._id}'></i><br>
        `
        )
        $('#gdoclist').html(gdoc);
        $('.fa-times').on('click', deleteDoc);
    })
}


const createDoc = function (event) {
    event.preventDefault();

    const doc_title = $('input').val().trim();
    $.ajax({ url: "/add", method: "POST", data: { item: doc_title } }).then(function (res) {
        loadDocs();
    });

    const doc_content = $('input-content').val().trim();
    $.ajax({ url: "/add", method: "POST", data: { content: doc_content } })
    // .then(function (res) {
    //     loadDocs();
    // });
    
}

const deleteDoc = function (event) {
    event.preventDefault();
    const id = event.target.id;
    $.ajax({ url: `/delete/${id}`, method: "DELETE" }).then(function () {
        loadDocs();
    });
}

loadDocs();

// Listener submit button
$('form').on('submit', createDoc);