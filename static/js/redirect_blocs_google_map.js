document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.accordion-content .block-list li');

    listItems.forEach(li => {
        li.setAttribute('tabindex', '0'); // Torna o item focável

        const openMap = () => {
            const em = li.querySelector('em');
            if (em) {
                const address = em.innerText.trim();
                const encodedAddress = encodeURIComponent(address);
                const url = `https://www.google.com/maps/search/${encodedAddress}`;
                window.open(url, '_blank', 'noopener,noreferrer');
            } else {
                console.warn('Tag <em> não encontrada no item:', li.innerText);
            }
        };

        li.addEventListener('click', openMap);

        li.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                openMap();
            }
        });
    });
});
