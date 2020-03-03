<template>
  <div class="goods">
    <div class="left">
      <ul class="content">
        <div v-for="(v,i) in goodslist" :key="i" :class="{leftGoods:true,selected:i==curSelected}" @click="clickleft(i)">
          <img src="../assets/imgs/icon1.png" style='width:12px' v-show="v.type==1">
          <img src="../assets/imgs/icon2.png" style='width:12px' v-show="v.type==2">
        <span>{{v.name}}</span>
        </div>        
      </ul>

    </div>

    <div class="right">
      <ul class="content">
        <div v-for="(v,i) in goodslist" :key="i" :id="i">
          <p class="title">{{v.name}}</p>
          <div class="goodsList" v-for="(val,i2) in v.foods" :key="i2">
            <img :src="val.image" />
            <div class="info">
              <h4>{{val.name}}</h4>
              <p>月售{{val.sellCount}}份 好评率{{val.rating}}%</p>
              <div class="line">
                <span class="price">￥{{val.price}}</span>
                <span class="oldprice">{{val.oldPrice ? `￥`+val.oldPrice:''  }}
                            </span>
                <p class="btn">
                  <button class="reduce"  v-show="val.num>0" @click="add(val.name,-1)">-</button>
                  <span class="num" v-show="val.num==0?false:true">{{val.num}}</span>
                  <button class="add" @click="add(val.name,1)">+</button>
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
      // this.data = res.data.data;
      this.$store.commit('initGoodsList', res.data.data)
    });
  },mounted(){
    new BScroll(document.querySelector('.left'),{click: true});
    this.rightDiv=new BScroll(document.querySelector('.right'),{
      probeType:3
    });
    this.rightDiv.on('scroll',({y})=>{
      let _y = Math.abs(y);
      for(let obj of this.getdivheight){
        if(_y>=obj.min &&_y<obj.max){
          this.curSelected=obj.index;
          return
        }
      }
    })
  },methods:{
    clickleft(i){
      // console.log(i);
      this.curSelected=i;
      this.rightDiv.scrollToElement(document.getElementById(i),600);
    },
    add(name,val){

    this.$store.commit('changenum', {name,val});
    // console.log(this.$store.getters.total)
    }
  },computed:{
    getdivheight(){
      let arr=[];
      let total=0;
      for(let i=0;i<=this.goodslist.length-1;i++){
        // 当前div的高度
        let Divheight= document.getElementById(i).offsetHeight;
        arr.push({min:total, max:total+Divheight, index:i});
        // 每循环一次就累加之前div高度
        total += Divheight;
      }
      // console.log(arr)
      return arr
    },
    goodslist(){
      return this.$store.state.goodslist
    },  
  }
};
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  width: 100%;
  height: 600px;
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
          align-items: center;
          .price {
            color: red;
          }
          .oldprice{
            color:#ccc;
            font-weight:bold;
            font-size:12px;
            text-decoration: line-through;
            margin-left: -150px;
          }
          .btn {
            span{
              border-radius: 50%;
              display: inline-block;
              width: 20px;
              height: 20px;
              color: #000;
              text-align: center;
              }
            button {
            width: 25px;
            height: 25px;
            text-align: center;
            color: #fff;
            line-height: 20px;
            font-weight: bold;
            border-radius: 15px;
            border: 1px solid #00a1dc;
            background-color: #00a1dc;
            margin: 5px;
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