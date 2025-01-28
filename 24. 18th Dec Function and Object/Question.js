function rec(num) {
    if (num==1){
        return 1;
    }
    console.log(num);
 rec(num-1);
}
rec(5);