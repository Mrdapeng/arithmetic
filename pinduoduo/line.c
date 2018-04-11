//此题要求
//求出一条直线上所有线段所覆盖的全程长度是多少。
//重叠的地方只计算一次。
//================================
//本算法的思想是，将每个线段进行像素化，
//添加到一个单位数组c[N]中
//遍历c数组判断哪些单位被覆盖到了，
//在count计数一下就知道一共覆盖了多少路程。
//真是巧妙啊。
//==============================
#include <iostream>
using namespace std;
const int N = 10000;
//线段结构体
struct Segment
{
	int start;
	int end;
};
//
int coverage(Segment *segments, int n)
{
	bool c[N]={false};//每个“单位1”是否被覆盖到

	int start=0;
	int end = 0;
	//遍历n个线段
	for(int i = 0; i < n; i++)
	{
		for(int j = segments[i].start; j < segments[i].end; j++)
		{
			c[j] = true;
		}
		//寻找最右端
		if(segments[i].end > end)
		{
			end = segments[i].end;
		}
		//寻找最左端
		if(segments[i].start < start)
		{
			start = segments[i].start;
		}
	}
	//从最左端开始到最右端。遍历单位数组C
	int count = 0;
	for(int i= start; i < end; i++)
	{
		if(c[i])
		{
			int s=i;
			while(c[i])
			{
				count++;
				i++;
			}
			int e=i;
			cout << "["<<s<<","<<e<<"]"<<endl;
		}
	}
	return count;
};

int main()
{
	Segment s1;
	s1.start = 1;
	s1.end = 3;

	Segment s2;
	s2.start = 2;
	s2.end = 6;

	Segment s3;
	s3.start = 11;
	s3.end = 12;

	Segment s4;
	s4.start = 10;
	s4.end = 13;
	Segment ss[] = {s1,s2,s3,s4};
	cout << "归并后"<<endl;
	cout <<"被覆盖总长度：" <<coverage(ss, sizeof(ss)/sizeof(ss[0]))<<endl;
}