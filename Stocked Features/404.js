console.log('404 Page Not Found script loaded.');

const validPages = ['index.html', 'about.html', 'contact.html']; 
const currentPage = window.location.pathname.split('/').pop(); 

if (!validPages.includes(currentPage) && currentPage !== '') {
  window.location.href = '404.html';
}
