import React from 'react';

const Navigator = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light align-middle">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <div className="vl"></div>
          <li class="nav-item">
            <a class="nav-link" href="#/about">About</a>
          </li>
          <div className="vl"></div>
          <li class="nav-item">
            <a class="nav-link" href="#/account">Account</a>
          </li>
          <div className="vl"></div>
          <li class="nav-item">
            <a class="nav-link" href="#/help">Help</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigator;

