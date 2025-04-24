import CardPayment from './icons/CardPayment'
import Efectivo from './icons/Efectivo'
import Transfer from './icons/Transfer'
import Mp from './icons/Mp'

export default function PaymentsTable() {
  return (
    <section className="my-5 bg-tertiary" id="payments">
        <ul className="flex justify-between px-10 py-2 pt-3 text-sm text-secondary">
          <li className="flex flex-col items-center justify-start">
            <Efectivo />
            <p>Efectivo</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <Transfer />
            <p>Transferencia</p>
          </li>
          <li className="flex flex-col items-center justify-start gap-">
            <Mp />    
            <p>Mercado Pago</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-3">
            <CardPayment color={"white"} />         
            <p>Tarjeta de credito</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-3">
          <CardPayment color={"white"} />
            <p>Tarjeta de debito</p>
          </li>
        </ul>
      </section>
  )
}
