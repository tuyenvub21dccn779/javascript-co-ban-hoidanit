
console.log("Video 27");

//score: Giỏi, Khá, Trung Bình, Yếu
const score = 1;

switch (true) {
    case (score >= 8 && score <= 10):
        console.log("Giỏi");
        break;
    case (score >= 6 && score < 8):
        console.log("Khá");
        break;
    case (score >= 4 && score < 6):
        console.log("Trung Bình");
        break;

    default:
        console.log("Yếu");

}