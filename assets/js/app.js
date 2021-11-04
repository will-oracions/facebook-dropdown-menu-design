(function () {
  const drop_btn = document.querySelector(".drop-btn");
  const menu_wrapper = document.querySelector(".wrapper");
  const menu_bar = document.querySelector(".menu-bar");
  const setting_drop = document.querySelector(".setting-drop");
  const help_drop = document.querySelector(".help-drop");
  const setting_item = document.querySelector(".setting-item");
  const help_item = document.querySelector(".help-item");

  drop_btn.onclick = () => {
    menu_wrapper.classList.toggle("show");
  };

  console.log(setting_item);

  setting_item.onclick = () => {
    menu_bar.style.marginLeft = "-400px";
    setting_drop.style.display = "block";
  };

  help_item.onclick = () => {
    menu_bar.style.marginLeft = "-400px";
    help_drop.style.display = "block";
  };

  // Exec
})();
