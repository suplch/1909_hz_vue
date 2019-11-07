<template>
    <div class="filter">
        <div class="days">
            <div v-for="day of days">{{day.text}}</div>
        </div>
        <div class="condition">
            <div>全城</div>
            <div>品牌</div>
            <div>特色</div>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    const mapDate = {
        '0': '日',
        '1': '一',
        '2': '二',
        '3': '三',
        '4': '四',
        '5': '五',
        '6': '六',
    };
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    export default {
        name: "FilterMovie",
        data() {
            let d1 = new Date();
            let d2 = new Date(d1.getTime() + DAY);
            let d3 = new Date(d2.getTime() + DAY);
            let d4 = new Date(d3.getTime() + DAY);
            let d5 = new Date(d4.getTime() + DAY);

            return {
                days: [
                    {text: `今天${d1.getMonth() + 1}月${d1.getDate()}日`},
                    {text: `明天${d2.getMonth() + 1}月${d2.getDate()}日`},
                    {text: `后台${d3.getMonth() + 1}月${d3.getDate()}日`},
                    {text: `周${mapDate[d4.getDay()]} ${d4.getMonth() + 1}月${d4.getDate()}日`},
                    {text: `周${mapDate[d5.getDay()]} ${d5.getMonth() + 1}月${d5.getDate()}日`},
                ]
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .filter {
        border: solid green 1px;
    }
    .days {
        border: solid blue 1px;
        overflow: scroll;
        white-space: nowrap;
    }
    .days > div {
        display: inline-block;
        width: 125px;
    }

    .condition {
        border: solid blue 1px;
        white-space: nowrap;
    }

    .condition > div {
        display: inline-block;
        width: 125px;
        text-align: center;
    }

</style>
