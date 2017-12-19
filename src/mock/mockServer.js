import Mock from 'mockjs';
import axios from 'axios';
import home from './datahome.json';
import surprise from './datasurprise.json';
import sort from './datasort.json';
import all from './dataall.json';

Mock.mock('/home',{data:home});
Mock.mock('/surprise',{data:surprise});
Mock.mock('/sort',{data:sort});
Mock.mock('/all',{data:all});
axios.get('/all')
  .then(function (res) {
    console.log(res.data.data);
  })

