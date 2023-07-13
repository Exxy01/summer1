var random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1)
quick_draw_data_set = [1, 10]

sketch = quick_draw_data_set[random_number];
console.log(random_number)
document.getElementById("label").innerHTML = sketch
timer_counter = 0
timer_check = ""
drawn_sketch = ""
answer_holder = ""
score = 0
function setup(){
    canvas = createCanvas(280,180)
    canvas.center();
}
function check_sketch(){
if(condition){
    timer_counter++
}
document.getElementById("Timer").innerHTML = timer_counter
console.log(timer_counter)
if(timer_counter == 400){
    timer_counter = 0;
    timer_check = "Completed."
}
if(timer_check == "Completed." || answer_holder == "set"){
    timer_check = ""
    answer_holder = ""
    updateCanvas()
}
}
function draw(){
    check_sketch()
    if(drawn_sketch == sketch){
          answer_holder = "set";
          if(condition){
            score++
          }
          document.getElementById("score").innerHTML = score
    }
}
