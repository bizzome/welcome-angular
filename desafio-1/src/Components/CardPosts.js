class CardPosts extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const card__left = document.createElement('div');
        card__left.setAttribute('class', 'card__left');

        const autor = document.createElement('span');
        const tituloLink = document.createElement('a');
        const descricao = document.createElement('p');

        autor.textContent = 'Autor: ' + (this.getAttribute('autor') || 'Desconhecido');
        tituloLink.textContent = this.getAttribute('titulo');
        tituloLink.href = this.getAttribute('link');
        descricao.textContent = this.getAttribute('descricao');

        card__left.appendChild(autor);
        card__left.appendChild(tituloLink);
        card__left.appendChild(descricao);


        const card__right = document.createElement('div');
        card__right.setAttribute('class', 'card__right');
        const post_image = document.createElement('img');
        post_image.src = this.getAttribute('src') || "assets/profile.png";
        post_image.alt = "Imagem do post";

        card__right.appendChild(post_image);

        componentRoot.appendChild(card__left);
        componentRoot.appendChild(card__right);

        return componentRoot
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: -4px 8px 18px -1px rgba(0, 0, 0, 0.64);
                -webkit-box-shadow: -4px 8px 18px -1px rgba(0, 0, 0, 0.64);
                -moz-box-shadow: -4px 8px 18px -1px rgba(0, 0, 0, 0.64);
                margin: auto;

            }

            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 40px;
            }

            .card__left span {
                font-size: 0.9rem;
                padding-bottom: 15px;
                color: rgba(70, 70, 70);
            }

            .card__left h1 {
                font-size: 25px;
                padding-bottom: 15px;
            }

            .card__left p {
                color: rgba(70, 70, 70);
            }

            .card img {
                width: 300px;
                height: 100%;
            }
        `;
        return style
    }
}

customElements.define('card-posts', CardPosts);