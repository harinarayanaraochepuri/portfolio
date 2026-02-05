// main.js: basic interactivity and GitHub projects fetch
document.getElementById('year').textContent = new Date().getFullYear();

// Insert skills if provided via window.SKILLS (injected or edited manually)
(function populateSkills() {
  const el = document.getElementById('skills-list');
  if (window.SKILLS && window.SKILLS.length) {
    el.innerHTML = window.SKILLS.map(s => `<span class="skill">${s.trim()}</span>`).join(' ');
  } else {
    el.textContent = 'Please provide comma-separated skills in the site files (e.g., Python, SQL, PyTorch, NLP, Power BI, AWS).';
  }
})();

// Fetch public repos from GitHub for projects
(function fetchGitHubProjects() {
  const username = 'harinarayanaraochepuri';
  const target = document.getElementById('projects-list');
  fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(r => r.json())
    .then(repos => {
      if (!Array.isArray(repos)) {
        target.innerHTML = '<p class="note">Could not fetch projects. Make sure the username is correct or try again later.</p>';
        return;
      }
      // sort by stargazers_count desc then updated
      repos.sort((a,b)=> (b.stargazers_count - a.stargazers_count) || (new Date(b.updated_at)-new Date(a.updated_at)));
      const top = repos.slice(0,6);
      if (top.length === 0) {
        target.innerHTML = '<p class="note">No public repositories found on GitHub.</p>';
        return;
      }
      const html = top.map(r => {
        return `<div class="project">
          <h4><a href="${r.html_url}" target="_blank" rel="noopener">${escapeHtml(r.name)}</a> ${r.stargazers_count?`<small>★ ${r.stargazers_count}</small>`:''}</h4>
          <p>${escapeHtml(r.description || 'No description provided.')}</p>
        </div>`;
      }).join('');
      target.innerHTML = html;
    })
    .catch(err => {
      target.innerHTML = '<p class="note">Error fetching projects from GitHub.</p>';
      console.error(err);
    });

  function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
})();
