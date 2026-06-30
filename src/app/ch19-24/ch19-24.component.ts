import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ch19-24',
  imports: [FormsModule],
  templateUrl: './ch19-24.component.html',
  styleUrl: './ch19-24.component.scss'
})
export class Ch1924Component {
  isVip = true;
  inputHint = '請輸入會員編號';
  change(){
    this.isVip=!this.isVip;
  }

  count=0;
  addCount(){
    this.count++;
  }

  reset(){
    this.count=0;
  }

  nickname = '';

  level=1;
  atk=3;
  def=2;
  levelup(){
    this.level++;
    this.atk=this.level*3;
    this.def=this.level*2;
  }

   levelDown(){
    if(this.level>1){
      this.level--;
      this.atk=this.level*3;
      this.def=this.level*2;
    }else {
      console.log('等級不能小於一');
    }

  }

  inputLevel = '';
  changeLevel(){
    this.level=Number(this.inputLevel);
    this.atk=this.level*3;
    this.def=this.level*2;
  }

  reset2(){
    this.level=1;
    this.atk=3;
    this.def=2;
  }

}
