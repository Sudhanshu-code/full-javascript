const array = []

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}


// break and continue

for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log(`5 is found`)
        break // stops the loop
    }
    console.log(`value of i is ${i}` )
    
}


for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log(`5 is found`)
        continue // skip this iteration or value
    }
    console.log(`value of i is ${i}` )
    
}

