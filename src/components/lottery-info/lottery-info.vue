<template>
  <div class="lottery-info">
    <div class="marginB">
      <span class="span-01">重庆时时彩【第{{lottery.thisPhase}}期】</span><span class="span-01 red">今天輸贏： 0</span><span class="span-01">{{lottery.prevPhase}}期 开奖号码 </span>
    </div>
    <div class="marginB">
      <span class="span-01 red">{{title}}</span>
      <span v-if="todayTime" class="span-01">距离封盘：{{sealingTime}}</span>
      <span v-else class="span-01">距离封盘：--:--</span>
      <span v-if="todayTime" class="span-01">距离开奖：{{lottery.startTime}} </span>
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
          sealingTime: ''
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
          localStorage.setItem('sealingTime',this.copyTime)
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
            time = this.lottery.sealingTime
          }
          this._timeInit(time)
        },
        _timeInit(time1,time2) {
          this.copyTime = time1
          let minute = Math.floor(time1 / 60)
          let second = time1 - minute *60
          if(minute < 10) {
            minute = '0' + minute
          }
          if(second < 10) {
            second = '0' + second
          }
          if(time1 <= 0) {
            minute = '00'
            second = '00'
            clearTimeout(this.timer)
          }
          time1 --
          this.sealingTime =  minute + ':' + second
          this.timer = setTimeout(() => {
            this._timeInit(time1,time2)
          },1000)
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
