import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
const DetalleIntercambio = ({ exchange, resume }) => {
  const history = useHistory();
  console.log(exchange);

  const InformationLabel = ({ label, data, custom }) => (
    <div className={`detail-container ${custom}`}>
      <div className={'data-label'}>
        { label }
      </div>
      <div className={'data-value'}>
        { data }
      </div>
    </div>
  );

  return (
    <div className={'container-fluid'}>
      {
        !resume &&
        <div className={'mt-3 mb-3 hover-pointer'} onClick={() => history.push('/dashboard')}>
          <i className={'bi-arrow-left-circle-fill fz-24'} style={{ color: 'teal' }} /> Regresar
        </div>
      }
      {
        exchange &&
          <div>
            <div className={'bold fz-32'}>
              { exchange.name }
            </div>
            {
              !resume && <InformationLabel label={'Código'} data={exchange.key} />
            }
            <div className={'d-flex'}>
              <InformationLabel
                label={'Fecha del intercambio'}
                data={resume ? exchange.date.format('DD/MM/YYYY') : moment(exchange.date).format('DD/MM/YYYY')}
                custom={'me-3'} />
              <InformationLabel
                label={'Fecha límite de confirmación'}
                data={resume ? exchange.reservationLimit.format('DD/MM/YYYY') : moment(exchange.date).format('DD/MM/YYYY')} />
            </div>
            {
              !resume &&
                <div className={'d-flex'}>
                  <InformationLabel label={'Organizador'} data={`${exchange.User.name} ${exchange.User.lastname}`} custom={'me-3'} />
                  <InformationLabel label={'Contacto'} data={exchange.User.email} />
                </div>
            }
            <div className={'categories-container mb-3'}>
              <div className={'fz-28 bold'}>
                Categoría del intercambio
              </div>
              {
                (exchange.Categories && exchange.Categories.length > 0) ?
                  exchange.Categories.map((cat, index) => (
                    <div className={'fz-20'} key={index}>
                      { cat.name }
                    </div>
                  ))
                  : 'Parece que no hay categorías en este intercambio'
              }
            </div>
            <div className={'categories-container'}>
              <div className={'fz-28 bold'}>
                Participantes
              </div>
              <div className={'row gx-5 data-label fz-18 mb-1'}>
                <div className={'col-4'}>
                  Nombre
                </div>
                <div className={'col-4'}>
                  Correo
                </div>
                {
                  !resume &&
                  <div className={'col-4'}>
                    Confirmado
                  </div>
                }
              </div>
              {
                (exchange.Invitations && exchange.Invitations.length > 0) ?
                  exchange.Invitations.map((invite, index) => (
                    <div className={'row gx-5'} key={index}>
                      <div className={'col-4'}>
                        { invite.name }
                      </div>
                      <div className={'col-4'} >
                        { invite.email }
                      </div>
                      {
                        !resume &&
                        <div className={'col-4'}>
                          { invite.confirmed ? <i className={'bi-check-circle'} /> : <i className={'bi-x-circle'} />}
                        </div>
                      }
                    </div>
                  ))
                  : 'Parece que no hay amigos en este intercambio'
              }

            </div>
          </div>
      }
    </div>
  );
};

export default DetalleIntercambio;
