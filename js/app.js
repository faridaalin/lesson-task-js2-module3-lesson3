import BASE_URL from "./components/api.js";
import displayMessage from "./components/common/displayMessage.js";
const hotels_Url = `${BASE_URL}/hotels`;

(async function getdata() {
  try {
    const resp = await fetch(hotels_Url);
    const data = await resp.json();
    renderHotels(data);
  } catch (error) {
    displayMessage("alert-danger", error, ".card-wrapper");
  }
})();

const renderHotels = (hotels) => {
  const container = document.querySelector(".card-container");

  hotels.forEach((hotel) => {
    container.innerHTML += `<div class="col-sm">
                                <div class="card border-0 rounded mt-4" style="width: 18rem;">
                                    <a href="hotel.html?id=${hotel.id}">
                                     <div class="bg-img embed-responsive embed-responsive-4by3 rounded-top"
                                            style="background-image: url(${BASE_URL}${hotel.images[0].url})">
                                        </div>
                                 </a>

                                    <div class="card-body rounded-bottom">
                                        <p class="category">${hotel.categories[0].name}</p>
                                        <a class="card-title"  href="hotel.html?id=${hotel.id}">${hotel.name}</a>
                                       

                                 </div>
                             </div>
                            </div>`;
  });
};
