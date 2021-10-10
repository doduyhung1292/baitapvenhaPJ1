console.log("Đỗ Duy Hưng 20183754 ");
var k;
function F(k) {
  if (k == 1) return 1;
  if (k == 2) return 2;
  return F(k-1) + F(k-2);
}
F(5);
