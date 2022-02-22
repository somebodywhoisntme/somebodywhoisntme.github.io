function showFunction(div_id, btn_id){
  var btn = document.getElementById(btn_id);
  var div = document.getElementById(div_id);
  if (btn.style.display !== 'none' || div.style.display !== 'block'){
    btn.style.display = 'none';
    div.style.display = 'block';
  }
}
function close_div(btn_id, div_id){
  var btn = document.getElementById(btn_id);
  var div = document.getElementById(div_id);
  if (btn.style.display !== 'inline-flex' || div.style.display !== 'none') {
    div.style.display = "none"
    btn.style.display = "inline-flex";
    }
}
