

    function calculate(){
        let balance1 = Number(document.getElementById('bal1').value)
        let balance2 = Number(document.getElementById('bal2').value)
        let balance3 = Number(document.getElementById('bal3').value)
        let balance4 = Number(document.getElementById('bal4').value)
        let balance5 = Number(document.getElementById('bal5').value)

        let newbalance1 = document.getElementById('int1')
        let newbalance2 = document.getElementById('int2')
        let newbalance3 = document.getElementById('int3')
        let newbalance4 = document.getElementById('int4')
        let newbalance5 = document.getElementById('int5')
    
      let arr=[balance1,balance2,balance3,balance4,balance5]
    
      for(let i=0;i<5;i++){
            arr[i]=Number(arr[i])

            if(arr[i]>200000)
            {
                arr[i]=arr[i]+arr[i]*0.1;
                arr[i]=arr[i]-arr[i]*0.002;
            }
            else if(arr[i]>100000)
            {
                arr[i]=arr[i]+arr[i]*0.05;
                arr[i]=arr[i]-arr[i]*0.0005;
            }
            else if(arr[i]<=100000)
            {
            arr[i]=arr[i]+arr[i]*0.03;
            }
        }
        newbalance1.value =arr[0]    
        newbalance2.value =arr[1]      
        newbalance3.value =arr[2]      
        newbalance4.value =arr[3]      
        newbalance5.value =arr[4]      
    }
