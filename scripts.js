document.getElementById('kgInput').addEventListener('input', function(e) {

    let kg = e.target.value;
    
    document.getElementById('kgToG').innerHTML = (kg*1000).toFixed(2);
    
    document.getElementById('kgToIb').innerHTML = (kg*2.2046).toFixed(2);
  });
  
  document.getElementById('GInput').addEventListener('input', function(e) {
    
    let g = e.target.value;
    
    document.getElementById('gToKg').innerHTML = ( (g*0.0001).toFixed(4));
    
    document.getElementById('gToIb').innerHTML = ( (g*0.0022046).toFixed(2));
    
  });
  
  document.getElementById('IbInput').addEventListener('input', function(e) {
    
    let Ib = e.target.value;
    
    document.getElementById('IbToKg').innerHTML = (( Ib*0.4535 ).toFixed(2));
    
    document.getElementById('IbToG').innerHTML = ((Ib*453.593).toFixed(2));
    
  });