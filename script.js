document.addEventListener('DOMContentLoaded', function() {
    
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
    ];

    const projects = [
        {
            title: 'E-commerce Website',
            description: 'A full-featured e-commerce platform for an electronics shop.',
            details: 'Engineered with ASP.NET MVC, it includes product catalogs, a shopping cart, and a secure checkout process, all managed by a robust SQL backend.',
            tech: ['ASP.NET', 'C#','HTML' ,'SQL', 'JavaScript'],
            github: '#',
            live: '#'
        },
        {
            title: 'Ransomware Detection',
            description: 'A security tool to scan files and detect potential ransomware threats.',
            details: 'Utilizes Python and machine learning principles to identify malware through file signature and behavior analysis, with functionality to quarantine threats.',
            tech: ['Python', 'Flask'],
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
    const skillsContainer = document.querySelector('#skills .grid');
    if (skillsContainer) {
        skills.forEach(skill => {
            // Debugging line to help check the generated class names in the browser console
            console.log(`Creating icon for: ${skill.name}, Class: "ph-fill ${skill.icon}"`);
            
            const skillEl = document.createElement('div');
            skillEl.className = 'glass-card p-4 rounded-lg flex flex-col items-center justify-center';
            skillEl.innerHTML = `
                <i class="ph-fill ${skill.icon} text-5xl text-accent mb-2"></i>
                <span class="text-slate-300">${skill.name}</span>
            `;
            skillsContainer.appendChild(skillEl);
        });
    }

    // Inject Projects
    const projectsContainer = document.querySelector('#projects .grid');
    if (projectsContainer) {
        projects.forEach(project => {
            const projectEl = document.createElement('div');
            projectEl.className = 'project-card glass-card rounded-lg h-72';
            projectEl.innerHTML = `
                <div class="project-card-inner">
                    <div class="project-card-front">
                        <h3 class="text-2xl font-bold text-slate-100 mb-2">${project.title}</h3>
                        <p class="text-slate-400">${project.description}</p>
                    </div>
                    <div class="project-card-back">
                        <p class="text-slate-300 mb-4">${project.details}</p>
                        <div class="flex flex-wrap justify-center gap-2 mb-4">
                            ${project.tech.map(t => `<span class="bg-slate-700 text-accent text-xs font-semibold px-2 py-1 rounded-full">${t}</span>`).join('')}
                        </div>
                        <div class="flex space-x-4">
                            <a href="${project.github}" target="_blank" class="hover:text-accent"><i class="ph-github-logo text-2xl"></i></a>
                            <a href="${project.live}" target="_blank" class="hover:text-accent"><i class="ph-arrow-square-out text-2xl"></i></a>
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
                header.style.backgroundColor = 'rgba(10, 25, 47, 0.85)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.backdropFilter = 'none';
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
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // Particle Animation
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray;

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(100, 255, 218, 0.2)';
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }
        
        function init() {
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
            ctx.clearRect(0,0,innerWidth, innerHeight);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
        }

        init();
        animate();

        window.addEventListener('resize', function(){
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        });
    }
});
