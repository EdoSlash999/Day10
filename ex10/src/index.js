function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      relase_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP"
      },
      gold: true,
    },
    002: {
      artist: "Dino Merlin",
      title: "Sredinom",
      relase_year: 2002,
      id: 2,
      formats: {
        1: "MP4",
        2: "MP3",
        3: "MOV"
      },
    },
  };
  return myMusic;
}

myFunction()[2];

module.exports = myFunction;
