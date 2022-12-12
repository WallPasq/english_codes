function primeRange(initial_number, final_number) {
    let primes = [];
    let is_prime = true;
    let limit = 0;
    for (let n = 2; n < (final_number + 1); n++) {
        limit = Math.ceil(n / 2);
        for (let i = 0; i < primes.length; i++) {
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
    primes = primes.filter(prime => prime >= initial_number);
    return primes;
}
