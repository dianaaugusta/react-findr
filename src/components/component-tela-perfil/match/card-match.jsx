import React, { useState } from 'react';
import "../match/card-match.css"

function CardMatch(props) {
    const [idContactorTxt, setIdContactor] = useState(props.idContratante)
    
    return (
        <>
            <div class="grid-container">
                <div class="grid-item">
                    <div class="match-info-pessoa">
                        <img src="https://static1.conquistesuavida.com.br/articles//4/56/84/@/18404-gente-que-da-prioridade-aos-sentimentos-article_gallery_large-2.jpg" alt="aaa"/>
                        <p
                         type="text"
                         defaultValue={idContactorTxt}
                         onChange={(e) => setIdContactor(e.target.value)}
                         />
                        <p></p>
                    </div>
                </div>
            </div>

        </>
    )

}

export default CardMatch;