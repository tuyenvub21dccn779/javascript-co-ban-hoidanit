console.log("video 64");

const a = 10,
  b = 0;

const doSomeThing = () => {
  if (b === 0) {
    throw new Error("Thực hiện chia cho 0");
  }

  console.log(a / b);
};

try {
  doSomeThing();
} catch (error) {
  console.log("có lỗi xảy ra", error);
} finally {
  console.log("run final");
}
