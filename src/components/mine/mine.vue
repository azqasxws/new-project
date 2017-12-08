<template>
    <div class="content">
      <div style="background:#fff">
        <span>用户</span><br />
        <i>12345678911</i>
      </div>

      <div class="list-block" style="margin-top:10px;">
        <div class="buttons-tab">
              <a class="button">全部订单</a>
              <a class="button">待支付</a>
              <a class="button">退货订单</a>
        </div>

        <ul>
          <li class="item-content" @click="invoice">
            <div class="item-inner">
              <div class="item-title"><span class="icon icon-menu"></span> 电子发票</div>
              <span class="icon icon-right"></span>
            </div>
          </li>
          <li class="item-content" @click="share">
            <div class="item-inner">
              <div class="item-title"><span class="icon icon-share"></span> 分享给好友</div>
              <span class="icon icon-right"></span>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title"> <span class="icon icon-edit"></span> 用户反馈</div>
              <span class="icon icon-right"></span>
            </div>
          </li><li class="item-content">
            <div class="item-inner">
              <div class="item-title"><span class="icon icon-gift"></span> 优惠券</div>
              <span class="icon icon-right"></span>
            </div>
          </li><li class="item-content">
            <div class="item-inner">
              <div class="item-title"><span class="icon icon-emoji"></span> 关于我们</div>
              <span class="icon icon-right"></span>
            </div>
          </li><li class="item-content">
            <div class="item-inner">
              <div class="item-title"><span class="icon icon-settings"></span> 设置</div>
              <span class="icon icon-right"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
</template>
<script type="text/javascript">

    export default{
        data(){
            return{

            }
        },
        methods:{
            invoice : function(){
              this.$router.push({path: '/invoice'})
            },
            share : function(){
              this.$router.push({path: '/share'})
            }

        }
    }

</script>