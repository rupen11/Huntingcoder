import * as fs from 'fs';

export default async function handler(req, res) {
  // read blogdata folder
  let data = await fs.promises.readdir('blogdata');
  data = data.slice(0, req.query.count);
  let myfile;
  let allBlogs = [];

  // Read files one by one and collect all files data in array
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}



// Read files one by one
// Can not work because of nested promises
// data.forEach((filename) => {
//   fs.readFile(('blogdata/' + filename), 'utf-8', (err, data) => {
//     console.log(data);
//     allData.push(data);
//   })
// })
