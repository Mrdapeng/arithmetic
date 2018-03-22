var a = ["a", "b", "c", "d", "e"];
for (
  var val, ret, it = a[Symbol.iterator]();
  (ret = it.next()) && !ret.done;

) {
  val = ret.value;
  console.log(val);
}
