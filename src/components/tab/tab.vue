<template>
  <div class="top">
    <div class="title">重庆时时彩</div>
    <div>
      <img class="top-left-img" src="/static/image/topmenu_top2.jpg" width="231" height="29">
      <span v-for="(item,index) in tabArr"
            @click="selectItem(item.text,index)"
            class="top-tab-bar"
            :class="[currentIndex === index ? 'select-top-tab-bar' : '']"
      >
        {{item.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        currentIndex: 0,
        tabArr:[
          {text: '整合'},
          {text: '两面盘'},
          {text: '单球1-5'},
          {text: '第一球'},
          {text: '第二球'},
          {text: '第三球'},
          {text: '第四球'},
          {text: '第五球'}
        ]
      }
    },
    methods:{
      selectItem(text,index){
        this.$emit('selectText', text, index)
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .title {
    padding: 15px;
    padding-left: 225px;
    background: #46210d;
    color: rgb(254, 215, 173);
    font-weight: bold;
    font-size: 17px;
  }
  .top {
    padding: 0 0 4px 0;
    background: #feebd4;
    border-bottom: 1px solid #da9f80;
  }
  .top-left-img {
    vertical-align: middle;
  }
  .top-tab-bar {
    position: relative;
    cursor: pointer;
    padding:3px 5px;
    font-size: 12px;
    display: inline-block;
    color: #4f260d;
  }
  .top-tab-bar:hover {
    color: #f1ad45;
  }
  .top-tab-bar::before {
    width: 1px;
    height: 12px;
    position: absolute;
    display: block;
    content: "";
    /* background: #; */
    background: #fed7ad;
    top: 50%;
    right: 0;
    /* visibility: hidden; */
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .select-top-tab-bar {
    background: #a66d44;
    color: #f8f0d8;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px
  }
</style>
