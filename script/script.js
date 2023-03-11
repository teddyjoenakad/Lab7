const courseList = [{ code:'ACIT 1620',  name:'Web Fundamental Technologies'}, {code:'ACIT 1515', name:'Scripting for IT'}, {code:'MATH 1310', name:'Technical Math for IT'}]

do {
    user= prompt('Please enter the 4 digit code of the course you are taking: ')
} 
while (isNaN(user) == true || user.length != 4)
