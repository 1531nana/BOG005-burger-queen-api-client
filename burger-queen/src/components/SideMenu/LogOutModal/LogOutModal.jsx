import './style.scss'

export const LogOutModal = ({ logout, closeModal }) => {
  return (
    <main className="logoutModal">
      <section className="logoutModal_container">
        <h1 className="logoutModal_title">Cerrar Sesión</h1>
        <p className="logoutModal_question">
          ¿Está seguro de abandonar el sitio web?
        </p>
        <button onClick={()=>{
            logout()
            closeModal()
        }} className="logoutModal_btnExit">ACEPTAR</button>
      </section>
    </main>
  );
};
