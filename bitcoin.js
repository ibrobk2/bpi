let bpi = {
    api : "https://api.coindesk.com/v1/bpi/currentprice.json",
    getData : function () {
        fetch(
            this.api
            )
        .then((response)=>response.json())
        .then((x)=> this.displayData(x));
    },
    displayData : function (x) {

        const dollars = {rate:rate, symbol:symbol} = x.bpi['USD'];
        const pound = {rate:rate, symbol:symbol} = x.bpi['GBP'];
        const euro = {rate:rate, symbol:symbol} = x.bpi['EUR'];

        document.querySelector('.dollar').innerHTML = "Price in Dollars: "+dollars.symbol+dollars.rate;
        document.querySelector('.pound').innerHTML = "Price in Pounds: "+pound.symbol+pound.rate;
        document.querySelector('.euro').innerHTML = "Price in Euros: "+euro.symbol+euro.rate;
        // document.querySelector('span').innerText = "Price in Dollars: "+dollars.rate;
        
        
    }
}

const relod = () => bpi.getData();

setInterval(relod, 1000);