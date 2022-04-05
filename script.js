function submit() {
  const button = document.getElementById("submit");
  button.addEventListener("click", (event) => {
    const greenLetters = document.getElementById("greenLetters");
    const yellowLetters = document.getElementById("yellowLetters");
    const greyLetters = document.getElementById("greyLetters");
    const yellowPattern = document.getElementById("yellowPattern");

    URL fileURL = URL.createObjectURL()
    const fileReader = new FileReader();
    fileReader.readAsText();
  })
}
