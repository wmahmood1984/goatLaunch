export const writeFunction = async (name,contract,functionName,callBack,callBackError,setToggle,...args)=>{
    console.log("first",...args)
    setToggle(true)
    try {
        const tx1 = await contract[`${functionName}`](...args)
        await tx1.wait()
        if(tx1){
            callBack()
        }        
    } catch (error) {
        console.log(`Error in ${name}`,error)
        callBackError()
    }
}