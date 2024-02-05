const studentScore = [95, 78, 85, 60, 45, 92];
// const letterScore = []
const letterGrade = (score) => {
    if(score > 90 && score < 100){
        return "A";
    } 
    if(score > 80){
        return "B";
    }
    if(score > 70){
        return "C";
    }
    if(score >= 60){
        return "D";
    }
    if(score < 60){
        return "F";
    }
    
}

const mapResult = studentScore.map(letterGrade);
console.log(mapResult);