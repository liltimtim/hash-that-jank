document.addEventListener("DOMContentLoaded", event => {
  const copyToClipboard = str => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  let inputField = document.getElementById("hash-form-email-field");
  let output = document.getElementById("hash-output");
  let copyClipBtn = document.getElementById("copy-clip-button");
  let hashedValue = "";
  copyClipBtn.addEventListener("click", e => {
    copyToClipboard(hashedValue);
    alert(
      `Copied hashed email ${
        inputField.value
      } \n which was hashed as ${hashedValue} \n to your clipboard! Just Copy pasta that jank into appsee!`
    );
  });

  inputField.addEventListener("input", event => {
    output.innerHTML = `Hashed: ${md5(inputField.value)}`;
    hashedValue = md5(inputField.value);
  });
});
