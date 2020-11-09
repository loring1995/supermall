import axios from "axios";
// 第一种
// export  function request(config,success,failure) {
//     //创建axios实例
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     //发送网络请求
//     instance(config).then(res=>{
//         console.log(res);
//         success(res)
//     }).catch(err=>{
//         console.log(err);
//         failure(err)
//     })
// }
// 第二种
// export  function request(config) {
//     //创建axios实例
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     //发送网络请求
//     instance(config.baseConfig).then(res=>{
//         config.success(res)
//     }).catch(err=>{
//        config.failure(err)
//     })
// }
// 第三种
// export  function request(config) {
//     return  new Promise(((resolve, reject) => {
//         //创建axios实例
//         const instance=axios.create({
//             baseURL:'http://123.207.32.32:8000',
//             timeout:5000
//         })
//         //发送网络请求
//        instance(config).then(res=>{resolve(res)}).catch(err=>{reject(err)})
//     }))
// }
// 第四种
export function request(config) {

    //创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //发送网络请求
    //请求拦截
    instance.interceptors.request.use(config=>{
        console.log('request');
        console.log(config);
        return config
    },err => {
        console.log(err);
    });
    //响应拦截
    instance.interceptors.response.use(res=>{
        console.log('response');
        console.log(res);
        return res
    },err => {
        console.log(err);
    });
  //发送真正的网络请求
    return instance(config)

}
