//For toString()
var string = document.getElementById("tostring");
let array1 = ["Apple", "Banana", "Mango", "Orange"]
string.innerHTML= array1.toString();

//For join()
var join = document.getElementById("tojoin");
join.innerHTML= array1.join('+')

//For concat()
var gender = document.getElementById("concat")
let Male = ["Ram", "Hari", "Shyam"]
let Female = ["Sita", "Gita", "Rita"]
gender.innerHTML = Male.concat(Female);


//For push()
var div = document.getElementById("push");
let names = ['Ram', 'Hari', 'Shyam'];
names.push('Rakesh', 'Arjun');
div.innerHTML= names

//For pop()
var pop = document.getElementById("pop");

let Name = ["Ram", "Hari", "Shyam", "Arjun"];
Name.pop();
pop.innerHTML=Name;

//For shift()
var shift = document.getElementById("shift");
Name.shift();
shift.innerHTML=Name;

//For unchift()
var unshift = document.getElementById("unshift");
Name.unshift("Rakesh", "Pujan");
unshift.innerHTML= Name;

//For splice() remove double element of an arrays
let detail = ["Ram", "Hari", "Shyam", "Arjun"];
var removeitm = document.getElementById("spliceremove");
detail.splice(2,3);
removeitm.innerHTML=detail;

//removing all index of an array from selected element
var removeitm = document.getElementById("spliceremovesingle");
detail.splice(2);
removeitm.innerHTML=detail;

//adding items in an array
var add = document.getElementById("additem");
 let text = ['I', 'have', 'meeting', 'tommorrow'];

text.splice(4, 0, 'so', 'I', 'am', 'unavailable');

add.innerHTML=text;

//For slice()

var slices = document.getElementById("slice");
let Word = 'Development';
const wrd = Word.slice(0,7) + 'ed';

slices.innerHTML=wrd;

//For split()

var split = document.getElementById("split");
var splitonly = document.getElementById("splitonly");
let wrds = 'hello, Sir, how are you, good';

split.innerHTML= wrds.split(',', 3);

splitonly.innerHTML = wrds.split('');

//for indexOf()

var index = document.getElementById("indexs")

idx = ['hello', 'help', 'get', 'name', 'title', 3, true, false]

index.innerHTML=idx.indexOf('help');

//For filter()

var filter = document.getElementById("filter");
const code = ['+977', '+998', '+977', '+889'];
const country = code.filter(itm => itm === '+977');

filter.innerHTML= country

//For map()

var map = document.getElementById("map");

const username = ['rakesh', 'admin', 'user', 'reseller', 'customer']
const view = username.map(items=>{
    return'<li>'+ items +'</li>'
})

const render = '<ul>' + view.join('') + '</ul>';

map.innerHTML= render;

//For reduce()

var reduce = document.getElementById("reduce")

const number = [20, 40, 100, 300]

const sum = number.reduce((item, value)=>
    item + value, 0
)

reduce.innerHTML=sum;

//For forEach()

var foreach = document.getElementById("foreach");

const colors = ['black', 'grey', 'pink', 'green', 'brown'];
colors.forEach((item, index) => 
 foreach.innerHTML = (item, index)
)

//For every()

var every = document.getElementById("every");
const numberss = [4, 5, -2, -4, 3, 1];
 let positive = numberss. every((value) => {
     return value >=0;
 })

 every.innerHTML= positive


 //for some()
 var some = document.getElementById("some");

 let given_number = [4,5,6,7,8,9,0];
 const positivepresent = given_number.some((value) => {
     return value >=0
 })

 some.innerHTML = positivepresent


 //For includes()

 var include = document.getElementById("include");

 let data = ['username', 'regstration','income', 'numbers']
 const dta = data.includes('username');
 include.innerHTML = dta
