<template>
  <div class="select-ball">
    <div class="title left">快速<br>选择</div>
    <div class="balls">
      <span v-for="(ball,index) in balls" @click="selectThisBall(index)">{{ball.text}}</span>
    </div>
    <div class="select-num">
      <span v-for="(num,index) in nums" @click="selectThisNum(index)">{{num.num}}</span>
    </div>
</div>
</template>

<script>
    export default {
      data() {
        return {
          balls: [
            {text: '第一球'},
            {text: '第二球'},
            {text: '第三球'},
            {text: '第四球'},
            {text: '第五球'}
          ],
          nums: [
            {num: 0},
            {num: 1},
            {num: 2},
            {num: 3},
            {num: 4},
            {num: 5},
            {num: 6},
            {num: 7},
            {num: 8},
            {num: 9},
          ],
          selectTab: [],   // 选中的球列表集合
          selectChec: [],    //选中的数字列表集合
        }
      },
      methods: {
        selectThisBall(index) {
          let e = window.event || event;
          this._addClass(e.target, 'sRed')
          if(this._hasClass(e.target, 'sRed')) {
            this.selectTab.push(index)
          }else {
            let _index = this.selectTab.indexOf(index)
            this.selectTab.splice(_index,1)


          }
          this.$emit('selectThisBall', this.selectTab)
        },
        selectThisNum(index) {
          let e = window.event || event;
          this._addClass(e.target, 'sRed')
          if(this._hasClass(e.target, 'sRed')) {
            this.selectChec.push(index)
          }else {
            let _index = this.selectChec.indexOf(index)
            this.selectChec.splice(_index,1)
          }
          this.$emit('selectThisNum', this.selectChec)
        },
        _addClass(el, className) {
          let newClass = el.className.split(' ')
          if (this._hasClass(el, className)) {
            let Cindex = newClass.indexOf(className)
            newClass.splice(Cindex, 1)
          } else {
            newClass.push(className)
          }
          el.className = newClass.join(' ')
        },

        _hasClass(el, className) {
          let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
          return reg.test(el.className)
        },

      },

    }
</script>

<style scoped>
  .select-ball {
    padding-top: 3px;
  }
  .left{
    float: left;
  }
  .title {
    border: #333 1px solid;
    text-align: center;
    color: #4a1a04;
    font-weight: bold;
    line-height: 18px;
    width: 49px;
    height: 44px;
    padding-top: 5px;
    background-color: #fff;
  }

  .select-ball span {
    display: inline-block;
    text-align: center;
    margin-right: 1px;
    border: #385893 1px solid;
    line-height: 20px;
    background-color: #fff;
    height: 20px;
    cursor: pointer;
    font-weight: bold;
  }

  .select-ball span.sRed {
    background-color: #fbecbc;
    color: #b61b05;
    border: #b61b05 1px solid;
  }

  .select-num {
    padding-top: 7px;
  }

  .balls span {
    width: 129px;
  }

  .select-num span {
    width: 64px;
  }
</style>
