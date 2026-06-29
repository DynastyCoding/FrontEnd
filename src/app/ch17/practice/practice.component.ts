import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {

  score(){
    let score = 85;
    if (score >= 90) {
    console.log('A');
    } else if (score >= 80) {
    console.log('B');  // 印出 B
    } else if (score >= 70) {
    console.log('C');
    } else {
    console.log('不及格');
    }
  }

  calculate(){
  let a = '150';
  let b = '80';
  let numA = Number(a);
  let numB = Number(b);
  console.log(numA + numB);
  console.log(numA*numB);
  }

  practice(){
    let user = { name: '小明', age: 22, city: '台北' };
    let json = JSON.stringify(user);
    console.log(json);
    console.log(typeof json);
  }

  operate(){
    let price = 2000;
    price *= 0.9;
    price -= 100;
    console.log(price);
  }

  practice1(){
    for(let i = 1;i<=50;i++){
      if(i%3==2){
      console.log(i);
      }
    }
  }

  practice2(){
    let people = [
      {name: '小明', age: 20},
      {name: '小王', age: 25},
      {name: '小李', age: 30},
    ]
    people.forEach(p=>{if (p.name ==='小王')p.age=18;})
    console.log(people);

    let arr = [4, 6, 1, 2, 7, 9, 12, 15, 13];
    console.log(Math.min(...arr));

    console.log('你好我是Allen'.split('').reverse().join(''));

    let s = '我是Allen，你好';
    let start = s.indexOf('A');
    console.log(s.slice(start, start + 5));

  }

}
