<script setup>
import Header from '../components/AppHeader.vue'
import Guides from '../components/AppGuides.vue'
import Footer from '../components/AppFooter.vue'
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <Header />

    <h1>Build Tabler with Bootstrap Js and with Vue</h1>
    <div class="col-lg-8 px-0">
      <p class="fs-4">You've successfully loaded the Tabler + Bootstrap + Vue example! It's loaded up with <a
          href="https://getbootstrap.com/">Bootstrap 5</a> and uses Vue and Vite to compile and bundle our Sass and
        JavaScript. It also features a handful of custom Vue components.</p>
      <p>If this button appears blue and the link appears purple, you've done it!</p>
    </div>

    <button type="button" class="btn btn-primary me-3" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample">Toggle offcanvas</button>

    <a id="popoverButton" class="text-success" href="#" role="button" data-bs-toggle="popover" title="Custom popover"
      data-bs-content="This is a Bootstrap popover.">Example popover</a>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
          etc.
        </div>
        <div class="dropdown mt-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
            data-bs-toggle="dropdown">
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>

    <hr class="col-1 my-5 mx-0">

    <form action="">
      <h3>Form Example</h3>
      <div class="mb-3">
        <label class="form-label">Simple selectgroup</label>
        <div class="form-selectgroup">
          <label class="form-selectgroup-item">
            <input type="checkbox" name="name" value="HTML" class="form-selectgroup-input" checked="">
            <span class="form-selectgroup-label">HTML</span>
          </label>
          <label class="form-selectgroup-item">
            <input type="checkbox" name="name" value="CSS" class="form-selectgroup-input">
            <span class="form-selectgroup-label">CSS</span>
          </label>
          <label class="form-selectgroup-item">
            <input type="checkbox" name="name" value="PHP" class="form-selectgroup-input">
            <span class="form-selectgroup-label">PHP</span>
          </label>
          <label class="form-selectgroup-item">
            <input type="checkbox" name="name" value="JavaScript" class="form-selectgroup-input">
            <span class="form-selectgroup-label">JavaScript</span>
          </label>
        </div>
      </div>
    </form>

    <h3>Alert Example</h3>

    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <h3>Button Example</h3>

    <div>
      <p class="d-inline-flex gap-1">
        <button type="button" class="btn">Normal Button</button>
      </p>
    </div>
    <div>
      <p class="d-inline-flex gap-1">
        <button type="button" class="btn" data-bs-toggle="button">Toggle button</button>
        <button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
        <button type="button" class="btn" disabled data-bs-toggle="button">Disabled toggle button</button>
      </p>
    </div>
    <div>
      <p class="d-inline-flex gap-1">
        <button type="button" class="btn btn-primary" data-bs-toggle="button">Toggle button</button>
        <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Active toggle
          button</button>
        <button type="button" class="btn btn-primary" disabled data-bs-toggle="button">Disabled toggle button</button>
      </p>
    </div>

    <h3>Carousel Example</h3>

    <div>
      <div id="id_1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="w-100 bg-dark d-flex align-items-center justify-content-center" style="height: 250px">
              <h1 class="text-success">Slide 1</h1>
            </div>
          </div>
          <div class="carousel-item">
            <div class="w-100 bg-dark d-flex align-items-center justify-content-center" style="height: 250px">
              <h1 class="text-success">Slide 2</h1>
            </div>
          </div>
          <div class="carousel-item">
            <div class="w-100 bg-dark d-flex align-items-center justify-content-center" style="height: 250px">
              <h1 class="text-success">Slide 3</h1>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#id_1" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#id_1" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="mt-3 mb-3">
      <div id="id_2" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="w-100 bg-info d-flex align-items-center justify-content-center" style="height: 250px">
              <h1 class="text-primary">Slide 1</h1>
            </div>
          </div>
          <div class="carousel-item">
            <div class="w-100 bg-info d-flex align-items-center justify-content-center" style="height: 250px">
              <h1 class="text-primary">Slide 2</h1>
            </div>
          </div>
          <div class="carousel-item">
            <div class="w-100 bg-info d-flex align-items-center justify-content-center" style="height: 250px">
              <h1 class="text-primary">Slide 3</h1>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#id_2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#id_2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <h3>Collapse Example</h3>

    <div class="mb-3">

      <div>
        <p class="d-inline-flex gap-1">
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
            aria-controls="collapseExample">
            Link with href
          </a>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
            aria-expanded="false" aria-controls="collapseExample">
            Button with data-bs-target
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
            user activates the relevant trigger.
            <i data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip is here"
        ref="info"> &copy; </i> - Hover to see toolip
          </div>
        </div>
      </div>
    </div>


    <Guides />

    <Footer />
  </div></template>
