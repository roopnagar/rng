
async function getmobiles() {
    let url = 'data.json';
    try {
        let res = await fetch(url);
        return await res.json();

    } catch (error) {
        console.log(error);
    }
}

async function rendermobiles() {
    let mobiles = await getmobiles();
    let html = '';
    mobiles.forEach(mobile => {
        let htmlSegment = `<div class = "user">
                               
                               <h2><div class="name">Name -- "${mobile.name}"</div><h2><br>
                               <div class="model">Model -- "${mobile.model}"</div>
                                <div class ="brand>Brand --"${mobile.brand}"</div>
                               <div class = "price">Price --  "${mobile.price}"</div>
                               <div class = "category">Category --  "${mobile.category}"</div>
                               <div class = "rating">Rating -- "${mobile.rating}"</div>
                               
                               </div>`;
        html += htmlSegment;

    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}
rendermobiles()


