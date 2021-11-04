(function () {
  const drop_btn = document.querySelector(".drop-btn");
  const menu_wrapper = document.querySelector(".wrapper");
  const menu_bar = document.querySelector(".menu-bar");
  const setting_drop = document.querySelector(".setting-drop");
  const help_drop = document.querySelector(".help-drop");
  const setting_item = document.querySelector(".setting-item");
  const help_item = document.querySelector(".help-item");
  const back_setting_btn = document.querySelector(".back-setting-btn");
  const back_help_btn = document.querySelector(".back-help-btn");

  drop_btn.onclick = () => {
    menu_wrapper.classList.toggle("show");
  };

  console.log(setting_item);

  setting_item.onclick = () => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
      setting_drop.style.display = "block";
    }, 100);
  };

  help_item.onclick = () => {
    menu_bar.style.marginLeft = "-400px";
    setTimeout(() => {
      help_drop.style.display = "block";
    }, 100);
  };

  back_setting_btn.onclick = () => {
    menu_bar.style.marginLeft = "0";
    setting_drop.style.display = "none";
  };

  back_help_btn.onclick = () => {
    menu_bar.style.marginLeft = "0";
    help_drop.style.display = "none";
  };

  // Exec
})();
