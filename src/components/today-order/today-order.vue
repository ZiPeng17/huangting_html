<template>
    <div class="page">
        <div>
            <select style="CURSOR: hand" onchange="ReportType(0,this)">
                <option class="font_b" value="3" selected="">重庆时时彩</option>
            </select>
            <span> — 今日账单</span>
        </div>
        <table class="t_list" border="0" cellspacing="1" cellpadding="0">
            <tbody>
                <tr>
                    <td class="t_list_caption" width="96">期号</td>
                    <td class="t_list_caption" width="130">开奖时间</td>
                    <td class="t_list_caption" width="65">注单数</td>
                    <td class="t_list_caption" width="100">下注(有效)金额</td>
                    <td class="t_list_caption" width="100">结果</td>
                    <td class="t_list_caption" width="80">退水</td>
                    <td class="t_list_caption" width="105">退水后结果</td>
                </tr>
                <tr class="t_list_bottom">
                    <td colspan="2">合计</td>
                    <td>0</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right">0.00&nbsp;</td>
                    <td class="f_right Font_R">0.00&nbsp;</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

<style scoped>
    .page {
        padding: 20px;
    }
    .t_list {
        margin-top: 5px;
        background-color: #e9ba84;
        border: 1px #e9ba84 solid;
        position: relative;
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
</style>

