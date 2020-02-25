// // Ex.1********************************************************
// class github {
//     constructor(username, filename, discriptionofrepository, code) {
//         this.username = username
//         this.filename = filename
//         this.discriptionofrepository = discriptionofrepository
//         this.code = code
//     }
//     githubfunction() {
//         console.log(`username:${this.username}
//     filename:${this.filename}
//     discription:${this.discriptionofrepository}
//     Code:${this.code}`)
//     }

// } 
// // !! : "Create an object of the class and use the function"
// let githubcomplete = new github('Dunkin123', 'Folder', 'Nice', 'CODE') // !! don't forget your line terminators
// // Ex.2**************************************************************
// class Movie {
//     constructor(moviename, rating, yearreleased) {
//         this.moviename = moviename
//         this.rating = rating
//         this.yearreleased = yearreleased
//     }
//     changerating() {
//         // !! "using prompt"
//         let rating = 'Pg-13' // !! use the THIS keyword to acces a property of ANY OBJECT that you call this method on
//     }
//     changeyear() {
//         // !! "using prompt"
//         let yearreleased = 1974  // !! use the THIS keyword to acces a property of ANY OBJECT that you call this method on
//     }
// }
// let Newmoviedetails = new Movie('Ride Along', 'R', 2018)
// // !! "Create an object of the class and use the two methods you created"
// Ex.3******************************************************
console.log('WE LINKED')
class student {
    constructor(studentName, codeSchoolCohort, grades) {
        this.studentName = studentName
        this.codeSchoolCohort = codeSchoolCohort
        this.grades = grades
    }
    changename() {
        this.studentName = prompt('Name?')
        this.grades = prompt('Grade?') // !! this method should ONLY change the name of the student
    }
    printstudent() {
        console.log(`Name:${this.studentName}
        Cohort: ${this.codeSchoolCohort}
        Grades:${this.grades}`)
    }
    functionaddingtoarreay(NameAndGrades) { // !! this method should accept two params
        this.grades.push(NameAndGrades)

    }

}
let newstudent = new student('Chris', 4, [98, 88, 76, 100]) // !! this instance should start with an empty array
newstudent.printstudent();
newstudent.changename();
newstudent.printstudent();