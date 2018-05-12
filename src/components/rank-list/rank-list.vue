<template>
    <div class="rank-list" ref="rankList">
      <div class="content" ref="content">
        <div class="title">
          <span class="span1">极速时时彩</span>
          <span class="span2">长龙榜</span>
          <a class="span3" href="javscript:;" @click="hide">隐藏</a>
        </div>
        <div class="list">
          <p v-for="(item,index) in list" class="p" :class="[index % 2 ? 'even' : 'odd']">
            <span class="left">{{item.ballname}} - {{item.compare}}</span>
            <span class="right">{{item.period}}期</span>
          </p>
      </div>
      </div>
      <div @click="show" class="showImg">
        <img src="../../../static/image/m_on.gif" alt="">
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          list :[
            {
              ballname: '第一球',
              compare: '大',
              period: 1
            },
            {
              ballname: '第二球',
              compare: '大',
              period: 2
            },
            {
              ballname: '第三球',
              compare: '大',
              period: 5
            },
            {
              ballname: '第四球',
              compare: '大',
              period: 2
            },
            {
              ballname: '第五球',
              compare: '大',
              period: 8
            },
            {
              ballname: '龙',
              compare: '大',
              period: 5
            }
          ]
        }
      },
      methods: {
        hide() {
          let w = this.$refs.content.offsetWidth
          this.$refs.content.style.transform = `translate3d(${w}px,0,0)`
          this.$refs.content.style.transform = `webkitTranslate3d(${w}px,0,0)`
          setTimeout(()=> {
            this.$refs.rankList.style.width = '25px'
            this.$refs.rankList.style.height = '50px'
          },400)

        },
        show() {
          this.$refs.rankList.style.width = ''
          this.$refs.rankList.style.height = ''
          this.$refs.content.style.transform = 'translate3d(0,0,0)'
        }
      }
    }
</script>

<style scoped>
  .rank-list {
    position: fixed;
    width: 197px;
    right: 0;
    top: 125px;
    z-index: 99;
  }
  .content{
    padding: 6px;
    background-color: #e9ba84;
    transition: all 0.4s;
    position: relative;
    transform :translate3d(100%,0,0);
    z-index:10;
  }
  .showImg{
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .title{
    background-color: #e9ba84;
    border: 1px solid #fff;
    text-align: center;
  }
  .title span{
    display: inline-block;
    line-height:20px;
    font-weight: bold;
  }
  .title .span1{
    color: #511e02;
  }
  .title .span2{
    color: #fff;
  }
  .title .span3{
    color: blue;
    font-weight: bold;
  }
  .p{
    padding:0 30px 0 5px;
    line-height:16px;
  }
  .p.even{
    background-color: #fdf8f2;
  }
  .p.odd{
     background-color: #fff;
   }
  .right{
    float: right;
    color: #FF0000;
    letter-spacing:4px;
  }
</style>
