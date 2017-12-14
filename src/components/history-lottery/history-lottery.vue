<template>
    <div class="page">
        <div>
            <select style="CURSOR: hand" onchange="ReportType(0,this)">
                <option class="font_b" value="3" selected="">重庆时时彩</option>
            </select>
            <span> — 开奖结果查询</span>
        </div>
        
        <table class="t_list" border="0" cellspacing="1" cellpadding="0" width="700">
  <tbody><tr>
    <td class="t_list_caption F_bold" colspan="7">重庆时时彩</td>
    <td class="t_list_caption F_bold" colspan="3">总数</td>
    <td class="t_list_caption F_bold" colspan="4"></td>
    <td class="t_list_caption F_bold" colspan="3">牛牛</td>
  </tr>
  <tr>

  </tr><tr>
	<td class="t_list_caption" width="100">期号</td>
	<td class="t_list_caption" width="110">开奖日期</td>
	<td class="t_list_caption" colspan="5">开奖号码</td>
	<td class="t_list_caption" width="40">总和</td>
	<td class="t_list_caption" width="35">单双</td>
	<td class="t_list_caption" width="35">大小</td>
	<td class="t_list_caption" width="35">龙虎</td>
	<td class="t_list_caption" width="35">前三</td>
	<td class="t_list_caption" width="35">中三</td>
	<td class="t_list_caption" width="35">后三</td>
	<td class="t_list_caption" width="35">牛牛</td>
	<td class="t_list_caption" width="35">大小</td>
	<td class="t_list_caption" width="35">单双</td>
  </tr>
  <tr v-for="n in 6" class="Ball_tr_H" onmouseover="this.style.backgroundColor='#FFFFA2'" onmouseout="this.style.backgroundColor=''" style="">
            <td>20171215002</td>
            <td>17-12-15 00:10</td>
            <td class="No_8" width="27"></td>
            <td class="No_9" width="27"></td>
            <td class="No_2" width="27"></td>
            <td class="No_6" width="27"></td>
            <td class="No_5" width="27"></td>
            <td width="35">30</td>
            <td><span class="Font_r">双</span></td>
            <td><span class="Font_r">大</span></td>
            <td><span class="Font_r">龙</span></td>
            <td>半顺</td>
            <td>杂六</td>
            <td>半顺</td>
            <td><span class="font_R">牛牛</span></td>
           	<td><span class="font_B">牛大</span></td>
           	<td><span class="font_B">牛双</span></td>
  </tr>
  
  <tr class="t_list_bottom">
    <td colspan="2">
      &nbsp;共&nbsp;1906&nbsp;期记录&nbsp;&nbsp; 共&nbsp;128&nbsp;页
    </td>
    <td colspan="15" align="right">
      &nbsp;<span class="Font_b">1</span>&nbsp;<a href="/draw/result/3?v=&amp;p=15">2</a>&nbsp;<a href="/draw/result/3?v=&amp;p=30">3</a>&nbsp;<a href="/draw/result/3?v=&amp;p=45">4</a>&nbsp;<a href="/draw/result/3?v=&amp;p=60">5</a>&nbsp;<a href="/draw/result/3?v=&amp;p=75">6</a>&nbsp;<a href="/draw/result/3?v=&amp;p=15">下一页</a>&nbsp;&nbsp;<a href="/draw/result/3?v=&amp;p=1905">最后页</a>    </td>
  </tr>
</tbody></table>

    </div>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: #4a1a04;
    }
    .page {
        padding: 20px;
    }
    .t_list {
        margin-top: 5px;
        background-color: #e9ba84;
        border: 1px #e9ba84 solid;
        position: relative;
        border-collapse: separate;
        border-spacing: 1px;
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
    .t_list_caption {
        /* background-image: url(/member/images/bg.jpg); */
        line-height: 24px;
        text-align: center;
        color: #4a1a04;
        font-weight: bold;
    }
    .t_list_bottom {
        /* background-image: url(/member/images/bg1.jpg); */
        line-height: 24px;
        text-align: center;
        color: #000000;
    }
    .Font_r {
        color: #FF0000;
    }
    .Font_b {
        font-weight: bold;
    }
    .Font_B {
        color: #2836F4;
    }
    .Font_G {
        color: #299A26;
    }
</style>

