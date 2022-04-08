// create 

$('#add_user').submit(function(event) {
    alert('User created succesfully');
})

$('#add_comment').submit(function(event) {
    alert('Comment created succesfully');
})

// update user
$('#update_user').submit(function (event) {
    // stop  form submit
    event.preventDefault();

    // Retrieve form informations
    var form_array = $(this).serializeArray();
    var data = {};

    // Format & Assign form data to variable
    $.map(form_array, function (n, i) {
        data[n['name']] = n['value']
    })

    // Save request
    var request = {
        url: `http://localhost:3000/api/users/${data.id}`,
        method: 'PUT',
        data: data,
    }

    // Send request

    $.ajax(request).done(function (response) {
        alert('User updated successfully')
    })
})

// delete
if (window.location.pathname == '/') {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
            url: `http://localhost:3000/api/users/${id}`,
            method: 'DELETE',
        }

        if (confirm('Do you really want to delete this user ?')) {
            $.ajax(request).done(function (response) {
                alert('User deleted successfully');
                window.location.reload();
            })
        }
    })
}

// update comment
$('#update_comment').submit(function (event) {
    // stop  form submit
    event.preventDefault();

    // Retrieve form informations
    var form_array = $(this).serializeArray();
    var data = {};

    // Format & Assign form data to variable
    $.map(form_array, function (n, i) {
        data[n['name']] = n['value']
    })

    // Save request
    var request = {
        url: `http://localhost:3000/api/comments/${data.id}`,
        method: 'PUT',
        data: data,
    }

    console.log(data, request);
        // Send request

        $.ajax(request).done(function (response) {
            alert('Comment updated successfully')
        })
})  

// delete
if (window.location.pathname == '/comments') {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function () {
        var id = $(this).attr("data-id")

        var request = {
            url: `http://localhost:3000/api/comments/${id}`,
            method: 'DELETE',
        }

        if (confirm('Do you really want to delete this comment ?')) {
            $.ajax(request).done(function (response) {
                alert('Comment deleted successfully');
                window.location.reload();
            })
        }
    })
}