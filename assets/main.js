
API = 'https://amazon23.p.rapidapi.com/product-search?query=george%20rr%20martin&country=US'; // George Martin
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c37d5a233msh6ce8d3c735e3aa2p1bebbbjsn2519a515a794',
		'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
	}
};

async function fetcData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}


(async () => {
    try{
        const books = await fetcData(API);
        let view = `
        ${books.result.map(book => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${book.thumbnail}" alt="${book.price}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-indigo-800">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${book.title}
            </h3>
            </div>
        </div>
        `).slice(0, 20).join('')}
        
        `;
        content.innerHTML = view
    } catch(error){
        console.log(error);
    }
})();