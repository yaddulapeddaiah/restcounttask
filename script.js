//To create a request variable,request variable is create by XML-HTTP-REQUEST
//to create an instance of XML-HTTP-REQUEST

var request = new XMLHttpRequest();

//to open a connection
 request.open('GET','https://restcountries.eu/rest/v2/all',true);

 //to send the connection

 request.send();

 //load the response when its ready

 request.onload = function (){

    var data =JSON.parse(this.response);
    console.log(data);

    //1.list of the all asiancountries

    var asiancountries = data.filter((ele)=>{
        return ele.region === 'Asia'
    });

    console.log(asiancountries);

    // 2.get all the countries with population less than 200000

    var pop = data.filter((ele)=>{
        ele.population<200000;
        console.log(pop);
      })

      //3.print the name,capital,flag

      var result = data.forEach((ele)=>{
          console.log("NAME :",ele.name);
          console.log("CAPITAL :",ele.capital);
          console.log("FLAG :",ele.flag);
      })

      //4.print the total population of all the countries

      var total = data.reduce((accumulatorvalue,currentvalue)=>{
         return  accumulatorvalue+currentvalue.population;
          
      },0)
      console.log("Total population of all countries :",total);
      
      //5.print the dollar currencies countries

      var usd_country = data.filter((item)=>{
        let flag = false
          item.currencies.forEach(element =>{

            if(element.code==='USD')
               flag = true;
          });
          if (flag == true)
              return true;
        
          else
              return false;
      });

      console.log(usd_country);
 }