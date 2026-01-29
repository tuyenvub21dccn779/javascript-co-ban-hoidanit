console.log("video 65");

const greeting = (name, callback) => {
  console.log("xin chào: ", name);
  callback();
};

const hello = () => {
  console.log("learn callback...");
};

const hi = () => {
  console.log("say hi...");
};

greeting("Eric", hello);
greeting("bla bla", hi);
