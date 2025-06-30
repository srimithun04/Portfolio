document.addEventListener('DOMContentLoaded', function() {
    
    // --- Theme Toggling ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Set initial theme based on localStorage or OS preference
    if (localStorage.getItem('color-theme') === 'dark' || 
       (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    // Listener for theme toggle button
    themeToggleBtn.addEventListener('click', function() {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });

    // --- Data for Skills and Projects ---
    const skills = [
        { name: 'C', icon: 'ph-file-c' },
        { name: 'C#', icon: 'ph-file-cpp' }, // Using Cpp icon as a stand-in
        { name: 'Python', icon: 'ph-file-py' },
        { name: 'SQL', icon: 'ph-database' },
        { name: 'HTML', icon: 'ph-file-html' },
        { name: 'CSS', icon: 'ph-file-css' },
        { name: 'ASP.NET MVC', icon: 'ph-microsoft-excel-logo' }, // Stand-in
        { name: 'Django', icon: 'ph-leaf' }, // Stand-in
        { name: 'Flask', icon: 'ph-brandy' }, // Stand-in
        { name: 'Git', icon: 'ph-git-branch' },
        { name: 'Bootstrap', icon: 'ph-bootstrap-logo' }
    ];

    const projects = [
        {
            title: 'E-commerce Website',
            description: 'A full-featured e-commerce platform for an electronics shop.',
            details: 'Engineered with ASP.NET MVC, it includes product catalogs, a shopping cart, and a secure checkout process, all managed by a robust SQL backend.',
            tech: ['ASP.NET', 'C#', 'SQL', 'JavaScript'],
            github: '#',
            live: '#'
        },
        {
            title: 'Ransomware Detection',
            description: 'A security tool to scan files and detect potential ransomware threats.',
            details: 'Utilizes Python and machine learning principles to identify malware through file signature and behavior analysis, with functionality to quarantine threats.',
            tech: ['Python', 'Machine Learning'],
            github: '#',
            live: '#'
        },
        {
            title: 'Steganography Master',
            description: 'A web app for hiding secret messages in images and audio.',
            details: 'Built with Flask and OpenCV, this tool uses LSB steganography to embed or extract text, demonstrating data hiding techniques in a user-friendly interface.',
            tech: ['Python', 'Flask', 'OpenCV', 'HTML'],
            github: '#',
            live: '#'
        },
        {
            title: 'Theatre Seat Booking',
            description: 'A comprehensive system for booking theatre tickets online.',
            details: 'Developed with Python and MySQL, this application allows users to register, log in, view seating arrangements, and book tickets seamlessly.',
            tech: ['Python', 'MySQL', 'Tkinter'],
            github: '#',
            live: '#'
        }
    ];

    // --- Dynamic Content Injection ---

    // Inject Skills
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skills.forEach(skill => {
            const skillEl = document.createElement('div');
            skillEl.className = 'glass-card p-4 rounded-lg flex flex-col items-center justify-center';
            skillEl.innerHTML = `
                <i class="ph-fill ${skill.icon} text-5xl text-accent mb-2"></i>
                <span class="card-description">${skill.name}</span>
            `;
            skillsContainer.appendChild(skillEl);
        });
    }

    // Inject Projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projects.forEach(project => {
            const projectEl = document.createElement('div');
            projectEl.className = 'project-card glass-card rounded-lg h-72';
            projectEl.innerHTML = `
                <div class="project-card-inner">
                    <div class="project-card-front">
                        <h3 class="text-2xl card-title mb-2">${project.title}</h3>
                        <p class="card-description">${project.description}</p>
                    </div>
                    <div class="project-card-back">
                        <p class="card-description mb-4">${project.details}</p>
                        <div class="flex flex-wrap justify-center gap-2 mb-4">
                            ${project.tech.map(t => `<span class="card-tech-tag text-accent text-xs font-semibold px-2 py-1 rounded-full">${t}</span>`).join('')}
                        </div>
                        <div class="flex space-x-4">
                            <a href="${project.github}" target="_blank" class="hover:text-accent"><i class="ph-fill ph-github-logo text-2xl"></i></a>
                            <a href="${project.live}" target="_blank" class="hover:text-accent"><i class="ph-fill ph-arrow-square-out text-2xl"></i></a>
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectEl);
        });
    }

    // --- Interactivity Scripts ---

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        }
    });

    // Typing Effect
    const typingTextEl = document.getElementById('typing-text');
    if (typingTextEl) {
        const textToType = "I build things for the web.";
        let index = 0;
        function type() {
            if (index < textToType.length) {
                typingTextEl.innerHTML += textToType.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        setTimeout(type, 1000); // Start typing after a delay
    }

    // Scroll Reveal Animation
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        reveals.forEach(rev => {
            const elementTop = rev.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                rev.classList.add('active');
            } else {
                rev.classList.remove('active');
            }
        });
    }
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // Particle Animation
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray;

        function setCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        class Particle {
            constructor(x, y, directionX, directionY, size) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                const particleColor = document.documentElement.classList.contains('dark') 
                                      ? 'rgba(100, 255, 218, 0.2)' 
                                      : 'rgba(67, 56, 202, 0.2)';
                ctx.fillStyle = particleColor;
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }
        
        function init() {
            setCanvasSize();
            particlesArray = [];
            let numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * .4) - .2;
                let directionY = (Math.random() * .4) - .2;
                particlesArray.push(new Particle(x, y, directionX, directionY, size));
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, innerWidth, innerHeight);
            particlesArray.forEach(p => p.update());
        }

        init();
        animate();

        window.addEventListener('resize', () => {
            init();
        });
        
        // Redraw particles with correct color when theme changes
        themeToggleBtn.addEventListener('click', init);
    }
});