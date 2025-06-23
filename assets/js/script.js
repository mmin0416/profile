document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      const selected = this.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      contents.forEach(c => c.classList.remove('active'));
      document.getElementById(selected).classList.add('active');
    });
  });
});
