function doFirst() {
    document.getElementById('theForm').onsubmit = setEvent
}
function setEvent(e) {
    e.preventDefault()
    let events = ['contextmenu', 'select', 'change', 'input', 'scroll', 'resize']

    for (let i = 0; i < events.length; i++) {
        let yourCheck = document.getElementById(events[i])
        if (yourCheck.checked == true) {
            window.addEventListener(events[i], report)
        } else { window.removeEventListener(events[i], report) }
    }
}
feedback = ''
function report(e) {
    feedback += `${e.target.nodeName}: ${e.type} \n`
    document.getElementById('feedback').value = feedback
}
window.addEventListener('load', doFirst)