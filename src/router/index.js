import Vue from 'vue';
import Vrouter from 'vue-router';
import Logincomponent from '../components/login/login.vue';
import homecomponent from '../components/home/home.vue';
import minecomponent from '../components/mine/mine.vue';

import invoicecomponent from '../components/mine/conponents/invoice/invoice.vue';
import sharecomponent from '../components/mine/conponents/share/share.vue';
import feedbackcomponent from '../components/mine/conponents/feedback/feedback.vue';
import discountcomponent from '../components/mine/conponents/discount/discount.vue';
import aboutUscomponent from '../components/mine/conponents/aboutUs/aboutUs.vue';
import settingcomponent from '../components/mine/conponents/setting/setting.vue';
import issuecomponent from '../components/mine/conponents/setting/conponents/issue/issue.vue';
import changePwdcomponent from '../components/mine/conponents/setting/conponents/changePwd/changePwd.vue';

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
        },
        {
            path:'/cart',
            component: cartcomponent
        },
        {   path:'/register',
            component: registercomponent,
            name:'register'
        },
        {   path:'/feedback',
            component: feedbackcomponent
        },
        {   path:'/discount',
            component: discountcomponent
        },
        {   path:'/aboutUs',
            component: aboutUscomponent
        },
        {   path:'/setting',
            component: settingcomponent
        },
        {   path:'/issue',
            component: issuecomponent
        },
        {   path:'/changePwd',
            component: changePwdcomponent
        }
    ]
})

export default router;