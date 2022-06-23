import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex);

//2.创建Store对象

const state = {
    cartlist: [],
}

//3.挂载 Vue 实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})