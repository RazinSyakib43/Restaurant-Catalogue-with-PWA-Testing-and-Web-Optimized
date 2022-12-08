import Restaurant from '../views/pages/restaurants';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Restaurant, // default page
  '/restaurants': Restaurant,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
