import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
      <h2 class="restaurant__name">${restaurant.name}</h2>
      <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <div class="restaurant__info">
      <h3>Information</h3>
          <h4>Address</h4>
          <p>${restaurant.address} , Kota ${restaurant.city}</p>
          <h4>Rating</h4>
          <p>${restaurant.rating}</p>
          <h4>Categories</h4>
          <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
          <h4>Foods</h4>
          <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
          <h4>Drinks</h4>
          <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
      </div>
      <h3 class="restaurant__name">Reviews</h3>
      <div>
      ${restaurant.customerReviews
    .map(
      (review) => `
          <section class="all-review">
            <section class="list-review box">
              <section class="nama-paket">
                  <h3>${review.name}</h3>
                  <p>${review.review}</p>
              </section>
            <section class="tanggal">
                <h1>${review.date}</h1>
            </section>
          </section>
          `,
    )}
      </div>

      <div class="restaurant__description">
      <h3>Description</h3>
          <p>${restaurant.description}</p>
      </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating} | ${restaurant.city}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
