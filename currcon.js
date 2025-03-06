function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    // Updated exchange rates for 2024
    const exchangeRates = {
        USD: { EUR: 0.90, GBP: 0.78, INR: 82.0, AUD: 1.40, CAD: 1.30, JPY: 115, CNY: 6.8 },
        EUR: { USD: 1.11, GBP: 0.87, INR: 91.0, AUD: 1.56, CAD: 1.44, JPY: 127, CNY: 7.5 },
    };

    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
        document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').innerText = 'Conversion rate not available.';
    }
}
