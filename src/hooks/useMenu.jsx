import { useEffect, useState } from "react"

const useMenu = () => {
    const [items,setItem] = useState([])

    
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    return [items]
 
}
export default useMenu;