function pitchClass(note) {
var allArray = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"];
var numArray = [11, 0, 1, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 0];
  for (var i = 0; i<=allArray.length; i++){
    if (note === allArray[i]){
        return numArray[i];
    } 
  }
return "input is not a note";   
}
