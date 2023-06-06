import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entities/User';
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDipastch";
import {PageLoader} from "@/widgets/PageLoader";

function App() {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if(!inited) {
        return <PageLoader />
    }

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
