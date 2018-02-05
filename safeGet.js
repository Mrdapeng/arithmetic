const safeGet = (o, path) => {
    try {
      return path.split('.').reduce(
        (o, k) => o[k], o)
    } catch (e) {
      return void 666
    }
  }
  //test
  var total=[1,2,3].reduce((preValue,currValue)=>{
      return preValue+currValue
  })
  console.log(total);
  