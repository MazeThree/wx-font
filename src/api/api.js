//引入fly实例
import Fly from "flyio/dist/npm/wx"
import qs from 'qs';

let fly = new Fly

fly.config.headers={'Content-Type':'application/x-www-form-urlencoded'}
fly.config.baseURL="http://localhost:80"
// var instance = axios.create({ 
//     headers: {'content-type': 'application/x-www-form-urlencoded'} }); 

export const Login = params => { return fly.post(`/wx/login.php`, qs.stringify(params)).then(res => res.data); };

export const Search = params => { return fly.post(`/wx/class/getclasslist.php`, qs.stringify(params)).then(res => res.data); };

export const joinClass = params => { return fly.post(`/wx/class/join.php`, qs.stringify(params)).then(res => res.data); };

export const getclasslist = params => { return fly.post(`/wx/class/getclasslist.php`, qs.stringify(params)).then(res => res.data); };

export const getscore = params => { return fly.post(`/wx/class/getscore.php`, qs.stringify(params)).then(res => res.data); };

export const finish = params => { return fly.post(`/wx/class/finish.php`, qs.stringify(params)).then(res => res.data); };