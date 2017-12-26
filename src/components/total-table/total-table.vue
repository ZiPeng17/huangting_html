<template>
  <div class="total-table">

    <div class="clearfix table-wrapper">
      <table class="table" cellspacing="1" cellpadding="0" border="0">
        <tr>
          <td v-for="(item,index) in tab_list" ref="tableList" :class="{'last': index >= (tab_list.length - 1)}">
            <ball-list :todayTime="todayTime"
                       :info="item"
                       :type_index="type_index"
                       :thShow="index < (tab_list.length - 1)"
                       :radioShow="index >= (tab_list.length - 1)"
                       :radioChecked="radioChecked"
                       ref="ballList" 
                       @radioChange="radioChange" 
                       @selectNumChange="selectNumChange" class="ball-list"></ball-list>
          </td>
        </tr>
      </table>
      <div class="right">
      </div>
    </div>
    <select-ball @selectThisBall="selectThisBall" @selectThisNum="selectThisNum" :type_index="type_index" ref="selectBall"></select-ball>
    <!--下注-->
    <tz-money 
      :todayTime="todayTime" 
      :type_index="type_index" 
      @sendMoney="sendMoney" 
      @bet="bet" 
      @clearChip="clearChip" 
      @sendSelected="sendSelected" 
      @resetTdOnSelected="resetTdOnSelected" ref="tzMoney"></tz-money>
    <!-- 出球率 -->
    <chuqiulv :type_list="type_list"></chuqiulv>
  </div>
</template>

<script>
  import ballList from '../ball-list/ball-list'
  import selectBall from '../select-ball/select-ball'
  import tzMoney from '../tz-money/tz-money'
  import chuqiulv from '../chuqiulv/chuqiulv'
  export default {
    props: {
      todayTime: {
        type: Boolean,
        default: true
      },
      type_index: {
        type: Number,
        default: 2
      }
    },
    data() {
      return {

        tab_list: [  //表格数据
          {
            ballname: '第一球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
          {
            ballname: '第二球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
          {
            ballname: '第三球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
          {
            ballname: '第四球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
          {
            ballname: '第五球',
            data: [
              {
                no: '大',
                num: 1.94
              },
              {
                no: '小',
                num: 1.94
              },
              {
                no: '单',
                num: 1.94
              },
              {
                no: '双',
                num: 1.94
              },
              {
                no: 0,
                num: 1.94
              },
              {
                no: 1,
                num: 1.94
              },
              {
                no: 2,
                num: 1.94
              },
              {
                no: 3,
                num: 1.94
              },
              {
                no: 4,
                num: 1.94
              },
              {
                no: 5,
                num: 1.94
              },
              {
                no: 6,
                num: 1.94
              },
              {
                no: 7,
                num: 1.94
              },
              {
                no: 8,
                num: 1.94
              },
              {
                no: 9,
                num: 1.94
              },
            ]
          },
          {
            ballname: '总和-龙虎和',
            data: [
              {
              no: '总和大',
              num: 1.94
            },
              {
                no: '总和小',
                num: 1.94
              },
              {
                no: '总和单',
                num: 1.94
              },
              {
                no: '总和双',
                num: 1.94
              },
              {
                no: '龙',
                num: 1.94
              },
              {
                no: '虎',
                num: 1.94
              },
              {
                no: '和',
                num: 1.94
              }
            ]
          },
          {
            ballname: ['前三','中三','后三'],
            data: [
              {
                no: '豹子',
                num: 1.94
              },
              {
                no: '顺子',
                num: 1.94
              },
              {
                no: '对子',
                num: 1.94
              },
              {
                no: '半顺',
                num: 1.94
              },
              {
                no: '杂六',
                num: 1.94
              }
            ]

          },
        ],
//        tab_list_radio:
        selectBall: -1,   //选择第几个球下标
        selectNum: -1,    // 选择的数字下标
        selectTab: [],    // 选中的球列表集合
        selectChec: [],   //选中的数字列表集合
        type_list: ["1球大小", "1球单双", "2球大小", "2球单双", "3球大小", "3球单双", "4球大小", "4球单双", "5球大小", "5球单双", "总和大小", "总和单双", "龙虎"],//出球率列表
        money: '',        //下注金额
        radioChecked: '前三', //默认选中‘前三’
        args: {}
      }
    },
    methods: {
      selectThisBall(arr) {
        this.selectTab = arr
      },
      selectThisNum(arr) {
       this.selectChec = arr
      },
      sendMoney(val) {
        this.money = val
        let isChecked = false
        this.$refs.ballList.forEach((el,index) => {
          isChecked = this.$refs.ballList[index].isChecked() || isChecked
        })
        if(isChecked) {
          this.$refs.ballList.forEach((el, index) => {
            this.$refs.ballList[index].inputMoney(this.money)
          })
          this.$refs.tzMoney.reset()
          this.$refs.selectBall.removeClass()
          this.selectTab = []
          this.selectChec = []
        } else {
          alert('请选择需要填写下注金额的复选框!!!')
        }
      },
      sendSelected() {
        let xz = []
        let reg = /[^\d]+/g
        let ballLists = this.$refs.ballList
        for(let k = 0; k < ballLists.length; k++) {
          let obj = ballLists[k].getChecked()
          if(obj.data.length) {
            for(let i=0;i<obj.data.length;i++) {
              if(reg.test(obj.data[i].price)) {
                alert('输入金额有误，请输入正确的数字！！！')
                return
              }
            }
            xz.push({
              name: obj.ballname ? obj.ballname : '' ,
              data:obj.data
            })
          }
        }
        if(!xz.length) {
          alert('请填写下注金额！！！')
          return
        }
        let args = {
          user: 2
        };
        console.log(xz);
        xz.forEach((item)=> {
          console.log(typeof item.name);
          if(item.name == '第一球') {
            args['one'] = arg_str(item)
          } else if(item.name == '第二球') {
            args['tow'] = arg_str(item)
          } else if(item.name == '第三球') {
            args['three'] = arg_str(item)
          } else if(item.name == '第四球') {
            args['four'] = arg_str(item)
          } else if(item.name == '第五球') {
            args['five'] = arg_str(item)
          } else if(item.name == '总和-龙虎和') {
            args['sum'] = arg_str(item)
          } else if(typeof item.name != 'string') {
            if (this.radioChecked == '前三') {
              args['frontS'] = arg_str(item)
            } else if(this.radioChecked == '中三') {
              args['mediumS'] = arg_str(item)
            } else if(this.radioChecked == '后三') {
              args['postS'] = arg_str(item)
            }
          }
          function arg_str (_item) {
            let str = '';
            _item.data.forEach((res)=> {
              str += res.num + '-' + res.price + ','
            })
            return str.substr(0, str.length-1)
          }
        })
        console.log(args);
        this.$http.post('http://dcshanxi.xnfhtech.com/Home/Api/grtfrom', args, {emulateJSON:true}).then(res => {
            console.log(res.data);
            if (res.data.code != "000") {
              alert(res.data.res)
            }
        }, error => {
            console.log(error);
            alert('服务器错误或网络异常，请稍后重试');
        });
      },
      clearChip() {
        this.$refs.ballList.forEach((el,index) => {
          this.$refs.ballList[index].clearInput()
        })
      },
      resetTdOnSelected() {
        this.$refs.ballList.forEach((el,index) => {
          this.$refs.ballList[index].resetSelected()
        })
        this.args = {}; //重置
      },
      _check() {
        this.$refs.ballList.forEach((el,index) => {
          this.$refs.ballList[index]._checkInit()
        })
        if (this.selectTab.length && this.selectChec.length) {
          this.selectTab.forEach((num) => {
            this.$refs.ballList[num].selectChecked(this.selectChec,this.money)
          })
        }
      },
      radioChange(val) {
        this.radioChecked = val;
      },
      selectNumChange(obj) {
        console.log(obj.arr);
        console.log(obj.option);
        let args = this.args;
        if(obj.option == '第一球') {
          args['one'] = obj.arr
        } else if(obj.option == '第二球') {
          args['tow'] = obj.arr
        } else if(obj.option == '第三球') {
          args['three'] = obj.arr
        } else if(obj.option == '第四球') {
          args['four'] = obj.arr
        } else if(obj.option == '第五球') {
          args['five'] = obj.arr
        } else if(obj.option == '总和-龙虎和') {
          args['sum'] = obj.arr
        } else if (obj.option == '前三') {
          args['frontS'] = obj.arr
        } else if(obj.option == '中三') {
          args['mediumS'] = obj.arr
        } else if(obj.option == '后三') {
          args['postS'] = obj.arr
        }
        this.args = args;
      },
      bet(val) {
        if (val) {
          if (Object.keys(this.args).length > 0) {
            var args = this.args; //这里需要对象的深克隆才能解决此问题（this.args）会变
            for(let key in args) {
              args[key] = arg_str(args[key])
            }
            args['user'] = 2;
            this.$http.post('http://dcshanxi.xnfhtech.com/Home/Api/grtfrom', args, {emulateJSON:true}).then(res => {
                this.resetTdOnSelected();
                console.log(res.data);
                if (res.data.code != "000") {
                  alert(res.data.res)
                }
            }, error => {
                this.resetTdOnSelected();
                console.log(error);
                alert('服务器错误或网络异常，请稍后重试');
            });
            function arg_str (_item) {
              let str = '';
              _item.forEach((res)=> {
                str += res + '-' + val + ','
              })
              return str.substr(0, str.length-1)
            }
          } else {
            alert('请至少选择一种玩法');
          }
        } else {
          alert('请填写下注金额');
        }
      }
    },
    watch: {
      selectChec() {
        this._check()
      },
      selectTab() {
        this._check()
      },
      type_index(val) {
        if (val === 2) {
          this._check()
        }
      }
    },
    components: {
      ballList,
      selectBall,
      tzMoney,
      chuqiulv
    }
  }
</script>

<style scoped>
  .total-table{
    min-width:950px;
  }
  .table{
    position: relative;
  }
  .table-wrapper .last{
    position: absolute;
    right:0;
    top:240px;
  }
  .right {
    float: left;
  }

</style>
