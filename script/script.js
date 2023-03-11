const courseList = [{code:'ACIT 1620',  name:'Web Fundamental Technologies'}, {code:'ACIT 1515', name:'Scripting for IT'}, {code:'MATH 1310', name:'Technical Math for IT'}]

let user_input
do {
    user= prompt('Please enter the 4 digit code of the course you are taking: ')
} 
while (isNaN(user) == true || user.length != 4)

let true_value = false

let courses
let names
for(b=0; b<courseList.length; b++){
    courses = courseList[b].code
    names = courseList[b].name
    if (courses.includes(user)){
        true_value = true
        break
    }
}