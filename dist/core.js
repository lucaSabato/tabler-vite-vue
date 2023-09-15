// Import our custom core Tabler CSS
import '../src/scss/core.scss'

// Import only the Bootstrap components we need
import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from 'bootstrap';

// Alert
document.querySelectorAll('.alert')
    .forEach(alert => new Alert(alert))

// Button
document.querySelectorAll('[data-bs-toggle="button"]')
    .forEach(button => {
        new Button(button)
    })

// Carousel
document.querySelectorAll('.carousel')
    .forEach(carousel => {
        new Carousel(carousel)
    })

// Collapse
document.querySelectorAll('.collapse')
    .forEach(collapse => {
        new Collapse(collapse)
    })

// Popover
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
        new Popover(popover)
    })
