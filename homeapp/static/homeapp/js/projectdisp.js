const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    const description = project.querySelector('.project-description');

    project.addEventListener('click', () => {
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
    });
});
