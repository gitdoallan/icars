import { Skeleton, Stack } from '@mui/material';

export function BikesCardSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        width={345}
        height={350}
        sx={{ borderRadius: 2, marginBottom: 5 }}
      />
    </Stack>
  );
}
