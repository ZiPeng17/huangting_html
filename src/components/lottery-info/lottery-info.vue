<template>
  <div class="lottery-info">
    <div class="marginB">
      <span class="span-01">重庆时时彩【第{{lottery.thisPhase}}期】</span><span class="span-01 red">今天輸贏： 0</span><span class="span-01">{{lottery.prevPhase}}期 开奖号码 </span>
    </div>
    <div class="marginB">
      <span class="span-01 red">{{title}}</span>
      <span v-if="todayTime" class="span-01">距离封盘：{{sealingTime}}</span>
      <span v-else class="span-01">距离封盘：--:--</span>
      <span v-if="todayTime" class="span-01">距离开奖：<span style="color: #FF0000;">{{lotteryTime}}</span> </span>
      <span v-else class="span-01">距离开奖：--:-- </span>
      <span v-if="todayTime" class="span-01">6秒 <button class="refresh-btn">更新</button></span>
      <span v-else class="span-01">-- <button class="refresh-btn">更新</button></span>
    </div>

  </div>
</template>

<script>
    export default {
      props:{
        todayTime: {
          type: Boolean,
          default: true
        },
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
          type_index: 2,
          lotteryTime: '',  //开奖时间
          sealingTime: ''   //封盘时间
        }
      },
      created() {
        this.timer = null
        this.copyTime = 0
        this.begin()
      },
      mounted() {
        window.addEventListener('beforeunload',() =>{
          clearTimeout(this.timer)
//          localStorage.setItem('sealingTime',this.copyTime)
        })
      },
      methods:{
        begin() {
          if(!this.todayTime) {
            localStorage.setItem('sealingTime',0)
            return
          }
          let time = localStorage.getItem('sealingTime')
          time = Number(time)
          if(time <= 0) {
            time = this.lottery.lotteryTime
          }
          this._timeInit(time)
        },
        _timeInit(time) {
          this.copyTime = time
          let  sealingTime = time - 30
          let lotteryMinute = Math.floor(time / 60)
          let sealingMinute = Math.floor(sealingTime / 60)
          let lotterySecond = time - lotteryMinute *60
          let sealingSecond = sealingTime - sealingMinute *60
          lotteryMinute = lotteryMinute < 10 ? '0' + lotteryMinute : lotteryMinute
          sealingMinute = sealingMinute < 10 ? '0' + sealingMinute : sealingMinute
          lotterySecond = lotterySecond < 10 ? '0' + lotterySecond : lotterySecond
          sealingSecond = sealingSecond < 10 ? '0' + sealingSecond : sealingSecond
          this.lotteryTime =  lotteryMinute + ':' + lotterySecond
          if(sealingTime <= 0) {
            this.sealingTime = '00:00'
            this.$emit('timeOver', false)
          }else {
            this.sealingTime = sealingMinute + ':' + sealingSecond
          }
          if(time <= 0) {
            lotteryMinute = '00'
            lotterySecond = '00'
            clearTimeout(this.timer)
            setTimeout(() => {
              this.$emit('timeBegin', true)
              this.begin()
            }, 2000)
          }else {
            time --
            this.timer = setTimeout(() => {
              this._timeInit(time)
            },1000)
          }

        }
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
