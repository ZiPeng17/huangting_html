<template>
  <div class="lottery-info">
    <div class="marginB top-info">
      <div class="top-info-l">
        <p>重庆时时彩【第{{parseFloat(lottery.period)+1}}期】</p>
        <p class="red">今天輸贏： {{lottery.money}}</p>
      </div>
      <div class="top-info-2">
        <p class="date">{{lottery.period}}期 开奖号码 </p>
        <p class="num-wrapper" v-if="lottery.num">
          <i class="num" :class=" 'No_' + lottery.num[0].one">
            </i><i class="num" :class=" 'No_' + lottery.num[0].tow">
              </i><i class="num" :class=" 'No_' + lottery.num[0].three">
                </i><i class="num" :class=" 'No_' + lottery.num[0].four">
                  </i><i class="num" :class=" 'No_' + lottery.num[0].five"></i>
        </p>
      </div>

    </div>
    <div class="marginB">
      <span class="span-01 red">{{title}}</span>
      <span v-if="todayTime" class="span-01">距离封盘：{{sealingTime}}</span>
      <span v-else class="span-01">距离封盘：--:--</span>
      <span v-if="todayTime" class="span-01">距离开奖：<span style="color: #FF0000;">{{lotteryTime}}</span> </span>
      <span v-else class="span-01">距离开奖：--:-- </span>
      <span v-if="todayTime" class="span-01">{{refTime}}秒<button class="refresh-btn" @click="refreshTime">更新</button></span>
      <span v-else class="span-01">-- <button class="refresh-btn">更新</button></span>
    </div>
    <div class="span-01">
      <span class="tz_type">投注类型：</span>
      <span class="tz_type-btn" @click="select_type(1)" :class="{'select-tz_type-btn': type_index == 1}">快捷</span>
      <span class="tz_type-btn" @click="select_type(2)" :class="{'select-tz_type-btn': type_index == 2}">一般</span>
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
          nums: [8,0,1,1,9],
          lotteryTime: '',  //开奖时间
          sealingTime: '',  //封盘时间
          refTime: 45       //刷新时间
        }
      },
      created() {
        this.timer = null
        this.refreshTimer = null
        this.copyTime = 0
        this.begin()
        this.refreshTime()
      },
      mounted() {
        window.addEventListener('beforeunload',() =>{
          clearTimeout(this.timer)
//          localStorage.setItem('sealingTime',this.copyTime)
        })
      },
      methods:{
        select_type: function (i) {
          this.type_index = i;
          this.$emit('select_type', i)
        },
        refreshTime() {
          this.refTime = 45
          clearInterval(this.refreshTimer)
          this.refreshTimer = setInterval(()=> {
            if(this.refTime <= 0) {
              this.refTime = 46
            }
            this.refTime --
          },1000)
        },
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
    padding: 20px;
    padding-left: 0;
  }
  .marginB{
    margin-bottom:7px;

  }
  .span-01 {
    display: inline-block;
    width: 220px;
    color: #4f260d;
  }
  .top-info-l,.top-info-2{
    display: inline-block
  }
  .top-info-l p{
    display: inline-block;
    width:220px;
    height:25px;
    line-height: 25px;
  }
  .top-info-2 .date{
    height:25px;
    width:150px;
    line-height:25px;
    padding-right: 5px;
  }
  .top-info-2{
    position: relative;
  }
  .top-info-2 .num-wrapper{
    position: absolute;
    height:25px;
    width: 160px;
    left: 155px;
    top:0;
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
    padding: 3px 5px;
    margin-right: 6px;
    cursor: pointer;
  }
  .select-tz_type-btn {
    background: #fffec2;
    border: 1px solid #d8a467;
    color: #CF0000;
    font-weight: 700;
  }

  .num{
    display: inline-block;
    height:25px;
    width:26px;
    padding-right:5px;
  }
</style>
