import React, {useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n){
    if(n < 0) return -1;
    if(n == 0) return 1;
    return calcFatorial(n-1) * n
}

const UseEffect = props => {

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [parImpar, setParImpar] = useState('Par');

    useEffect(()=>{
        setFatorial(calcFatorial(number))
    }, [number]);

    useEffect(()=>{
        const parImpar = number % 2 == 0 ? 'Par' : 'Impar';
        setParImpar(parImpar);
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercício #01'/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial == -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" value={number} onChange={e => setNumber(e.target.value)} className="input"/>
            </div>
            <SectionTitle title='Exercício #02'/>
            <div className="center">
                <div>
                    <span className="text">O número é: </span>
                    <span className="text red">{parImpar}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
