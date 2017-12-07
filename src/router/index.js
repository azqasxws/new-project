import Vue from 'vue';
import Vrouter from 'vue-router';
import Logincomponent from '../components/login/login.vue';
import homecomponent from '../components/home/home.vue';
import minecomponent from '../components/mine/mine.vue';
import barcodecomponent from '../components/barcode/barcode.vue';
import cartcomponent from '../components/cart/cart.vue';
Vue.use(Vrouter);

var router  = new Vrouter({
    routes : [
        {
            path:"/login",
            component: Logincomponent

        },   
        {
            path:'/home',
            component: homecomponent
        },
        {
            path:'/mine',
            component: minecomponent
        },
        {
            path:'/barcode',
            component: barcodecomponent
        },
        {
            path:'/cart',
            component: cartcomponent
        },

    ]
})


export default router;