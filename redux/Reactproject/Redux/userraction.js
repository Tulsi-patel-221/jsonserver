export const insert =(data)=>{
    return {
        type:"INSERT",
        payload:data
    }
}

export const deleteFun =(id)=>{
    return {
        type:"DELETE",
        payload:id
    }
}
export const update =(id,data)=>{
    return {
        type:"UPDATE",
        payload:{id,data}
    }
}