       // Elementos
       const copyPixBtn = document.getElementById('copy-pix');
       const pixKeyInput = document.getElementById('pix-key');

       // Função para copiar a chave Pix
       function copyPixKey() {
           pixKeyInput.select();
           pixKeyInput.setSelectionRange(0, 99999); // Para dispositivos móveis
           document.execCommand('copy');
           alert('Chave Pix copiada!');
       }

       // Copiar chave Pix ao clicar no botão de copiar
       copyPixBtn.addEventListener('click', copyPixKey);


document.addEventListener('DOMContentLoaded', () => {
            const doadoresContainer = document.getElementById('doadores-container');

            fetch('../static/data/doadores.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar doadores');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.length > 0) {
                        doadoresSection = document.getElementById('doadores-section');
                        doadoresSection.style.display = 'block';
                    }
                    data.forEach(doador => {
                        const donorCard = document.createElement('div');
                        donorCard.classList.add('donor-card');

                        const donorName = document.createElement('div');
                        donorName.classList.add('font-bold', 'text-lg');
                        donorName.textContent = doador.name;

                        const socialIcons = document.createElement('div');
                        socialIcons.classList.add('social-icons');

                        if (doador.twitter) {
                            const twitterLink = document.createElement('a');
                            twitterLink.href = `https://twitter.com/${doador.twitter.replace('@', '')}`;
                            twitterLink.target = '_blank';
                            twitterLink.rel = 'noopener noreferrer';
                            twitterLink.innerHTML = '<i class="fab fa-twitter fa-lg"></i>';
                            socialIcons.appendChild(twitterLink);
                        }

                        if (doador.instagram) {
                            const instagramLink = document.createElement('a');
                            instagramLink.href = `https://instagram.com/${doador.instagram.replace('@', '')}`;
                            instagramLink.target = '_blank';
                            instagramLink.rel = 'noopener noreferrer';
                            instagramLink.innerHTML = '<i class="fab fa-instagram fa-lg"></i>';
                            socialIcons.appendChild(instagramLink);
                        }

                        const donorInfo = document.createElement('div');
                        donorInfo.classList.add('donor-info', 'flex', 'flex-col');
                        donorInfo.appendChild(donorName);
                        donorInfo.appendChild(socialIcons);

                        donorCard.appendChild(donorInfo);
                        doadoresContainer.appendChild(donorCard);
                    });
                })
                .catch(error => {
                    console.error('Erro ao carregar doadores:', error);
                    doadoresContainer.innerHTML = '<p class="text-center text-red-500">Erro ao carregar doadores.</p>';
                });
        });