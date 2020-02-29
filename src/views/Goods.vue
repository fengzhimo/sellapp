<template>
  <div class="goods">
    <div class="left">
      <ul class="content">
        <div v-for="(v,i) in data" :key="i" :class="{leftGoods:true,selected:i==curSelected}" @click="clickleft(i)">
          <img src="../assets/imgs/icon1.png" style='width:12px' v-show="v.type==1">
          <img src="../assets/imgs/icon2.png" style='width:12px' v-show="v.type==2">
        <span>{{v.name}}</span>
        </div>        
      </ul>

    </div>

    <div class="right">
      <ul class="content">
        <div v-for="(v,i) in data" :key="i" :id="i">
          <p class="title">{{v.name}}</p>
          <div class="goodsList" v-for="(val,i) in v.foods" :key="i">
            <img :src="val.image" />
            <div class="info">
              <h4>{{val.name}}</h4>
              <p>月售{{val.sellCount}}份 好评率{{val.rating}}%</p>
              <div class="line">
                <span class="price">￥{{val.price}}</span>
                <p class="buy">
                  <span class="reduce">-</span>
                  <span class="num">{{val.num}}</span>
                  <span class="add">+</span>
                </p>
              </div>
            </div>
          </div>
        </div>        
      </ul>

    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/apis.js";
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      data: {},
      curSelected:'',
    };
  },
  created() {
    getGoods().then(res => {
      // console.log(res.data.data);
      this.data = res.data.data;
    });
  },mounted(){
    new BScroll(document.querySelector('.left'),{click: true});
    this.rightDiv=new BScroll(document.querySelector('.right'));
  },methods:{
    clickleft(i){
      // console.log(i);
      this.curSelected=i;
      this.rightDiv.scrollToElement(document.getElementById(i),600);
    }
  }
};
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  height: 500px;
  flex: 1;
  .left {
    width: 80px;
    height: 100%;
    font-size: 12px;
    background: #f4f5f7;
    overflow: scroll;
    .leftGoods{
      height: 60px;
      margin: 0 8px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    overflow: hidden;
    text-align: left;
    overflow: scroll;
    
    .title {
      padding: 5px;
      background: #f3f6f6;
    }
    .goodsList {
      display: flex;
      padding: 5px;
      border-bottom: 1px solid #dbdede;
      margin: 2px;
      img {
        flex: 1;
        width: 60px;
        height: 60px;
      }
      .info {
          padding-left: 5px;
        flex: 3;
        .line {
          display: flex;
          justify-content: space-between;
          .price {
            color: red;
          }
          .buy {
            span:not(:nth-child(2)) {
              border-radius: 50%;
              display: inline-block;
              width: 20px;
              height: 20px;
              color: #fff;
              text-align: center;
              background: #00a1dc;
            }
            .reduce,.num{
                display: none !important;
            }
          }
        }
      }
    }
  }
}
.selected{
  background: #fff;
  margin: 0 !important;
}
</style>