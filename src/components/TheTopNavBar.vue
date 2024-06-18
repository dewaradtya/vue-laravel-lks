<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link to="/utama" class="navbar-brand">SUKASUKA</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/utama" class="nav-link">Utama</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/kontak" class="nav-link">Kontak</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/crud" class="nav-link">CRUD</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style>
    /* Additional styles for navbar */
  .navbar {
    border-radius: 5px;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .navbar-nav .nav-link {
    color: #fff;
    font-weight: bold;
    margin-right: 15px;
    transition: color 0.3s;
  }

  .navbar-nav .nav-link:hover {
    color: #ffc107; /* Change color on hover, you can customize this */
  }

  .navbar-toggler-icon {
    background-color: #fff; /* Customize the color of the navbar toggler icon */
  }
  </style>
  