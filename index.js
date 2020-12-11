const readlineSync=require('readline-sync');
const username=readlineSync.question("Who are you?");
console.log("Hlo "+username);
console.log("Let's see How much do you know about Avengers.");
console.log("You will be asked 4 questions each carrying 1 mark");
//variables
score=0;
//Function to play

const func=(question,answer)=>{
  const useranswer=readlineSync.question(question+"\n");
  if(useranswer.toUpperCase() === answer.toUpperCase())
  {
  console.log("Correct Answer");
  score++;
  }
  else
  {
  console.log("Wrong Answer");
  }
  return score;
}
//questions

const ques1={
  ques:"What war did Captain America fight in?\n (a)World War 1 \n (b)World War 2 ",
  ans: "World War 2"
}
const ques2={
  ques:"What was the first film in the Marvel Cinematic Universe? \n (a)Captain America: The First Avenger \n (b)The Incredible Hulk ",
  ans: "Captain America:The First Avenger"
}
const ques3={
  ques:"What weapon does Captain America use?(a)A spear \n (b)A shield ",
  ans: "A shield"
}
const ques4={
  ques:"Name the Norse god associated with causing mischief? \n (a)Loki \n (b)Sif ",
  ans: "Loki"
}
//Array
const array=[ques1,ques2,ques3,ques4];
//Loop
const userpermission=readlineSync.question("Shall we continue? \n (a)yes \n (b)no \n");
if(userpermission.toUpperCase() === "YES")
{
for(i=0;i<4;i++){
  func(array[i].ques,array[i].ans);
}
console.log("Your score");
console.log(score+"/4");
}
else
console.log("OK you can go");
