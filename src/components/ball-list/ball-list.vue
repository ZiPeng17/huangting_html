<template>
  <table class="ball-list" cellspacing="1" cellpadding="0" :width="width" border="0">
    <tr class="ball-name" v-if="typeof info.ballname == 'string'">
      <td colspan="3">{{info.ballname}}</td>
    </tr>
    <tr class="th" v-if="thShow">
    <td class="td_caption_1">号码</td>
    <td class="td_caption_1" :width="[type_index == 2 ? 54 : 108]">赔率</td>
    <td class="td_caption_1" v-if="type_index == 2">金额</td>
    </tr>
    <tr v-if="radioShow">
      <td colspan="3" class="td_caption_1" id="pc_301">
        <span v-for="(name,index) in info.ballname">
          <input type="radio" name="radio" :value="name" v-model="radioChecked" :id="'firet_'+index"><label :for="'firet_'+index">{{name}}</label>
        </span>
      </td>
    </tr>
    <tr class="ball_tr_H" v-for="tab_item in info.data" ref="list" @click="selectTr" :data-no="tab_item.no" @mouseover="addclass" @mouseout="removeclass" :class="{'tans': type_index === 2}">
      <td class="td_1" :width="firstTd" v-if="words.indexOf(tab_item.no)> -1 && sonIndex.indexOf('ball_list') == -1">{{tab_item.no}}</td>
      <td class="td_1" :width="firstTd" v-else-if="(tab_item.no === 0 || tab_item.no) && sonIndex.indexOf('ball_list') == -1" :class="'No_'+tab_item.no"></td>
      <td class="td_2" v-if="todayTime" v-show="type_index === 2">
        <label>
          <span class="multiple_Red">{{tab_item.num}}</span>
          <input class="checkbox" type="checkbox" :value="tab_item.no" @click="changeChecked">
        </label>
      </td>
      <td class="td_2 label multiple_Red" v-if="todayTime" v-show="type_index !== 2">
         {{tab_item.num}}
      </td>
      <td class="td_2 fengPan" v-else>-</td>
      <td class="td_3" v-show="type_index == 2">
        <input v-if="todayTime" class="inp1" maxlength="9" size="5" :val="tab_item.no">
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
      sonIndex: { // 表示sided-table组件的调用
        type: String,
        default: ''
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
        words: ['大', '小', '单', '双','总和大','总和小','总和单','总和双','龙','虎','和','豹子','顺子','对子','半顺','杂六'],
        radioChecked: '前三',
        selectedNumbers: []
      }
    },
    watch: {
      'radioChecked': function() {
        this.$emit('radioChange', this.radioChecked);
      },
      'selectedNumbers': function() {
        if (this.radioShow) {
          this.$emit('selectNumChange', {arr: this.selectedNumbers, option: this.radioChecked, witch : this.sonIndex})
        } else {
          this.$emit('selectNumChange', {arr: this.selectedNumbers, option: this.info.ballname, witch : this.sonIndex})
        }
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
      changeChecked(e) {
        e.target.parentElement.parentElement.parentElement.getElementsByClassName('inp1')[0].disabled = e.target.checked
      },
      selectTr(e) {
        if (this.type_index === 2) {
          return
        }
        this._addClass(e.target.parentElement, 'onBg', 1)
      },
      resetSelected() {
        let els = this.$refs.list
        els.forEach((el,index) => {
          if(this._hasClass(el,'onBg')) {
            this._addClass(el,'onBg')
          }
        })
      },
      addclass(e) {
        if (this.type_index === 2) {
          return
        }
        this._addClass(e.target.parentElement, 'hoverBg')
      },
      removeclass(e) {
        if (this.type_index === 2) {
          return
        }
        this._addClass(e.target.parentElement, 'hoverBg')
      },
      isChecked() {     //是否有input 选中
        let els = this.$refs.list
        for(let i=0; i<els.length;i++) {
          let check = els[i].getElementsByClassName('checkbox')[0]
          if(check.checked) {
            return true
          }
        }
      },
      getChecked() {
        let els = this.$refs.list
        let obj = {}
        if(this.info.ballname) {
          obj.ballname = this.info.ballname
        }
        obj.data = []
        for(let i=0; i<els.length;i++) {
          let input = els[i].getElementsByClassName('inp1')[0]
          if( input.value) {
            obj.data.push({
                num:input.getAttribute('val'),
                price: Number(input.value)
              })
          }
        }
        return obj
      },
      clearInput() {
        let els = this.$refs.list
        els.forEach((el) => {
          el.getElementsByClassName('inp1')[0].value = ''
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
      _addClass(el, className, source) {
        let newClass = el.className.split(' ')
        if (this._hasClass(el, className)) {
          let Cindex = newClass.indexOf(className)
          newClass.splice(Cindex, 1)
        } else {
          newClass.push(className)
        }
        if (source === 1) {
          let _no = el.getAttribute('data-no');
          let noIndex = this.selectedNumbers.indexOf(_no);
          if (noIndex > -1) {
            this.selectedNumbers.splice(noIndex, 1)
          } else {
            this.selectedNumbers.push(_no)
          }
          console.log(this.selectedNumbers);
        }
        el.className = newClass.join(' ')
      },
      _hasClass(el, className) {
        let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
        return reg.test(el.className)
      }
    }
  }
</script>

<style scoped>
  table tr th, table tr td { border:1px solid  #e9ba84; vertical-align: middle}
  .td_1{
    white-space: nowrap;
  }
  .inp1{
    width:50px;}
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
  .label{
    cursor: pointer;
  }
  .onBg{
    background-color: #ffc214;
  }
  .hoverBg {
    background-color: #ffd094;
  }
  .tans{
    background-color: transparent !important;
  }
</style>
