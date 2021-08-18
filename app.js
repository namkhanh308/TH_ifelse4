let btn = document.getElementById("btn")
btn.addEventListener("click",countday)
function countday(){
    let kq = document.getElementById("kq")
    let inp = parseInt(document.getElementById("inp").value)
    console.log(inp)
    switch (inp){
        case 4:
        case 6:
        case 9:
        case 11:
            kq.innerHTML = `Thang ${inp} có 30 ngày`;
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            kq.innerHTML = `Thang ${inp} có 31 ngày`;
            break;
        case 2:
            kq.innerHTML = `Thang ${inp} có 28 ngày hoặc 29 ngày`;
            break;
        default:
            kq.innerHTML = `Thang ${inp} không có`;
            break;
    }
}