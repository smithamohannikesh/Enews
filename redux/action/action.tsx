import http from '../../http/http'
import CONSTS from '../../constants/constants'
export const getAllposts=(page:number)=>{
    //search_by_date?tags=story&page=0
    return async(dispatch:any)=>{
        const result= await http.get(`search_by_date?tags=story&page=${page}`)
        if(result){
           // console.log(result.data)
            const posts=result.data.hits.map((res:any)=>{
                res.key=(Math.random()*1000000).toString();
                return res;
            })
           // console.log(posts)
            dispatch({type:CONSTS.GET_POST,posts})
        }

    }
}