document.getElementById('share-btn').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Blocos E escolas de Samba 2025',
                text: 'Confira a programação do carnaval 2025 - Blocos e escolas de samba',
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