import { Component, OnInit } from '@angular/core';
import { faq } from './faq';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {
  asking!: FormGroup; 

  public faqProperties: Array<faq> = [
    {
    id:'1',
    question:'aaaaaaaaaaaaaaaaa',
    answer:'a1111111aaaaaaaaa1111111',
    subject:'a1a1a1a1a1a1a1a1a1a'
    },
    {
      id:'2',
      question:'bbbbbbbbbbbbbbbbb',
      answer:'bbbbbb222222222bbbbbbbbbb22222222',
      subject:'b2b2b2b2b2b2b2b2b2b'
    },
    {
      id:'3',
      question:'cccccccccccccccccccc',
      answer:'ccccccccc33333333333cccccccccc33',
      subject:'c3c3c3c3c3c3c3c3c3'
    }
  ] 

  constructor(private fb:FormBuilder, private route:Router) {

    let formControls ={
      question : new FormControl(),
      subject:new FormControl()
    }
    this.asking = this.fb.group(formControls)
   }

  ngOnInit(): void {
  }

  askingQuestion(){
      const question1:faq={}
      question1.question= this.asking.value.question;
      
      question1.subject = this.asking.value.subject;
      const x = this.faqProperties.length-1
      question1.id= x.toString()
      question1.answer = ""
      console.log(question1);
      this.faqProperties.push(question1)
      
  }

}
