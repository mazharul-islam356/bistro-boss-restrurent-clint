import { useEffect, useState } from "react"

const useMenu = () => {
    const [items,setItem] = useState([])

    
    useEffect(()=>{
        fetch('http://localhost:5001/menu')
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    return [items]
 
}
export default useMenu;