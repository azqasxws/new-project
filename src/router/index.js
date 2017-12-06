import Vue from 'vue';
import Vrouter from 'vue-router';
import Logincomponent from '../components/login/login.vue';
import homecomponent from '../components/home/home.vue';
import minecomponent from '../components/mine/mine.vue';


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


    ]
})


export default router;