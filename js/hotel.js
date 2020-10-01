import BASE_URL from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
import renderDynamicNavigation, {
  pathname,
} from "./components/common/renderNavigation.js";

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

renderDynamicNavigation(pathname);
