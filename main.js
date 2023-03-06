const displayData = (data)=>{
  // data = data.slice(0,12);

  const container = document.getElementById('table-container')
  container.innerHTML= "";
  data.forEach(element => {
    const randomImg = "https://random.imagecdn.app/500/150";
    const {person,countryOfCitizenship,state} = element;
    
      container.innerHTML += `
      <div class="card mb-3 p-4" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${person.squareImage?person.squareImage:randomImg}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${person.name}</h5>
        <p class="card-text">Citizenship:${countryOfCitizenship}</p>
        <p class="card-text">state:${state?state:"not"}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      
      `
  });
}



const loadBillionaires = async () => {
  const url = 'https://raw.githubusercontent.com/hridoyfahad30/billionaires-api/main/api.json';
  try {
    console.log('loaded');
    const res = await fetch(url);
    const data = await res.json();
    const limitedData = data.slice(0, 12); // add .slice(0, 12) to limit the number of billionaires
    displayBillionaires(limitedData);
  } catch (error) {
    console.log(error);
  }
};
const displayBillionaires = data =>{
  displayData(data);

}

document.getElementById("moreBtn").addEventListener("click", async () => {
  const url = 'https://raw.githubusercontent.com/hridoyfahad30/billionaires-api/main/api.json';
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayAllBillionaires(data);
  } catch (error) {
    console.log(error);
  }
});
const displayAllBillionaires = (data)=>{
  displayData(data);
};


