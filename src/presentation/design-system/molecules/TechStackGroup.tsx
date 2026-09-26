import React from 'react';
import { Badge } from '../atoms/Badge';
import { cn } from '@/lib/utils';

interface TechStackGroupProps {
  languages?: string[];
  frameworks?: string[];
  stateManagement?: string[];
  architecturePatterns?: string[];
  localDbAndStorage?: string[];
  integrations?: string[];
  className?: string;
  limit?: number;
}

export const TechStackGroup: React.FC<TechStackGroupProps> = ({
  languages = [],
  frameworks = [],
  stateManagement = [],
  architecturePatterns = [],
  localDbAndStorage = [],
  integrations = [],
  className,
  limit,
}) => {
  const allTags = [
    ...frameworks.map((t) => ({ name: t, variant: 'accent' as const })),
    ...languages.map((t) => ({ name: t, variant: 'mono' as const })),
    ...stateManagement.map((t) => ({ name: t, variant: 'default' as const })),
    ...architecturePatterns.map((t) => ({ name: t, variant: 'outline' as const })),
    ...localDbAndStorage.map((t) => ({ name: t, variant: 'default' as const })),
    ...integrations.map((t) => ({ name: t, variant: 'muted' as const })),
  ];

  const displayedTags = limit ? allTags.slice(0, limit) : allTags;
  const remainingCount = limit && allTags.length > limit ? allTags.length - limit : 0;

  return (
    <div className={cn('flex flex-wrap items-center gap-1.5', className)}>
      {displayedTags.map((tag, idx) => (
        <Badge key={`${tag.name}-${idx}`} variant={tag.variant} size="sm">
          {tag.name}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <Badge variant="muted" size="sm">
          +{remainingCount} more
        </Badge>
      )}
    </div>
  );
};
