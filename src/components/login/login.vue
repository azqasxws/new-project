<template>
    
    <div class="content">
      <div class="list-block">
        <ul>
              <!-- Text inputs -->
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">手机号</div>
                <div class="item-input">
                  <input type="text" placeholder="请输入手机号">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">密码</div>
                <div class="item-input">
                  <input type="password" placeholder="请输入密码">
                </div>
              </div>
            </div>
          </li>
          <li>
              <h6><a href="#" >忘记密码？</a></h6>
          </li>
          <li>
            <div class="content-block">
                <p><a href="#" class="button button-fill button-success">登录</a></p>
                <p><a href="#" class="button button-fill button-danger" @click="register">注册</a></p>
                <p><a href="#" class="button button-fill button-warning " @click="home">返回</a></p>
            </div>
          </li>


        </ul>
      </div>
    </div>
</template>    
<script type="text/javascript">
    import axios from 'axios';
    export default{
        data: function(){
            return {
                username:"" ,
                password:"",
                toolbar:'登录'
            }
        },
        methods:{
            login:function(){
                console.log(this);
              axios.post('http://localhost:777/php/user.php',{username:this.username,password:this.password}.then(res=>{
                  console.log(res)
              }))
            },
            home : function(){
                this.$router.push({path: '/home'})
            },
            register : function(){
                this.$router.push({path: '/register'});
                console.log(666);
            }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        }
    }
</script>