function primeRange() {
    let primes = [];
    let is_prime = true;
    let limit = 0, c = 0, p = 2;
    let count = Number(document.getElementById("count").value);

    while (c<count) {
        limit = Math.ceil(Math.sqrt(p));

        for (let i=0; i<primes.length; i++) {
            if (primes[i] > limit) {
                break;
            }
            else if (p % primes[i] == 0) {
                is_prime = false;
                break;
            }
        }
        if (is_prime) {
            primes.push(p);
            c++;
        }
        is_prime = true;
        p++;
    }
    document.getElementById('printPrimeRange').innerHTML = primes.join(', ');
}