<template>
    <div >
      <div class="list-block " id='order'>
        <ul>
          <li>
            <a href="#" class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                <div class="item-title_order">
                    <a href="#" class="button disabled" v-for= "(value,index) in dataset">
                      <img :src="value.img" alt="" />
                    </a>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="item item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                  <div class="item-title">电子发票</div>
                  <div class="item-after">支付完可以开据发票</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="item-link item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                  <div class="item-title">优惠券</div>
                  <div class="item-after">无可用</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="item item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                  <div class="item-title">总额</div>
                  <div class="item-after">￥{{total}}</div>
              </div>
            </a>
            <a href="#" class="item item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                  <div class="item-title">促销</div>
                  <div class="item-after">-￥0.00</div>
              </div>
            </a>
            <a href="#" class="item item-content">
              <div class="item-media"><i class="icon icon-f7"></i></div>
              <div class="item-inner">
                  <div class="item-title">首单优惠</div>
                  <div class="item-after">-￥0.00</div>
              </div>
            </a>
          </li>
          <li class="item-content buy" >
                  <div class="col-80">
                    <p class='big'>
                      合计：<span>{{total}}</span>
                    </p>
                    <p class="small">
                      总额：<span>{{total}}</span>
                      促销：<span>-￥0.00</span>
                    </p>
                  </div>
                  <div class='col-20'>
                    <span>付款(<span>{{dataset.length}}</span>)</span>
                  </div>
            </li>
        </ul>
      </div>
    </div>    
</template>
<script type="text/javascript">
import axios from 'axios';
import qs from 'qs';
import './order.scss';
    export default{
    
        //components要放上面
        data(){
            return{
                toolbar:'确认订单',
                backrouter:'/cart',
                dataset:[]
          }
        },
        computed:{

          total(){
             var num = null;
             this.dataset.forEach(function(v,i){
               num += v.goodpirce*v.qty 
               //console.log(num)
            });
            return num
          }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar,this.backrouter);
            axios({
                url:'http://localhost:777/php/cart.php',

                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }

            }).then(res => {

    
                 this.dataset = JSON.parse(res.data[res.data.length-1].orderDetail);
                 //这里太气人了！！！
                 console.log(this.dataset)
            });
        }
    }
</script>