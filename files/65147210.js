cards.map(card => {
return (
                    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-desktop process-card">
                        <div class="process-card__number-container">
                            <div class="process-card__number-container__circle">
                                <div class="process-card__number-container__circle process-card__number-container__circle__number"> {card.Number} </div>
                            </div>
                        </div>
                        <div class=".tk-typography--title-md process-card__title"> {card.Title} </div>
                        <div class="mdc-typography--body preserve-linebreaks process-card__text"> {card.ContentText} </div>
                        <a class="mdc-button process-card__link" href={card.Link}> {card.LinkText} </a>  
                    </div>
);
                    })
