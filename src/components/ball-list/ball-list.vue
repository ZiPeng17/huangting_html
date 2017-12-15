<template>
  <table class="ball-list" cellspacing="1" cellpadding="0" :width="width" border="0">
    <tr class="ball-name" v-if="info.ballname">
      <td colspan="3">{{info.ballname}}</td>
    </tr>
    <tr class="th" v-if="thShow">
    <td class="td_caption_1">号码</td>
    <td class="td_caption_1" :width="[type_index == 2 ? 54 : 108]">赔率</td>
    <td class="td_caption_1" v-if="type_index == 2" width="54">金额</td>
    </tr>
    <tr v-if="radioShow">
      <td colspan="3" class="td_caption_1" id="pc_301">
        <input type="radio" name="radio" id="firet"><label for="firet">前三</label><input type="radio" id="second" name="radio"><label for="second">中三</label><input type="radio" name="radio" id="three"><label for="three">后三</label>
      </td>
    </tr>
    <tr class="ball_tr_H" v-for="tab_item in info.data" ref="list">
      <td class="td_1" :width="firstTd" v-if="words.indexOf(tab_item.no)> -1">{{tab_item.no}}</td>
      <td class="td_1" :width="firstTd" v-else-if="tab_item.no === 0 || tab_item.no" :class="'No_'+tab_item.no"></td>
      <td class="td_2" v-if="todayTime && flag">
        <span class="multiple_Red">{{tab_item.num}}</span>
        <input class="checkbox" type="checkbox" v-show="type_index == 2" :value="tab_item.no">
      </td>
      <td v-else class="td_2">
        <span class="fengPan">-</span>
      </td>
      <td class="td_3" v-show="type_index == 2">
        <input v-if="todayTime && flag" class="inp1" id="jeuM_3008" maxlength="9" size="5" name="jeuM_3008">
        <span v-else class="inp2">封盘</span>

      </td>
    </tr>
  </table>
</template>

<script>
  export default {
    props: {
      todayTime: {
        type: Boolean,
        default: true
      },
      info: {
        type: Object,
        default: {}
      },
      simple: {
        type: Boolean,
        default: false
      },
      type_index: {
        type: Number,
        default: 2
      },
      width: {
        type: Number,
        default: 150
      },
      firstTd: {
        type: Number,
        default: 30
      },
      thShow: {
        type: Boolean,
        default: true
      },
      radioShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        flag: true,   //临时的
        words: ['大', '小', '单', '双','总和大','总和小','总和单','总和双','龙','虎','和','豹子','顺子','对子','半顺','杂六'],
      }
    },
    methods: {
      selectChecked(arr) {
        if(!this.todayTime) return
        let els = this.$refs.list
        arr.forEach((item) => {
          els.forEach((el,index) => {
          if(index === item) {
            els[index+4].getElementsByClassName('checkbox')[0].checked = true
            els[index+4].getElementsByClassName('inp1')[0].disabled = true
          }
          })
        })
      },
      inputMoney(money) {
        let els = this.$refs.list
          els.forEach((el,index) => {
              let check = el.getElementsByClassName('checkbox')[0]
              let input = el.getElementsByClassName('inp1')[0]
              let val = Number(input.value)
              if(check.checked) {
                if(val) {
                  input.value = val + Number(money)
                }else {
                  input.value = money
                }
              }
              el.getElementsByClassName('checkbox')[0].checked = false
              el.getElementsByClassName('inp1')[0].disabled = false
          })
      },
      _checkInit() {
        if(!this.todayTime) return
        let els = this.$refs.list
        els.forEach((el) => {
          el.getElementsByClassName('checkbox')[0].checked = false
          el.getElementsByClassName('inp1')[0].disabled = false
        })
      },
      clearInput() {
        let els = this.$refs.list
        els.forEach((el) => {
          el.getElementsByClassName('inp1')[0].value = ''
        })
      }
    }
  }
</script>

<style scoped>
  table tr th, table tr td { border:1px solid  #e9ba84; vertical-align: middle}
  .td_1{
    white-space: nowrap;
  }
  .inp2{
    width:60px;
  }
  .fengPan{
    font-family: Arial, Helvetica, Verdana, Geneva, sans-serif;
    font-size: 14px;
    color: #FF0000;
    font-weight: bold;
  }
  .ball-list{
    background-color: #e9ba84;
    border: 0px #e9ba84 solid;
    position: relative;
  }
  .ball-name{
    background-image: url(../../../static/image/bg.jpg);
    line-height: 24px;
    text-align: center;
    color: #4a1a04;
    font-weight: bold;}
  .td_caption_1 {
    background-image: url(../../../static/image/bg.jpg);
    line-height: 24px;
    text-align: center;
    color: #4a1a04;
    white-space: nowrap;
    padding:0 ;
    font-weight: bold;
  }
  .ball_tr_H{
    text-align: center;
    background-color: #FFFFFF;
    height: 27px;
    line-height: 16px;
  }
  .td_2 span, .td_2 input{
    display: inline-block;
    margin:0;
    line-height: 1;
    vertical-align: middle;
  }
  .multiple_Red{
    font-family: Arial, Helvetica, Verdana, Geneva, sans-serif;
    font-size: 14px;
    color: #FF0000;
    font-weight: bold;
  }
</style>
