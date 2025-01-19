document.getElementById('share-btn').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Blocos 2025',
                text: 'Confira o evento Blocos 2025! 🥳',
                url: window.location.href, // URL atual
            });
            console.log('Compartilhamento realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    } else {
        alert('Compartilhamento não suportado neste dispositivo.');
    }
});