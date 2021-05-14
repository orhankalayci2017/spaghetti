// Assumes HTML on Page:
// <input class="name">
// <button class="done">Done</button>
// <h1 id="welcome"></h1>
//
$(function() {
    $("body").on("click", "button.done", function() {
        var name = $("input.name").val();
        name = name.split(" ");
        if (name[0] == "Mr." || name[0] == "Mrs." || name[0] == "Dr." ){
            name.shift();
        }
        $("#welcome").text("Welcome, " + name[0] + "!");
    });
});