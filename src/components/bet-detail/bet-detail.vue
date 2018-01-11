<template>
    <div class="page">
        <table class="t_list" border="0" cellspacing="1" cellpadding="0">
            <tbody>
                <tr>
                    <td class="t_list_caption" width="96">游戏类别</td>
                    <td class="t_list_caption" width="65">注单数</td>
                    <td class="t_list_caption" width="100">下注金额</td>
                    <td class="t_list_caption" width="100">结果</td>
                    <td class="t_list_caption" width="80">退水</td>
                    <td class="t_list_caption" width="105">退水后结果</td>
                </tr>
                <tr class="t_list_tr_1">
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
    </div>
</template>
<script>
export default {
  data() {
    return {
        detail: {}
    }
  },
  created() {
    this.$http.post(this.global.base_url + '/Admin/Api/betlist', {user: this.global.userInfo.id}, {emulateJSON:true}).then(res => {
      console.log(res.data);
      if (res.data.code == "000") {
        this.detail = res.data.res
      } else {
        alert(res.data.msg)
      }
    }, error => {
      console.log(error);
    });
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
</style>

