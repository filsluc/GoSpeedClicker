let click_cnt = 0;
let timer_cnt = 30;
let timer_started = false;
let click_local_storage = window.localStorage.getItem("click_cnt");

if(click_local_storage != null) {
    click_cnt = parseInt(click_local_storage);
}

document.getElementById("click_cnt").innerText = click_cnt;
document.getElementById("timer_cnt").innerText = timer_cnt;

document.getElementById("start_btn").addEventListener("click", function() {
    timer_started = true;
    let timer_id = setInterval(function() {
        if(timer_cnt > 0) {
            timer_cnt--;
            document.getElementById("timer_cnt").innerText = timer_cnt;
        } else {
            timer_started = false;
            timer_cnt = 30;
            clearInterval(timer_id);
        }
    }, 1000);
});

document.getElementById("click_cnt_btn").addEventListener("click", function() {
    if(timer_started) {
        click_cnt++;
        document.getElementById("click_cnt").innerText = click_cnt;
        window.localStorage.setItem("click_cnt", click_cnt);
    }
})
