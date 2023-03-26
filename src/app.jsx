

// component Base

// import { useState } from "react"
// // import Avavtar from "./compenents/avatar"

// // Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
// const App = () => {
//     const [getMinutes, setGetMinutes] = useState(new Date().getSeconds())
//     function increase(){
//         setGetMinutes(getMinutes + 1)
//     }
//     return <div>
        
//         <p>{new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}</p>
//         <button onClick={increase}>Tăng dần</button>
//     </div>
// }

// export default App

// component Base
import { useState } from "react"
import Square from "./compenents/square"
import Board from "./compenents/board"

// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
// State: Là trạng thái (bộ nhớ) của component, nó quyết định componetn được hiện thị như thế nào
const App = () => {

    return <div
        className="h-[100vh] flex flex-col justify-center items-center">
        <Board>
        </Board>
    </div>
}

export default App