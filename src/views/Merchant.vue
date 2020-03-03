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

        <div class="notice" style="padding: 0.5em 1em">
            <p>公告与活动</p>
            <div class="describe">
            <p>{{this.data.bulletin}}</p>
            </div>
            <div>
                <div v-for="item in this.data.supports" :key="item.id"  class="activity">
                    <p style="padding:0.5em 0em">      
                        <img v-show=" item.type ==  0" src="../assets/imgs/discount_1@2x.png" style="width:20px">
                        <img v-show=" item.type ==  1" src="../assets/imgs/decrease_1@2x.png" style="width:20px">
                        <img v-show=" item.type ==  2" src="../assets/imgs/invoice_1@2x.png" style="width:20px">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
      
        <div class="science" >
            <p>商家实景</p>
            <p class="p-box"><img :src="v" v-for="(v,i) in this.data.pics" :key="i"></p>
        </div>
        <div class="information">
            <p>商家信息</p>
            <p v-for="(v,i) in this.data.infos" :key="i" class="details">{{v}}</p>

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
                console.log(this.data.supports)
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
.notice{
    p:nth-of-type(1){
        font-size: 18px
    }
    .describe{
        height: 100px;
        border-bottom: 1px solid #ccc;
        p{
            color: red;
            font-size: 14px;
            margin-left: 20px;
        }
    }
    .activity{
        p{
        display: flex;
        align-items: center;
        font-size: 16px;
        border-bottom: 1px solid #ccc;
        }

    }   
}
.science{
    height: 140px;
    border-bottom: 1px solid #ccc;
    p:nth-of-type(1){
        font-size: 18px;
        padding: 0.5em 1em;
    }
    .p-box{
        img{
            width: 80px;
            height: 60px;
            margin: 2%;

        }
    }    
}
.information{
     p:nth-of-type(1){
        font-size: 18px;
        padding: 0.5em 1em;
        border-bottom: 1px solid #ccc;
    }   
     .details{
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        text-indent: 20px;

    }   
    p:last-of-type{
        margin-bottom: 40px;
    }  
}

</style>