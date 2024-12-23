#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int MaxSubArrSum(vector<int>& arr) {
    int n = arr.size();
    int maxi = INT_MIN;
    int CurrSum = 0;

    for (int i = 0; i < n; ++i) {
        CurrSum += arr[i];
        if (CurrSum > maxi) {
            maxi = CurrSum;
        }
        if (CurrSum < 0) {
            CurrSum = 0;
        }
    }
    return maxi;
}

int main() {
    int n;
    cin >> n;

    vector<int> arr(n);
    for (int &i : arr) cin >> i;

    int ans = MaxSubArrSum(arr);
    cout << ans << endl;

    return 0;
}