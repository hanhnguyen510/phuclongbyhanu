import Home from '../pages/Home';
import Aboutus from '../pages/Aboutus';

import Cart from '../pages/Cart';
import { PaymentInfor } from '../pages/Checkout';
import { Payment } from '../pages/Checkout';
import { SuccessPayment } from '../pages/Checkout';
// drinks
import DamHatCaPhe from '../pages/Drinks/DamHatCaPhe';
import HuongViManhMe from '../pages/Drinks/HuongViManhMe';
import HuongViTinhTe from '../pages/Drinks/HuongViTinhTe';
import CaPheMui from '../pages/Drinks/CaPheMui';

import Promotions from '../pages/Promotions';

//products
import { Product } from '../pages/Products';
import { Snacks } from '../pages/Products';
import { Bakerys } from '../pages/Products';

//tea
import DamViTraTruyenThong from '../pages/Tea/DamViTraTruyenThong';
import LuaChonLaTra from '../pages/Tea/LuaChonLaTra';

import Signin from '../pages/Auth/Signin';
import Signup from '../pages/Auth/Signup';

import config from '~/config';

//Protected Route
import ProtectedRoute from '../components/ProtectedRoute';
const publicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.aboutus, component: Aboutus },

    //CART
    { path: config.routes.cart, component: Cart },

    // drinks
    { path: config.routes.drinksDamViCaPhe, component: DamHatCaPhe },
    { path: config.routes.drinksHuongViManhMe, component: HuongViManhMe },
    { path: config.routes.drinksHuongViTinhTe, component: HuongViTinhTe },
    { path: config.routes.drinksCaPheMui, component: CaPheMui },

    //tea
    { path: config.routes.teaDamViTra, component: DamViTraTruyenThong },
    { path: config.routes.teaLLuaChon, component: LuaChonLaTra },
    //products
    { path: config.routes.catogyProducts, component: Product },
    { path: config.routes.catodySnacks, component: Snacks },
    { path: config.routes.catogyBakery, component: Bakerys },
    { path: config.routes.promotions, component: Promotions },

    // login/logout
    { path: config.routes.sigin, component: Signin, layout: null },
    { path: config.routes.sigup, component: Signup, layout: null },
];

const privateRoute = [
    { path: config.routes.cartPaymentInfor, component: PaymentInfor, protected: ProtectedRoute },
    { path: config.routes.cartPayment, component: Payment, protected: ProtectedRoute },
    { path: config.routes.cartSuccessPayment, component: SuccessPayment, protected: ProtectedRoute },
];
export { publicRoute, privateRoute };
