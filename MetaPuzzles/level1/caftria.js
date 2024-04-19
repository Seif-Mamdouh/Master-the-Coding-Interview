function getMaxAdditionalDinersCount(N, K, M, S) {

    let sorted = S.sort((a, b) => a - b);
  
    let personSeated = 0;
    let start = 1;
    let range = 0;
  
    for (seatedDiner of sorted) {
        range = seatedDiner - start;
        personSeated += Math.floor(range / (K + 1));
        start = seatedDiner + K + 1;
        console.log("start", start)
    }
}


    // for(long seatedDiner : S){
    //   range = seatedDiner - start;
    //   guests += (long)(Math.floor(range/(K + 1)));
    //   start = seatedDiner + K + 1;
    // }
    // range = N - start + 1;
    // guests += Math.ceil(range/ (K+1));
    

    // return guests;

getMaxAdditionalDinersCount(10, 1, 2, [2, 6])