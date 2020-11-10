let vid = document.getElementById("Video");
let header = document.getElementById('headerNone')
let copVideo = document.getElementById('copModeVideo')




const navMarginChange = document.querySelector("nav");
const copButtonChangeText = document.getElementById("myCopButton");
copButtonChangeText.addEventListener("click", function (a) {
  if (copButtonChangeText.innerHTML = "COP MODE") {
    copButtonChangeText.innerHTML = "NORMAL MODE";
    navMarginChange.style.marginTop = "7vw";
  } else {
    copButtonChangeText.innerHTML = "COP MODE";
    navMarginChange.style.marginTop = "4vw";
  }
  a.preventDefault();
});




let date = '';

dates()
// TODAYS DATE FUNCTION

function dates() {
  //YEAR
  var year = new Date()
  var newYear = year.getFullYear()
  date += newYear + '-';

  //MONTH
  let zero = '0';
  var month = new Date()
  var newMonth = month.getMonth() + 1

  if (newMonth < 10) {
    zero += newMonth
    console.log(zero);
    date += zero + '-';
  }
  else {
    console.log(newMonth)
    date += newMonth + '-';
  }
  //DAY
  var d = new Date();
  var n = d.getDate();
  date += n

  //WHOLE DATE
  console.log(date);
}

// Today Recent 10 Police Reports
let promise = fetch("https://polisen.se/api/events?DateTime=")
  .then(response => {
    console.log(response);
    let otherPromise = response.json();
    return otherPromise;
  })

  .then(result => {
    topTen(result);
    function topTen(result) {
      let ten = [];
      for (let x = 0; x < 10; x++) {
        ten.push([result[x]]);
      }
      console.log(ten, ten.length);

      //TOP TEN
      city10Loop(ten);
      function city10Loop(ten) {
        for (let i = 0; i < ten.length; i++) {

          if (ten[i][0].type === 'sammanfattning natt') {
            splice(ten[i], 1);
          }
          console.log(ten[5][0].id, ten.length, i);
          let topTenCities = document.querySelectorAll('#cityTableData');
          topTenCities[i].innerHTML = `<strong>${ten[i][0].location.name}</strong>`;

          //TOP TEN SUMMARY
          let summaryTen = document.querySelectorAll('#summary10');
          summaryTen[i].textContent = ten[i][0].summary;
          //TOP TEN DATE
          let dateTen = document.querySelectorAll('#dateTen');
          dateTen[i].innerHTML = `<strong>${ten[i][0].datetime}</strong>`;
        }
      }
    }
  });


//TOP INTRESTING CRIMES - INDEX - 1
let interestPromise = fetch("https://polisen.se/api/events/234705")
  .then(response => {
    console.log(response);
    let otherPromise = response.json();
    return otherPromise;
  })
  .then(result => {
    console.log(result);
    city1Loop(result)
    function city1Loop(result) {
      let interestTableData1 = document.querySelector('#interestTableData1');
      interestTableData1.innerHTML = `<strong>${result.location.name}</strong>`;
      let interest1 = document.querySelector('#interest1');
      interest1.textContent = result.summary;
      let date1 = document.querySelector('#date1');
      date1.innerHTML = `<strong>${result.datetime}</strong>`;
    }
  });

//TOP INTRESTING CRIMES - INDEX - 2
let interestPromise2 = fetch("https://polisen.se/api/events/234560")
  .then(response => {
    console.log(response);
    let otherPromise = response.json();
    return otherPromise;
  })
  .then(result => {
    console.log(result);
    city1Loop(result)
    function city1Loop(result) {
      let interestTableData2 = document.querySelector('#interestTableData2');
      interestTableData2.innerHTML = `<strong>${result.location.name}</strong>`;
      let interest2 = document.querySelector('#interest2');
      interest2.textContent = result.summary;
      let date2 = document.querySelector('#date2');
      date2.innerHTML = `<strong>${result.datetime}</strong>`;
    }
  });

//TOP INTRESTING CRIMES - INDEX - 3
let interestPromise3 = fetch("https://polisen.se/api/events/223938")
  .then(response => {
    console.log(response);
    let otherPromise = response.json();
    return otherPromise;
  })
  .then(result => {
    console.log(result);
    city1Loop(result)
    function city1Loop(result) {
      let interestTableData3 = document.querySelector('#interestTableData3');
      interestTableData3.innerHTML = `<strong>${result.location.name}</strong>`;
      let interest3 = document.querySelector('#interest3');
      interest3.textContent = result.summary;
      let date3 = document.querySelector('#date3');
      date3.innerHTML = `<strong>${result.datetime}</strong>`;
    }
  });

223938



//Crime Search Button 
let submit = document.querySelector('#submit')
submit.addEventListener('click', f)
//City Input Value - Crime Search
let city = document.querySelector('#city')
let crimeType = document.querySelector('select')

// Key Enter to start scanner
let startScanner = document.querySelector('#submit')
addEventListener('keydown', enter)

function enter(click) {
  if (click.keyCode === 13 && cityInput !== null) {
    f()
    console.log(click)
  }
}

//Textarea Results
function f() {
  let textArea = document.querySelector('[contenteditable="true"]')
  let city = document.querySelector('#city')
  let crimeType = document.querySelector('select')
  fetch("https://polisen.se/api/events?locationname=" + city.value + '&type=' + crimeType.value,)
    .then(response => {
      console.log(response)
      let otherPromise = response.json()
      return otherPromise
    })
    .then(result => {
      loop(result)
      function loop(array) {
        const element = [];
        for (let index = 0; index < array.length; index++) {
          element.push('<strong>' + [result[index].name + '</strong>' + ' ' + result[index].summary + '' + '<br>' + '<br>'])
        }
        console.log(element);
        return textArea.innerHTML = `Totala Fall <strong>${element.length} st </strong> <br> <br> ${element.join(' ')}`
      }
    })
}

//MEMORY SESSION
if (sessionStorage.getItem("autosave")) {
  city.value = sessionStorage.getItem("autosave");
}
city.addEventListener("change", function () {
  sessionStorage.setItem("autosave", city.value);
});

//Cookie ex
document.cookie = 'name=Carel'

//MEMORY LOCAL
city.value = localStorage.getItem("cityStats");
city.addEventListener('change', function () {
  localStorage.setItem('cityStats', city.value)
});


// BAD BOYS MUSIC MODE
function videoplay() {
  if (vid.src === "https://www.youtube.com/embed/is8I6Mq9XUU") {
    vid.src += "?autoplay=1";
    console.log('music on');
  }

  else if (vid.src === "https://www.youtube.com/embed/is8I6Mq9XUU?autoplay=1") {
    vid.src = "https://www.youtube.com/embed/is8I6Mq9XUU"
    console.log('im gone');
  }

  if (header.classList.contains('headerNone') === true) {
    header.classList.remove('headerNone')
    console.log('im gone');
  }

  else if (header.classList.contains('headerNone') !== true) {
    header.classList.add('headerNone')
    console.log('im added');
  }
  copVideo.classList.toggle('policeVideo');
};
