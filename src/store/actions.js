import axios from 'axios';
export default {
  reqhome ({commit}){
    axios.get('/home').then(response=>{
      let home = response.data.data;
      commit('receivehome',{home})
    })
  },
  reqsurprise ({commit}){
    axios.get('/surprise').then(response=>{
      let surprise = response.data.data;
      commit('receivesurprise',{surprise})
    })
  },

}
