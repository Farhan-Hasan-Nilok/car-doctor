import { useEffect } from "react";

export default function Title({header}){
    useEffect(() => {
        document.title = 'Car Doctor | ' + header
    }, [header])
}