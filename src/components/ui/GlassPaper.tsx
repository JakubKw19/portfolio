import React from 'react';
import { Card, CardContent } from './card';
import { cn } from '@/lib/utils';

function GlassPaper({ style, children, className }: { style?: React.CSSProperties, children?: React.ReactNode, className?: string }) {
    return (
        <Card style={style} className={cn('bg-glass p-8 shadow-lg', className)} >
            <CardContent>{children}</CardContent>
        </Card>
    );
}

export default GlassPaper;