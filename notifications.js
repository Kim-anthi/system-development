// Enhanced notification system

class NotificationSystem {

    constructor() {
        this.container = this.createContainer();
        this.notifications = [];
        this.counter = 0;
    }

    createContainer() {
        let container = document.getElementById('dispatchRangers');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            document.body.appendChild(container);
        }
        return container;
    }

    create(message, type = 'info') {
        const id = `notification-${this.counter++}`;
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.id = id;

        // Create notification content
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">×</button>
            </div>
            <div class="notification-progress"></div>
        `;

        // Add to DOM
        this.container.appendChild(notification);
        this.notifications.push(id);

        // Add event listener for close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => this.remove(id));

        // Auto remove after delay
        setTimeout(() => this.remove(id), 5000); // Customize this delay if needed

        // Start progress bar animation
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });

        return id;
    }

    remove(id) {
        const notification = document.getElementById(id);
        if (notification) {
            notification.classList.remove('show');
            notification.classList.add('hide');

            setTimeout(() => {
                notification.remove();
                this.notifications = this.notifications.filter(nId => nId !== id);
            }, 300); // Wait for hide animation before removing from DOM
        }
    }

    // Specific notification types
    success(message) {
        return this.create(message, 'success');
    }

    error(message) {
        return this.create(message, 'error');
    }

    warning(message) {
        return this.create(message, 'warning');
    }

    info(message) {
        return this.create(message, 'info');
    }
}

// Initialize the notification system
const notifications = new NotificationSystem();

// Example function for ranger dispatch notification
function notifyRangerDispatch(location) {
    notifications.success(`Ranger successfully dispatched to ${location}`);
}

// Example function for threat alert
function notifyThreat(threat, severity) {
    notifications.warning(`${severity} threat detected: ${threat}`);
}

// Export for global use
window.notifications = notifications;
