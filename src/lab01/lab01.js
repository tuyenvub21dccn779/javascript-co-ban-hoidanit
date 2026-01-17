
const fullName = "tuyen";
const birthYear = 2003;
const isStudent = false;

const today = new Date();
const currentYear = today.getFullYear();

console.log(
    `Tên: ${fullName}
Tuổi: ${currentYear - birthYear},
Sinh viên: ${isStudent ? "Đúng" : "Sai"}`
)