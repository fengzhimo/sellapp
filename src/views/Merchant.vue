<template>
        <div>
        <div class="summary">
        <div class="left">
            <p>{{data.name}}</p>
            <p><img src="../assets/imgs/star24_on@2x.png" alt="">
            <img src="../assets/imgs/star24_on@2x.png" alt="">
            <img src="../assets/imgs/star24_on@2x.png" alt="">
            <img src="../assets/imgs/star24_on@2x.png" alt="">
            <img src="../assets/imgs/star36_off@2x.png" alt="">
            <span>({{data.ratingCount}})</span>
            <span>月售{{data.sellCount}}单</span>
            </p>
        </div>
            <div class="right">
                <img src="../assets/imgs/star24_on@2x.png" alt="">
                <p>已收藏</p>
            </div>
        </div>

        <div class="delivery">
            <div>
                <p class="fontsmall">起送价</p>
                <p class="fontbig">{{data.minPrice}}元</p>
            </div>
            <div>
                <p class="fontsmall">商家配送</p>
                <p class="fontbig">{{data.deliveryPrice}}元</p>
            </div> 
            <div>
                <p class="fontsmall">平均配送时间</p>
                <p class="fontbig">{{data.deliveryTime}}分钟</p>
            </div>             

        </div>

        <div>
            
        </div>

    </div>
</template>

<script>
import {getSeller} from '../api/apis.js'
export default {
    data(){
        return{
            data:{}

        }
    },
    created(){
        getSeller().then((res) => {                
                console.log(res.data.data.supports[0].description)
                this.data=res.data.data;
                })

    }

}
</script>

<style lang="less" scoped>
.summary{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #ccc;
    .left{
        img{
        width: 20px;
        height: 20px;   
        margin-right: 5px;         

        }
        span{
            margin: 5px;
        }
    }
    .right{
        img{
            width: 30px;
            height: 30px;
            margin-left: 5px;
        }
    }

}
.delivery{
    display: flex;
    justify-content: space-around;
    height: 60px;
    border-bottom: 1px solid #ccc;
    align-items: center;
    text-align: center;
    .fontsmall{
        font-size: 12px;
        color: #ccc;
        line-height: 20px;
    }
    .fontbig{
        font-size: 22px;
        color: #000;
    }
}

</style>