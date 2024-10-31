let isDarkTheme = localStorage.getItem('theme') === 'dark';

const themeToggle = document.getElementById('theme-toggle');

document.documentElement.setAttribute(
  'data-theme',
  isDarkTheme ? 'dark' : 'light',
);
themeToggle.innerHTML = isDarkTheme ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
  isDarkTheme = !isDarkTheme;

  document.documentElement.setAttribute(
    'data-theme',
    isDarkTheme ? 'dark' : 'light',
  );
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  themeToggle.innerHTML = isDarkTheme ? '☀️' : '🌙';
});
