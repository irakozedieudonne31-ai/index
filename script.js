function showPage(pageId) {
  console.log('Showing page:', pageId);
  
  // Hide all sections
  const allSections = document.querySelectorAll('section');
  allSections.forEach(section => {
    section.style.display = 'none';
  });
  
  // Show the selected section
  const selectedSection = document.getElementById(pageId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
    console.log('Page shown:', pageId);
  } else {
    console.log('Page not found:', pageId);
  }
}

// Show home page when page loads
window.addEventListener('load', function() {
  showPage('home');
});

// Add click listeners to navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  console.log('Found nav links:', navLinks.length);
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const pageId = href.substring(1);
      console.log('Clicked link, going to:', pageId);
      showPage(pageId);
    });
  });
});

// Search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();

  if (searchTerm === '') {
    alert('Please enter a search term');
    return;
  }

  // Map search terms to page IDs
  const pageMap = {
    'home': 'home',
    'about': 'about',
    'hobbies': 'hobbies',
    'hobby': 'hobbies',
    'subjects': 'subjects',
    'subject': 'subjects',
    'projects': 'projects',
    'project': 'projects',
    'skills': 'skills',
    'skill': 'skills',
    'websites': 'websites',
    'website': 'websites',
    'contact': 'contact'
  };

  const pageId = pageMap[searchTerm];

  if (pageId) {
    showPage(pageId);
    document.getElementById('searchInput').value = '';
  } else {
    alert('Not found. Try: home, about, hobbies, subjects, projects, skills, websites, contact');
  }
});

// Allow Enter key to search
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('searchBtn').click();
  }
});