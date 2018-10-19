const updateDoc = function (event) {
    event.preventDefault();
    const id = event.target.id;
    const itemId = $(this).data('id');
    const revDocument = {
        docId: id,
        docId: itemId,
        docTitle: $('#input-title').val(),
        docContent: $('#input-content').val()
    };
    $.ajax({ url: '/api/update/:id', method: 'PUT', data: revDocument }).then(function (res) {
        loadDocs();
    });
};

// Listener update button
$('#update-btn').on('submit', updateDoc);
