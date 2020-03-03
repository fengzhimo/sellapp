<template>
<div class="evt">
    <div class="evaluate-div">
        <div class="left">
            <p>3.9</p>
            <p>综合评分</p>
            <p>高于周边商家69.2%</p>
        </div>
        <div class="right">
            <div class="service">
                <p>服务态度</p>
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star36_off@2x.png" alt="">
                <span>3.9</span>
            </div>
            <div class="service">
                <p>服务态度</p>
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star36_off@2x.png" alt="">
                <span>4.0</span>
            </div>
            <p>送达时间 <span>44分钟</span></p>
       </div>
    </div>
    <div class="pleased">
        <div>全部 <small>57</small> </div>
        <div>满意<small>47</small></div>
        <div>不满意<small>10</small></div>
    </div>
    <div class="content">
        <p><Icon type="ios-add-circle-outline" />只看有内容的评价</p>
    </div>
            <div class="list">
                <div v-for="msg in data" :key="msg.id">
                    
                    <div class="msg">
                        <div class="left"><img :src="msg.avatar" alt=""></div>
                        <div class="right">
                            <p><span>{{msg.username}}</span><span>{{msg.rateTime}}</span></p>
                            <p><span>{{msg.deliveryTime ? msg.deliveryTime+`分钟送达`:''}}</span></p>
                            <p>{{msg.text}}</p>
                            <p>
                                <span  v-for="good in msg.recommend" :key="good.name">{{good}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import {getRating} from '../api/apis.js'
export default {
    data(){
        return{
            data:{}

        }
    },
    created(){
        getRating().then((res) => {                
                // console.log(res.data.data)
                this.data=res.data.data;
                      this.data.forEach(function(v) {
        function newtime(sjx) {
          var sj = new Date(sjx);
          var year = sj.getFullYear();
          var month = sj.getMonth() + 1;
          if (month < 10) {
            month = "0" + month;
          }
          var day = sj.getDate();
          if (day < 10) {
            day = "0" + day;
          }
          var hours = sj.getHours();
          if (hours < 10) {
            hours = "0" + hours;
          }
          var minutes = sj.getMinutes();
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          var seconds = sj.getSeconds();
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
          return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        }
        v.rateTime = newtime(v.rateTime);
      });
                
                
            })

    }

}
</script>

<style lang='less' scoped>
.evaluate-div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    border-bottom: 1px solid #ccc;
    .left{
        p:nth-of-type(1){
            font-size: 24px;
            color: rgb(252, 152, 13)
        }
        p:nth-of-type(2){
            font-size: 14px;
        }         
        p:nth-of-type(3){
            font-size: 12px;
            color: #ccc
        }        
    }
    .right{
        .service{
            display: flex;
            align-items: center;
            p{
                margin-right: 5px;
            }
            img{
                width: 20px;
                height: 20px;
                margin: 5px;
            }
            span{
                color: rgb(252, 152, 13);
                margin-left: 10px;
            }
        }
        p{
            margin-top: 5px;
            span{
                color: #ccc;
                margin-left: 10px;
            }
        }
    }
}
.pleased{
    margin-top: 20px;
    height: 60px;
    display: flex;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    justify-content:flex-start;
    align-items: center;
    div{
        line-height: 40px;
        margin: 10px;
        text-align: center;
    }
    div:nth-of-type(1){
        width: 80px;
        height: 40px;
        background: #2d8cf0;
    }
    div:nth-of-type(2){
        width: 80px;
        height: 40px;
        background: #5cadff;

    }
    div:nth-of-type(3){
        width: 80px;
        height: 40px;
        background: #e8eaec;
    }
    
    
}
.content{
    height: 40px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    color: #ccc;
}
        .list{
            border-top: 1px solid #e5e6e8;
            .msg{
                padding: 20px;
                border-bottom: 1px solid #e5e6e8;
                display: flex;
                .left{
                    width: 30px;
                    height: 30px;
                    border-radius: 15px;
                    margin-right: 10px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .right{
                    flex: 1;
                    color: #97989A;
                    p:nth-of-type(1){
                        font-size: 12px;
                        display: flex;
                        justify-content: space-between;
                        span:nth-child(1){ 
                            color: #1B2026;
                        }
                    }
                    p:nth-of-type(2){
                        font-size: 12px;  
                        line-height: 14px;
                        margin: 5px 0;  
                    }
                    p:nth-of-type(3){
                        font-size: 14px;
                        color: #1B2026;
                        width: 300px;
                        white-space: wrap;
                    }
                    p:nth-of-type(4){
                        width: 70%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        span{
                            display: inline-block;
                            width: 50px;
                            height: 12px;
                            border: 1px solid #e5e6e8;
                            margin-right: 5px;
                            font-size: 10px;
                            text-align: center;
                        }
                    }
                }
            }
        }
</style>
