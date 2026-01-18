
console.log("Lab 02");

function tinhTrungBinh(toan, van, anh) {
    return (toan + van + anh) / 3;
}

function xepLoai(diemTB) {
    if (diemTB >= 9) {
        return "Xuất sắc";
    } else if (diemTB >= 8) {
        return "Giỏi";
    } else if (diemTB >= 6.5) {
        return "Khá"
    } else {
        return "Trung Bình";
    }
}

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const diemTB = tinhTrungBinh(diemToan, diemVan, diemAnh);
const xeploai = xepLoai(diemTB);

console.log(
    `Điểm trung bình: ${diemTB}
Xếp loại: ${xeploai}
`
)