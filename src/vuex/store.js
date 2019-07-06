import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex );//使用Vuex

const state={
    nodeVoteCount:1,//node的初始票数
    vueVoteCount:2,//vue的初始票数
//  islogin:false,
};
const mutations={
   
    ADDNODEVOTE(state){
        state.nodeVoteCount++;
    },
    //为vueVoteCount加1
    ADDVUEVOTE(state,voteNum=1){//这里的state即是上面定义的state常量
        state.vueVoteCount+=voteNum;;
    }
}
const getters={
	sumCount(){
		return state.nodeVoteCount+state.vueVoteCount
	}
}


export default new Vuex.Store({
    state,
    mutations,
    getters
})
