import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {
  return (
    <>
      <div className="container-fluid">
        {/* <div class="card" style="width: 100%;">
        <div class="card-header">
            <div class="row">
                <div class="col-md-4  ">
                    <div class="row">
                        <div class="col-md-2"><i class="fa-solid fs-3 fa-bars p-2"></i></div>
                        <div class="col-md-4 fs-4">Home</div>
                        <div class="col-md-6 fs-4">Contact</div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row">
                       <div class="col-md-9"></div> 
                        <div class=" pt-2 offset-md-9 col-md-3">
                            <div class="row">
                                <div class="col-md-3"><i class="fa-solid fa-magnifying-glass"></i></div>
                                <div class="col-md-3">
                                    <i  class=" fa-solid fa-message position-relative">
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                          3
                                        </span>
                                    </i>
                                </div>
                                <div class="col-md-3"> 
                                    <i  class=" fa-regular fa-bell position-relative">
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                      3
                                    </span>
                                </i>
                            </div>
                                <div class="col-md-3">
                                    <i class="fa-solid fa-maximize"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div> 
        </div>
    </div> */}
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <i className="fa-solid fs-3 fa-bars p-2" />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="nav-item">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item p-3">
                      <i className="fa-solid fa-magnifying-glass" />
                    </li>
                    <li className="p-3">
                      <i className=" fa fa-solid fa-message position-relative">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          3
                        </span>
                      </i>
                    </li>
                    <li className="p-3">
                      <i className=" fa-regular fa-bell position-relative">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          3
                        </span>
                      </i>
                    </li>
                    <li className="p-3">
                      <i className="fa-solid fa-maximize" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-3 fs-1">Dashboard</div>
          <div className="offset-md-7 col-md-2 fs-5 pt-2">Home/ Dashboard</div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="card bg-info ">
              <div className="card-body ">
                <div className="row">
                  <div className="col-md-8 text-light">
                    <h1 className="card-title">150</h1>
                    <p className="card-text">New Orders</p>
                  </div>
                  <div className="col-md-4 mt-4">
                    <i className="fa-solid fa-2x fa-bag-shopping opacity-50" />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h6 className="text-center text-light">
                  More info{' '}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-success ">
              <div className="card-body ">
                <div className="row">
                  <div className="col-md-8 text-light">
                    <h1 className="card-title">53%</h1>
                    <p className="card-text">Bounce Rate</p>
                  </div>
                  <div className="col-md-4 mt-4">
                    <i className="fa-solid fa-2x opacity-50 fa-chart-simple " />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h6 className="text-center text-light">
                  More info{' '}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-warning">
              <div className="card-body ">
                <div className="row">
                  <div className="col-md-8">
                    <h1 className="card-title">44</h1>
                    <p className="card-text">User Registrations</p>
                  </div>
                  <div className="col-md-4 mt-4">
                    <i className="fa-solid fa-user-plus fa-2x opacity-50" />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h6 className="text-center text-light">
                  More info{' '}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-danger">
              <div className="card-body ">
                <div className="row">
                  <div className="col-md-8 text-light">
                    <h1 className="card-title">65</h1>
                    <p className="card-text">Unique Visitors</p>
                  </div>
                  <div className="col-md-4 mt-4">
                    <i className="fa-solid fa-chart-pie opacity-50 fa-2x" />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <h6 className="text-center text-light">
                  More info{' '}
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-4">
          <div className="col-md-7">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-2 mt-2">
                    <i className="fa-solid  fs-4 fa-chart-pie" />
                    <span className="fs-4">Sales</span>
                  </div>
                  <div className=" offset-md-7 mt-2 col-md-3">
                    <button className="btn btn-primary">Area</button>
                    <span className="ms-3">Donut</span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <img src="assets\imgs/task4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card bg-primary">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 text-light">
                    <div className="row">
                      <div className="col-md-2">
                        <i className="text-light fa-solid fa-location-dot fa-2x" />
                      </div>
                      <div className=" ms-2 col-md-9">
                        <span className="fs-5">Visitors</span>
                      </div>
                    </div>
                  </div>
                  <div className=" offset-md-6 col-md-2 text-light">
                    <div className="row">
                      <div className="col-md-6">
                        <i className="fa-solid fa-calendar-days" />
                      </div>
                      <div className="col-md-6">
                        <i className="fa-solid fa-ellipsis" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <img
                      src="assets\imgs/World-Map-PNG-Photos.png"
                      className="card-image w-100"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <div className="row mt-2">
                      <div className="offset-md-4 col-md-8">
                        <img
                          src="assets\imgs\line-graph.png"
                          className="card-image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="offset-md-4 col-md-8">
                        <h5 className="text-light text-center">Visitors</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row mt-2">
                      <div className="offset-md-4 col-md-8">
                        <img
                          src="assets\imgs\line-graph.png"
                          className="card-image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="offset-md-4 col-md-8">
                        <h5 className="text-light text-center">Online</h5>
                      </div>
                    </div>
                  </div>{' '}
                  <div className="col-md-4">
                    <div className="row mt-2">
                      <div className="offset-md-4 col-md-8">
                        <img
                          src="assets\imgs\line-graph.png"
                          className="card-image w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="offset-md-4 col-md-8">
                        <h5 className="text-light text-center">Sales</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
