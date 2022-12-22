import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input/Input";

const MainPage = () => {
    const {t} = useTranslation()
    const [state, setState] = useState("");

    const onChange = (value: string) => {
        setState(value);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input value={state} placeholder={"Введите текст"} onChange={onChange} />
        </div>
    );
};

export default MainPage;