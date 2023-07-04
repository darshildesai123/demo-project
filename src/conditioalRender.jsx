import React from 'react'

function ConditioalRender({isLoggedIn}) {

    return(
        isLoggedIn && <div>Hello World</div>
    )

    // return(
    //     isLoggedIn === "visit" ?
    //     <div>pleaes visit <a href="https://google.com">Here</a></div> :
    //     isLoggedIn ? 
    //     <div> Welcome Ronak</div>:
    //     <div>pleaes login <a href="https://google.com">Here</a></div>
    // )



//   if(isLoggedIn){
//     return (
//     <div>
//       Welcome Ronak
//     </div>
//   )
// }else{
//     return(
//         <div>pleaes login <a href="https://google.com">Here</a></div>
//     )
// }
}

export default ConditioalRender;
