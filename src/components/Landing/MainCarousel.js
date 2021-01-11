import React from 'react';
import testimonial1 from '../../assets/imgs/testimonial_1.jpg';
import testimonial2 from '../../assets/imgs/testimonial_2.jpg';
import testimonial3 from '../../assets/imgs/testimonial_3.jpg';
const MainCarousel = () => {



    const testimonialsOptions = [
        {
            img: testimonial1,
            name: 'John Doe',
            desc: 'Fue súper sencillo organizar mi intercambio. Me tomó 10 minutos planearlo e invitar a toda mi familia'
        },
        {
            img: testimonial2,
            name: 'Jane Doe',
            desc: 'Amé la aplicación, pude organizar un intercambio con mis amigos en otros países.'
        },
        {
            img: testimonial3,
            name: 'Juan Pérez',
            desc: 'Siempre nos olvidabamos a quién nos tocaba regalarle en el intercambio, con' +
                ' Intercambiapp, eso fue cosa del pasado.'
        },
    ];

    return (
        <div className={'container-fluid text-center pt-5 pb-5 main-green white-font'}>
            <h2 className={'fw-700 white-font'}>Testimonios</h2>
            <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        testimonialsOptions.map(({ img, name, desc }, index) => (
                            <div className={`carousel-item ${index === 0  ? 'active' : ''}`} key={index}>
                                <div className={'testimonial-pic'}>
                                    <img style={{ height: '100px', objectFit: 'cover' }} src={img} className="d-block w-100" alt="..." />
                                </div>
                                <div className={'testimonial-name'}>
                                    { name }
                                </div>
                                <div className={'testimonial-desc'}>
                                    { desc }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                   data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                   data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    );
};

export default MainCarousel;
