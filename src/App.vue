<template>
  <div id='app'>
    <div class="page-group">
        <div class="page page-current">
        <!-- 你的html代码 -->
                <header class="bar bar-nav">
                  <h1 class="title">{{toolbar}}</h1>
                </header>
                <nav class="bar bar-tab" v-if="toolbar!='登录'">
                  <a class="tab-item active" @click="home">
                    <span class="icon icon-home"></span>
                    <span class="tab-label">首页</span>
                  </a>
                  <a class="tab-item" @click="login">
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
                    <router-view></router-view>
                </div>
        </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toolbar:null
    }
  },
  methods:{
        home : function(){
                this.$router.push({path: '/home'})
            },
        mine : function(){
              this.$router.push({path:'/mine'}) 
        },
        cart : function(){
              this.$router.push({path:'/cart'}) 
        },
        barcode:function(){
              this.$router.push({path:'/barcode'}) 
        },
        login:function(){
              this.$router.push({path:'/login'}) 
        },
        register: function(){
              this.$router.push({path:'/register'})
        },
        initToolbar:function(_config){
          this.toolbar = _config;
        }
  },
  befireCreate:function(){
    console.log(666);
  }
}
</script>

<style>
@import url("//g.alicdn.com/msui/sm/0.6.2/css/sm.min.css");
.bar{
  background: #fff;
}
</style>
