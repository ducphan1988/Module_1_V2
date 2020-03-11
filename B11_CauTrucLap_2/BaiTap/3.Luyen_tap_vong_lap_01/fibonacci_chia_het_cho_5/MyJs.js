let a=0;
let b=1;
let kq=b;
let count=0;

for (let i=1;i<20;i++)
{
    kq=a+b;
    a=b;
    b=kq;
    if (i%5===0 && count<1)
    {
        count++;
        document.write(i);
    }
}