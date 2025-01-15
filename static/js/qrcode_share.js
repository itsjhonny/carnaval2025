        // Elementos
        const qrcodeBtn = document.getElementById('qrcode-btn');
        const modal = document.getElementById('qrcode-modal');
        const closeModal = document.getElementById('close-modal');
        const qrcodeContainer = document.getElementById('qrcode-container');

        // URL do site atual
        const siteLink = window.location.href;

        // Função para gerar o QR Code
        function generateQRCode() {
            // Certifique-se de que o contêiner está vazio antes de gerar
            qrcodeContainer.innerHTML = '';

            QRCode.toCanvas(document.createElement('canvas'), siteLink, {
                width: 200,
                margin: 1,
            }, function (error, canvas) {
                if (error) {
                    console.error('Erro ao gerar o QR Code:', error);
                    return;
                }
                qrcodeContainer.appendChild(canvas);
            });
        }

        // Abrir modal e gerar QR Code
        qrcodeBtn.addEventListener('click', () => {
            generateQRCode();
            modal.classList.remove('hidden');
        });

        // Fechar modal
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Fechar modal ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });