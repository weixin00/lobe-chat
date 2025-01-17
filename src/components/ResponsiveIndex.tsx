'use client';

import { FC, ReactNode, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import FullscreenLoading from '@/components/FullscreenLoading';
import { useIsMobile } from '@/hooks/useIsMobile';

interface ResponsiveIndexProps {
  Mobile: FC;
  children: ReactNode;
}
const ResponsiveIndex = ({ children, Mobile }: ResponsiveIndexProps) => {
  const { t } = useTranslation();
  const mobile = useIsMobile();

  return (
    <Suspense fallback={<FullscreenLoading title={t('layoutInitializing', { ns: 'common' })} />}>
      {mobile ? <Mobile /> : children}
    </Suspense>
  );
};

export default ResponsiveIndex;
