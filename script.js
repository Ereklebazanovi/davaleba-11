let svla = prompt('ჩაწერეთ სვლა:rock,paper or scissors').trim();

if(!['rock','paper','scissors'].includes(svla)){
    alert('ჩაწერეთ ხელახლა')
}
 else{
    let choices = ['rock','paper','scissors'];

    let randomChoice = Math.floor(Math.random() * choices.length);

    let computerMove = choices[randomChoice]

    

    if (svla === computerMove){
    alert('tie')
    }
    else if(svla==='rock' && computerMove === 'scissors'){
        alert('you win')
    }
    else if(svla === 'paper' && computerMove === 'rock'){
        alert('you win')
    }
    else if (svla === 'scissors' && computerMove ==='paper'){
        alert('you win')
    }
    else{
        alert('you lose')
    }
}