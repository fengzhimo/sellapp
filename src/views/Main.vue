<template>
    <div class="main">
        <div class="top">
        <div class="sign" :style="{backgroundImage:'url('+data.avatar+')'}">
            <div class="signleft">
                <img :src='data.avatar' alt="">
            </div>
            <div class="signright">
                <p class="shop"><img src="../assets/imgs/brand@2x.png" alt="">{{data.name}}</p>
                <p class="time">{{data.description}}/{{data.deliveryTime+'分钟'}}</p>
                <p class="discount"><img src="../assets/imgs/decrease_1@3x.png" alt="">{{data.supports[0].description}}</p>
            </div>

        </div>
        <div class="notice"><img src="../assets/imgs/bulletin@2x.png" alt=""> <p>{{data.bulletin}}</p></div>        

        <div class="routerdiv">
            <router-link to='/goods'>商品</router-link> 
            <router-link to='/evaluate'>评价</router-link> 
            <router-link to='/merchant'>商家</router-link> 
        </div>
        </div>
        <!-- 路由出口 -->
        <router-view></router-view>
    <transition  name="slide-fade">
      <div v-show="shopcarShow" class="shopcar-board">
          <Shopcar></Shopcar>
      </div>
    </transition>        
        <div class="shopcar-bar" @click="shopcarShow = !shopcarShow">
            <div>
                <img src="../assets/imgs/shop.png" v-show="getTotalPrice == 0">
                <img src="../assets/imgs/shop1.png" v-show="getTotalPrice != 0">
                <p>￥{{getTotalPrice}}</p>
            </div>
            <div>
                <p>另需配送费￥{{data.deliveryPrice}}元</p>
            </div>
            <div>
                <p v-show="getTotalPrice == 0">￥{{data.minPrice}}起送</p>
                <p v-show="getTotalPrice != 0" style="color:#ffd161;">确定配送</p>
            </div>
        </div>
    </div>
</template>

<script>
import Shopcar from './Shopcar'
import {getSeller} from '../api/apis.js'
import '../assets/styles/reset.css';
export default {
    data(){
        return{
            data:{supports:[{description:''}]},
            shopcarShow: false,
            
        }
    },
    created(){
        getSeller().then((res) => {                
                // console.log(res.data.data.supports[0].description)
                this.data=res.data.data;

                
            })

    },computed:{
    getTotalPrice(){
      let total = 0
      for(let food of this.$store.getters.total){
        total += food.num * food.price
      }

      return total
    }        
    },
    
  components: {
    Shopcar
  }

}
</script>

<style lang='less' scoped>
.routerdiv{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    background: #fff;
    line-height: 30px;
    border-bottom: 1px solid #ccc;
    a{
        text-decoration: none;
        color: #141c27;
        
    }
    a:hover{
            color: red;
        }
}
.shopcar-bar{
    position: fixed;
    height: 40px;
    width: 100%;
    bottom: 0;
    left: 0;
    background:rgba(0,0,0,0.8);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #ccc;
    div:nth-of-type(1){
        display: flex;
        p{
            margin-left: 20px;
        }
        img{
            width: 40px;
            height: 40px;
            position: fixed;
            bottom: 10px;
            left: 10px;            
            }
    }

}
.sign{
    display: flex;
    width: 100%;
    height: 120px;
    justify-content: space-around;
    align-items: center;
    background: #141c27;
    color: #fff;
    .signleft{
        img{
        width: 80px;
        height: 80px;
    }
    }
    .signright{
        .shop{
            display: flex;
            align-items: center;
            img{
                width: 30px;
                height: 20px;
                margin-right: 10px;
            }
            
        }
        .discount{
            display: flex;
            align-items: center;    
                img{
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }        
        }
        
    }
    
}
.notice{
    height: 30px;
    width: 100%;
    background: #141c27;
    color: #fff;

    display: flex;
    align-items: center;
    img{
        margin-left: 20px;
        margin: 10px;
    }
    p{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;        
    }
    
}
html,body,#app{
    width: 100%;
    height: 100%;
}
.main{
    width: 100%;
    height: 100%;
    // display: flex;
}
.top{
    width: 100%;
    height: 180px;
}

.shopcar-board{
  position: fixed;  
  height: 200px;
  width: 100%;
  bottom: 40px;
  background-color:#fff;
  overflow: scroll;
}

.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .4s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(200px);
  opacity: 0;
}
</style>
