// Select color input
const color = $("#colorPicker");

// Select size input
const height = $("#input_height");
const width = $("#input_width");

//Select pixel canvas
let canvas = $("#pixel_canvas");

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function() {
    return makeGrid(height.val(), width.val());
});

var clicked = false;
// On click event on <td> tag take clicked tag and paint
// its background color in color from color picker.
$("body").on("click", "td", function() {
    let clicked = $(this).data("clicked");

    // Background color of <td> changes depending
    // on value of variable 'clicked'.
    clicked ? $(this).css("background-color", "white") : $(this).css("background-color", color.val());
    $(this).data("clicked", !clicked);
});

//function which clears the canvas and makes the grid of desired proportions
function makeGrid(height, width) {
    //Clearing the canvas
    canvas.empty();

    //Making desired number of rows in a table
    for (var i = 0; i < height; i++) {
        canvas.append("<tr/>");
    }

    // Making desired number of columns in a table
    for (var j = 0; j < width; j++) {
        canvas.children().append("<td></td>");
    }

    // Keeping the changes on the screen
    return false;
}
