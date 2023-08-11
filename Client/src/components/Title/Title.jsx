import styles from "./Title.module.css";

export default function Title() {
  return (
    <div>
      <h1 className={styles.Title}>Character presentation page</h1>
      <p className={styles.parrafos}>
        Rick & Morty es una popular serie de animación que sigue las
        emocionantes aventuras del genio científico alcohólico Rick y su nieto
        Morty. Acompaña a estos personajes en sus viajes interdimensionales
        llenos de humor, sarcasmo y situaciones extravagantes. Con un elenco
        diverso de personajes coloridos, cada episodio te sumergirá en un
        universo único y te hará reír a carcajadas mientras exploras los límites
        del espacio y el tiempo. Prepárate para sumergirte en el fascinante y
        caótico mundo de Rick & Morty
      </p>
    </div>
  );
}
