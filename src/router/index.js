import Vue from 'vue';
import Vrouter from 'vue-router';
import Logincomponent from '../components/login/login.vue';
import homecomponent from '../components/home/home.vue';
import minecomponent from '../components/mine/mine.vue';
<<<<<<< HEAD
import barcodecomponent from '../components/barcode/barcode.vue';
import cartcomponent from '../components/cart/cart.vue';
=======


>>>>>>> 189c11f860cca52a91b44b0417ef5e3a934d2976
Vue.use(Vrouter);

var router  = new Vrouter({
    routes : [
        {
            path:"/login",
            component: Logincomponent
<<<<<<< HEAD

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
=======

        },   
        {
            path:'/home',
            component: homecomponent
        },
        {
            path:'/mine',
            component: minecomponent
        },

>>>>>>> 189c11f860cca52a91b44b0417ef5e3a934d2976

    ]
})


export default router;