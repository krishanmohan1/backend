const asynchandler = (requestHandler)=>{
    (req, res, next)=>{
            Promise.resolve(requestHandler(req, res, next)).catch((err)=> next(err))
    }
}
export { asynchandler }


// const asynchandler = () => {}
// const asynchandler = (dun) => {()=>{}}
// const asynchandler = (dun) => async ()=>{}



// const asynchandler = (fn) => async (req, res, next) =>{
//     try {
//         await fn(req, res, next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message : error.message
//         })
        
//     }
// }