function primeRange() {
    let primes = [];
    let is_prime = true;
    let limit = 0;
    let final_number = Number(document.getElementById("finalNumber").value);

    for (let n=2; n<(final_number+1); n++) {
        limit = Math.ceil(Math.sqrt(n));

        for (let i=0; i<primes.length; i++) {
            if (primes[i] > limit) {
                break;
            }
            else if (n % primes[i] == 0) {
                is_prime = false;
                break;
            }
        }
        if (is_prime) {
            primes.push(n);
        }
        is_prime = true;
    }
    document.getElementById('printPrimeRange').innerHTML = primes.join(', ');
}