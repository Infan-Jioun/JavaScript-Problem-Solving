function gradingStudents(grades) {
    return grades.map(grades => {
        if (grades < 38) {
            return grades;
        }
        let nextMultiple = Math.ceil(grades / 5) * 5;
        let difference = nextMultiple - grades;
        return (difference < 3) ? nextMultiple : grades;
    })
}