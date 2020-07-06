$(document).ready(function () {

    $("form[class=search").on("submit",
        function (event) {
            alert('preventing submit');
            event.preventDefault();
        });

    //https://stackoverflow.com/questions/2977023/how-do-you-detect-the-clearing-of-a-search-html5-input
    $('input[type=search]').on('search', function (e) {

        if (this.value) {
            const searchString = this.value;

            const itemsPerPage = 3;
            const params = {
                'query': searchString,
                'per_page': itemsPerPage
            };

            $.ajax({
                url: "/api/v2/help_center/articles/search.json",
                contentType: "application/json",
                data: jQuery.param(params), //encodeURIComponent(JSON.stringify(params)),
                success: function (results) {
                    $("#search-results-count").html(results.count);
                    $("#raw-search-results").html(`<pre>${JSON.stringify(results, undefined, 2)}</pre>`);
                },
                timeout: 5000,
                error: function (xhr, status, error) {
                    console.log("An error occurred.");
                    alert(xhr.status);
                    //alert(xhr.responseText);
                    //alert(error);
                }
            });
        }

        e.stopPropagation();
        
        return false;
    });
});