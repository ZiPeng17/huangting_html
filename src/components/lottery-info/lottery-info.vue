<template>
  <div class="lottery-info">
    <div class="marginB">
      <span class="span-01">重庆时时彩【第{{lottery.thisPhase}}期】</span><span class="span-01 red">今天輸贏： 0</span><span class="span-01">{{lottery.prevPhase}}期 开奖号码 </span>
    </div>
    <div class="marginB">
      <span class="span-01 red">{{title}}</span><span class="span-01">距离封盘：{{lottery.endTime}}</span><span class="span-01">距离开奖：{{lottery.startTime}} </span><span class="span-01">6秒 <button class="refresh-btn">更新</button></span>
    </div>

  </div>
</template>

<script>
    export default {
      props:{
        lottery: {
          type: Object,
          default: {}
        },
        title: {
          type: String,
          default:'整合'
        }
      },
      data(){
        return {
          type_index: 2
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .lottery-info{
    padding: 20px 20px 0 20px;
  }
  .marginB{
    margin-bottom:7px;
  }
  .span-01 {
    display: inline-block;

    width: 220px;
    color: #4f260d;
  }
  .red {
    color: red;
  }

</style>
