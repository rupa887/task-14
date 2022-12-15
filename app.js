const intialPrice= document.querySelector("#intial-value");
const noOfStock= document.querySelector("#no-of-stocks");
const currentPrice= document.querySelector("#current-value");
const btn=document.querySelector("#tell-me");
const output=document.querySelector("#output");

function profitAndLoss(intial,noStock,current){


    var profit;
    var profitPercentage;
    var loss;
    var lossPercentage;
    var costPrice=intial * noStock;
    var sellingPrice=current * noStock
    console.log("Cost Price",costPrice);
    console.log("Selling Price",sellingPrice);

    if(costPrice > sellingPrice){
        loss=costPrice-sellingPrice;
        lossPercentage=(loss/costPrice)*100;
        lossPercentage=lossPercentage.toFixed(2);
        output.innerText="Loss is:  "+loss+" and the Loss Percentge: "+lossPercentage+"%"
        console.log("Loss is:  "+loss+" and the Loss Percentge: "+lossPercentage+"%");

    }else if(costPrice < sellingPrice){
        profit=sellingPrice-costPrice;
        profitPercentage=(profit/costPrice) * 100;
        profitPercentage=profitPercentage.toFixed(2);
        output.innerText="Profit is:  "+profit+" and the Profit Percentge: "+profitPercentage+"%"
        console.log("Profit is:  "+profit+" and the Profit Percentge: "+profitPercentage+"%");

    }else if(costPrice == sellingPrice){
        output.innerText="No Loss & No profit"
    }


}


function clickHandler(){
    var intialStocksValue=Number(intialPrice.value);
    var stocks=Number(noOfStock.value);
    var currentStocksValue =Number(currentPrice.value)
    console.log("Value provided by customet: ",intialStocksValue,stocks,currentStocksValue);
    if(intialStocksValue == '' || stocks == '' || currentStocksValue == '' ||intialStocksValue <= 0 || stocks<=0 || currentStocksValue <=0){
        output.classList.add("text");
        output.innerText="Enter Valid input."

    }else{
            output.classList.remove("text");
            profitAndLoss(intialStocksValue,stocks,currentStocksValue);
    }  
}

btn.addEventListener('click',clickHandler);