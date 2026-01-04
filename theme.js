document.addEventListener('DOMContentLoaded', () => {
  const theme = document.querySelector('.theme');
  if (!theme) return;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    theme.innerHTML = `<i class="fa-regular fa-sun"></i> Light Mode`;
  }

  theme.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    theme.innerHTML = isDark
      ? `<i class="fa-regular fa-sun"></i> Light Mode`
      : `<i class="fa-regular fa-moon"></i> Dark Mode`;
  });
});
