var vowelCount = document.getElementById('vowelCount')
function countVowel (str) {
    str = str.toLowerCase();
    let vowArr = ['a','e','u','i','o'],
        counter = 0 ;
        for(let letter of str){
            if(vowArr.includes(letter)){
                counter++;
            }
        }
        vowelCount.innerHTML = counter ;
}