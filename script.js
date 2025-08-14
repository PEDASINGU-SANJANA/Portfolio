const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

const sections = {
    skills: `
        <h2>Skills</h2>
        <p><strong>Languages:</strong> Python, C</p>
        <p><strong>Web:</strong> HTML, CSS, JavaScript</p>
        <p><strong>Frameworks:</strong> VS Code, GitHub</p>
        <p><strong>Databases:</strong> SQL</p>
    `,
    education: `
        <h2>Education</h2>
        <p><strong>B.Tech CSE</strong> - Seshadri Rao Gudlavalleru Engineering College (CGPA: 8.86)</p>
    `,
    projects: `
        <h2>Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <img src="images/ai-tools.jpg" alt="AI Tool Usage Prediction">
                <h3><a href="https://github.com/PEDASINGU-SANJANA/Mining-AI-Tool-Usage" target="_blank">AI Tool Usage Prediction</a></h3>
                <p>Data mining and OLAP analysis to predict AI tool adoption trends.</p>
            </div>
            <div class="project-card">
                <img src="images/smartsdlc.jpg" alt="SmartSDLC">
                <h3><a href="https://github.com/PEDASINGU-SANJANA/SmartSDLC-GEN-AI-" target="_blank">SmartSDLC</a></h3>
                <p>AI-powered software development life cycle optimization tool.</p>
            </div>
            <div class="project-card">
                <img src="images/aqi.jpg" alt="AQI Prediction">
                <h3><a href="https://github.com/PEDASINGU-SANJANA/AQI-prediction" target="_blank">AQI Prediction</a></h3>
                <p>Machine learning model for predicting air quality index levels.</p>
            </div>
        </div>
    `,
    achievements: `
        <h2>Achievements</h2>
        <ul>
            <li>Mentor Certification - ELT Center (2023)</li>
            <li>Reliance Foundation Scholar (2022)</li>
        </ul>
    `,
    contact: `
        <h2>Contact</h2>
        <p>Email: <a href="mailto:sanjanapedasingu@gmail.com">sanjanapedasingu@gmail.com</a></p>
        <p>Phone: <a href="tel:+918500791730">+91-8500791730</a></p>
        <p><a href="mailto:sanjanapedasingu@gmail.com?subject=Hello%20Sanjana&body=Hi%20Sanjana," target="_blank"> Message </a></p>
        <p><a href="https://www.linkedin.com/in/pedasingu-sanjana-ba79912ba" target="_blank">LinkedIn</a> | 
        <a href="https://github.com/PEDASINGU-SANJANA" target="_blank">GitHub</a></p>
    `
};

document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.getAttribute("data-section");
        modalBody.innerHTML = sections[section];
        modal.classList.add("show");
        modal.style.display = "block";
    });
});

closeBtn.onclick = () => {
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 400);
};

window.onclick = (event) => { 
    if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 400);
    }
};
