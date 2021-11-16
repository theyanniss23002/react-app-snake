import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createPlayer, loadIp } from '../../redux/Common/actions';

export interface IModalStore {
    common: {
        user_ip?: string;
        score?: string;
    };
}

export interface IModal {
    isOpen?: any;
    onClose?: any;
}

const ModalComponent: React.FC<IModal> = ({ isOpen, onClose }: IModal) => {
    const dispatch = useDispatch();

    const { user_ip, score } = useSelector((common: IModalStore) => common.common);

    const initialState = {
        name: '',
        score: score || ''
    };

    const [formValue, setFormValue] = useState(initialState);

    const onChange = (event: any) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    };

    const handleCreatePlayer = () => {
        const result = {
            fields: {
                id: user_ip,
                ...formValue
            }
        };
        dispatch(createPlayer(result));
        onClose();
    };

    useEffect(() => {
        dispatch(loadIp());
    }, [dispatch]);

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth={false}>
            <div className='modal'>
                <span className='modal__title'>Enter nickname</span>
                <div className='modal__fields'>
                    <div className='group'>
                        <input
                            value={formValue.name}
                            type='text'
                            onChange={onChange}
                            name='name'
                            required
                        />
                        <span className='highlight' />
                        <span className='bar' />
                        <label>Name</label>
                    </div>
                    <div className='group'>
                        <input
                            disabled={true}
                            value={formValue.score}
                            type='text'
                            onChange={onChange}
                            name='score'
                            required
                        />
                        <span className='highlight' />
                        <span className='bar' />
                        <label className='label-disabled'>Score</label>
                    </div>
                </div>
                <div className='modal__button-wrap'>
                    <button onClick={onClose} className='modal__button close'>
                        Close
                    </button>
                    <button
                        disabled={!formValue.name}
                        onClick={handleCreatePlayer}
                        className={
                            !formValue.name ? 'modal__button send disabled' : 'modal__button send '
                        }
                    >
                        Send
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default ModalComponent;
