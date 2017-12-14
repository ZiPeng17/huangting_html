<template>
  <div class="tz-money">
    <div class="align-c" v-if="type_index === 2">
      <div id="M_ConfirmClew_1">
        <div class="elem_amount">
          <strong class="t kuaijie">复选框快速下注金额</strong>
          <span class="kuaijie">
              <input id="TextMoney_1" class="elem_amount_input elem_amount_input_quick" v-model="money" maxlength="9" name="">
            </span>
          <input class="btn2" onmouseover="this.className='btn2m'" onmouseout="this.className='btn2'" @click="sendMoney" value="传送金额" type="submit" name="confirm">

        </div>
      </div>
      <div class="dvclrr">
        <input class="btn2" onmouseover="this.className='btn2m'" onmouseout="this.className='btn2'" @click="clearChip" value="清 空" type="button" name="clearBtn">
        <input class="btn2" onmouseover="this.className='btn2m'" onmouseout="this.className='btn2'" onclick="ResetTdOnSelected();" value="下 注" type="button" name="reset">
        <span style="color: red">注:多次点击筹码，金额将累加！</span>
      </div>
    </div>
    <div v-else>
      <div class="tdchip" style="display: inline-block; width: 56%;">
        <span class="cp01"></span>
        <span class="cp02"></span>
        <span class="cp03"></span>
        <span class="cp04"></span>
        <span class="cp05"></span>
      </div>
      <div class="align-c" style="display: inline-block; width: 43%;">
        <div id="M_ConfirmClew_2">
          <div class="elem_amount">
            <strong class="t kuaijie">金额</strong>
            <span class="kuaijie">
              <input id="TextMoney_2" onkeypress="digitOnly(event)" maxlength="9" name="" class="elem_amount_input elem_amount_input_quick">
            </span>
            <input onmouseover="this.className='btn2m'" onmouseout="this.className='btn2'" value="下 注" type="submit" name="confirm" class="btn2">
            <input onmouseover="this.className='btn2m'" onmouseout="this.className='btn2'" onclick="ResetTdOnSelected();" value="重 置" type="button" name="reset" class="btn2">
          </div>
        </div>
        <div class="dvclrr"><input onmouseover="this.className='btn2m'" onmouseout="this.className='btn2'" onclick="clearChip()" value="清 空" type="button" name="clearBtn" class="btn2">&nbsp;&nbsp;
          <span>注:多次点击筹码，金额将累加！</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      props: {
        type_index: {
          type: Number,
          default: 2
        },
      },
      data() {
        return {
          money:''
        }
      },
      methods: {
        sendMoney() {
          if(this.money) {
            this.$emit('sendMoney', this.money)
          }else {
            alert('请选择需要填写下注金额的复选框!!!')
          }
        },
        clearChip() {
          this.$emit('clearChip')
        },
        reset() {
          this.money = ''
        }
      }
    }
</script>

<style scoped>
  .tz-money{
    padding-top:20px;
    width:700px;
    text-align: center;
  }
  .dvclrr{
    padding-top:15px;
    padding-bottom:15px;
  }
  #TextMoney_1,#TextMoney_2{
    width:80px;
  }
  .btn2, .btn2m {
    width: 66px;
    height: 20px;
    border: 0px none;
    padding-top: 3px !important;
    padding-bottom: 2px !important;
    margin-bottom: 0;
    color: #0C3E09;
    background-color: transparent;
    background-position: -943px 0;
    background-image: url(../../../static/image/frame1.gif);
  }
  .btn2 {
    width: 66px;
    background-position: -943px 0;
  }
  .btn2m{
    border:  none;
    padding-top: 3px;
    padding-bottom: 2px!important;
    background-image: url(../../../static/image/frame1.gif);
    margin-bottom: 0;
    color: #0C3E09;
    background-color: transparent;
    background-position: -1010px 0;
  }
  .tdchip span {
    display: inline-block;
    margin-left: 10px;
    width: 46px;
    height: 47px;
    background: url(../../../static/image/chipbg.png) no-repeat;
    cursor: pointer;
  }
  .tdchip .cp01 {
    background-position: 0 0;
  }
  .tdchip .cp02 {
    background-position: 0 -47px;
  }
  .tdchip .cp03 {
    background-position: 0 -94px;
  }
  .tdchip .cp04 {
    background-position: 0 -141px;
  }
  .tdchip .cp05 {
    background-position: 0 -188px;
  }
</style>
