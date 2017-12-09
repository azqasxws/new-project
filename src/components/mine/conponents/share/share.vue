<template>
    <div class="content" style="background: #fff;">
        <div class="card-content" style="padding-top: 10px;">
              <div class="card-content-inner">
                <img src="../../../../assets/barcode.png" style="width:50%;padding: 0;margin: 0 25%">
                <div style="margin-top: 20px;text-align:center;">邀请好友扫描二维码，下载自助go</div>
              </div>
        </div>
        <div class="content-block">
              <p><a class="open-about">选择操作</a></p>
        </div>
        <div class="content-block">
            <p><a href="#" class="button button-fill button-warning " @click="mine">返回</a></p>
        </div>
        
    </div>

</template>
<script type="text/javascript">

    export default{
        data(){
            return{
              toolbar:'分享给好友'
            }
        },
        methods:{
            mine : function(){
                  this.$router.push({path:'/mine'}) 
            }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        }
    }

</script>