<template>
    <div >
      <div class="list-block big"  v-if='dataset==[]'>
        <span class="icon icon-cart"></span>
        <p></p>
        <p><a href="#" class="button button-fill button-danger ">去购物 </a></p>
      </div>
        <div class="list-block" v-if='dataset!=[]' >
          <ul>
              <li class="item-content red">
                <div class="item-media"><i class="icon icon-f7"></i></div>
              </li>
              <li class="item-content btn">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <p><a href="#" class="button button-big"><i class="icon icon-cart sm"></i>买购物袋 </a></p>
              </li>
              <li class="item-content white">
                 <div class="item-title"> <a href="#" class="button button-fill button-danger">促销 </a><span>一元一积分</span> </div>
              </li>
              <li class="item-content list" v-for= "(value,index) in dataset" :id="value.good_id">
                  <div class="item-title">
                    <a href="#" class="button disabled">
                      <img :src="value.img" alt="" />
                    </a>
                  </div>
                  <div class="content-padded grid-demo ">
                    <div class="row">
                      <p >{{value.goodname}}</p>
                    </div>
                    <div class="row price">
                      <p >￥{{value.goodpirce}}</p>
                      <p><button @click='addqty($event)' >-</button><span>{{value.qty}}</span><button @click='minqty($event)' >+</button></p>
                    </div>
                  </div>

              </li>
              <li class="item-content total" >
                  <div class="col-80">
                    <p class='big'>
                      合计：<span>￥{{total}}</span>
                    </p>
                    <p class="small">
                      总额：<span>￥{{total}}</span>
                      促销：<span>-￥0.00</span>
                    </p>
                  </div>
                  <div class='col-20' @click="order">
                    <span>去结算(<span>{{dataset.length}}</span>)</span>
                  </div>
              </li>

          </ul>
        </div>
      </div>
</template>
<script type="text/javascript">
  import "./cart.scss";
  import axios from 'axios';
  import qs from 'qs';
    export default{
        data(){
            return{
              toolbar:'购物车',
              dataset:"",
            }
        },
        methods:{
          minqty:function(event){
             event.path[1].children[1].innerText++;
          },
          addqty:function(event){
            event.path[1].children[1].innerText--
          },
          order:function(){
            this.$router.push({path:"/order"})
          }
          //点击改变
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
            this.$parent.initToolbar(this.toolbar);
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