function swap(val) {
    if(val=="first") {
        first.style.display='block';
        second.style.display='none';
        third.style.display='none';
        fourth.style.display='none';
    }else if(val=="second") {
        first.style.display='none';
        second.style.display='block';
        third.style.display='none';
        fourth.style.display='none';
    }else if(val=="third") {
        first.style.display='none';
        second.style.display='none';
        third.style.display='block';
        fourth.style.display='none';
    }else if(val=="fourth") {
        first.style.display='none';
        second.style.display='none';
        third.style.display='none';
        fourth.style.display='block';
    }
}