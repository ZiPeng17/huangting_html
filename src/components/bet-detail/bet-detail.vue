<template>
    <div class="page">
        <table class="t_list" border="0" cellspacing="1" cellpadding="0" v-if="!show_detail">
            <tbody>
                <tr>
                    <td class="t_list_caption" width="96">游戏类别</td>
                    <td class="t_list_caption" width="65">注单数</td>
                    <td class="t_list_caption" width="100">下注金额</td>
                    <td class="t_list_caption" width="100">结果</td>
                    <td class="t_list_caption" width="80">退水</td>
                    <td class="t_list_caption" width="105">退水后结果</td>
                </tr>
                <tr class="t_list_tr_1" @click="see_detail">
                    <td>重庆时时彩</td>
                    <td>{{detail.num}}</td>
                    <td class="f_right">{{detail.money}}&nbsp;</td>
                    <td class="f_right">{{detail.res}}&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right Font_R">0.00&nbsp;</td>
                </tr>
                <tr class="t_list_bottom">
                    <td>合计</td>
                    <td>{{detail.num}}</td>
                    <td class="f_right">{{detail.money}}&nbsp;</td>
                    <td class="f_right">{{detail.res}}&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right Font_R">0.00&nbsp;</td>
                </tr>
            </tbody>
        </table>

        <table v-else class="t_list" border="0" cellspacing="1" cellpadding="0" width="700">
            <tbody>
            <tr>
                <td class="t_list_caption" width="100">订单编号</td>
                <td class="t_list_caption" width="130">下注时间</td>
                <td class="t_list_caption" width="40">下单期号</td>
                <td class="t_list_caption" width="35">玩法</td>
                <td class="t_list_caption" width="35">下单金额</td>
                <td class="t_list_caption" width="35">盈亏金额</td>
            </tr>
            <tr v-for="(n, index) in data" v-if="curr_page == Math.ceil((index+1)/per_num)" class="Ball_tr_H">
                <td>{{n.num}}</td>
                <td>{{n.time}}</td>
                <td>{{n.id}}</td>
                <td>{{n.gam}}</td>
                <td>{{n.money}}</td>
                <td>{{n.have ? n.have : '0.00'}}</td>
            </tr>
            
            <tr class="t_list_bottom">
                <td colspan="2">
                &nbsp;共&nbsp;{{data.length}}&nbsp;期记录&nbsp;&nbsp; 共&nbsp;{{pages}}&nbsp;页
                </td>
                <td colspan="15" align="right">
                    <span class="pageIndex noCurrPageIndex" @click="go_n_page(1)" v-if="curr_page > 5">第一页</span>
                    <span class="pageIndex noCurrPageIndex" @click="go_n_page(curr_page-1)" v-if="curr_page > 1">上一页</span>
                    <span v-for="n in pages" @click="go_n_page(n)">
                        <span v-if="(curr_page-n) >= -5 && (curr_page-n) <= 5" :class="[curr_page == n ? 'default' : 'noCurrPageIndex', 'pageIndex']">{{n}}</span>
                    </span>
                    <span v-if="pages > 5 && curr_page < pages" class="pageIndex noCurrPageIndex" @click="go_n_page(curr_page+1)">下一页</span>
                    <span v-if="pages > 5 && curr_page < (pages-5)" class="pageIndex noCurrPageIndex" @click="go_n_page(pages)">最后页</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
        detail: {},
        show_detail: false,
        curr_page: 1,
        per_num: 10, //每页多少显示条数据
        pages: 1,
        data: []
    }
  },
  created() {
    this.$http.post(this.global.base_url + '/Admin/Api/betlist', {user: this.global.userInfo.id}, {emulateJSON:true}).then(res => {
      console.log(res.data);
      if (res.data.code == "000") {
        this.detail = res.data.res
        
        this.pages = Math.ceil(this.detail.num/this.per_num);
      } else {
        alert(res.data.msg)
      }
    }, error => {
      console.log(error);
    });
  },
  methods: {
      see_detail() {
        this.show_detail = true;
        this.get_data()
      },
      go_n_page(n) {
        this.curr_page = n;
        this.get_data()
      },
      get_data() {
        this.$http.post( this.global.base_url + '/Admin/Api/getbetlist', {user: this.global.userInfo.id, page:this.curr_page}, {emulateJSON:true}).then(res => {
        //   console.log(res);
            if (res.data.code == "000") {
                this.data = res.data.msg;
            } else {
                alert(res.data.msg)
            }
        }, error => {
          console.log(error);
        });
      }
  }
}
</script>

<style scoped>
    .page {
        padding: 20px;
    }
    td {
        cursor: default;
    }
    a {
        text-decoration: none;
        color: #4a1a04;
    }
    .Ball_tr_H {
        line-height: 16px;
        text-align: center;
        background-color: #FFFFFF;
        height: 27px;
    }
    .Ball_tr_H td {
        padding-top: 5px;
    }
    .pageIndex {
        margin-right: 4px;
    }
    .default {
        cursor: default;
        font-weight: bold;
    }
    .noCurrPageIndex:hover {
        color: #c15422;
        cursor: pointer;
        text-decoration: underline;
    }
</style>

