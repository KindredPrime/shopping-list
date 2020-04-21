$(function() {
    // Event listener that adds a new shopping item when the "Add item" button is selected
    $("form").submit(function(event) {
        event.preventDefault();
        const item = $(this).find("input[name='shopping-list-entry']").val();

        $(".shopping-list").append(`<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    });

    // Event delegation that adds a line-through style to the shopping item when the "check"
    // button is selected
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });

    // Event delegation that deletes a shopping item when the "delete" button is selected
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        $(this).closest("li").remove();
    });
})