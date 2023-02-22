class LocalStorageAPI {
    loadFromLocalStorage(name){
        try {
            const state = localStorage.getItem(name)
            if(state === null) {
                return undefined
            }
            return JSON.parse(state)
        } catch(event){
            console.warn(event)
            return undefined
        }
    }
    saveToLocalStorage(name, data){
        try{
            let newState
            const state = localStorage.getItem(name)
            if(state){
                newState = JSON.parse(state)
                
            }else{
                newState = []
            }
            newState.push(data)
            localStorage.setItem(name, JSON.stringify(newState));
        }catch(e){
            console.warn(e);
            return undefined
        }
    }
}

export default LocalStorageAPI