<template>
  <div class="lottery-info">
    <div class="marginB">
      <span class="span-01">重庆时时彩【第{{lottery.thisPhase}}期】</span><span class="span-01 red">今天輸贏： 0</span><span class="span-01">{{lottery.prevPhase}}期 开奖号码 </span>
    </div>
    <div class="marginB">
      <span class="span-01 red">{{title}}</span><span class="span-01">距离封盘：{{lottery.endTime}}</span><span class="span-01">距离开奖：{{lottery.startTime}} </span><span class="span-01">6秒 <button class="refresh-btn">更新</button></span>
    </div>
    <div class="span-01">
      <span class="tz_type">投注类型：</span><span @click="select_type(1)" :class="['tz_type-btn', type_index == 1 ? 'select-tz_type-btn' : '']">快捷</span><span :class="['tz_type-btn', type_index == 2 ? 'select-tz_type-btn' : '']" @click="select_type(2)">一般</span>
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
          type_index: 1
        }
      },
      methods:{
        select_type: function(i) {
          this.type_index = i;
        },
      }
    }
</script>

<style scoped>
  .lottery-info{
    padding: 20px;
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
  .tz_type {
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    color: #501e02;
    margin-right: 7px;
  }
  .tz_type-btn {
    display: inline-block;
    border: 1px solid #cacaca;
    background: #fff;
    border-radius: 2px;
    padding: 0 4px;
    margin-right: 6px;
    cursor: pointer;
  }
  .select-tz_type-btn {
    background: #fffec2;
    border: 1px solid #d8a467;
    color: #CF0000;
    font-weight: 700;
  }
</style>
