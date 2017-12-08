<template>
  <div id='app'>
<<<<<<< HEAD

=======
>>>>>>> 189c11f860cca52a91b44b0417ef5e3a934d2976
    <div class="page-group">
        <div class="page page-current">
        <!-- 你的html代码 -->
                <header class="bar bar-nav">
<<<<<<< HEAD
                  <h1 class="title">{{toolbar}}</h1>
                </header>
                <nav class="bar bar-tab" v-if ="toolbar!='登录'">
=======
                  <h1 class="title">首页</h1>
                </header>
                <nav class="bar bar-tab">
>>>>>>> 189c11f860cca52a91b44b0417ef5e3a934d2976
                  <a class="tab-item active" @click="home">
                    <span class="icon icon-home"></span>
                    <span class="tab-label">首页</span>
                  </a>
                  <a class="tab-item" @click="barcode">
                    <span class="icon icon-star"></span>
                    <span class="tab-label">扫码购</span>
                  </a>
                  <a class="tab-item" @click="cart">
                    <span class="icon icon-cart"></span>
                    <span class="tab-label">购物车</span>
                  </a>
                  <a class="tab-item" @click="mine">
                    <span class="icon icon-me"></span>
                    <span class="tab-label">我的</span>
                  </a>
                </nav>
                <div class="content">
                <!-- 这里是页面内容区 -->
<<<<<<< HEAD

                  <router-view></router-view>
                </div>
        </div>
    </div>
=======
                    <router-view></router-view>
                </div>
        </div>
    </div>
  
>>>>>>> 189c11f860cca52a91b44b0417ef5e3a934d2976
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toolbar: null
    }
  },
  methods:{
        home : function(){
<<<<<<< HEAD
              this.$router.push({path: '/home'})
=======
                this.$router.push({path: '/home'})
>>>>>>> 189c11f860cca52a91b44b0417ef5e3a934d2976
            },
        mine : function(){
              this.$router.push({path:'/mine'}) 
        },
        cart : function(){
              this.$router.push({path:'/cart'}) 
        },
        barcode:function(){
<<<<<<< HEAD
              this.$router.push({path:'/login'}) 
        },
        initToolbar:function(_config){
              this.toolbar = _config;
=======
              this.$router.push({path:'/barcode'}) 
>>>>>>> 189c11f860cca52a91b44b0417ef5e3a934d2976
        }
  }
}

</script>

<style>
@import url("//g.alicdn.com/msui/sm/0.6.2/css/sm.min.css");
<<<<<<< HEAD
  
=======
.bar{
  background: #fff;
}
>>>>>>> 189c11f860cca52a91b44b0417ef5e3a934d2976
</style>
