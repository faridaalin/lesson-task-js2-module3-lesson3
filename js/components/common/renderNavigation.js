import { getToStorage, userKey } from "../storage.js";

export const { pathname } = document.location;

const renderDynamicNavigation = (pathName) => {
  const user = getToStorage(userKey);
  const activeClass = location.pathname === pathName ? "active" : "";
  const loggedIn =
    user.length === 0
      ? `<li class="nav-item ${activeClass}">
    <a class="nav-link" href="./login.html">Login</a>
    </li>`
      : `<li class="nav-item ${activeClass}">
    <span class="nav-link" style="color: #E2CBAF">Hi ${user.username}!</span>
    </li>
    <li class="nav-item ${activeClass}">
    <a class="nav-link" href="./add.html">Add hotel</a>
    </li>
    `;

  const dynamicMenu = document.querySelector(".dynamicMenu");
  dynamicMenu.innerHTML = `<ul class="navbar-nav w-100">
                                    <li class="nav-item ${activeClass}">
                                        <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    ${loggedIn}
                                    <li class="nav-item ${activeClass} ml-auto">
                                        <a class="nav-link" href="#">Log out</a>
                                    </li>
  
                                </ul>`;
};

export default renderDynamicNavigation;
