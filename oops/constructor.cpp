#include<bits/stdc++.h>
using namespace std;
class Customer{
    string name;
    int an;
    int amount;
    public:
    //default constructor
    // Customer(){
    //     cout<<"yes";
    // }
    //parameterised constructor
    //  Customer(string name ,int an, int amount ){
    //    this-> name=name;
    //    this-> an=an;
    //     this->amount=amount;
    // }
    //inline constructor
    inline Customer(string a, int b , int c):name(a),  an(b), amount(c){}
    void display(){
       cout<<name<<" "<<an<<" "<<amount;
    }
};
int main(){
    Customer c("parul" , 123 , 1000);
    c.display();
}
