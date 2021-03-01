module.exports.newCollection = (first, second) => {
  const array = first.reduce((arr, { country }) => arr.concat((arr.every((item) => item!==country)) ? country : []), []);
  return array.map((country) => {
    const sum = (arr) => arr.reduce((sum, year) => sum+year.number, 0);
    const { overallStudents } = second.find((item) => country===item.country);
    const data = first.filter((item) => item.country===country);
    const longitude = data.map(({ location }) => location.ll[0]);
    const latitude = data.map(({ location }) => location.ll[1]);
    const diff = data.map(({ students }) => sum(students)-overallStudents);
    const count = data.length;
    return {
      "_id": country,
      "allDiffs": diff,
      "longitude": longitude,
      "latitude": latitude,
      "count": count,
  }});
}