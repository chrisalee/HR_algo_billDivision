/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

const bonAppetit = (bill, k, b) => {
    let sum = 0

    for(let i = 0; i < bill.length; i++){
    // Only add to the items if bill index is not equal to the mentioned index
        if(i != k){
            sum+= bill[i];
        }   
    }
  
    // Check if anna overpaid Brain
    if((sum/2) === b){
        console.log("Bon Appetit");
        return "Bon Appetit";
    }else{
        console.log(Math.abs(b - (sum/2)));
        return Math.abs(b - (sum/2));
    }
}
