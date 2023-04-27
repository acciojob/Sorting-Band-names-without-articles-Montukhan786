//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let updatedList = touristSpots.map( (element) =>{
	let word = element.split(" ");

	let updateString = word.reduce((prev,current,index) => {
		if(current != "The" && current != "an" && current != "a"){
			return prev+" "+current;
		}
		return prev;
	},"")

	return updateString;
});

console.log(updatedList);

function Sort(updatedList) {
	return updatedList.sort( (a,b) => a.localCompare(b));
}

console.log(Sort(updatedList));




