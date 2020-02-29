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
    <div class="comment" v-for="(v,i) in data"  :key="i">
        <div class="portrait">
            <!-- <img :src="data[i].avatar" alt=""> -->头像
       </div>
       <div class="area">
           <div class="footer">
               <p>{{data[i].username}}</p>
               <p>{{data[i].rateTime}}</p>
           </div>
           <div class="center">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <img src="../assets/imgs/star36_off@2x.png" alt="">
                <span>{{data[i].deliveryTime}}分钟送达</span>
            </div>
            <div class="text">
                <p>{{data[i].text}}</p>

            </div>
            <div class="commend">
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
.comment{
    display: flex;
    height: 100px;
    border-bottom: 1px solid #ccc;
    .portrait{
        width: 60px;
    }
    .area{
        flex: 1;
        align-items: center;
        .footer{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        
        }
        .center{
            display: flex;
            align-items: center;            
            img{
                width: 10px;
                height: 10px;
            }
            span{
                color: #ccc;
                margin-left: 10px;
                font-size: 12px;
            }            
        }
        
    }
}
</style>
