import Skeleton from '@/features/skeleton/ui/Skeleton';

export default function SkeletonWidget() {
    return (
        <div
            style={{
                width: '500px',
                height: '400px',
            }}
        >
            <Skeleton />
        </div>
    );
}
