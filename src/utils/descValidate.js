
export const descValidate = (description) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = description;
  // remove <br> tags
  textArea.value = textArea.value.replace(/<br>/g, "");
  // remove ~
  textArea.value = textArea.value.replace(/~/g, "");
  textArea.value = textArea.value.replace(/_/g, "");
  textArea.value = textArea.value.replace(/\*/g, "");
  textArea.value = textArea.value.replace(/\[/g, "");
  textArea.value = textArea.value.replace(/]/g, "");

  // remove <i> tags
  textArea.value = textArea.value.replace(/<i>/g, "");
  textArea.value = textArea.value.replace(/<\/i>/g, "");

  // replace ! with new line
  textArea.value = textArea.value.replace(/!/g, "\n\t");

  //remove links like (https://anilist.co/*)
  textArea.value = textArea.value.replace(/\(https:\/\/anilist.co\/\S+\)/g, "");
  return textArea.value;
}