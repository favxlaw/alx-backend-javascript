export default function getStudentIdsSum(hello) {
    return hello.reduce((accumulator, student) => accumulator + student.id, 0);
}
