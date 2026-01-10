function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('weather data');
            resolve('success');
        }, 2000);
    });
}

function getData(dataId){
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('data', dataId);
      resolve();
    }, 2000);
  });
}



// async function getWeatherData() {
//     await api();
//     await api();
// }

// getWeatherData();

// async-await

(async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})()
