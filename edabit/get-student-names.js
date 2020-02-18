// Create a function that takes an array of students and returns an array of student names.
//
// Examples
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]
// Notes
// Don't forget to return your result.
function getStudentNames(students) {
	    newarray = [];
    for (let i = 0; i < students.length; i++) {
        newarray.push(students[i].name);
    }
    return newarray;
}
