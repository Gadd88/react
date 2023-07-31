import { revisarPresupuesto } from "../helper"
import PropTypes from 'prop-types'

const ControlPresupuesto = ({presupuesto, resto}) => {
  return (
    <>
        <div className="alert alert-primary">
            Presupuesto: $ {presupuesto}
        </div>
        <div className={revisarPresupuesto(presupuesto, resto)}>
            Restante: $ {resto}
        </div>
    </>
  )
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number,
  resto: PropTypes.number
}


export default ControlPresupuesto