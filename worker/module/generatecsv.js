const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: "./task.csv",
  header: [
    { id: "name", title: "Name" },
    { id: "surname", title: "Surname" },
    { id: "age", title: "Age" },
    { id: "gender", title: "Gender" },
  ],
});

const data = [
  {
    name: "Yash",
    surname: "Kesarwani",
    age: 21,
    gender: "M",
  },
  {
    name: "Prakhar",
    surname: "Saxena",
    age: 22,
    gender: "M",
  },
  {
    name: "Shubham",
    surname: "Singh",
    age: 21,
    gender: "M",
  },
];
const write = async () => {
  for (let i = 0; i < 40000; i++) await csvWriter.writeRecords(data);
};

write();

module.exports = write;
