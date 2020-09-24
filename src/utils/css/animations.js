function fadeIn(id) {
  var container = document.getElementById(id);
  container.classList.add("fade-in");
}

function fadeOut(event) {
  
  // if (newPage === undefined) {
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
  // } else if (newPage && fadeContainer) {
  //   var parameterContainer = document.getElementById(fadeContainer);
  //   parameterContainer.classList.add("fade-out");
  //   if (newPage !== undefined) {
  //     setInterval(() => {
  //       parameterContainer.classList.add("hidden");
  //       var url = window.location.origin + "/" + newPage;
  //       window.location.assign(url);
  //     }, 2000);
  //   }
  // }
}

function changePage(page) {
  var url = window.location.href + page;
  window.location.assign(url);
}

export { changePage, fadeOut, fadeIn };
