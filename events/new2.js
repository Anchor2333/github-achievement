function doFirst(){
    // 跟 HTML 產生關連，再建事件聆聽功能
    document.getElementById('theForm').onsubmit = setEvent
}
function setEvent(e){
    // console.log(e);
    e.preventDefault()

    let events = ['contextmenu','select','change','input','scroll','resize']

    for(let i = 0; i < events.length; i++){
        let yourCheck = document.getElementById(events[i])
        
        if(yourCheck.checked == true){
            document.addEventListener(events[i], report)
        }
            
    }
    }  

    
    
    feedback = ''
function report(e){
    // P: contextmenu
    feedback += `${e.target.nodeName}: ${e.type} \n`
    document.getElementById('feedback').value = feedback
}
window.addEventListener('load',doFirst)