import HoverScale from '@/features/scale/ui/HoverScale';
import Scale from '@/features/scale/ui/Scale';
import ScaleBounce from '@/features/scale/ui/ScaleBounce';

//s
export default function ScaleWidget() {
    return (
        <div>
            <Scale />
            <HoverScale />
            <ScaleBounce />
        </div>
    );
}
