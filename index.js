$(function() {
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
})