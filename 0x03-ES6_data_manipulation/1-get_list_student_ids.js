// eslint-disable-next-line consistent-return
export default function getListStudentIds(hello) {
    if (!Array.isArray(hello)){
        return[];
    }
    return hello.map((student) => student.id);
}
