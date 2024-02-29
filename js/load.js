// selecione o elemento que deseja carregar
const headerSection = document.getElementById('header');


// função que verifica se o elemento está visível na tela
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    return (vertInView && horInView);
}

// função que carrega a seção quando o usuário chegar nela
function loadSection() {
    if (isElementVisible(headerSection)) {
        why =
        `
        <div class="container why">
            <div class="content">
                <div class="column">
                    <div class="why-title">
                        <h1 class="text-w-bold text-c-red">Mas afinal, por que Portugal?</h1>
                    </div>

                    <div class="row why">
                        <div class="column why">
                            <div class="img">
                                <img loading="lazy" src="./imgs/desktop/news-collage-desktop.webp" alt="Colagem de notícias sobre Portugal">
                            </div>
                        </div>

                        <div class="column">
                            <div class="why-paragraph">
                                <p class="text-w-bold">
                                    A pergunta na verdade deveria ser “por que não Portugal?”
                                </p>

                                <p class="text-w-medium">
                                    Estamos falando do país com a melhor qualidade de vida entre os falantes de português, um lugar onde as oportunidades de emprego são diversas e onde há uma estabilidade econômica milhares de vezes maior que no Brasil.
                                    <br><br>
                                    Este é um país justo, onde as coisas funcionam e você não precisará ter medo de andar sozinho na rua pela noite e contará com uma educação <span class="text-w-bold">gratuita</span> e de qualidade para os seus filhos.
                                    <br><br>
                                    Independentemente da sua condição financeira, eu te garanto: <span class="text-w-bold">Portugal é o caminho para uma vida melhor.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <picture>
                <source media="(min-width: 1200px)" srcset="./imgs/desktop/earth-img-desktop.webp">
                <source media="(min-width: 1024px)" srcset="./imgs/desktop/earth-img-desktop-1024.webp">
                <source media="(min-width: 768px)" srcset="./imgs/tablet/earth-img-tablet.webp">
                <source media="(min-width: 425px)" srcset="./imgs/mobile/earth-img-mobile-425.webp">
                <source media="(min-width: 375px)" srcset="./imgs/mobile/earth-img-mobile-375.webp">
                <img loading="lazy" src="./imgs/desktop/earth-img-desktop.webp" alt="Mapa mundial">
            </picture>
        </div>
        `;

        quote =
        `
        <div class="container quote">
            <div class="content">
                <div class="column quote-img">
                    <div class="quote-img-dec">
                        <span class="red-circle"></span>
                        <span class="green-circle"></span>
                        
                        <span class="line-green"></span>
                        <span class="line-green2"></span>

                        <picture>
                            <source media="(min-width: 480px)" srcset="./imgs/Renato-img.webp">
                            <source media="(min-width: 320px)" srcset="./imgs/mobile/Renato-img.webp">
                            <img loading="lazy" src="./src/images/desktop/1400px/logo.webp" alt="Foto - Renato">
                        </picture>
                    </div>
                </div>

                <div class="column">
                    <div class="quote-text">
                        <span class="text-w-bold text-c-red">“</span>

                        <p class="text-w-medium">
                            “Cara, deu tudo certo, brigadão pela moral que você me deu. Você atendeu a gente muito bem e ficou sempre atrás de nós perguntando como estavam as coisas e se estava tudo correndo bem. Parabéns mesmo!”
                        </p>
                    </div>

                    <div class="quote-audio ready-player-1">
                        <audio crossorigin preload="none">
                            <source src="../audio/whatsApp-audio-renato.mp3" type="audio/mp3">
                        </audio>
                    </div>

                    <div class="quote-name">
                        <span class="name-red-line"></span>
                        <p>
                            Renato
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
        `

        benefits =
        `
        <div class="container benefits">
            <div class="content">
                <div class="column">
                    <div class="benefits-title">
                        <h1>Vantagens de morar em Portugal:</h1>
                    </div>

                    <div class="column">
                        <div class="row">
                            <div class="item">
                                <span class="material-symbols-outlined">
                                    wb_sunny
                                    </span>
                                <h3>O melhor clima da Europa</h3>
                            </div>

                            <div class="item">
                                <span class="material-symbols-outlined">
                                    health_and_safety
                                    </span>
                                <h3>12º melhor sistema de saúde do mundo (OMS)</h3>
                            </div>

                            <div class="item">
                                <span class="material-symbols-outlined">
                                    school
                                    </span>
                                <h3>Educação de qualidade e gratuita</h3>
                            </div>
                        </div>

                        <div class="row">
                            <div class="item">
                                <span class="material-symbols-outlined">
                                    shield
                                    </span>
                                <h3>6º país mais seguro do mundo (GPI)</h3>
                            </div>
                            

                            <div class="item">
                                <span class="material-symbols-outlined">
                                    trending_down
                                    </span>
                                <h3>Baixíssimo custo de vida</h3>
                            </div>

                            <div class="item">
                                <span class="material-symbols-outlined">
                                    home_work
                                    </span>
                                <h3>Tranquilidade até nas grandes cidades</h3>
                            </div>
                        </div>

                        <div class="row">
                            <div class="item">
                                <span class="material-symbols-outlined">
                                    map
                                    </span>
                                <h3>Oportunidade de conhecer o resto da europa</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <picture>
                <source media="(min-width: 1200px)" srcset="./imgs/desktop/benefits-img-desktop.webp">
                <source media="(min-width: 1024px)" srcset="./imgs/desktop/benefits-img-desktop-1024.webp">
                <source media="(min-width: 768px)" srcset="./imgs/tablet/benefits-img-tablet.webp">
                <source media="(min-width: 425px)" srcset="./imgs/mobile/benefits-img-mobile-425.webp">
                <source media="(min-width: 375px)" srcset="./imgs/mobile/benefits-img-mobile-375.webp">
                <img loading="lazy" src="./imgs/desktop/benefits-img-desktop.webp" alt="Vista de alguma cidade de Portugal">
            </picture>
        </div>
        `

        feedback =
        `
        <div class="container feedback">
            <div class="content">
                <div class="column">
                    <div class="feedback-title">
                        <h1>E não confie apenas na minha palavra, veja só o que meus clientes dizem:</h1>
                    </div>

                    <div class="row">
                        <div class="carousel"></div>
                    </div>
                </div>
            </div>
        </div>
        `;

        ebook =
        `
        <div class="container ebook">
            <div class="content">
                <div class="column">
                    <div class="text">
                        <div class="title">
                            <h1>Converse comigo e ganhe um E-book gratuito</h1>
                        </div>

                        <div class="paragraph">
                            <p>Explicando tudo que você precisa para imigrar e trabalhar em Portugal</p>
                        </div>
                    </div>

                    <div class="btn-container">
                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5512983039495&text=Ol%C3%A1%2C%20estou%20interessado%20em%20saber%20mais%20sobre%20como%20morar%20em%20Portugal!">tire suas dúvidas e venha viver um sonho!</a>
                    </div>
                </div>
            </div>

            <picture id="no-w-100">
                <source media="(min-width: 1200px)" srcset="./imgs/desktop/button-img-desktop.webp">
                <source media="(min-width: 481px)" srcset="./imgs/tablet/button-img-tablet.webp">
                <source media="(min-width: 425px)" srcset="./imgs/mobile/button-img-mobile-425.webp">
                <source media="(min-width: 375px)" srcset="./imgs/mobile/button-img-mobile-375.webp">
                <img loading="lazy" src="./imgs/desktop/button-img-desktop.webp" alt="Victor apontando para o botão com uma imagem de Portugal atrás">
            </picture>

            <img class="mockup" src="./imgs/ebook-mockup.webp" alt="E-book">
        </div>
        `;
    }

    document.getElementById('why').innerHTML = why;
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('benefits').innerHTML = benefits;
    document.getElementById('feedback').innerHTML = feedback;
    document.getElementById('ebook').innerHTML = ebook;

    window.removeEventListener('scroll', loadSection);
}

// adicione um evento de scroll no objeto window para chamar a função de carga da seção
window.addEventListener('scroll', loadSection);