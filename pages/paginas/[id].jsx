import { useRouter } from 'next/router'

const pagina = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
           Esta renderizando pagina : {id}  
        </div>
    )
}

export default pagina
