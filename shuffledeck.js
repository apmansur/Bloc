//card object
function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}
//deck object
function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['H','D','S', 'C'];
	var cards =[];
	this.cheat=cheat ? cheat%52 : Math.floor((Math.random() * 52) + 1); 
    
    for( var i = 0; i < this.suits.length; i++ ) {
        for( var j = 0; j < this.names.length; j++ ) {
            cards.push( new card( j+1, this.names[j], this.suits[i] ) );//create a new card 
        }
    }

    return cards;
}

//added shuffle method to deck prototype, used the Durstenfeld shuffle method which 
//starts with the last element of an array and replaces it with a randomly selected 
//element and then continues to do that with the remaining elemnets in the array (exludes)
//first element because no more choice at that point

Deck.prototype.shuffle = function(array){
	for (var i = array.length - 1; i > 0; i--) {
        var temp = array[i];
        array[i] = array[this.cheat];
        array[this.cheat] = temp;
    }
    return array;
}

//create shuffled decks

var deckOne = new deck ();
var shuffledDeckOne = deckOne.shuffle();
var deckTwo = new deck ();
var shuffledDeckTwo = deckTwo.shuffle();
