document.addEventListener('DOMContentLoaded', function() {
  toggleSidebar();
  logoButton.style.display = 'block'; // Make sure the toggle button is visible

  // Add click event listeners to the buttons
  document.getElementById('browser-tab1').addEventListener('click', function () {
    setActiveTab('browser-tab1');
    goToPage('experiences.html');
  });

  document.getElementById('browser-tab2').addEventListener('click', function () {
    setActiveTab('browser-tab2');
    goToPage('experiences2.html');
  });

  document.getElementById('browser-tab3').addEventListener('click', function () {
    setActiveTab('browser-tab3');
    goToPage('experiences3.html');
  });
});

// JavaScript to handle click and expand/collapse
document.querySelectorAll('.clickable').forEach(item => {
  item.addEventListener('click', event => {
    let content = item.nextElementSibling;
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  })
})

function showPage(page) {
  // Define the URLs for each page
  const homeURL = 'index.html';
  const cvURL = 'cv.html';
  const projectsURL = 'projects.html';
  const experiencesURL = 'experiences.html';
  // const defaultActiveTab = 'browser-tab1'

  // setActiveTab(defaultActiveTab);

  // Navigate to the selected page
  switch (page) {
    case 'home':
      window.location.href = homeURL;
      break;
    case 'cv':
      window.location.href = cvURL;
      break;
    case 'projects':
      window.location.href = projectsURL;
      break;
    case 'experiences':
      window.location.href = experiencesURL;
      break;
    default:
      console.error('Invalid page:', page);
  }
}

function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var logoButton = document.getElementById('toggle-btn');
  var introContainer = document.querySelector('.intro-container');
  var experiences = document.querySelector('.timeline');
  var projects = document.querySelector('.projects-container');
  var cv = document.querySelector('.resume-container');

  // Toggle the 'open' class on the sidebar
  sidebar.classList.toggle('open');

  // Change the button icon based on the sidebar state
  if (sidebar.classList.contains('open')) {
    logoButton.innerHTML = '✖';
    if (window.innerWidth <= 600) {
      if (window.location.href.includes('index')) {
        introContainer.style.display = 'none';
      }
      if (window.location.href.includes('experiences')) {
        experiences.style.display = 'none';
      }
      if (window.location.href.includes('projects')) {
        projects.style.display = 'none';
      }
      if (window.location.href.includes('cv')) {
        cv.style.display = 'none';
      }
    }
  } else {
    logoButton.innerHTML = '☰';
    if (window.location.href.includes('index')) {
      introContainer.style.display = 'flex';
    }
    if (window.location.href.includes('experiences')) {
      experiences.style.display = 'block';
    }
    if (window.location.href.includes('projects')) {
      projects.style.display = 'flex';
    }
    if (window.location.href.includes('cv')) {
      cv.style.display = 'flex';
    }
  }
}

function goToPage(pageURL) {
  // Navigate to the specified page
  var tabId;

  if (pageURL === 'experiences.html') {
    tabId = 'browser-tab1';
  }

  else if (pageURL === 'experiences2.html') {
    tabId = 'browser-tab2';
  }

  else if (pageURL === 'experiences3.html') {
    tabId = 'browser-tab3';
  }

  window.location.href = pageURL;
  setActiveTab(tabId);
}

// Initialize the active tab from localStorage or set a default
var activeTabId = localStorage.getItem('activeTab') || 'browser-tab1';
setActiveTab(activeTabId);

function setActiveTab(tabId) {
  // var browserContainer = document.querySelector('.browser-container');
  // Get all tabs
  var tabs = document.querySelectorAll('.browser-tab');

  // Reset the background color for all tabs
  tabs.forEach(tab => {
    tab.style.backgroundColor = '#211f30';
  });

  // Set the clicked tab to the active color
  document.getElementById(tabId).style.backgroundColor = '#120239';

  // Save the active tab to localStorage
  localStorage.setItem('activeTab', tabId);
}