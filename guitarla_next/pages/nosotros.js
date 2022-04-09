import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina = 'Nosotros'
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>

          <div className={styles.contenido}>
            <Image layout='responsive' width={600} height={400} src="/nosotros.jpg"/>

            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis quam sed leo porttitor pharetra. In pulvinar blandit lectus sed pharetra. Ut dolor magna, pharetra sit amet aliquet sit amet, sagittis vitae velit. Morbi efficitur convallis euismod. Aenean quis dignissim sem. Fusce molestie diam enim, sit amet luctus lacus maximus sit amet. Proin id dui neque. Sed et congue magna. Suspendisse nulla arcu, ultricies in vulputate id, pulvinar quis metus. Nulla pretium dictum sem sed eleifend. Fusce aliquam ligula et dui tincidunt porta. Donec ornare mattis porta. Proin tincidunt odio sed libero varius, quis placerat est aliquam.
              </p>
              <p>
                Ut et nisl mi. Pellentesque maximus malesuada mauris vel sollicitudin. Duis fringilla varius leo, vitae ultrices velit. Proin id ipsum non erat varius lacinia vestibulum sed tortor. Aliquam luctus et odio eget blandit. Aenean nec ultricies nulla. Morbi commodo, felis blandit dapibus venenatis, mi nibh scelerisque ante, nec gravida sem elit nec ipsum. Nullam at dui imperdiet dolor aliquam vestibulum at in leo.
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros