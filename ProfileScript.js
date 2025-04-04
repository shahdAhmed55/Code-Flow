// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Course tabs functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the tab type
            const tabType = this.getAttribute('data-tab');
            
            // Filter courses based on tab
            filterCourses(tabType);
        });
    });

    // Edit functionality
    const editIcons = document.querySelectorAll('.edit-icon');
    editIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const editType = this.getAttribute('data-edit-type');
            openEditModal(editType);
        });
    });

    // Avatar edit functionality
    const avatarEdit = document.querySelector('#avatar-upload-btn');
    if (avatarEdit) {
        avatarEdit.addEventListener('click', function() {
            openAvatarUpload();
        });
    }

    // Modal close functionality
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            document.getElementById('edit-modal').style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('edit-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Function to open edit modal
function openEditModal(editType) {
    const modal = document.getElementById('edit-modal');
    const modalTitle = document.getElementById('modal-title');
    const formContainer = document.getElementById('modal-form-container');
    
    // Set modal title based on edit type
    switch(editType) {
        case 'name':
            modalTitle.textContent = 'Edit Name';
            formContainer.innerHTML = `
                <form id="edit-form">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" value="My Name" required>
                    </div>
                    <button type="submit" class="submit-btn">Save Changes</button>
                </form>
            `;
            break;
        case 'bio':
            modalTitle.textContent = 'Edit Bio';
            formContainer.innerHTML = `
                <form id="edit-form">
                    <div class="form-group">
                        <label for="bio">Bio:</label>
                        <textarea id="bio" name="bio" rows="5" required>${document.getElementById('bio-content').textContent.trim()}</textarea>
                    </div>
                    <button type="submit" class="submit-btn">Save Changes</button>
                </form>
            `;
            break;
        case 'interests':
            modalTitle.textContent = 'Edit Interests';
            
            // Get current interests
            const currentInterests = [];
            document.querySelectorAll('#interests-container .tag').forEach(tag => {
                currentInterests.push(tag.textContent.trim());
            });
            
            formContainer.innerHTML = `
                <form id="edit-form">
                    <div class="form-group">
                        <label for="interests">Interests (comma separated):</label>
                        <input type="text" id="interests" name="interests" value="${currentInterests.join(', ')}" required>
                    </div>
                    <button type="submit" class="submit-btn">Save Changes</button>
                </form>
            `;
            break;
    }
    
    // Add form submission handler
    const form = document.getElementById('edit-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        saveChanges(editType, form);
    });
    
    // Show modal
    modal.style.display = 'block';
}

// Function to save changes from modal
function saveChanges(editType, form) {
    switch(editType) {
        case 'name':
            const newName = form.elements['name'].value;
            // Fix the name update to properly handle the HTML structure
            const nameElement = document.querySelector('.profile-name');
            // Update only the text node, preserving the edit icon
            nameElement.childNodes[0].textContent = newName;
            break;
        case 'bio':
            const newBio = form.elements['bio'].value;
            document.getElementById('bio-content').textContent = newBio;
            break;
        case 'interests':
            const interestsContainer = document.getElementById('interests-container');
            const newInterests = form.elements['interests'].value.split(',');
            
            // Clear current interests
            interestsContainer.innerHTML = '';
            
            // Add new interests
            newInterests.forEach(interest => {
                const tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = interest.trim();
                interestsContainer.appendChild(tag);
            });
            break;
    }
    
    // Close modal
    document.getElementById('edit-modal').style.display = 'none';
}

// Function to open avatar upload
function openAvatarUpload() {
    document.getElementById('avatar-input').click();
}

// Function to filter courses by tab
function filterCourses(tabType) {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const progress = parseInt(card.getAttribute('data-progress'));
        
        if (tabType === 'all') {
            card.style.display = 'block';
        } else if (tabType === 'in-progress') {
            if (progress > 0 && progress < 100) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        } else if (tabType === 'completed') {
            if (progress === 100) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}
    // Page initialization
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Profile page loaded successfully');
    });
    
    // Avatar upload functionality
    document.addEventListener('DOMContentLoaded', function() {
        const avatarUploadBtn = document.getElementById('avatar-upload-btn');
        const avatarInput = document.getElementById('avatar-input');
        const profileImage = document.getElementById('profile-image');
        
        if (avatarUploadBtn && avatarInput) {
            avatarUploadBtn.addEventListener('click', function() {
                avatarInput.click();
            });
            
            avatarInput.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        profileImage.src = e.target.result;
                    };
                    
                    reader.readAsDataURL(this.files[0]);
                }
            });
        }
        
        // Position the camera icon in the center
        const positionCameraIcon = function() {
            const avatarContainer = document.querySelector('.profile-avatar');
            const cameraIcon = document.getElementById('avatar-upload-btn');
            
            if (avatarContainer && cameraIcon) {
                // Center the camera icon
                cameraIcon.style.position = 'absolute';
                cameraIcon.style.top = '50%';
                cameraIcon.style.left = '50%';
                cameraIcon.style.transform = 'translate(-50%, -50%)';
                cameraIcon.style.backgroundColor = 'rgba(150, 123, 182, 0.8)';
                cameraIcon.style.padding = '10px';
                cameraIcon.style.borderRadius = '50%';
                cameraIcon.style.display = 'flex';
                cameraIcon.style.alignItems = 'center';
                cameraIcon.style.justifyContent = 'center';
                
                // Make the icon only visible on hover
                avatarContainer.addEventListener('mouseenter', function() {
                    cameraIcon.style.opacity = '1';
                });
                
                avatarContainer.addEventListener('mouseleave', function() {
                    cameraIcon.style.opacity = '0';
                });
                
                // Set initial state
                cameraIcon.style.opacity = '0';
                cameraIcon.style.transition = 'opacity 0.3s ease';
            }
        };
        
        // Call the function to position the camera icon
        positionCameraIcon();
    });