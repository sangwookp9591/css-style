import ResponsiveGrid from '@/features/responsive/ui/ResponsiveGrid';
import ResponsiveMenu from '@/features/responsive/ui/ResponsiveMenu';
import ResponsiveTableToList from '@/features/responsive/ui/ResponsiveTableToList';

export default function ResponsiveGridWidget() {
    return (
        <div>
            <ResponsiveMenu />
            <ResponsiveTableToList />
            <ResponsiveGrid />
        </div>
    );
}
