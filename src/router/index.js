import Vue from 'vue';
import Vrouter from 'vue-router';
import Logincomponent from '../components/login/login.vue';
import homecomponent from '../components/home/home.vue';
import minecomponent from '../components/mine/mine.vue';
import cartcomponent from '../components/cart/cart.vue';
import barcodecomponent from '../components/barcode/barcode.vue';
import registercomponent from '../components/register/register.vue';

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
            path:'/cart',
            component: cartcomponent
        },
        {
            path:'/barcode',
            component: cartcomponent
        },
        {   path:'/register',
            component: registercomponent,
            name:'register'
        }

    ]
})


export default router;