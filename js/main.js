const triggerEvent = function () {
  if (ga) {
    ga('send', 'event', 'Site', 'Click', 'Submissão');
  }
};

(function () {
  const buttonCall4Paper = document.querySelector('.call-4-papers__link');
  buttonCall4Paper.addEventListener('click', triggerEvent, false);
})();
