var magicianNames = ["Ayaz", "Fayaz", "Tariq", "Madad"];
function show_magicians(greet) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var item = magicianNames_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians("Hello, How are you Mr.");
show_magicians("Hello, "); //2nd time calling
