// {
//     rows: [
//       ["Lisa", 16, "Female", "2000-12-01"],
//       ["Bob", 22, "Male", "1996-01-21"]
//     ],
//     metaData: [
//       { name: "name", note: '' },
//       { name: "age", note: '' },
//       { name: "gender", note: '' },
//       { name: "birthday", note: '' }
//     ]
//   }
const parse = data => {
  var scheme = data.mteaData.map(ele => ele.name);
  return data.rows.map((values, index) => {
    var obj = {};
    scheme.foreach(key => {
      obj[key] = values[index];
    });
  });
};
const parseData = data =>
  data.rows.map(x => {
    return data.metaData.reduce(
      (acc, meta, i) => ({ ...acc, [meta.name]: x[i] }),
      {}
    );
  });
