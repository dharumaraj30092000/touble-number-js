var input=345;
var multiple=11;
while(input>0){
	let rem=input%10;
	input=(input-rem)/10;
	let result=multiple*rem;
	console.log(result);
}