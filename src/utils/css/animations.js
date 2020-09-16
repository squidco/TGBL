function fadeIn(id) {
  var container = document.getElementById(id);
  container.classList.add("fade-in");
}

function fadeOut(containerId, page) {
  var container = document.getElementById(containerId);
  container.classList.add("fade-out");
  setInterval(() => {
    changePage(page);
  }, 2000);
}

function test2(event) {
  var page = event.target.dataset.page
  var container = document.getElementById(event.target.dataset.container);
  container.classList.add("fade-out")
  if (page !== undefined) {
    setInterval(() => {
      var url = window.location.href + page;
      window.location.assign(url);
    }, 2000);
  }
}

function changePage(page) {
  var url = window.location.href + page;
  window.location.assign(url);
}

export { changePage, fadeOut, fadeIn, test2 };
