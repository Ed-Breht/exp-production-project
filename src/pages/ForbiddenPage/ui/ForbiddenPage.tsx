import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation('');
    return (
        <Page>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
});

export default AdminPanelPage;
