function myFunction(){
  var myMusic = {
      001: {
          artist: "Billy Joel",
          title: "Piano Man",
          release_year: 1973,
          formats: {
              1: "CD",
              2: "8T",
              3: "LP"
          },
          gold: true
      },
      002: {
          artist: "Dino Merlin",
          title: "Burek",
          release_year: 2004,
          id: 2,
          formats: {
              1: "MP3",
              2: "MP4",
              3: "MOV"
          }
      }
  };
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;