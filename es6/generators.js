function* queue(name) {
  yield "hello";
  yield "world";
  if (name.startsWith("x")) {
      console.log('xxx')
    yield name + "xxx";
  }
  yield "bye";
}
var run = queue('x123')
run.next()