console.log("Đỗ Duy Hưng 20183754 ");
function isPerfect(n) {
  var tem = 0;
  for (i=0; i<n; i++) {
    if (n%i == 0 ) tem += i;
  }
  if (tem !== 0 && tem == n) return true;
  else return false;
}
var dem = 0;
var n = 1;
while (n<800000) {
  if(isPerfect(n) == true) {console.log(n); dem++;}
  if (dem == 5) break;
  n++;
}
