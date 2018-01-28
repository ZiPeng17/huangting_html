<template>
    <div class="top-box-wrap">
        <div class="top-box">
            <span v-for="(item, index) in tabArr">
                <span @click="selectItem(item.text,index)" :class="[state && index === currentIndex ? 'active' : '', 'T_a']">{{item.text}}</span> | 
            </span>
            <span class="quit" @click="quit">退出</span>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
        state: {
            type: Boolean,
            default: false
        }
    },
    data(){
      return {
        currentIndex: 0,
        tabArr:[
          {text: '信用资料'},
          {text: '修改密码'},
          {text: '今日帐单'},
          {text: '下注明细'},
          {text: '结算报表'},
          {text: '历史开奖'},
          {text: '规则'}
        ]
      }
    },
    methods:{
      selectItem(text, index){
        this.$emit('selectTopText', text, index)
        this.currentIndex = index
      },
      quit() {
          this.global.userInfo = {};
          window.sessionStorage.removeItem('userinfo');
          this.$router.back(-1);
      }
    }
  }
</script>

<style scoped>
    .top-box-wrap {
        background: #46210d;
    }
    .top-box {
        width: 716px;
        text-align: right;
        font-size: 12px;
        color: rgb(254, 215, 173);
        line-height: 43px;
    }
    .T_a:hover {
        color: #f1ad45;
        font-weight: bold;
        cursor: pointer;
    }
    .active {
        color: #f1ad45;
    }
    .quit {
        color: #baff00;
        cursor: pointer;
    }

</style>
