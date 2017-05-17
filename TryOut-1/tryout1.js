var fs = require('fs');
var arr_input = fs.readFileSync('file1.txt').toString().split(" ");
//var arr_input = ['a','b','c','d','3','5','2','a','b','x','y','z','z','z','r','t','s','a','b','90']
var j = arr_input.length;
var u = 0, c_a = 0;
var temp = [], angka = [];
var sum = 0;
for(var x = 0; x < arr_input.length; x++){
  if (x==0){
    temp[x] = arr_input[x];
    u+=1;
  }else{
    var c = 0;
    for(var y = 0; y < temp.length; y++){
      if(arr_input[x] == temp[y]){
        c = 1;
        break;
      }
    }
    if (c == 0){
      temp[u] = arr_input[x];
      var n = parseInt(temp[u]) || '';
      if(n != ''){
        angka[c_a] = n;
        sum += n;
        c_a +=1;
      }
      u+=1;
    }
  }

}
console.log("Jumlah semua kata: " + j);
console.log("Jumlah kata yang unik: " + temp.length);
console.log("Jumlah kata yang unik dan jumlahnya masing-masing:");
for(var x=0; x < temp.length; x++){
  var s_i = 0;
  for(var y = 0; y < arr_input.length; y++){
    if(temp[x] == arr_input[y]){
      s_i += 1;
    }
  }
  console.log(temp[x] + ": "+s_i);
}
console.log("Ada "+angka.length+" angka: "+angka.join(" "));
console.log("Jumlah semua angka: "+sum);
