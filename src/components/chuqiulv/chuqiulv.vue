<template>
  <div class="chuqiulv">
    <div class="Ball_List td_caption_1">出球率</div>
    <div class="num_list" v-if="num_list.length">
      <table  border="0" cellpadding="1" cellspacing="1">
        <tr>
          <td width="70" v-for="num in num_list" class="td_caption_1">
            {{num.ball}}
          </td>
        </tr>
        <tr>
          <td v-for="num in num_list" class="blue">
            {{num.num}}
          </td>
        </tr>
      </table>
    </div>
    <div class="chuqiulv-tab">
        <span v-for="(item, index) in type_list" @click="select_bottom_type(index)"
              :class="[index == bottom_type_index ? 'td_caption_2' : 'td_caption_1']"
              :style="spanWidth"
        >{{item}}</span>
    </div>
    <table width="696" border="0" cellpadding="1" cellspacing="1" class="Ball_List">
      <tbody>
      <tr class="Ball_tr_H">
        <td v-for="list in table_list" align="center" width="32" valign="top">
          <b v-for="item in list">
            <span class="big" v-if="item.compare == '大'">大</span>
            <span class="small" v-else >小</span>
          </b>
          <b><font color="#ff0000">大</font></b>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
      props: {
        type_list: {
          type: Array,
          default: ()=>[]
        },
        num_list: {
          type: Array,
          default: ()=>[]
        }
      },
      computed: {
        spanWidth() {
          let len = this.type_list.length
          let w = 100 / len
          return 'width:' + w + '%'
        }
      },
      data() {
        return {

          bottom_type_index: 0,
          table_list:[
            [
              {compare: '大'}

            ],
            [
              {compare: '大'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
            {compare: '大'},
            {compare: '小'}
          ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [

              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '大'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'},
              {compare: '小'}
            ],
            [
              {compare: '大'},
              {compare: '小'}
            ],
            [
              {compare: '小'}
            ]
          ]
        }
      },
      methods: {
        select_bottom_type(index) {
          this.bottom_type_index = index
        },
      }
    }
</script>

<style scoped>
  .chuqiulv {
    width: 700px;
    text-align: center;
    line-height: 24px;
    color: #4a1a04;
    font-weight: bold;
    border: 1px #e9ba84 solid;
  }
  .td_caption_1 {
    background-image: url(../../../static/image/bg.jpg);
  }
  .blue{
    color: #0000ff;
  }
  .td_caption_2 {
    background-image: url(../../../static/image/bg2.jpg);
    line-height: 24px;
    text-align: center;
    font-weight: normal;
  }
  .chuqiulv .chuqiulv-tab span {
    display: inline-block;
    height: 24px;
    border-right: 1px solid #e9ba84;
    box-sizing: border-box;
    cursor: pointer;
  }
  .Ball_tr_H {
    line-height: 16px;
    text-align: center;
    background-color: #FFFFFF;
    height: 27px;
  }
  .chuqiulv table tr td {
    border: 1px #e9ba84 solid;
  }
  .big{
    display: block;
    color: #ff0000;
    width: 33px
  }
  .small{
    display: block;
    color: #0000ff;
    width: 33px;
  }
</style>
