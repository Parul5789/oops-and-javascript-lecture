#include<iostream>
using namespace std;
class customer{
    string name;
    int acc , balance;
    static int count;
    public:
    customer(string a, int b , int c){
        name=a;
        acc=b;
        balance=c;
        count++;
    }
    void show(){
        cout<<count;
    }
};
int customer::count=0;
int main(){
    customer c1("parul" , 1 , 1000);
    customer c2("shalu" , 2 , 1000);
    customer c3("krish" , 3 , 1000);
    c3.show();

}