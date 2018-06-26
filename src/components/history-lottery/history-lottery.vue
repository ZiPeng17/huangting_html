<template>
    <div class="page">
        <div>
            <select style="CURSOR: hand" onchange="ReportType(0,this)">
                <option class="font_b" value="3" selected="">极速时时彩</option>
            </select>
            <span> — 开奖结果查询</span>
        </div>
        
        <table class="t_list" border="0" cellspacing="1" cellpadding="0" width="700">
  <tbody><tr>
    <td class="t_list_caption F_bold" colspan="7">极速时时彩</td>
    <td class="t_list_caption F_bold" colspan="3">总数</td>
    <td class="t_list_caption F_bold" colspan="4"></td>
    <!--无牛牛数据-->
  </tr>
  <tr>

  </tr><tr>
	<td class="t_list_caption" width="100">期号</td>
	<td class="t_list_caption" width="130">开奖日期</td>
	<td class="t_list_caption" colspan="5">开奖号码</td>
	<td class="t_list_caption" width="40">总和</td>
	<td class="t_list_caption" width="35">单双</td>
	<td class="t_list_caption" width="35">大小</td>
	<td class="t_list_caption" width="35">龙虎</td>
	<td class="t_list_caption" width="35">前三</td>
	<td class="t_list_caption" width="35">中三</td>
	<td class="t_list_caption" width="35">后三</td>
  </tr>
  <tr v-for="(n, index) in data" v-if="curr_page == Math.ceil((index+1)/per_num)" class="Ball_tr_H">
      <!-- <div > -->
            <td>{{n.num}}</td>
            <td>{{n.time}}</td>
            <td :class="'No_'+n.one" width="27"></td>
            <td :class="'No_'+n.tow" width="27"></td>
            <td :class="'No_'+n.three" width="27"></td>
            <td :class="'No_'+n.four" width="27"></td>
            <td :class="'No_'+n.five" width="27"></td>
            <td width="35">{{n.sum}}</td>
            <td><span class="Font_R">{{n.sumsd}}</span></td>
            <td><span class="Font_R">{{n.sums}}</span></td>
            <td><span class="Font_R">{{n.tt}}</span></td>
            <td>{{n.fronts}}</td>
            <td>{{n.mediums}}</td>
            <td>{{n.posts}}</td>
      <!-- </div> -->
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
</tbody></table>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                curr_page: 1,
                per_num: 10, //每页多少显示条数据
                pages: 1,
                data: []
            }
        },
        created() {
            console.log('his')
            this.$http.post( this.global.base_url + '/Admin/Api/Getlist').then(res => {
                // if (res.data.code === '000') {
                    // console.log(res.data);
                    this.data = res.data;
                    this.pages = Math.ceil(this.data.length/this.per_num);
                // } else {
                    // alert(res.data.msg)
                // }
            }, error => {
                console.log(error);
            });
        },
        methods: {
            go_n_page(n) {
                this.curr_page = n;

            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #4a1a04;
    }
    .page {
        padding: 20px;
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

