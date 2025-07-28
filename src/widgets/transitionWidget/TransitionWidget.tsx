import Dropdown from '@/features/transition/ui/Dropdown';
import Transition from '@/features/transition/ui/Transition';
import TransitionSlide from '@/features/transition/ui/TransitionSlide';

export default function TransitionWidget() {
    return (
        <div>
            <Transition />
            <TransitionSlide />
            <Dropdown />
        </div>
    );
}
