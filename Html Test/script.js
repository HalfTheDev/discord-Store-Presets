// Sample products array with detail URLs
const products = [
    { id: 1, title: "Discord Server Template 1", description: "A clean and organized server layout.", url: "templates/server1.html" },
    { id: 2, title: "Bot Command Preset", description: "Pre-built bot commands for moderation.", url: "presets/bot-commands.html" },
    { id: 3, title: "Emoji Pack", description: "A collection of custom emojis.", url: "downloads/emoji-pack.zip" },
    { id: 4, title: "Role & Channel Setup", description: "Automated role and channel presets.", url: "presets/roles-channels.html" }
];

const productGrid = document.getElementById('product-grid');

function renderProducts() {
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const title = document.createElement('h3');
        title.textContent = product.title;

        const desc = document.createElement('p');
        desc.textContent = product.description;

        const btn = document.createElement('button');
        btn.className = 'button';
        btn.textContent = 'View Details';
        btn.onclick = () => window.location.href = `product.html?id=${product.id}`;

        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(btn);

        productGrid.appendChild(card);

        // Insert ad slot after every 2 products
        if ((index + 1) % 2 === 0) {
            const adSection = document.createElement('section');
            adSection.className = 'ad-slot grid-ad';
            adSection.innerHTML = `
                <ins class="adsbygoogle"
                     style="display:block; text-align:center;"
                     data-ad-client="ca-pub-9485117586406230"
                     data-ad-slot="1229529950"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            `;
            productGrid.appendChild(adSection);
        }
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);