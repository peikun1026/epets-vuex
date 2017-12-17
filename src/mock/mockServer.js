import Mock from 'mockjs';
import home from './datahome.json';
import surprise from './datasurprise.json';
import axios from 'axios'
Mock.mock('/home',{data:home});
Mock.mock('/surprise',{data:surprise});
axios.get('/surprise')
  .then(function (res) {
    console.log(res.data.data);
  })
console.log('mock');

