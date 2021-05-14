describe("pressing the done button", function() {
    it("displays welcome with first name from input", function() {
        var nameField = $("<input class='name'>").appendTo("body"),    
            doneButton = $("<button class='done'>Done<button>").appendTo("body"),
            welcome = $("<h1 id='welcome'><h1>").appendTo("body");

    nameField.val("Dr. John Doe");
    doneButton.click();
    expect(welcome.text()).toEqual("Welcome, John!");        
    });
});