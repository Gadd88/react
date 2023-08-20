
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    // const PAISES = [
    //     {value: 'ar', label: 'Argentina'},
    //     {value: 'mx', label: 'México'},
    //     {value: 'ur', label: 'Uruguay'},
    //     {value: 'cl', label: 'Chile'},
    //     {value: 'co', label: 'Colombia'},
    //     {value: 'cn', label: 'China'},
    //     {value: 'ch', label: 'Suiza'},
    //     {value: 'ru', label: 'Rusia'}
    // ]

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategoria(categoria)
    }

  return (
    <div className={`${styles.buscador} row`}>
        <div className="col s12 m8 offset-m2">
            <form 
                onSubmit={handleSubmit}
                >
                <h2 className={styles.heading}>
                    Encuentra Noticias por Categoría
                </h2>
                <SelectNoticias />
                <div className="input-field col s12">
                    <input 
                        type="submit"
                        className={`${styles.btn_block} btn-large amber darken-2`} 
                        value="Buscar"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Formulario