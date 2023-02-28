import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');
    return (
        <Page>
            <div data-testid="AboutPage">{t('О сайте')}</div>
        </Page>
    );
});

export default AboutPage;
