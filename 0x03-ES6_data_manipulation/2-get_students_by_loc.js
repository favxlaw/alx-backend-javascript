export default function getStudentsByLocation (hello, city) {
    return hello.filter((student) => student.location === city);
}
