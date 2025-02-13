import Close from '../assets/arrowDown.svg'
import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../../model';

export const ResourceClose = () => {
      const modalShown = useUnit(buyResourcesModelInputs.$modalShown);
      const setModalShown = useUnit(buyResourcesModelInputs.setModalShown);

    return(
        <button 
            onClick={() => {
                setModalShown(!modalShown);
            }}
           className='active:opacity-60 relative left-2'
           >
            <Close />
        </button>
    )
}