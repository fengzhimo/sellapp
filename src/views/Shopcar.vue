<template>
  <div>
    <div v-for="(v,i) in this.$store.getters.total" :key="i" class="board">
        <span>{{v.name}}</span>
        <div class="btn">
          <button @click="add(v.name, -1)">-</button>
          <span>{{v.num}}</span>
          <button @click="add(v.name, 1)">+</button>
        </div>
        <span>{{v.num*v.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  // 这里取值肯定会用到getters，为什么？ 因为购物车只渲染数量不为0的商品，数量为0它是不会渲染的！
  computed: {
    shopcargoods() {
      return this.$store.getters.total;
    }
  },
  methods: {
    add(name,val){

    this.$store.commit('changenum', {name,val});
    // console.log(this.$store.getters.total)
    }
  }
};
</script>

<style lang="less" scoped>
  .board{
      height: 60px;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      span{
        width: 30%;
        font-size: 16px;
        margin: 0,10px;
        text-align: center;
      }
      .btn{
        width: 40%;
        text-align: center;
        span{
          margin: 0 5px;
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

</style>
