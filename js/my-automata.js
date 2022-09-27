gWorkspaceIcons = [{"prefix": "fab", "icon": "google"}, {"prefix": "fab", "icon": "google-drive"}, {"prefix": "far", "icon": "envelope"}, {"prefix": "fas", "icon": "video"}];

function gWorkspaceLoop(index) {
  let el = document.getElementById("google-tools");
  el.setAttribute("data-prefix", gWorkspaceIcons[index].prefix);
  el.setAttribute("data-icon", gWorkspaceIcons[index].icon);

  setTimeout(function() {
    gWorkspaceLoop((index + 1) % gWorkspaceIcons.length);
  }, 2000);
}


window.addEventListener('DOMContentLoaded', event => {
  // weak protection against robots
  let uncrypted = atob("YWNlY2NoaW5AZ21haWwuY29t");
  document.getElementById("safe-email").innerHTML = uncrypted;
  document.getElementById("safe-email").href="mailto:" + uncrypted;

  document.getElementById("safe-phone").innerHTML = atob('KzM5ICgzMzEpIDk5NDcxMzQ=');

  setTimeout(function() {
    gWorkspaceLoop(1);
  }, 2000);
});
