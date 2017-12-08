<template>
    <div class="content">
        
        <textarea placeholder="亲,你在使用中遇到什么问题,或者有什么建议,欢迎您提供给我们"></textarea>
            
        <div class="content-block">
            <div class="row">
                <div class="col-100"><button class="button button-big button-fill button-success" disabled="true">提交</button></div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './feedback.scss';
    export default{
        data(){
            return{
              toolbar:'用户反馈'
            }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        }
    }

   
</script>