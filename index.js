$(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        const item = $(this).find("input[name='shopping-list-entry']").val();

        $(".shopping-list").append(`<li><span class=\"shopping-item\">${item}</span><div class=\"shopping-item-controls\"><button class=shopping-item-toggle\"><span class=\"button-label\">check</span></button><button class=\"shopping-item-delete\"><span class=\"button-label\">delete</span></button></div></li>`);
    });

    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
})