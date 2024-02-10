

document.getElementById('calc').addEventListener('click',function(){

let as = parseFloat(document.getElementById('as').value);
let bps = parseFloat(document.getElementById('bps').value);
let bs = parseFloat(document.getElementById('bs').value);
let cps = parseFloat(document.getElementById('cps').value);
let cs = parseFloat(document.getElementById('cs').value);
let dps = parseFloat(document.getElementById('dps').value);
let ds = parseFloat(document.getElementById('ds').value);
let es = parseFloat(document.getElementById('es').value);

//gpa grading system
let aces = 4.0;
let bp = 3.5;
let b = 3.0;
let cp = 2.5;
let c =2.0;
let dp = 1.5;
let d =1.0;
let e = 0.0;
let credit_hours = 3.0;
let total_hours = 3*(as+bps+bs+cps+cs+dps+ds+es);

let totalGpa = as*credit_hours*aces+
bps*credit_hours*bp
+bs*credit_hours*b+
cps*credit_hours*cp+
cs*credit_hours*c+
dps*credit_hours*dp+
ds*credit_hours*d
es*credit_hours*e;

let averageGpa= totalGpa/total_hours;
document.getElementById('answer').innerHTML = averageGpa.toFixed(2);




});
document.getElementById('reset').addEventListener('click',() =>{
let as = parseFloat(document.getElementById('as').value=0);
let bps = parseFloat(document.getElementById('bps').value=0);
let bs = parseFloat(document.getElementById('bs').value=0);
let cps = parseFloat(document.getElementById('cps').value=0);
let cs = parseFloat(document.getElementById('cs').value=0);
let dps = parseFloat(document.getElementById('dps').value=0);
let ds = parseFloat(document.getElementById('ds').value=0);
let es = parseFloat(document.getElementById('es').value=0);
document.getElementById('answer').innerHTML = 0.00
});