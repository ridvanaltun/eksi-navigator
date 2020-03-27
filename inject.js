window.addEventListener("keyup", e => {
  if (e.key === "ArrowRight") {
    document.getElementsByClassName("next")[0].click();
  } else if (e.key === "ArrowLeft") {
    document.getElementsByClassName("prev")[0].click();
  }
});
