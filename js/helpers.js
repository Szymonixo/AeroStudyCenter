window.dragHelpers = {
    capture: function (element, pointerId) {
        element.setPointerCapture(pointerId);
    },
    release: function (element, pointerId) {
        element.releasePointerCapture(pointerId);
    }
};
window.windowSize = {
    get: function () {
        return [
            window.innerWidth,
            window.innerHeight
        ];
    }
};
window.appStorage = {
    has: (key) => localStorage.getItem(key) !== null,
    set: (key, value) => localStorage.setItem(key, value),
    get: (key) => localStorage.getItem(key),
    remove: (key) => localStorage.removeItem(key)
};

window.chathelpers = {
    scrollToBottom: function (containerId, endElementId) {
        const container = document.getElementById(containerId);
        const lastElement = document.getElementById(endElementId);
        
        if (container && lastElement) {
            // Using scrollIntoView on the dummy div with id="last"
            lastElement.scrollIntoView(false);
        }
    }
};