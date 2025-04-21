import CardPayment from './icons/CardPayment'

export default function PaymentsTable() {
  return (
    <section className="my-5 bg-tertiary" id="payments">
        <ul className="flex justify-between px-10 py-2 pt-3 text-sm text-secondary">
          <li className="flex flex-col items-center justify-center gap-1">
            <CardPayment />
            <p>Efectivo</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <CardPayment />
            <p>Transferencia</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <CardPayment />    
            <p>Mercado Pago</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <CardPayment />         
            <p>Tarjeta de credito</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
          <CardPayment />
            <p>Tarjeta de debito</p>
          </li>
        </ul>
      </section>
  )
}
