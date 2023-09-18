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
            <i data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip is here" ref="info"> &copy; </i> - Hover to
            see toolip
          </div>
        </div>
      </div>
    </div>

    <h3>Tooltip Example</h3>

    <div class="mb-3">
      <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
        Tooltip on top
      </button>
      <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
        Tooltip on right
      </button>
      <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
        Tooltip on bottom
      </button>
      <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
        Tooltip on left
      </button>
    </div>

    <div class="mb-3">
      <button type="button" class="btn" data-bs-toggle="tooltip" data-bs-html="true"
        title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
        Tooltip with HTML
      </button>
    </div>

    <h3>Modals Example</h3>

    <div class="mb-3">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch modal with form
      </button>

      <div class="modal" id="exampleModal" tabindex="-1">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">New report</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" name="example-text-input" placeholder="Your report name" />
              </div>
              <label class="form-label">Report type</label>
              <div class="form-selectgroup-boxes row mb-3">
                <div class="col-md-6">
                  <label class="form-selectgroup-item">
                    <input type="radio" name="report-type" value="1" class="form-selectgroup-input" checked />
                    <span class="form-selectgroup-label d-flex align-items-center p-3">
                      <span class="me-3">
                        <span class="form-selectgroup-check"></span>
                      </span>
                      <span class="form-selectgroup-label-content">
                        <span class="form-selectgroup-title strong mb-1">Simple</span>
                        <span class="d-block text-secondary">Provide only basic data needed for the report</span>
                      </span>
                    </span>
                  </label>
                </div>
                <div class="col-md-6">
                  <label class="form-selectgroup-item">
                    <input type="radio" name="report-type" value="1" class="form-selectgroup-input" />
                    <span class="form-selectgroup-label d-flex align-items-center p-3">
                      <span class="me-3">
                        <span class="form-selectgroup-check"></span>
                      </span>
                      <span class="form-selectgroup-label-content">
                        <span class="form-selectgroup-title strong mb-1">Advanced</span>
                        <span class="d-block text-secondary">Insert charts and additional advanced analyses to be inserted
                          in the report</span>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-8">
                  <div class="mb-3">
                    <label class="form-label">Report url</label>
                    <div class="input-group input-group-flat">
                      <span class="input-group-text">
                        https://tabler.io/reports/
                      </span>
                      <input type="text" class="form-control ps-0" value="report-01" autocomplete="off" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">Visibility</label>
                    <select class="form-select">
                      <option value="1" selected>Private</option>
                      <option value="2">Public</option>
                      <option value="3">Hidden</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">Client name</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">Reporting period</label>
                    <input type="date" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div>
                    <label class="form-label">Additional information</label>
                    <textarea class="form-control" rows="3"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="#" class="btn btn-link link-secondary" data-bs-dismiss="modal">
                Cancel
              </a>
              <a href="#" class="btn btn-primary ms-auto" data-bs-dismiss="modal">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24"
                  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 5l0 14"></path>
                  <path d="M5 12l14 0"></path>
                </svg>
                Create new report
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="mb-3">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Launch demo modal
      </button>

      <div class="modal" id="exampleModal2" tabindex="-1">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-status bg-success"></div>
            <div class="modal-body text-center py-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-green icon-lg" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
              <h3>Payment succedeed</h3>
              <div class="text-secondary">Your payment of $290 has been successfully submitted. Your invoice has been sent
                to support@tabler.io.</div>
            </div>
            <div class="modal-footer">
              <div class="w-100">
                <div class="row">
                  <div class="col">
                    <a href="#" class="btn w-100" data-bs-dismiss="modal">
                      Go to dashboard
                    </a>
                  </div>
                  <div class="col">
                    <a href="#" class="btn btn-success w-100" data-bs-dismiss="modal">
                      View invoice
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <h3>Tabs Example</h3>

    <div class="mb-3">
      <div class="card">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs" data-bs-toggle="tabs">
            <li class="nav-item">
              <a href="#tabs-home-ex1" class="nav-link active" data-bs-toggle="tab">Home</a>
            </li>
            <li class="nav-item">
              <a href="#tabs-profile-ex1" class="nav-link" data-bs-toggle="tab">Profile</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <div class="tab-content">
            <div class="tab-pane active show" id="tabs-home-ex1">
              <h4>Home tab</h4>
              <div>Cursus turpis vestibulum, dui in pharetra vulputate id sed non turpis ultricies fringilla at sed
                facilisis lacus pellentesque purus nibh</div>
            </div>
            <div class="tab-pane" id="tabs-profile-ex1">
              <h4>Profile tab</h4>
              <div>Fringilla egestas nunc quis tellus diam rhoncus ultricies tristique enim at diam, sem nunc amet,
                pellentesque id egestas velit sed</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <h3>Taost Example</h3>

    <div class="mb-3">
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false"
        data-bs-toggle="toast">
        <div class="toast-header">
          <strong class="me-auto">Mallory Hulme</strong>
          <small>11 mins ago</small>
          <button type="button" class="ms-2 btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>

    </div>

    <h3>Colours Picker</h3>

    <div class="mb-3">
      <label class="form-colorinput">
        <input name="color" type="radio" value="lime" class="form-colorinput-input" />
        <span class="form-colorinput-color bg-lime"></span>
      </label>

    </div>


    <Guides />

    <Footer />
  </div>
</template>
