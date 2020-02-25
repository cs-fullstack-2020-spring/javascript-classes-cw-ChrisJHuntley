// Ex.1********************************************************
// class github{
//     constructor(username, filename, discriptionofrepository, code){
//         this.username=username
//         this.filename=filename
//         this.discriptionofrepository=discriptionofrepository
//         this.code=code
//     }
// githubfunction(){
//     console.log(`username:${this.username}
//     filename:${this.filename}
//     discription:${this.discriptionofrepository}
//     Code:${this.code}`)
// }

// }let githubcomplete= new github('Dunkin123','Folder','Nice','CODE')
// Ex.2**************************************************************
// class Movie{
//     constructor(moviename, rating, yearreleased){
//     this.moviename=moviename
//     this.rating=rating
//     this.yearreleased=yearreleased
//     }
// changerating(){
// let rating='Pg-13'
// }
// changeyear(){
//     let yearreleased=1974
// }
// } 
// let Newmoviedetails=new Movie('Ride Along','R',2018)
// Ex.3******************************************************
console.log('WE LINKED')
class student{
    constructor(studentName,codeSchoolCohort,grades){
    this.studentName=studentName
    this.codeSchoolCohort=codeSchoolCohort
    this.grades=grades
    }
    changename(){
        this.studentName=prompt('Name?')
        this.grades=prompt('Grade?')
    }
    printstudent(){
        console.log(`Name:${this.studentName}
        Cohort: ${this.codeSchoolCohort}
        Grades:${this.grades}`)
    }
    functionaddingtoarreay(NameAndGrades){
        this.grades.push(NameAndGrades)

    }

}
let newstudent=new student('Chris',4,[98,88,76,100])
newstudent.printstudent();
newstudent.changename();
newstudent.printstudent();