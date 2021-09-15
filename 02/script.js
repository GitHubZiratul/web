window.username = "";

function nameForm(){
	window.username = document.name.user_name_text.value.toString().split(' '); 
  let longestWord = "";
  for(var i = 0; i < username.length; i++){
    if(username[i].length > longestWord.length){
	longestWord = username[i];
	}
}
alert (longestWord);
}

function takeArea(){
	var exp = document.area.area_side.value.toString();
	var expCounts = {};
	localStorage.setItem('strFR', exp);
var maxKey = '';
for(var i = 0; i < exp.length; i++)
{
    var key = exp[i];
    if(!expCounts[key]){
     expCounts[key] = 0;
    }
    expCounts[key]++;
    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
    }
}
alert(maxKey);
localStorage.setItem('symbolFR', maxKey);
}

function compareStrings(){
	var t = document.strings.first_string.value.toString();
	symbol = localStorage.getItem('symbolFR'), str = localStorage.getItem('strFR');
                let arr = new Array(1000);

                arr = str.split('');

                console.log(localStorage.getItem('symbolFR'));

                for (i = 0; i < arr.length; i++) {
                    if (arr[i] == symbol) arr[i] = t;
                }

                arr = arr.join('');
				
				alert("Полученная строка:\n" + arr);
}

function takeMaxMin(){
	var str1 = document.maxmin.first_str.value.toString();
	var str2 = document.maxmin.second_str.value.toString();
	let k = 0;
                let arr1 = new Array(1);
                let arr2 = new Array(1);

                str1 = str1.toLowerCase();
                str2 = str2.toLowerCase();

                arr1 = str1.split('');
                arr2 = str2.split('');

                arr1.sort();
                arr2.sort();

                for (i = 0; i < arr1.length; i++) {
                    if (arr1[i] == arr2[i]) k++;
                    console.log(arr1[i]);
                    console.log(arr2[i]);
                }
                console.log(k);
                if (k == arr1.length) alert("Строки являются анаграммами");
                else alert("Строки не являются анаграммами");
            }





