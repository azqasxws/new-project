<template>
    
    <div class="content">
      <div class="list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">手机号</div>
                <div class="item-input">
                  <input type="text" placeholder="请输入手机号" v-model="username">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">验证码</div>
                <div class="item-input">
                  <input type="text" placeholder="请输入验证码">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">设置密码</div>
                <div class="item-input">
                  <input type="password" placeholder="密码不小于6位" v-model="password1">
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">确认密码</div>
                <div class="item-input">
                  <input type="password" placeholder="请确认密码" v-model="password2">
                </div>
              </div>
            </div>
          </li>

      <!-- Select -->

          <li>
              <h6>注册即视为同意<a href="#" >注册协议</a></h6>
          </li>
          <li>
            <div class="content-block">
                <p><a href="#" class="button button-fill button-danger" @click="register">注册</a></p>
                <p><a href="#" class="button button-fill button-warning " @click="login">返回</a></p>
            </div>
          </li>


        </ul>
      </div>
    </div>
</template>    
<script type="text/javascript">
    import axios from 'axios';
    import qs from 'qs';
    export default{
        data: function(){
            return {
                username:"" ,
                toolbar:'注册',              
                password1:'',
                password2:''             
            }
        },
        methods:{
            login : function(){
                this.$router.push({path: '/login'})
            },
            register:function(){
              console.log(this.password1);
              if(this.password1===this.password2){
                axios({
                    url: 'http://localhost:777/php/user.php',
                    method: 'post',
                    data: qs.stringify({username: this.username, password: this.password}),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res => {
                  console.log(res);
                })
              
              }else{
                alert('两次密码输入不一样请重新输入');
                 
                
              }
            }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        }
    }
</script>