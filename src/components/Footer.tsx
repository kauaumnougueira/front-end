import '../app.css';

const Footer = () => {
    return (
        <footer>
            <div className='container__footer'>
                <button className='btn'>
                    Seja voluntário
                </button>
                <div className='links__footer'>
                    <h2>Links rápidos</h2>
                    <a href='#'>
                        Sobre nós
                    </a>
                    <a href='#'>
                        Estações Tech
                    </a>
                    <a href='#'>
                        Seja voluntário
                    </a>
                    <a href='#'>
                        Contato
                    </a>
                </div>

                <div className='links__footer'>
                    <h2>Duvidas</h2>
                    <a href='#'>
                        Entre em contato
                    </a>
                </div>
            </div>
            <div className='copyright'>
                <h3>©2024  Estação Tech. Todos os direitos reservados</h3>
                <div className='right'>
                    <a href='#'>Privacidade e Política</a>
                    <a href='#'>Termos e Condições</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer