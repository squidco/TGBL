function fadeIn(id) {
  var container = document.getElementById(id);
  container.classList.add("fade-in");
  var removeFadeIn = setInterval(() => {
    container.classList.remove("fade-in");
    clearInterval(removeFadeIn);
  }, 2001);
}

function fadeOut(event) {
  var page = event.target.dataset.page;
  var container = document.getElementById(event.target.dataset.container);
  container.classList.add("fade-out");
  if (page !== undefined) {
    setInterval(() => {
      container.classList.add("hidden");
      var url = window.location.origin + "/" + page;
      window.location.assign(url);
    }, 2000);
  }
}

function fadeOutWithParams(page, containerId) {
  var container = document.getElementById(containerId);
  container.classList.add("fade-out");
  if (page !== undefined) {
    setInterval(() => {
      container.classList.add("hidden");
      var url = window.location.origin + "/" + page;
      window.location.assign(url);
    }, 2000);
  }
}

export { fadeOut, fadeIn, fadeOutWithParams };
