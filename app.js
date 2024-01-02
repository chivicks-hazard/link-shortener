const linkForm = document.getElementById('linkForm');
const input = document.querySelector('.form-group input');
const shortLink = document.querySelector('.response p span');

linkForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const url = 'https://api.tinyurl.com/create';
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer victiny`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "url": "https://www.google.com",
            "domain": "tinyurl.com",
            "alias": "myexamplelink",
            "tags": "example,link",
            "expires_at": "2024-10-25 10:11:12",
            "description": "string"
        })
    }

    shortenLink(url, options);
})

async function shortenLink(url, options) {
    const response = await fetch(url, options);
    const link = await response.json();

    console.log(link);
}