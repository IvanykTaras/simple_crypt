const decrypt = (encryptedText, n) => {
  if (typeof encryptedText === 'string') {
    let arr = encryptedText.split("");

    const num = Math.floor(encryptedText.length / 2);

    for (let j = 0; j < n; j++) {
      let txt1 = [],
        txt2 = [];

      arr.forEach((e, i) => {
        if (i < num) {
          txt1.push(e);
        } else {
          txt2.push(e);
        }
      });

      let a = 0,
        b = 0;
      for (let i = 1; i <= encryptedText.length; i++) {
        if (i % 2 == 1) {
          arr[i - 1] = txt2[a];
          a++;
        } else {
          arr[i - 1] = txt1[b];
          b++;
        }
      }
    }

    return arr.join("");
  }else{
      return null;
  }
};

const encrypt = (text, n) => {
  if(typeof text === 'string'){
    for (let j = 1; j <= n; j++) {
        let txt1 = [],
          txt2 = [];
    
        text.split("").map((e, i) => {
          if (i % 2 === 1) {
            txt2.push(e);
          } else {
            txt1.push(e);
          }
        });
        text = txt2.concat(txt1).join("");
      }
    
      return text;
  }else{
      return null;
  }
};

console.log(encrypt("This is a test!", 2));
console.log(decrypt(encrypt("This is a test!", 2), 2));
