import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        goodslist: [],
    },
    mutations:{
        initGoodsList(state, newArr) {
            state.goodslist = newArr
        },
        changenum(state,obj){
           for (let typeobj of state.goodslist){
               for(let food of typeobj.foods){
                   if(food.name==obj.name){
                       food.num+=obj.val
                   }
               }
           }

        },        
    },getters:{
        total(state){
            let arr = [] //空数组
            let names = [] //商品名字数组

            for (let typeObj of state.goodslist) {
                for (let food of typeObj.foods) {
                    if (food.num > 0) {
                        //如果当前商品名字在names数组中不存在，才push
                        if (!names.includes(food.name)) {
                            arr.push(food)
                            names.push(food.name)
                        }

                    }
                }
            }
            return arr
            

        },

    }
})
