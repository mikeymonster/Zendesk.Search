$(document).ready(function () {
    $("#search-button").click(function () {

        const searchString = window.$("#search-input").val();

        if (searchString) {
            //const user = $("#User").val();
            //const password = $("#Password").val();

            const itemsPerPage = parseInt($("#ItemsPerPage").val(), 10);
            const params = {
                'query': searchString,
                'per_page': itemsPerPage
            };

            alert("hello");
            /*
            $.ajax({
                url: "https://tlevelstest.zendesk.com/api/v2/help_center/articles/search.json",
                contentType: "application/json",
                data: jQuery.param(params), //encodeURIComponent(JSON.stringify(params)),
                //headers: {
                //    //https://zinoui.com/blog/ajax-basic-authentication
                //    'Authorization': `Basic ${btoa(`${user}:${password}`)}`
                //},
                success: function (results) {
                    $("#search-results-count").html(results.count);
                    //https://howtocreateapps.com/fetch-and-display-json-html-javascript/
                    //https://stackoverflow.com/questions/47719537/how-to-put-json-data-into-a-html-div
                    $("#raw-search-results").html(`<pre>${JSON.stringify(results, undefined, 2)}</pre>`);
                },
                timeout: 5000,
                error: function (xhr, status, error) {
                    console.log("An error occurred.");
                    alert(xhr.status);
                    alert(xhr.responseText);
                    alert(error);

                    const r = parseJSON(xhr.responseText);
                    alert("Message: " + r.Message);
                    alert("StackTrace: " + r.StackTrace);
                    alert("ExceptionType: " + r.ExceptionType)
                }
            });
            */

            //http://zetcode.com/javascript/jsonurl/
            $.getJSON("https://tlevelstest.zendesk.com/api/v2/help_center/articles/search.json",
                jQuery.param(params), //encodeURIComponent(JSON.stringify(params)),
                function (results) {
                    $("#search-results-count").html(results.count);
                    //https://howtocreateapps.com/fetch-and-display-json-html-javascript/
                    //https://stackoverflow.com/questions/47719537/how-to-put-json-data-into-a-html-div
                    $("#raw-search-results").html(`<pre>${JSON.stringify(results, undefined, 2)}</pre>`);

                    alert(results.next_page);
                    if (results.previous_page) {
                        $("#search-results-prev").show();
                        $("#search-results-prev").prop("href", "results.previous_page");
                    } else {
                        $("#search-results-prev").prop("href", "#");
                        $("#search-results-prev").hide();
                    }

                    if (results.next_page) {
                        alert("showing");
                        $("#search-results-next").prop("href", "results.next_page");
                        $("#search-results-next").show();
                    } else {
                        $("#search-results-next").prop("href", "#");
                        $("#search-results-next").hide();
                    }

                    //https://stackoverflow.com/questions/3269136/how-to-add-style-displayblock-to-an-element-using-jquery

                    let searchResultsList = $("#search-results-list").empty();
                    searchResultsList.empty();

                    let searchResultsItems = "";
                    $.each(results.results,
                        function (i, item) {
                            //alert(i);
                            console.log(i + "id: " + item.id);

                            searchResultsList.append("<li>");
                            searchResultsList.append("<div>");
                            searchResultsList.append("<h2>" + item.title + "</h2>");
                            searchResultsList.append("<article>");
                            searchResultsList.append("<ul>");

                            searchResultsList.append("<li>" + item.edited_at + "</li>");
                            searchResultsList.append("<li>" + item.body + "</li>");

                            searchResultsList.append("</ul>");
                            searchResultsList.append("</article>");
                            searchResultsList.append("</div>");
                            searchResultsList.append("</li>");

                            //    $("div").append(field + " ");
                        });
                    searchResultsList.append(searchResultsItems);

                    
                });
        }

        return false;
    });
});
