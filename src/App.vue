<template>
  <div id='app'>
  <div class="page-group">
        <div class="page page-current">
        <!-- 你的html代码 -->
                <header class="bar bar-nav">
                <a class="button button-link button-nav pull-left" href="/demos/card" data-transition='slide-out'>
                <span class="icon icon-left"></span>
                返回
                </a>
                <h1 class="title">我的生活</h1>
                </header>
                <nav class="bar bar-tab">
                <a class="tab-item active" href="#">
                <span class="icon icon-home"></span>
                <span class="tab-label">首页</span>
                </a>
                <a class="tab-item" href="#">
                <span class="icon icon-me"></span>
                <span class="tab-label">我</span>
                </a>
                <a class="tab-item" href="#">
                <span class="icon icon-star"></span>
                <span class="tab-label">收藏</span>
                </a>
                <a class="tab-item" href="#">
                <span class="icon icon-settings"></span>
                <span class="tab-label">设置</span>
                </a>
                </nav>
                <div class="content">
                <!-- 这里是页面内容区 -->

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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import url("//g.alicdn.com/msui/sm/0.6.2/css/sm.min.css");
 #app{
  height: 100%;
 }
</style>
