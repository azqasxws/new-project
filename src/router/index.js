import Vue from 'vue';
import Vrouter from 'vue-router';
import Logincomponent from '../components/login/login.vue';
import homecomponent from '../components/home/home.vue';
import minecomponent from '../components/mine/mine.vue';
import barcodecomponent from '../components/Barcode/barcode.vue';
import invoicecomponent from '../components/mine/conponents/invoice/invoice.vue';
import sharecomponent from '../components/mine/conponents/share/share.vue';

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
            path:'/invoice',
            component: invoicecomponent
        },
        {
            path:'/share',
            component: sharecomponent
        }

    ]
})


export default router;