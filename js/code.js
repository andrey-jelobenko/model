function openClose(element) {
    let elem = document.getElementById(element).style.display;
    if (elem == 'none') document.getElementById(element).style.display = 'block';
    else document.getElementById(element).style.display = 'none';
}