let inputBox = document.getElementById('inputbox');

let data = {
   'watt': 0,
   'hours': 0,
   'result': 0
}

/**
 * let watt = 0;
 * let hours = 0;
 * let result = 0;
 */

function handleChange(event) {
   data[event.target.name] = event.target.value;
   inputBox.value = '';
   /**
    * if(event.target.name === 'watt') {
    *    watt = event.target.value;
    * } ele if(event.target.name === 'hours') {
    *    hours = event.target.value;
    * }
   */
}

function result() {
   //data['result'] = (data.watt * data.hours) / 1000;
   data.result = (data.watt * data.hours) / 1000;
   
   /**
    * result = (watt * hours) / 1000;
    */
   if(inputBox) {
      inputBox.value = data.result;
      // inputBox.value = result;
   }
}

function clearAll() {
   document.querySelectorAll('input').forEach(element => {
      element.value = '';
   });

   data = {
      'watt': 0,
      'hours': 0,
      'result': 0
   }
}