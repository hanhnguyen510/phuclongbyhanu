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
const publicRoute = [
    { path: '/', component: Home },
    { path: '/aboutus', component: Aboutus },

    //CART
    { path: '/cart', component: Cart },
    { path: '/cart/payment-infor', component: PaymentInfor },
    { path: '/cart/payment', component: Payment },
    { path: '/cart/success', component: SuccessPayment },

    // drinks
    { path: '/drinks/dam-vi-hat-ca-phe', component: DamHatCaPhe },
    { path: '/drinks/huong-vi-manh-me', component: HuongViManhMe },
    { path: '/drinks/huong-vi-tinh-te', component: HuongViTinhTe },
    { path: '/drinks/ca-phe-mui', component: CaPheMui },

    //tea
    { path: '/tea/dam_vi_tra_Truyen_thong', component: DamViTraTruyenThong },
    { path: '/tea/lua_chon_la_tra', component: LuaChonLaTra },
    //products
    { path: '/catogy/products', component: Product },
    { path: '/catogy/snacks', component: Snacks },
    { path: '/catogy/bakery', component: Bakerys },
    { path: '/promotions', component: Promotions },
];
export { publicRoute };
