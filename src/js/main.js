import { createApp } from 'vue'
import App from './App.vue'

import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip } from '../../dist/core.js'


createApp(App).mount('#app')

// Popover
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
        new Popover(popover)
    })

// Tooltip
document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
        new Tooltip(tooltip)
    })
