export const openUrl = (url, onNewTab = true) => {
  if (onNewTab) {
    window.open(url, "_blank").focus();
  } else {
    window.open(url, "_self").focus();
  }
};
