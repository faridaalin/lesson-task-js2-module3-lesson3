import BASE_URL from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getToStorage, userKey } from "./components/storage.js";

const query = document.location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
const hotelUrl = `${BASE_URL}/hotels/${id}`;

(async function getHotels() {
  try {
    const resp = await fetch(hotelUrl);
    const hotel = await resp.json();
    renderHotel(hotel);
  } catch (error) {
    displayMessage("alert-danger", error, ".wrapper");
  }
})();

const renderHotel = (hotel) => {
  const container = document.querySelector(".container");
  const bgImage = document.querySelector(".hotel-bg");

  bgImage.style.backgroundImage = `url(${BASE_URL}${hotel.images[0].url})`;

  container.innerHTML = ` <div class="col-sm">
                              <h1>${hotel.name}</h1>
                              <p>${hotel.description}</p>
                              </div>`;
};

const user = getToStorage(userKey);
console.log(user.username);
console.log(location.pathname);
const activeClass = location.pathname === "/hotel.html" ? "active" : "";
const dynamicMenu = document.querySelector(".dynamicMenu");
console.log(dynamicMenu);
dynamicMenu.innerHTML = `<ul class="navbar-nav w-100">
                                <li class="nav-item">
                                    <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item ${activeClass}">                                   
                                    <span class="nav-link" style="color: #E2CBAF">Hi ${user.username}!</span>
                                </li>
                                <li class="nav-item  ml-auto">
                                    <a class="nav-link" href="#">Log out</a>
                                </li>

                            </ul>`;
