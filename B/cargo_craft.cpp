#include <iostream>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;

    while (t--) {
        long long n;
        cin >> n;

        // If n is odd → impossible
        if (n % 2 == 1) {
            cout << -1 << "\n";
            continue;
        }

        // Max crafts: use all Type A (4 units)
        long long maxCrafts = n / 4;

        // Min crafts: try using Type B (6 units) as much as possible
        long long minCrafts = -1;

        for (long long b = n / 6; b >= 0; b--) {
            long long remaining = n - b * 6;

            if (remaining % 4 == 0) {
                long long a = remaining / 4;
                minCrafts = a + b;
                break; // minimal because b starts large → decreasing
            }
        }

        if (minCrafts == -1)
            cout << -1 << "\n";
        else
            cout << minCrafts << " " << maxCrafts << "\n";
    }

    return 0;
}
