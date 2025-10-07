function showSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'; 
}

function hideSidebar(event){
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'; 
}

document.addEventListener("DOMContentLoaded", () => {
    const agentsContainer = document.getElementById("agents-container");
    const roleButtons = document.querySelectorAll(".role-btn");

    const renderAgents = (role) => {
        agentsContainer.innerHTML = "";
        const filteredAgents =
        role === "all" ? agents : agents.filter((agent) => agent.role === role);

        filteredAgents.forEach((agent) => {
        const agentCard = document.createElement("div");
        agentCard.className = "agent-card";
        agentCard.innerHTML = `
            <img src="${agent.photo}" alt="${agent.name}">
            <h2>${agent.name}</h2>
        `;
        agentsContainer.appendChild(agentCard);
        });
    };

    roleButtons.forEach((button) => {
        button.addEventListener("click", () => {
        document.querySelector(".role-btn.active").classList.remove("active");
        button.classList.add("active");
        renderAgents(button.dataset.role);
    });
});

renderAgents("all");
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const roleButtons = document.querySelectorAll(".role-btn, .dropdown-menu a");

    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(event) {
            event.stopPropagation(); 
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', function(event) {
            if (!dropdownMenu.contains(event.target) && dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            }
        });
    }

    const renderAgents = (role) => {
        const agentsContainer = document.getElementById("agents-container");
        agentsContainer.innerHTML = "";
        const filteredAgents = role === "all" ? agents : agents.filter((agent) => agent.role === role);

        filteredAgents.forEach((agent) => {
            const agentCard = document.createElement("div");
            agentCard.className = "agent-card";
            agentCard.innerHTML = `
                <img src="${agent.photo}" alt="${agent.name}">
                <h2>${agent.name}</h2>
            `;
            agentsContainer.appendChild(agentCard);
        });
    };

    roleButtons.forEach((button) => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const role = this.dataset.role;
            const activeButton = document.querySelector(".role-btn.active");
            if (activeButton) {
                activeButton.classList.remove("active");
            }
            if (this.classList.contains('role-btn')) {
                this.classList.add("active");
            }
            renderAgents(role);
            dropdownMenu.style.display = 'none'; 
        });
    });

    renderAgents("all");
});

function updateRole(element) {
    const role = element.getAttribute('data-role');
    const roleDropdownButton = document.getElementById('roleDropdownButton');
    roleDropdownButton.textContent = role.charAt(0).toUpperCase() + role.slice(1);
}

function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const server = document.getElementById('server').value;
    const description = document.getElementById('description').value;
    const consent = document.getElementById('consent').checked;

    let isValid = true;
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('serverError').textContent = '';
    document.getElementById('descriptionError').textContent = '';
    document.getElementById('consentError').textContent = '';

    if (username.length <= 5) {
        document.getElementById('usernameError').textContent = 'Username must be more than 5 characters.';
        isValid = false;
    }
    
    if (!email.includes('@gmail.com')) {
        document.getElementById('emailError').textContent = 'Email must contain @gmail.com.';
        isValid = false;
    }
    
    if (server === '') {
        document.getElementById('serverError').textContent = 'Please select a server.';
        isValid = false;
    }
    
    if (description.length <= 20) {
        document.getElementById('descriptionError').textContent = 'Description must be more than 20 characters.';
        isValid = false;
    }
    
    if (!consent) {
        document.getElementById('consentError').textContent = 'You must consent to receive follow-up emails.';
        isValid = false;
    }
    
    if (!isValid) {
        event.preventDefault();
    }
    
    else{
        alert('Form submitted successfully');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach((slider, index) => {
        const slides = slider.querySelector('.slides');
        const slideElements = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.navigation button:first-child');
        const nextBtn = slider.querySelector('.navigation button:last-child');
        
        let currentSlide = 0;
        const totalSlides = slideElements.length;

        function updateSlidePosition() {
            for (let i = 0; i < slideElements.length; i++) {
                slideElements[i].style.transform = `translateX(${100 * (i - currentSlide)}%)`;
            }
        }

        updateSlidePosition();

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlidePosition();
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlidePosition();
        });
    });
});
  