var name_case = "Nimra Asif";
//lower_case 
console.log(" lower-case: ", name_case.toLowerCase());
//   upper case 
console.log('upper_case', name_case.toUpperCase());
// title case 
console.log("title_case", name_case.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
