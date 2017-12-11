<template>
    <div class="content">
        <div class="list-block" style="margin-top:10px;">
          <ul >
            <li class="item-content" @click="issue">
              <div class="item-inner">
                <div class="item-title"> 常见问题</div>
                <span class="icon icon-right"></span>
              </div>
            </li>
            <li class="item-content">
              <div class="item-inner">
                <div class="item-title"> 关于退换货</div>
                <span class="icon icon-right"></span>
              </div>
            </li>
            <li class="item-content">
              <div class="item-inner">
                <div class="item-title"> 注册协议</div>
                <span class="icon icon-right"></span>
              </div>
            </li>
            <li class="item-content" @click="changePwd">
              <div class="item-inner">
                <div class="item-title" > 修改密码</div>
                <span class="icon icon-right"></span>
              </div>
            </li>
            <li class="item-content">
              <div class="item-inner">
                <div class="item-title"> 第三方绑定</div>
                <span class="icon icon-right"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-block" style="margin-top:10px;">
          <ul >
            <li class="item-content exit" @click="exit">
              <div class="item-inner">
                <div class="item-title button-danger"> 退出登录</div>
                <span class="icon icon-right"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="content-block">
            <p><a href="#" class="button button-fill button-warning " @click="mine">返回</a></p>
        </div>        
    </div>
</template>

<script type="text/javascript">
    import './setting.scss';

    export default{
        data(){
            return{
              toolbar:'设置'
            }
        },
        methods:{
          mine:function(){
            this.$router.push({path:'/mine'});


          }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        },
        methods:{
            exit(){
                if(confirm("确认退出?")){
                    $.cookie("token1",null);
                    this.mine();
                }else{
                    return
                }
            },
            issue(){
                this.$router.push({path: '/issue'})
            },
            changePwd(){
                this.$router.push({path: '/changePwd'})
            },
            mine(){
                  this.$router.push({path:'/mine'}) 
            }            
        }
    }

</script>