var inp;
for(var i = 0 ; i < 5 ; i++) {
    inp = readline().split(" ");
    for(var j=0;j<5;j++){
        if(inp[j]==1){
            //Calculating the number of steps to place 1 in the middle
            print(Math.abs(2-i)+Math.abs(2-j))
        }
    }
}
