#include<bits/stdc++.h>

using namespace std;

int N=10000000;
vector<bool>IsPrime(N+1,1);
void MakePrime(){
        IsPrime[0]=0;
        IsPrime[1]=0;

    for(int i=2;i*i<=N;i++){
        if(IsPrime[i]){
            for(int j=i*i;j<=N;j=j+i){
                IsPrime[j]=0;
            }
        }
    }
}
int main() {
    MakePrime();
    int n;
    cin>>n;
    vector<int>arr(n);
    for(int & i:arr) cin>>i;
    sort(arr.begin(), arr.end());
    vector<int>ans;
    
     for(int &i:arr){
         if(IsPrime[i]){
             ans.push_back(i);
        }
     }
    for(int &i:ans){
        cout<<i<<" ";
    }
    
    
}


// N--> 10^19