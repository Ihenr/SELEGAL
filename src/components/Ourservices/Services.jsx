import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className=" relative pb-10 bg-white ">
      <div className="title_services">
        <p>Atendemos todos tus asuntos</p>
      </div>
      <div className="content">
        <div className="contnedor_services h-full">
          <div className="items">
            <div className="item-title">
              <h4>laborales</h4>
            </div>
            <div className="item ">
              <ul>
                <li>Asesoría Especializada Preventiva</li>
                <li>Representación ante el Ministerio del Trabajo</li>
                <li>Vistos buenos</li>
                <li>Conflictos Colectivos</li>
                <li>Patrocinio en juicios laborales</li>
              </ul>
            </div>
          </div>
          <div className="items">
            <div className="item-title">
              <h4>Asuntos civiles</h4>
            </div>
            <div className="item">
              <ul>
                <li>Cobro de pagaré a la orden</li>
                <li>Cobro de letras de cambio</li>
                <li>Trámites Notariales</li>
                <li>Daño Moral</li>
                <li>Desahucios (inquilinato)</li>
                <li>Prescripción Extraordinaria Adquisitiva de Dominio</li>
                <li>Juicios de Partición e Inventario</li>
              </ul>
            </div>
          </div>
          <div className="items">
            <div className="item-title">
              <h4>Asuntos niñes y la familia</h4>
            </div>
            <div className="item">
              <ul>
                <li>Demanda Tenencia</li>
                <li>Demanda de Alimentos</li>
                <li>Curadurías Especiales</li>
                <li>Impugnación de Paternidad</li>
                <li>Divorcios</li>
                <li>Unión de Hecho</li>
                <li>Capitulaciones Matrimoniales</li>
                <li>Disolución Sociedad de Hecho</li>
                <li>Liquidación de la Sociedad Conyugal</li>
                <li>Solemnizar Uniones de Hecho</li>
                <li>Violencia intrafamiliar</li>
              </ul>
            </div>
          </div>
          <div className="items">
            <div className="item-title">
              <h4>Asuntos penales</h4>
            </div>
            <div className="item">
              <ul>
                <li>Representación en Fiscalía</li>
                <li>Patrocinio en las diferentes etapas judiciales</li>
                <li>Litigación profesional</li>
                <li>Violencia intrafamiliar</li>
                <li>Accidentes de tránsito</li>
                <li>Especialista en asuntos penales</li>
              </ul>
            </div>
          </div>
          <div className="items">
            <div className="item-title">
              <h4>asuntos de mediación</h4>
            </div>
            <div className="item">
              <ul>
                <li>Mediación Familiar</li>
                <li>Mediación Empresarial o Laboral</li>
                <li>Mediación Civil</li>
                <li>Mediación Penal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
