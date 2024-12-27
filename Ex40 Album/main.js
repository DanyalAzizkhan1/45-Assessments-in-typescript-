function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Ali", "Rang-e-Mohabat");
var album2 = myAlbum("Madad", "Roshan Andhera");
var album3 = myAlbum("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
// Number of tracks
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = myAlbum2("Ali", "dil hai", 30);
var album5 = myAlbum2("Madad", "ajeeb kahani", 55);
var album6 = myAlbum2("Daniyal Aziz Khan", "typescript ki coding", 78);
console.log(album4);
console.log(album5);
console.log(album6);
