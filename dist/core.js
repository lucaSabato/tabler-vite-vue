// Import our custom core Tabler CSS
import '../src/scss/core.scss'

// Import only the Bootstrap components we need
import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap';

// Initialize Bootstrap components
const initializeComponent = (selector, Component) => {
    document.querySelectorAll(selector).forEach(element => {
        try {
            new Component(element)
        } catch (error) {
            console.error(`Failed to initialize ${Component.name}:`, error)
        }
    })
}

// Map of components and their selectors
const components = {
    '[data-bs-toggle="alert"]': Alert,
    '[data-bs-toggle="button"]': Button,
    '[data-bs-toggle="carousel"]': Carousel,
    '[data-bs-toggle="collapse"]': Collapse,
    '[data-bs-toggle="dropdown"]': Dropdown,
    '[data-bs-toggle="modal"]': Modal,
    '[data-bs-toggle="offcanvas"]': Offcanvas,
    '[data-bs-toggle="popover"]': Popover,
    '[data-bs-toggle="scrollspy"]': ScrollSpy,
    '[data-bs-toggle="tab"]': Tab,
    '[data-bs-toggle="toast"]': Toast,
    '[data-bs-toggle="tooltip"]': Tooltip
}

// Initialize all components
Object.entries(components).forEach(([selector, Component]) => {
    initializeComponent(selector, Component)
})

// Export components
export {
    Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip
}

// Add default export with all components
export default {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
}
